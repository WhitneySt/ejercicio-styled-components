import React from 'react'
import { StylesNav, StylesButton1, StylesButton2 } from "./StyleNavigation";

const NavigationBar = () => {
    const links = [
        {
            name: "Job Search",
            route: ""
        },
        {
            name: "About",
            route: ""
        },
        {
            name: "Pricing",
            route: ""
        },
        {
            name: "Contact",
            routes: ""
        }
    ]
  return (
    <StylesNav>
      <figure>
        <img src="https://i.ibb.co/QCmj6cc/logo.png" alt="logo" />
      </figure>
      <ul>
        {links.map((item, index) => (
          <li key={`${item.name}-${index}`}>{item.name}</li>
        ))}
        <li>
          <StylesButton1>Log in</StylesButton1>
        </li>
        <li>
          <StylesButton2>Try it free</StylesButton2>
        </li>
      </ul>
    </StylesNav>
  );
}

export default NavigationBar