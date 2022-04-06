import styled from 'styled-components';

export const SContainer = styled.div`
  background: #fff;
  height: 30px;
  border-radius: 30px;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.8s;
box-shadow:  4px 4px 6px 0 rgba(255,255,255,.3),
            -4px -4px 6px 0 rgba(116, 125, 136, .2),
  inset -4px -4px 6px 0 rgba(255,255,255,.2),
  inset 4px 4px 6px 0 rgba(0, 0, 0, .2);
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  outline:none;
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  transition: 0.8s;
  `;

export const Form = styled.form`
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 260px;
    margin-right: 20px;
  `;
