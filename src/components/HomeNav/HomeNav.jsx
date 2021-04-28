import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const HomeNav = () => {
  const isAuth = useSelector((state) => state.auth.token);
  return (
    <div>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </div>
  );
};

export default HomeNav;
