import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DetailedHTMLProps, OptionHTMLAttributes, useContext } from "react";
import { Link } from "react-router-dom";
import { FormRegister, HeaderRegister } from "./style";
import { UserContext } from "../../components/contexts/UserContext";
import { ToastContext } from "../../components/contexts/ToastContext";

export interface IFormRegisterRegister {
  name: string;
  email: string;
  password: string;
  telefone: string;
}

function Register() {
  const { display, validation, handleFormRegister } = useContext(UserContext);

  const schema = yup.object({
    name: yup.string().required("Nome Obrigatório"),
    email: yup.string().email().required("Email Obrigatório"),
    telefone: yup.number().required("Telefone Obrigatório"),
    password: yup.string().required("Senha Obrigatória"),
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
            <h1 className="h1-Header">Mangakai</h1>
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

        <label className="label">Nome</label>
        <input
          type="text"
          className="input"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        <p className="p-warning">{errors.name?.message}</p>

        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        <p className="p-warning">{errors.email?.message}</p>
        <label className="label">Telefone</label>
        <input
          type="text"
          className="input"
          placeholder="Digite aqui seu Telefone"
          {...register("telefone")}
        />
        <p className="p-warning">{errors.telefone?.message}</p>
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
