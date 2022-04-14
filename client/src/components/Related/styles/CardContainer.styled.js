import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  position: relative;
  flex-gap: .5px;
  flex-direction: column;
  flex-basis: 20%;
  flex-shrink: 0;
  align-items: flex-start;
`;

const OutfitCardContainer = styled.div`
  display: flex;
  position: relative;
  flex-gap: .5px;
  flex-direction: column;
  flex-basis: 20%;
  flex-shrink: 0;
  align-items: flex-start;

  @keyframes add {
    from {
      transform: scale(0.5);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  animation: add .3s;

`;

export { CardContainer, OutfitCardContainer };
