import React from "react";
import { Link as MaterialLink } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import "./Menu.css";

const Menu = () => (
  <nav>
    <RouterLink to="/" className="link">
      <MaterialLink>Home</MaterialLink>
    </RouterLink>
    <RouterLink to="/catalog" className="link">
      <MaterialLink>Catalog</MaterialLink>
    </RouterLink>
    <RouterLink to="/my-courses" className="link">
      <MaterialLink>My courses</MaterialLink>
    </RouterLink>
  </nav>
);

export default Menu;
