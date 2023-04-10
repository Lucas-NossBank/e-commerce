import styled from "styled-components";

export const DashboardAdminPage = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: var(--color-white-mode);
    margin-top: 10vh;
`;

/* -------------------- Skip Line -------------------- */

export const ShowCase = styled.main`
    width: 80vw;
    height: 100vh;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    overflow: auto;
    z-index: 100;
    position: relative;
`;

export const ShowCaseSpace = styled.section`
    width: 85vw;
    height: 100%;
    background-color: aliceblue;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: auto;
    padding: 0px 80px;
    position: relative;
    z-index: 1000;
`;

/* -------------------- Skip Line -------------------- */

export const FilterSpace = styled.section`
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

    & > h1 {
        font-family: var(--font-primary-nunito);
        font-size: var(--font-subtitle-18);
        font-weight: var(--font-weight-700);
        color: var(--color-primary);
    }

    & > input {
        width: 70%;
        height: 80%;
        background-color: var(--color-white-mode);
        border-radius: var(--radius-8);
        padding-left: 20px;
    }
`;

