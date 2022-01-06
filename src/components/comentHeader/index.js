/* eslint-disable camelcase */
import styled from "styled-components";
import { moderate_blue } from "../color";

export const HeaderComts = styled.div`
    display: flex;
    justify-content:space-around; 
    align-items: center;
    height: 2.5rem;
    width: 300px;
`;

export const Img = styled.img`
  width: 3rem;
  height: 3rem;
`;

export const Time = styled.p`
  color: hsl(211, 10%, 45%);
  
`;

export const TextUser = styled.p`
    font-size: 1.6rem;
    font-weight: bold;
`;

export const SpanYou = styled.span`
  font-size: 1.6rem;
  background: ${moderate_blue};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`;
