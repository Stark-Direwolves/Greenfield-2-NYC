import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StarIcon } from '@heroicons/react/outline';
import { StyledImage, ImageContainer } from '../styles/Image.styled';
import CardContainer from '../styles/CardContainer.styled';
import { ActionButton } from '../styles/StyledButtons.styled';
import Comparison from './Comparison';
import CardInfo from './CardInfo';

function Card({ related, current }) {
  const [compare, setCompare] = useState(false);
  const [sale, setSale] = useState(false);

  const toggleCompare = () => {
    setCompare(!compare);
  };

  const toggleSale = () => {
    if (related.styles[0].sale_price) {
      setSale(true);
    }
  };

  useEffect(() => {
    toggleSale();
  }, []);

  return (
    <CardContainer>
      <Comparison
        compare={compare}
        toggleCompare={toggleCompare}
        related={related}
        current={current}
      />
      <ActionButton type="button" onClick={toggleCompare}>
        <StarIcon />
      </ActionButton>
      <ImageContainer>
        <StyledImage
          src={related.styles[0].photos[0].url ? related.styles[0].photos[0].url : '/assets/blackgold.jpg'}
          onClick={() => {
            window.location.href = `/${related.id}`;
          }}
        />
      </ImageContainer>
      <CardInfo related={related} sale={sale} />
    </CardContainer>
  );
}

Card.propTypes = {
  related: PropTypes.shape({
    styles: PropTypes.instanceOf(Array),
    id: PropTypes.number,
  }),
  current: PropTypes.instanceOf(Object),
};

Card.defaultProps = {
  related: {
    styles: [],
  },
  current: {},
};

export default Card;
