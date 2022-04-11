import styled from 'styled-components';

export const SModalOverlay = styled.div`
  background-color: #999999;
  height: 100vh;
  left: 0;
  opacity: 0.5;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 500;
`;

export const SModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  left: 0;
  outline: 0;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  width: 100%;
  z-index: 1000;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`;

export const SModal = styled.div`
background-color: ${(props) => props.theme.colors[0]};
  align-items: center;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  width: 60%;
  position: relative;
  z-index: 100;
`;

export const SHeader = styled.div`ƒ
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 1.875rem 0.9375rem 1.875rem 0.9375rem;
  font-family: ${(props) => props.theme.fonts[0]};

`;

export const STitle = styled.div`
  margin: 12px 0px;
  font-weight: 700;
  font-family: ${(props) => props.theme.fonts[0]};
  font-size: ${(props) => props.theme.fontSizes.medium};
text-transform: uppercase;
  margin-bottom: 0.3125rem;
`;

export const SButton = styled.button`
border: ${(props) => props.theme.colors[7]};
  border-top: 1px solid #F0F0F0;
  background-color: ${(props) => props.theme.colors[1]};
  color: ${(props) => props.theme.colors[7]};
  cursor: pointer;
  font-weight: bold;
  padding: 0.9375rem;
  width: 100%;
`;

export const SDescription = styled.span`
  color: ${(props) => props.theme.colors[7]};
  margin: 12px 0px;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.smaller};
text-transform: uppercase;
  margin-bottom: 0.3125rem;
`;
