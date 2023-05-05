import React from "react";
import { StylesCard } from "./StylesCard";

const Card = ({ agent }) => {
  //const { agent } = props;
  return (
    <StylesCard>
      <figure>
        <img src={agent.avatar} alt={agent.name} />
      </figure>
      <h3>{agent.name}</h3>
      <span>{agent.role}</span>
      <p>{agent.description}</p>
    </StylesCard>
  );
};

export default Card;
