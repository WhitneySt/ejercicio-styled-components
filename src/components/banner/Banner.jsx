import React from 'react'
import { StylesButton1, StylesButton2 } from '../navigationBar/StyleNavigation';
import { StylesBannerText } from './StylesBanner';

const Banner = () => {
  return (
    <div>
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
      <section></section>
    </div>
  );
}

export default Banner