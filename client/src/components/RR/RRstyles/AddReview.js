import styled from 'styled-components';

const AddReview = styled.div`
  font-family: "Roboto", sans-serif;
  // max-width: 865px;
  width: 60%;
  height: 80vh;
  margin: auto;
  margin-top: 15%;
  // top: 1500px;
  // bottom: 1%;
  top: 150px;
  left: 20%;
  display: flex;
  background-color: #EDEDE9;
  justify-content: center;
  border-radius: 10px;
  border: 2px solid black;
  overflow-x: hidden;
  overflow-y: auto;
  // position: relative;
  position: fixed;
  z-index: 2;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`;

export default AddReview;
