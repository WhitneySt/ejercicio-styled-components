import React from 'react';
import { jobs } from '../../data/data';
import rol from './../../assets/images/Vector-Rol.png';
import locationIcon from './../../assets/images/Vectorubi.png';
import { StylesCard, StylesCards } from './StylesJobCards';


const JobCards = () => {
    return (
      <StylesCards>
        {jobs.map((item) => (
          <StylesCard key={item.id}>
            <h5>{item.title}</h5>
            <section>
              <span>
                <figure>
                  <img src={locationIcon} alt="locationIcon" />
                </figure>
                <span>{item.location}</span>
              </span>
              <span>
                <figure>
                  <img src={rol} alt="rolIcon" />
                </figure>
                <span>{item.role}</span>
              </span>
            </section>
          </StylesCard>
        ))}
      </StylesCards>
    );
}

export default JobCards;

