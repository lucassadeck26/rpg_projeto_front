import { Routes, Route } from "react-router-dom";
import Register from "../Register";
import Login from "../Login";
import Home from "../Home";

import ProtectedRoutes from "../../components/ProtectedRoutes";

function RoutesMain() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default RoutesMain;
