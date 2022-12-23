import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DetailedHTMLProps, OptionHTMLAttributes, useContext } from "react";
import { Link } from "react-router-dom";
import { FormRegister, HeaderRegister } from "./style";
import { UserContext } from "../../components/contexts/UserContext";
import { ToastContext } from "../../components/contexts/ToastContext";


export interface IFormRegisterRegister {
  username: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  is_superuser: string
}
function Register() {
  const { display, validation, handleFormRegister } = useContext(UserContext);

  const schema = yup.object({
    username: yup.string().required("Nome de usuário Obrigatório"),
    first_name: yup.string().required("Nome Obrigatório"),
    last_name: yup.string().required("Sobrenome Obrigatório"),
    email: yup.string().email().required("Email Obrigatório"),
    password: yup.string().required("Senha Obrigatória"),
   // is_superuser : yup.string().required("tipo de usuário Obrigatório"),
  });
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormRegisterRegister>({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <HeaderRegister>
        <div className="container-header-Register ">
          <div className="container-h1-Header-Register">
            <h1 className="h1-Header">Estacionamento</h1>
          </div>
          <Link to="/login">
            <div className="container-Voltar">
              <span className="span-Voltar">Voltar</span>
            </div>
          </Link>
        </div>
      </HeaderRegister>

      <FormRegister
        className="form"
        onSubmit={handleSubmit(handleFormRegister)}
      >
        <h2 className="h2-Register">Crie sua conta</h2>

        <span className="span-Register"> Rapido e grátis, vamos nessa</span>

         <label className="label">Nome de usuário</label>
        <input
          type="text"
          className="input"
          placeholder="Digite aqui seu nome de usuário"
          {...register("username")}
        />
        <p className="p-warning">{errors.username?.message}</p>      
 

        <label className="label">Nome</label>
        <input
          type="text"
          className="input"
          placeholder="Digite aqui seu nome"
          {...register("first_name")}
        />
        <p className="p-warning">{errors.first_name?.message}</p>

        <label className="label">sobrenome</label>
        <input
          type="text"
          className="input"
          placeholder="Digite aqui seu nome"
          {...register("last_name")}
        />
        <p className="p-warning">{errors.last_name?.message}</p>

        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        <p className="p-warning">{errors.email?.message}</p>
     
        <label className="label">Senha</label>
        <input
          type="password"
          className="input"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        <p className="p-warning">{errors.password?.message}</p>

       
        <button type="submit" className="btn-Cadastrar">
          {" "}
          Cadastrar
        </button>
      </FormRegister>
    </>
  );
}
export default Register;
