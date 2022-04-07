import styled from "styled-components";

const DropBtn = styled.div`
  background-color: ${props => props.theme.colors[6]};
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`
/* Dropdown Content (Hidden by Default) */
const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
`

/* The container <div> - needed to position the dropdown content */
const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${DropdownContent} {
    display: block;
  }
  &:hover ${DropBtn} {
    background-color: ${props => props.theme.colors[7]};
  }
`

// .dropdown-content a:hover {background-color: #f1f1f1}
/* Links inside the dropdown */
const DropdownContentA = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: ${props => props.theme.colors[6]};
  }
`

const AddToCartButton = styled.button`
  width: 100%;
  background-color: ${props => props.theme.colors[6]};
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors[7]};
  }
`

export { DropBtn, DropdownContent, Dropdown, DropdownContentA, AddToCartButton };