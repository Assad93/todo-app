import styled from "styled-components";

export const Table = styled.table`
  font-size: 30px;
  width: 100%;

  thead {
    color: #fff;
    height: 100px;
    background-color: #16a085;
  }

  td {
    padding: 10px;
    text-align: center;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const SortButton = styled.button`
  border: none;
  background: #fff;
  width: 50px;
  height: 50px;
  border-radius: 5px;
`;
