import { NavLink } from "react-router-dom";

import { AppBar, Toolbar, styled } from "@mui/material";

const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    font-size: 20px;
    text-decoration: none;
`

const Navbar = () => {
  return (
    <>
      <Header position="static">
        <Toolbar>
          <Tabs to="/">CodeWithNiraj</Tabs>
          <Tabs to="/allUser"> All User</Tabs>
          <Tabs to="/addUser">Add User </Tabs>
        </Toolbar>
      </Header>
    </>
  );
};
export default Navbar;
