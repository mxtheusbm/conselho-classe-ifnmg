import { FC, ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import { CreateInstitution } from "./pages/instituion/create-institution";
import Login from "./pages/login";
import Register from "./pages/register";
import { RoutesEnum } from "./utils/routesEnum"
const Router: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path={RoutesEnum.LOGIN} element={<Login />} />
      <Route path={RoutesEnum.REGISTER} element={<Register />} />
      <Route path={RoutesEnum.CREATE_INSTITUTION} element={<CreateInstitution />} />
    </Routes>
  )
}

export default Router;