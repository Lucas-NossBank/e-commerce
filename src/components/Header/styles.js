import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Shine = keyframes`
     to {
      background-position: 200% center;
    }
`;

export const Header = styled.header`
    width: 100%;
    height: 10vh;
    background-color: var(--color-navigation);
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
    z-index: 1110;
    position: fixed;
    top: 0;
    left: 0;

    & > h1 {
        font-family: var(--font-quartenary-alkatra);
        color: var(--color-primary);
        font-size: var(--font-subtitle-24);
        font-weight: var(--font-weight-700);
        text-align: center;
        background: linear-gradient(to right, var(--color-primary) 20%, var(--button-color-green) 40%, var(--color-feedback-success) 60%, var(--color-bubbles-blue) 80%);
        background-size: 200% auto;
        color: #000;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: ${Shine} 5s linear infinite;
    }

    @media screen and (min-width: 480px) {
    }
    @media screen and (min-width: 600px) {
    }
    @media screen and (min-width: 768px) {
        width: 100%;
        height: 10vh;
        background-color: var(--color-navigation);
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        padding: 0px 50px;
        z-index: 1110;
        position: fixed;
        top: 0;
        left: 0;

        & > h1 {
            font-family: var(--font-quartenary-alkatra);
            color: var(--color-primary);
            font-size: var(--font-title-40);
            font-weight: var(--font-weight-700);
            background: linear-gradient(to right, var(--color-primary) 20%, var(--button-color-green) 40%, var(--color-feedback-success) 60%, var(--color-bubbles-blue) 80%);
            background-size: 200% auto;
            color: #000;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: ${Shine} 5s linear infinite;
        }
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

export const LogoDiv = styled.div`
    width: 180px;
    height: 100%;

    @media screen and (min-width: 480px) {
    }
    @media screen and (min-width: 600px) {
    }
    @media screen and (min-width: 768px) {
        width: 200px;
        height: 100%;
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

export const LogoLink = styled(Link)`
    & > img {
        width: 100%;
        height: 100%;
    }
`;