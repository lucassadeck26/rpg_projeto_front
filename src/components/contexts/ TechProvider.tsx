import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../../services/api";
import { UserContext } from "./UserContext";

interface IIDTECH {
  id: string;
  status: string;
  title: string;
  created_at: Date;
  updated_at: Date;
}

interface IDelete {
  id: string;
  status: string;
  title: string;
  created_at: Date;
  updated_at: Date;
}

export interface IAddTech {
  status: string;
  title: string;
}

export interface IUpdateTech {
  title: string;
  status: string;
}

interface ITechContext {
  handleFormAddTech: (data: IAddTech) => void;
  handleFormDeleteTech: () => void;
  idTech: IIDTECH;
  handleFormUpdateTech: (Data: IUpdateTech) => void;
  SetAddIDTECH: (data: IIDTECH) => void;
}

interface IProfile {
  avatar_url: string;
  bio: string;
  contact: string;
  course_module: string;
  created_at: Date;
  email: string;
  id: string;
  name: string;
  techs: IIDTECH[];
  updated_at: Date;
}

interface IUpdate {
  id: string;
  status: string;
  title: string;
  created_at: Date;
  updated_at: Date;
}

interface IUSERID {
  id: string;
}
interface IADD {
  created_at: Date;
  id: string;
  status: string;
  title: string;
  updated_at: Date;
  user: IUSERID;
}

interface ITechProviderProps {
  children: ReactNode;
}

export const TechContext = createContext<ITechContext>({} as ITechContext);

const TechProvider = ({ children }: ITechProviderProps) => {
  const { setUser, setLoading, setIsModalAddVisible, setIsModalDeleteVisible } =
    useContext(UserContext);
  const [idTech, setIdTech] = useState<IIDTECH>({} as IIDTECH);

  const SetAddIDTECH = (data: IIDTECH) => {
    setIdTech(data);
  };

  async function loadUser() {
    const token = localStorage.getItem("@TOKEN");

    if (token) {
      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const { data } = await api.get<IProfile>("/profile");
        console.log(data);

        setUser(data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUser();
  }, []);

  const handleFormAddTech = (data: IAddTech) => {
    api
      .post<IADD>("/users/techs", { ...data })
      .then((res) => {
        console.log(res.data);

        setIsModalAddVisible(false);
        loadUser();
        console.log("Tecnologia Adicionada");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleFormDeleteTech = () => {
    console.log(idTech);

    api
      .delete<IDelete>(`/users/techs/${idTech.id}`)
      .then(() => {
        setIsModalDeleteVisible(false);
        loadUser();
        console.log("Tecnologia deletada");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleFormUpdateTech = (data: IUpdateTech) => {
    api
      .put<IUpdate>(`/users/techs/${idTech.id}`, { ...data })
      .then((res) => {
        console.log(res.data);

        setIsModalDeleteVisible(false);
        loadUser();
        console.log("Tecnologia atualizada");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <TechContext.Provider
      value={{
        handleFormAddTech,
        handleFormDeleteTech,
        SetAddIDTECH,
        idTech,
        handleFormUpdateTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
