import styled from "styled-components";

export const ActionButton = styled.button`
  padding: 5px;
  border: none;
  background-color: ${(props) => props.color};
  width: 50px;
  height: 50px;
  border-radius: 2px;
  font-size: 25px;
  color: #fff;

  &:hover {
    opacity: 0.8;
  }
`;
