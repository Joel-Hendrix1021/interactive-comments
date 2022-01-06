import styled from "styled-components";

export const Thread = styled.div`
  width: 89%;
  display: flex;
  flex-direction: column;
  margin: auto;
  position: relative;
  div {
    margin-right:0;
  }
  @media (min-width: 768px) {
    width: 47%;
    background:red;
    left: 0.5rem;
     div {
       width: 80%;
       position: relative;
     }
  }
`;

export const LineThread = styled.span`
 // background: hsla(211, 10%, 45%, 0.158);
  background:black;
   width: 3px;
  height: 100%;
  left: 10px;
  position: absolute;
`;
