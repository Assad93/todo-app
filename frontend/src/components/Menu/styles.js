import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #16a085;
  color: #fff;
  padding: 25px;
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 30px;
  font-weight: bold;
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 25px;

  a {
    font-size: 24px;
    font-weight: bold;
    text-decoration: underline;
    color: #fff;
  }
`;
