import { useState, createContext, ReactNode } from "react";
import { v4 as uuid } from "uuid";
import Toast from "../Toast";

interface IToastContextData {
  addToastSucess: (data: IToastSucessData) => void;
  removeToast: (id: string) => void;
  sucesso: boolean;
  SetarSucesso: () => void;
  messages: IToast[];
}

export const ToastContext = createContext<IToastContextData>(
  {} as IToastContextData
);

interface IProps {
  children: ReactNode;
}

interface IToastSucessData {
  title: string;
  description: string;
}

export interface IToast {
  id: string;
  title: string;
  description: string;
  type: string;
}

const ToastProvider = ({ children }: IProps) => {
  const [messages, setMessages] = useState<IToast[]>([]);
  const [sucesso, setSucesso] = useState(true);

  const SetarSucesso = () => {
    setSucesso(true);
  };

  function addToastSucess({ title, description }: IToastSucessData) {
    const toast = {
      id: uuid(),
      title,
      description,
      type: "sucesso",
    };
    setMessages([...messages, toast]);
  }

  function removeToast(id: string) {
    //   console.log(id);

    const newMessages = messages.filter((message) => message.id !== id);
    setMessages(newMessages);
  }

  return (
    <ToastContext.Provider
      value={{
        addToastSucess,
        removeToast,
        sucesso,
        SetarSucesso,
        messages,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};
export default ToastProvider;
