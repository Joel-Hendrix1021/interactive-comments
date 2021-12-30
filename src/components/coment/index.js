/* eslint-disable camelcase */
import styled from "styled-components";
import { grayish_blue, moderate_blue, soft_red } from "../color";

export const CommentStyle = styled.div`
    width: 85%;
    background: #f5f5f5;
    margin: 1rem auto;
    padding: 1.5rem;
`;

export const P = styled.p`
  font-size: 1.6rem;
  color: ${`${grayish_blue}`};
`;

export const ButtonReply = styled.button`
  background: none;
  outline : none;
  border: none;
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: bold;
  color: ${moderate_blue};
  
`;
export const ImgReply = styled.img`
  width: 1.7rem;
  padding: 0 1rem;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BtnCounts = styled.div`
  display: flex;
  align-items: center;
`;

export const BtnCount = styled.button`
  background: none;
  outline: none;
  border: none;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  
`;

export const Span = styled.span`
  padding: 0 1rem;
  font-size: 1.6rem;
  color: ${moderate_blue};
  font-weight: bold;
`;

export const ReplyingTo = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
  color: ${moderate_blue};
`;

export const ContainButton = styled.div`
  display: flex;
  flex-direction: row;
  `;

export const BtnEdite = styled.button`
  background: none;
  outline: none;
  border: none;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  color: ${moderate_blue};
  justify-content: space-between;
  font-weight: bold;
   & img {
      margin: 0 1rem;
   }
`;

export const BtnDelete = styled.button`
 background: none;
  outline: none;
  border: none;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  color: ${soft_red};
  justify-content: space-between;
  font-weight: bold;
   & img {
      margin: 0 1rem;
   }

`;
