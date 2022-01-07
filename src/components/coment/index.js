/* eslint-disable camelcase */
import styled from "styled-components";
import { grayish_blue, moderate_blue } from "../color";

export const CommentStyle = styled.div`
    width: 85%;
    background: #f5f5f5;
    position:relative;
    margin: 1rem auto;
    padding: 2rem;
    display: grid;
    grid-template-rows:  85% 15%;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;

    @media (min-width: 768px) {
        width:45%;
        grid-template-rows:100%;
        grid-template-columns: 10% 85% 5%;
        grid-gap: 1rem;
    }
`;

export const P = styled.p`
  font-size: 1.6rem;
  color: ${`${grayish_blue}`};
  text-align: ${props => props.align ? props.align : "left"};
  
`;

export const BtnCounts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(195, 196, 239, 0.1);
  padding: 0.1rem;
  border-radius: 0.5rem;
  width: 100px;
  
  @media (min-width: 768px) {
    flex-direction: column;
    justify-content:space-around;
    width: 40px;
    height: 60px;
  }
   /*   */
`;

export const BtnCount = styled.button`
  background: none;
  outline: none;
  border: none;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  cursor: pointer;
   
`;
export const ReplyingTo = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
  color: ${moderate_blue};
`;

export const BodyComment = styled.div`
   
   @media (max-width: 768px) {
    grid-column: 1 / 3;
    grid-row: 1;
   }
  `;
