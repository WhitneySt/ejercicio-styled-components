import React from "react";
import companies from "./../../assets/images/companies.png";
import Search from "../search/Search";
import { StylesCompaniesImage, StylesMain } from "./StylesMain";
import JobCards from "../jobCards/JobCards";

const Main = () => {
  return (
    <StylesMain>
      <StylesCompaniesImage>
        <p>Trusted by the world's leading companies</p>
        <figure>
          <img src={companies} alt="companies" />
        </figure>
      </StylesCompaniesImage>
      <Search />
      <JobCards/>
    </StylesMain>
  );
};

export default Main;
