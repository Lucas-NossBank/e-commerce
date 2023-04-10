import {Scrollbars} from "react-custom-scrollbars";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavBarAdmin = styled.aside`
    width: 20vw;
    height: 100%;
    background-color: var(--color-grey-ex-1);
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    padding: 40px 0px 20px 10px;
    box-shadow: 10px 0px 10px 0px var(--color-primary);
    border-right: 2px solid var(--color-bubbles-green);
    z-index: 1001;
    overflow: auto;
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

export const NavLinkSpace = styled.div`
    text-decoration: none;
`;


export const NavBarGoTo = styled(Link)`
    text-decoration: none;
    color: #19284A;
`;

export const CustomScrollbars = styled(Scrollbars)`
  /* Style the track */
  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  /* Style the thumb */
  &::-webkit-scrollbar-thumb {
    background-color: red;
    border-radius: 10px;
  }

  /* Style the corner */
  &::-webkit-scrollbar-corner {
    background-color: #f1f1f1;
  }

  /* Hide scrollbar in desktop view */
  @media (min-width: 1024px) {
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;