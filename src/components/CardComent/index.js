import styled from "styled-components";

export const Thread = styled.div`
   display: grid;
   margin:auto;
   grid-template-columns:2% 98%;
   width: 95%;
   .content-thread > form {
          width: 99%;
        }
   @media (min-width: 768px) {
        width:48%;
        grid-template-columns: 10% 90%;
        .content-thread {
            width:100%;     
        }
        .content-thread > div {
           width: 93%;
        }
        .content-thread > form {
          width: 99%;
        }
    }
`;

export const LineThread = styled.span`
    background: hsla(211, 10%, 45%, 0.158);
    width: 3px;
    height: 97%;
    margin-top:1rem;
   
    @media (min-width: 768px) {
      margin-left: 3rem;
    }
    
`;
