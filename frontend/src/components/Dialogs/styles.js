import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.show ? "1" : 0)};
  pointer-events: ${(props) => (props.show ? "visible" : "none")};
  transition: all 0.3s ease-in-out;
`;

export const Content = styled.div`
  width: 500px;
  background-color: #fff;
  transform: ${(props) => (props.show ? "translateY(0)" : "translateY(-50px)")};
  transition: all 0.3s ease-in-out;
`;

export const Header = styled.div`
  padding: 10px;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const Body = styled.div`
  padding: 10px;
  height: 150px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.p`
  font-size: 24px;
  font-weight: 500;
`;

export const Footer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;
