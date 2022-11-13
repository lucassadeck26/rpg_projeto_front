import { ReactNode } from "react";
import TechProvider from "./ TechProvider";
import ToastProvider from "./ToastContext";
import UserProvider from "./UserContext";

interface IProviders {
  children: ReactNode;
}

const Providers = ({ children }: IProviders) => (
  <ToastProvider>
    <UserProvider>
      <TechProvider>{children}</TechProvider>
    </UserProvider>
  </ToastProvider>
);
export default Providers;
