import { FC, ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";

const Router: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default Router;