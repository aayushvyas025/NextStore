import { Home } from "lucide-react";
import React from "react";

function NavLink({ link, route }) {
  return (
    <Link to={"/create"}>
      <Button>{route === "home" ? <Plus /> : <Home />}</Button>
    </Link>
  );
}

export default NavLink;
