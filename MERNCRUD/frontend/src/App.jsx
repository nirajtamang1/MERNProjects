import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";

import AddUser from "./component/AddUser";
import CodeWithNiraj from "./component/CodeWithNiraj";
import AllUser from "./component/AllUser";
import EditUser from "./component/EditUser";
import PageNotFound from "./component/PageNotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"  element={<CodeWithNiraj />}></Route>
          <Route path="/addUser" element={<AddUser />}></Route>
          <Route path="/alluser" element={<AllUser />}></Route>
          <Route path="/edit/:id" element={<EditUser />}></Route>

          <Route path = "*" element= {<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
