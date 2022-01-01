import styled from "styled-components";

export const ModalStyle = styled.div`
  background: white;
  border-radius: 1rem;
  width: 80%;
  margin: auto;
  height: 200px;
  position: fixed;
  
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: center;
  z-index: 1000;
`;

export const ModalFixed = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

export const BtnModal = styled.button`
    background: ${props => props.color ? props.color : "hsl(211, 10%, 45%)"};
    color: white;
    padding: 1rem 2rem;
    border: none;
    margin:0.5rem;
    border-radius: 1rem;
    font-size: 1.6rem;
`;
