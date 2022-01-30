import styled from "styled-components";

export const Description = styled.span`
  text-decoration: ${(props) => (props.disabled ? "line-through" : "none")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export const Td = styled.td`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
