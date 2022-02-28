import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const InputSearch = styled.div`
  border: 1px solid #000;
  border-radius: 2px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled.div`
  height: 50px;
  width: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchIcon = styled(FaSearch)`
  color: #000;
  opacity: 0.5;
  font-size: 24px;
`;

export const SearchInput = styled.input`
  height: 50px;
  width: 280px;
  padding: 10px;
  border: none;
  outline: none;
  font-size: 24px;
`;
