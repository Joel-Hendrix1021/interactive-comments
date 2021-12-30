/* eslint-disable camelcase */
import styled from "styled-components";
import { moderate_blue } from "../color";

export const ComTextArea = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    margin: auto;
    height: 15rem;
    margin-bottom: 2rem;
    background: #f5f5f5;
    width: 90%;
`;

export const AddFooterCmts = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
   
    width: 90%;
`;

export const TextArea = styled.textarea`
    width: 90%;
    height: 6rem;
    resize: none;
    border: solid 1px hsl(223, 19%, 93%);
    background: none;
    font-family: 'Rubik', sans-serif;
`;

export const BtnSend = styled.button`
    background: ${moderate_blue};
    color: white;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    font-size: 1.6rem;
    border:none;
    outline: none;
`;
