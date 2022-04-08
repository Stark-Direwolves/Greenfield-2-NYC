import styled from 'styled-components';

const ComparisonBackground = styled.div`
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(128, 128, 128, 0.5);
`;

const ComparisonContainer = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 10px;
  flex-direction: column;
  position: relative;
  width: 600px;
`;

export { ComparisonBackground, ComparisonContainer };
