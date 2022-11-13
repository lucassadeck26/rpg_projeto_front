import { useEffect, useState, useContext } from "react";
import { FiXCircle } from "react-icons/fi";
import { ToastContext } from "../contexts/ToastContext";
import { Container } from "./styles";
import sucess from "../img/icon-sucess.png";
import failed from "../img/icon_error.png";

interface IMessage {
  description: string;
  id: string;
  title: string;
  type: string;
}

function Toast({ message }: any) {
  const [isLeave, setIsLeave] = useState<boolean>(false);
  const { sucesso, removeToast } = useContext(ToastContext);

  useEffect(() => {
    let timer: any;
    if (isLeave) {
      timer = setTimeout(() => {
        removeToast(message.id);
      }, 700);
    } else {
      timer = setTimeout(() => {
        setIsLeave(true);
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isLeave]);

  return (
    <Container
      isLeave={isLeave}
      hasDescription={!!message.description}
      type={message.type}
    >
      {sucesso ? (
        <>
          <div className="container-icons">
            <div className="div-img">
              <img src={sucess} className="img-error" alt="img-icon-error" />
            </div>
            <div className="div-span">
              <span className="span-sucess">Usuário Logado com sucesso!</span>
            </div>
            <div className="div-button">
              <button
                type="button"
                className="btn"
                onClick={() => {
                  setIsLeave(true);
                }}
              >
                <FiXCircle size={24} />
              </button>
            </div>
          </div>
          <div className="rectangule-sucess "></div>
        </>
      ) : (
        <>
          <div className="container-icons">
            <div className="div-img">
              <img src={failed} className="img-error" alt="img-icon-error" />
            </div>
            <div className="div-span">
              <span className="span-sucess"> Ops! Algo deu errado</span>
            </div>
            <div className="div-button">
              <button
                type="button"
                className="btn"
                onClick={() => {
                  setIsLeave(true);
                }}
              >
                <FiXCircle size={24} />
              </button>
            </div>
          </div>
          <div className="rectangle-err"></div>
        </>
      )}
    </Container>
  );
}
export default Toast;
