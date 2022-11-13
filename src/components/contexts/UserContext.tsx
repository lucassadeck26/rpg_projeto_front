import {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { string } from "yup";
import { IFormRegisterRegister } from "../../pages/Register";
import api from "../../services/api";
import { ToastContext } from "./ToastContext";

interface IUserProviderProps {
  children: ReactNode;
}

export interface ILoginForm {
  email: string;
  password: string;
}

interface ITech {
  id: string;
  title: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}

export interface IProdutos {
  name: string;
  hp: number;
  mp: number;

  nivel: number;
  ataque: number;
  defesa: number;
  imagem: string;
}

export interface ICARTPRODUTOS {
  produtos: IProdutos[];
}

interface IUser {
  id: string;
  name: string;
  course_module?: string;
  email: string;
  bio: string;
  contact: string;
  avatar_url: string;
  techs: ITech[];
  created_at: Date;
  updated_at: Date;
}

interface IUserContext {
  display: boolean;
  validation: boolean;
  setDisplay: React.Dispatch<SetStateAction<boolean>>;
  setValidation: React.Dispatch<SetStateAction<boolean>>;
  handleFormLogin: (data: ILoginForm) => void;
  handleFormRegister: (data: IFormRegisterRegister) => void;
  user: IUser | undefined;
  produtos: IProdutos | undefined;
  setProdutos: React.Dispatch<SetStateAction<IProdutos | undefined>>;
  setUser: React.Dispatch<SetStateAction<IUser | undefined>>;
  loading: boolean;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
  isModalAddVisible: boolean;
  setIsModalAddVisible: React.Dispatch<SetStateAction<boolean>>;
  isModalDeleteVisible: boolean;
  setIsModalDeleteVisible: React.Dispatch<SetStateAction<boolean>>;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserProviderProps) => {
  const [teste, setTeste] = useState();
  const [display, setDisplay] = useState(false);
  const [validation, setValidation] = useState(false);
  const [user, setUser] = useState<IUser>();
  const [produtos, setProdutos] = useState<IProdutos>();
  const [loading, setLoading] = useState(true);
  const [isModalAddVisible, setIsModalAddVisible] = useState(false);
  const [isModalDeleteVisible, setIsModalDeleteVisible] = useState(false);
  const navigate = useNavigate();

  async function loadUser() {
    const token = localStorage.getItem("@TOKEN");
    const emailCliente = localStorage.getItem("@CLIENTEMAIL");

    if (token) {
      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;

        const { data } = await api.get("/clientes");
        console.log(`o valor de email cliente  é ${emailCliente}`);

        data.forEach((e: any) => {
          if (emailCliente === e.email) {
            console.log(`o valor realmente do email é ${e.email} `);
            setUser(e);
          }
        });

        //ssetProdutos()
      } catch (error) {
        console.error(error);
      }
    }
    setLoading(false);
  }

  useEffect(() => {
    loadUser();
  }, []);

  const handleFormLogin = (data: ILoginForm) => {
    api
      .post("/login", { ...data })
      .then((res) => {
        setValidation(true);
        setDisplay(true);
        setUser(res.data.user);
        window.localStorage.clear();
        window.localStorage.setItem("@TOKEN", res.data.token);
        window.localStorage.setItem("@CLIENTEMAIL", data.email);

        navigate("/home", { replace: true });
        window.location.reload();
      })
      .catch((err) => {
        console.log(`deu erro de ${err}`);

        setValidation(false);
        setDisplay(true);
        window.localStorage.clear();
      });
  };

  const handleFormRegister = (Data: IFormRegisterRegister) => {
    console.log(Data);
    api
      .post("/clientes", { ...Data })

      .then((res) => {
        console.log(`o valor de data é ${res.data}`);

        setValidation(true);
        setDisplay(true);
        navigate("/login", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setValidation(false);
        setDisplay(true);
      });
  };

  return (
    <UserContext.Provider
      value={{
        produtos,
        setProdutos,
        display,
        validation,
        setDisplay,
        setValidation,
        handleFormLogin,
        handleFormRegister,
        user,
        setUser,
        loading,
        setLoading,
        isModalAddVisible,
        setIsModalAddVisible,
        isModalDeleteVisible,
        setIsModalDeleteVisible,
      }}
    >
      {" "}
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
