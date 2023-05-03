import React from "react";

const Card = ({ agent }) => {
  //const { agent } = props;
  return (
    <article>
      <figure>
        <img src={agent.image} alt={agent.name} />
      </figure>
      <h3>{agent.name}</h3>
      <span>{agent.role}</span>
      <p>{agent.description}</p>
    </article>
  );
};

export default Card;
