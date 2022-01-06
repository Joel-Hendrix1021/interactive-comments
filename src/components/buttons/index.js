/* eslint-disable camelcase */
import styled from "styled-components";
import { moderate_blue } from "../color";

export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonReply = styled.button`
  background: none;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: bold;
  color: ${moderate_blue};
  cursor: pointer;
`;

export const ImgReply = styled.img`
  width: 1.7rem;
  padding: 0 1rem;
`;

export const Span = styled.span`
  padding: 0 1rem;
  font-size: 1.6rem;
  color: ${moderate_blue};
  font-weight: bold;
`;

export const ContainButton = styled.div`
  display: flex;
  flex-direction: row;
  @media (min-width: 768px) {
     position: absolute;
     right: 40px;
     top: 20px;
  }
`;

export const BtnAction = styled.button`
  background: none;
  outline: none;
  border: none;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  color:${props => props.color ? props.color : `${moderate_blue}`};
  justify-content: space-between;
  font-weight: bold;
  cursor: pointer;
  & img {
    
    margin: 0 1rem;
  }
`;
