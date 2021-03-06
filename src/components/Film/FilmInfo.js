import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FilmInfo = ({ film }) => {
  const { title, release_date, director, producer, episode_id } = film;
  return (
    <div>
      <Hero>
        <h1>{title}</h1>
      </Hero>
      <InfoWrapper>
        <h2>
          <b>Episode: </b>
          {episode_id}
        </h2>
        <h2>
          <b>Release Date: </b>
          {release_date}
        </h2>
        <h2>
          <b>Director: </b>
          {director}
        </h2>
        <h2>
          <b>Producers: </b>
          {producer}
        </h2>
      </InfoWrapper>
    </div>
  );
};

export default FilmInfo;

FilmInfo.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    episode_id: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    producer: PropTypes.string.isRequired,
  }).isRequired,
};

const Hero = styled.div`
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 5vh;
  }
`;

const InfoWrapper = styled.div`
  margin: 0 75px 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background: ${props => props.theme.card_bg};
  border: 2px solid ${props => props.theme.secondary};
  border-radius: 25px;
  box-shadow: ${props => props.theme.shadow};
  h2 {
    text-align: center;
    font-weight: 400;
    padding: 10px;
  }
`;
