import React from "react";
import NavigationBar from "../navigationBar/NavigationBar";
import { StylesHeader } from "./StyleHeader";
import Banner from "../banner/Banner";

const Header = () => {
  return (
    <StylesHeader>
          <NavigationBar />
          <Banner/>
    </StylesHeader>
  );
};

export default Header;
