import styled from 'styled-components';

const RightButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 45%;
  right: 0;
  margin-right: 20px;
  background-color: rgb(128, 128, 128, 0.5);
  border: none;

  svg {
    margin: 0 auto;
    width: 20px;
    height: 20px;
    color: black;
  }
`;

const LeftButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 45%;
  left: 0;
  margin-left: 40px;
  background-color: rgb(128, 128, 128, 0.5);
  border: none;

  svg {
    margin: 0 auto;
    width: 20px;
    height: 20px;
    color: black;
  }
`;

const ActionButton = styled.button`
  position: absolute;
  align-self: flex-end;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  z-index: 5;
  cursor: pointer;

  svg :hover {
    fill: black;
  }
`;

const ModalButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 2.5%;
  right: 0;
  width: 35px;
  height: 35px;
  background-color: transparent;
  border: none;
`;

const AddButton = styled.button`
  cursor: pointer;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: none;

  @keyframes enlarge {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.2);
    }
  }

  :hover {
    animation: enlarge 0.3s;
    animation-fill-mode: forwards;
  }
`;

export {
  RightButton, LeftButton, ActionButton, ModalButton, AddButton,
};
