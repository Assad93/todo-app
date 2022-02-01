import styled from "styled-components";

export const ActionButton = styled.button`
  padding: 5px;
  border: none;
  background-color: ${(props) => props.color};
  width: ${(props) => props.width + "px"};
  height: 50px;
  border-radius: 2px;
  font-size: 25px;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: ${(props) => (props.disabled ? 1 : 0.8)};
  }
`;
