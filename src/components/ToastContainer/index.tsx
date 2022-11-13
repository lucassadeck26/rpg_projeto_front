import { useContext } from "react";
import { Container } from "./styles";
import Toast from "../Toast";
import { ToastContext } from "../contexts/ToastContext";

function ToastContainer() {
  const { messages } = useContext(ToastContext);

  return (
    <Container>
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
}
export default ToastContainer;
