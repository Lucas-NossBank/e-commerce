import { Link } from "react-router-dom";
import styled from "styled-components";

export const DashboardPage = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: var(--color-white-mode);
    overflow: auto;
    margin-top: 10vh;
    position: relative;
`;

/* -------------------- Skip Line -------------------- */

export const ShowCase = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    overflow: auto;
    position: relative;

    @media screen and (min-width: 480px) {
    }
    @media screen and (min-width: 600px) {
    }
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 850px) {
    }
    @media screen and (min-width: 1024px) {
        width: 80vw;
    }
    @media screen and (min-width: 1200px) {
    }
    @media screen and (min-width: 1420px) {
    }
`;

export const ShowCaseSpace = styled.section`
    width: 100%;
    height: 100%;
    background-color: aliceblue;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;
    overflow: auto;
    padding: 0;
    position: relative;
    z-index: 1000;

    @media screen and (min-width: 480px) {
    }
    @media screen and (min-width: 600px) {
    }
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 850px) {
    }
    @media screen and (min-width: 1024px) {
        width: 85vw;
        padding: 0px 80px;
        align-items: flex-start;
    }
    @media screen and (min-width: 1200px) {
    }
    @media screen and (min-width: 1420px) {
    }
`;

/* -------------------- Skip Line -------------------- */

export const FilterSpace = styled.section`
    width: 95%;
    margin: 0 auto;
    padding: 0px 20px;
    height: 7vh;
    display: flex;
    background-color: var(--color-navigation);
    justify-content: space-evenly;
    align-items: center;
    border-radius: 0px 0px var(--radius-8) var(--radius-8);
    position: sticky;
    top: 0px;
    left: 0;
    z-index: 1001;

    & > h1 {
        font-family: var(--font-primary-nunito);
        font-size: var(--font-subtitle-18);
        font-weight: var(--font-weight-700);
        color: var(--color-primary);
    }

    & > input {
        width: 70%;
        height: 70%;
        background-color: var(--color-white-mode);
        border-radius: var(--radius-8);
        padding-left: 20px;
    }

    @media screen and (min-width: 480px) {
    }
    @media screen and (min-width: 600px) {
    }
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 850px) {
    }
    @media screen and (min-width: 1024px) {
        width: 100%;
        height: 7vh;
        display: flex;
        background-color: var(--color-navigation);
        justify-content: space-evenly;
        align-items: center;
        border-radius: 0px 0px var(--radius-8) var(--radius-8);
        position: sticky;
        top: 0px;
        left: 0;
        z-index: 1001;
        padding: 0;

        & > input {
            height: 80%;
        }
    }
    @media screen and (min-width: 1200px) {
    }
    @media screen and (min-width: 1420px) {
    }
`;


