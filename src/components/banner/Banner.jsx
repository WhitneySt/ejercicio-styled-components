import React from 'react'
import { StylesButton1, StylesButton2 } from '../navigationBar/StyleNavigation';
import { StylesBanner, StylesBannerText, StylesCards } from './StylesBanner';
import { agents } from '../../data/data';
import Card from '../card/Card';

const Banner = () => {
  return (
    <StylesBanner>
      <StylesBannerText>
        <h1>We support your challenge in new areas.</h1>
        <p>
          Our highly qualified headhunters, who have passed a rigorous screening
          process, will introduce you to your new career opportunity.
        </p>
        <div>
          <StylesButton2>Try it free</StylesButton2>
          <StylesButton1>Explore</StylesButton1>
        </div>
      </StylesBannerText>
      <StylesCards>
        {agents.map((item) => (
          <Card key={item.id} agent={item} />
        ))}
      </StylesCards>
    </StylesBanner>
  );
}

export default Banner