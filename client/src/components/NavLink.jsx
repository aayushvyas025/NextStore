import { Button } from "@chakra-ui/react";
import { Home } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

function NavLink({ link, route }) {
  return (
    <Link to={link}>
      <Button>{route === "/" ? <Plus /> : <Home />}</Button>
    </Link>
  );
}

export default NavLink;
