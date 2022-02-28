import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70px;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.p`
  max-width: 800px;
  font-size: 30px;
  line-height: 1.6;
`;
