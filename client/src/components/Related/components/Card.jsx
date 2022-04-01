import React, { useState } from 'react';
import StyledImage from '../styles/Image.styled';
import Container from '../styles/Container.styled';

function Card({ id, style }) {
  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <Container>
      <button type="button" onClick={toggleFavorite}>
        Favorite
      </button>
      <StyledImage src={style.results[0].photos[0].thumbnail_url}/>
      <p>{id.name}</p>
      <div>{style.results[0].name}</div>
      <div>{style.results[0].original_price}</div>
      <div>Placeholder Rating</div>
    </Container>
  );
}

export default Card;
