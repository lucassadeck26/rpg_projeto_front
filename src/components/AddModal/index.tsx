import { ContainerForm, ContainerModal } from "./styles";
import { ReactNode, useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineClose } from "react-icons/ai";
import { IAddTech, TechContext } from "../contexts/ TechProvider";

interface IUpdate {
  children: ReactNode;
  id: string;
  onClose: () => void;
}

function Modal({ id = "modal", children }: IUpdate) {
  const { handleFormAddTech } = useContext(TechContext);

  const onClose = () => {};

  const schema = yup.object({
    title: yup.string().required("Título Obrigatório"),
    status: yup.string().required("Status obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddTech>({
    resolver: yupResolver(schema),
  });

  return (
    <ContainerModal id={id}>
      <div className="container">
        <div className="modal-container">
          <ContainerForm onSubmit={handleSubmit(handleFormAddTech)}>
            <div className="div-modal">
              <h2 className="h2-modal">Cadastrar Tecnologia</h2>
              <AiOutlineClose className="x-modal" onClick={onClose} />
            </div>

            <label htmlFor="" className="label">
              {" "}
              Nome
            </label>
            <input
              type="text"
              className="input"
              placeholder="Typescript"
              {...register("title")}
            />
            <p className="p-warning">{errors.title?.message?.toString()}</p>
            <label htmlFor="" className="label">
              {" "}
              Selecionar Status
            </label>
            <select className="input" {...register("status")}>
              <option id="1" value="Iniciante">
                {" "}
                Iniciante
              </option>
              <option id="2" value="Intermediário">
                Intermediário
              </option>
              <option id="3" value="Avançado">
                Avançado
              </option>
            </select>
            <button type="submit" className="btn-cadastrar">
              Cadastrar Tecnologia
            </button>
          </ContainerForm>

          <div className="content">{children}</div>
        </div>
      </div>
    </ContainerModal>
  );
}

export default Modal;
