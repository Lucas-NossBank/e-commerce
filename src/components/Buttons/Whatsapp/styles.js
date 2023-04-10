import { Link } from "react-router-dom";
import styled from "styled-components";

export const WhatsappButton = styled(Link)`
    width: 60px;
    height: 60px;
    position: fixed;
    top: 85%;
    left: 80%;
    z-index: 1010;
    background-color: var(--color-primary);
    border-radius: var(--radius-half);
    border: 1px solid var(--color-senary);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 480px) {
    }
    @media screen and (min-width: 600px) {
    }
    @media screen and (min-width: 768px) {
        width: 80px;
        height: 80px;
        top: 80%;
        left: 90%;
    }
    @media screen and (min-width: 850px) {
    }
    @media screen and (min-width: 1024px) {
    }
    @media screen and (min-width: 1200px) {
    }
    @media screen and (min-width: 1420px) {
    }
`;