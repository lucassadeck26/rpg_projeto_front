import { FieldValues, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link } from "react-router-dom";
import { FormLogin, HeaderLogin } from "./style";
import { useContext, useState } from "react";
import { ILoginForm, UserContext } from "../../components/contexts/UserContext";
import InputPassword from "../../components/InputPassword";
import { BsEye, BsEyeSlash } from "react-icons/bs";

function Login() {
  const { handleFormLogin } = useContext(UserContext);

  const [validation, setValidation] = useState(true);

  const [inputType, setInputType] = useState("password");

  function alteraTipo() {
    if (validation === true) {
      setValidation(false);
      setInputType("text");
    } else {
      setValidation(true);
      setInputType("password");
    }
  }

  const schema = yup.object({
    email: yup.string().email().required("Email Obrigatório"),
    password: yup.string().required("Senha Obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({ resolver: yupResolver(schema) });

  return (
    <>
      <HeaderLogin>
        <div className="container-header-Login ">
          <div className="container-h1-Header-Register">
            <h1 className="h1-Header-Login">MangaKai</h1>
          </div>
        </div>
      </HeaderLogin>

      <FormLogin onSubmit={handleSubmit(handleFormLogin)}>
        <h2 className="h2-Login">Login</h2>

        <label className="label">Email</label>
        <input
          type="email"
          className="input-login"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        <p className="p-warning">{errors.email?.message?.toString()}</p>

        <label className="label">Senha</label>

        <div className="Container-Input">
          <input
            type={inputType}
            className="input-login"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <button
            type="button"
            onClick={() => alteraTipo()}
            className="est__btnChangeType"
          >
            {validation === true ? (
              <BsEye size={16} />
            ) : (
              <BsEyeSlash size={16} />
            )}
          </button>
          <p className="p-warning">{errors.password?.message?.toString()}</p>
        </div>

        <button type="submit" className="btn-Logar">
          {" "}
          Entrar
        </button>

        <span className="span-information"> Ainda não possui uma conta?</span>
        <Link to="/register">
          <div className="container-btn-cadastre-se">
            <span className="span-cadastre-se">Cadastre-se</span>
          </div>
        </Link>
      </FormLogin>
    </>
  );
}
export default Login;
