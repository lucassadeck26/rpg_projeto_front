import { ContainerForm, ContainerModal } from "./styles";
import { ReactNode, useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineClose } from "react-icons/ai";
import { IUpdateTech, TechContext } from "../contexts/ TechProvider";

interface IDelete {
  children: ReactNode;
  id: string;
  onClose: () => void;
}
function DeleteModal({ id = "modal", children }: IDelete) {
  const { handleFormDeleteTech, handleFormUpdateTech, idTech } =
    useContext(TechContext);

  const onClose = () => {};

  const schema = yup.object({
    status: yup.string().required("Status obrigatório"),
  });

  // Vercel https://react-entrega-s2-formulario-de-cadastr-git-13541c-lucassadeck26.vercel.app/
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateTech>({
    resolver: yupResolver(schema),
  });

  return (
    <ContainerModal id={id}>
      <div className="container">
        <div className="modal-container">
          <ContainerForm onSubmit={handleSubmit(handleFormUpdateTech)}>
            <div className="div-modal">
              <h2 className="h2-modal">Tecnologia Detalhes</h2>
              <AiOutlineClose className="x-modal" onClick={onClose} />
            </div>

            <label htmlFor="" className="label">
              {" "}
              Nome do projeto
            </label>
            <input
              type="text"
              className="input"
              placeholder={idTech.title}
              readOnly
              {...register("title")}
            />
            <p className="p-warning">{errors.title?.message?.toString()}</p>
            <label htmlFor="" className="label">
              {" "}
              Status
            </label>
            <select
              className="input"
              {...register("status")}
              defaultValue={idTech.status}
            >
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

            <div className="container-update-delete">
              <button type="submit" className="btn-update">
                {" "}
                Salvar alterações
              </button>

              <button className="btn-delete" onClick={handleFormDeleteTech}>
                Excluir
              </button>
            </div>
          </ContainerForm>

          <div className="content">{children}</div>
        </div>
      </div>
    </ContainerModal>
  );
}

export default DeleteModal;
