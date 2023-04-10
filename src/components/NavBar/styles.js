import { Sidebar } from "react-pro-sidebar";
import styled from "styled-components";

export const NavBar = styled.aside`
    width: 100%;
    height: 100%;
    background-color: var(--color-grey-ex-1-blur);
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    padding: 40px 0px 20px 10px;
    box-shadow: ${({ show }) => (show ? "10px 0px 10px 0px var(--color-primary)" : "none")};
    border-right: 2px solid var(--color-bubbles-green);
    z-index: 1100;
    overflow: auto;
    transform: ${({ show }) => (show ? "translateX(0)" : "translateX(-100%)")};
    transition: 0.7s ease-in-out;
    position: fixed;
    top: 10vh;
    left: 0%;

    @media screen and (min-width: 480px) {
    }
    @media screen and (min-width: 600px) {
    }
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 850px) {
    }
    @media screen and (min-width: 1024px) {
        position: relative;
        transform: none;
        width: 20vw;
        height: 100%;
        top: 0;
        background-color: var(--color-grey-ex-1);
        box-shadow: 10px 0px 10px 0px var(--color-primary);
    }
    @media screen and (min-width: 1200px) {
    }
    @media screen and (min-width: 1420px) {
    }
`;

export const UserInfoSpace = styled.div`
    width: 90%;
    height: 150px;
    margin-bottom: 40px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;

    & > h1 {
        font-family: var(--font-secondary-inter);
        font-size: var(--font-subtitle-18);
        font-weight: var(--font-weight-700);
        margin-top: 20px;
    }

    & > h1 > span {
        color: var(--color-senary);
        
    }
`;

export const UserImage = styled.div`
    width: 110px;
    height: 110px;
    display: flex;
    border: 5px solid var(--color-navigation);
    border-radius: var(--radius-half);
    background-color: var(--color-primary);
    justify-content: center;
    align-items: center;

    & > img {
        width: 80px;
        height: 80px;
    }
`;

export const SideBarStyles = styled(Sidebar)`
    width: 80vw;
    background-color: var(--color-primary);
`;