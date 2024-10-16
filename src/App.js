import { Routes, Route, Navigate } from "react-router-dom";
import { Main } from "./partials/Main";
import { ListProduct } from "./products/ListProduct";
import { CreateProduct } from "./products/CreateProduct";
import { EditProduct } from "./products/EditProduct";
import { Register } from "./users/Register";
import {Login} from '../src/users/Login'
import { useContext } from "react";
import { UserContext } from "./useContext/useContext";


function App() {

  const {user} = useContext(UserContext)
  
  return (
    <>
      <Routes>
        {
        user ?
          <>
            <Route path="" element={<Main />}>
              <Route path="home" element={<ListProduct />} />
              <Route path="add" element={<CreateProduct />} />
              <Route path="edit/:id" element={<EditProduct />} />
              <Route path="*" element={<Navigate to="/home" replace />} />

            </Route>
          </> 
          :
          <>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
          }
      </Routes>
    </>
  );
}

export default App;
