import styled from 'styled-components';

const DropBtn = styled.div`
  width: 100px;
  background-color: ${(props) => props.theme.colors[6]};
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

/* Dropdown Content (Hidden by Default) */
const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  width: 132px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
`;

/* The container <div> - needed to position the dropdown content */
const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${DropdownContent} {
    display: block;
  }
  &:hover ${DropBtn} {
    background-color: ${(props) => props.theme.colors[7]};
  }
`;

const DropdownSmall = styled(Dropdown)`
  width: 100px;
`;

// .dropdown-content a:hover {background-color: #f1f1f1}
/* Links inside the dropdown */
const DropdownContentA = styled.a`
  width: 100px;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: ${(props) => props.theme.colors[6]};
  }
`;

const AddToCartButton = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.colors[6]};
  color: white;
  margin: 20px 0 20px 0;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors[7]};
  }
`;

const SizeQuantityContainer = styled.div`
  width: 100%;
  display: flex;
`;

const SizeDiv = styled.div`
  padding: 10px;
`;

const QuantityDiv = styled(SizeDiv)`

`;

export {
  DropBtn, DropdownContent, Dropdown, DropdownSmall,
  DropdownContentA, AddToCartButton, SizeQuantityContainer,
  SizeDiv, QuantityDiv,
};
