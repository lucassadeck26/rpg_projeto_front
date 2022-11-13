import { InputHTMLAttributes, useState } from "react";

import { InputContainer } from "./style";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { ILoginForm } from "../contexts/UserContext";

export interface IPropsInput extends InputHTMLAttributes<HTMLInputElement> {
  nameInput: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  errosMessage?: string;
  ILoginForm: ILoginForm;
}

const InputPassword = ({
  nameInput,
  placeholder,
  type,
  label,
  register,
  errosMessage,
}: IPropsInput) => {
  const [inputType, setInputType] = useState("password");

  function alteraTipo() {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  }

  return (
    <InputContainer>
      <div>
        <label htmlFor={nameInput}>{label}</label>
        <div className="inputPassword__box">
          <input
            id={nameInput.toLowerCase()}
            type={inputType}
            placeholder={placeholder}
            {...register(nameInput)}
          />
          <button
            type="button"
            onClick={() => alteraTipo()}
            className="est__btnChangeType"
          >
            {inputType === "password" ? (
              <BsEye size={16} />
            ) : (
              <BsEyeSlash size={16} />
            )}
          </button>
        </div>
      </div>
      <p className="error__message">{errosMessage}</p>
    </InputContainer>
  );
};

export default InputPassword;
