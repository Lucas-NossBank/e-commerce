import { Link } from "react-router-dom";
import styled from "styled-components";

export const SessionMain = styled.main`
    width: 100%;
    height: 110vh;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: var(--color-white-mode);
    margin-top: 10vh;
`;

export const  FranchiseMain = styled.main`
    width: 80vw;
    height: 100%;
    display: flex;
    flex-flow:  column nowrap;
    justify-content: space-evenly;
    align-items: center;
`;

export const FranchiseShowcase = styled.div`
    width: 100%;
    height: 40vh;
    background-color: var(--color-tertiary);
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
    border-bottom: 5px solid black;
`;

export const FranchiseImgDiv = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;

    & > img {
        border: 1px solid var(--color-primary);
        border-radius: var(--radius-8);
    }

    & > h1 {
        font-family: var(--font-secondary-inter);
        font-size: var(--font-subtitle-18);
    }

    & > h1 > span {
        font-weight: var(--font-weight-900);
        color: var(--color-senary);
    }
`;

export const TelDiv = styled.div`
    width: 90%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;

    & > h2 {
        font-family: var(--font-primary-nunito);
        font-size: var(--font-text-14);
    }

    & > h2 > span {
        font-weight: var(--font-weight-900);
    }
`;

export const FranchiseCartSpace = styled.div`
    width: 30%;
    height: 100%;
    background-color: var(--color-scrollbar-1);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`;

export const CartEmpty = styled.div`
    margin-top: 30%;
    width: 90%;
    height: 50px;
    display: flex;
    flex-flow:  column nowrap;
    justify-content: center;
    align-items: center;

    & > h2 {
        font-family: var(--font-secondary-inter);
        font-weight: var(--font-weight-700);
        color: var(--color-senary);
    }
`;

export const SessionCart = styled.div`
    width: 95%;
    height: 80%;
    background-color: aliceblue;
    overflow: hidden;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    border-radius: var(--radius-8) var(--radius-8) 0px 0px;
    overflow: auto;
`;

export const SessionCartCard = styled.div`
    width: 90%;
    min-height: 70px;
    background-color: var(--color-grey-5);
    border-bottom: 1px solid var(--color-black-mode);
    display: flex; 
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    margin: 10px 0px;
    border-radius: var(--radius-8);

`;

export const SessionCartInfo = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: flex-start;
    padding-left: 20px;

    & > h1 {
        font-family: var(--font-primary-nunito);
        font-size: var(--font-text-16);
        font-weight: var(--font-weight-700);
    }
`;

export const SessionFinalPrice = styled.div`
    left: 0%;
    width: 100%;
    height: 50px;
    background-color: var(--color-navigation);
    display: flex;
    flex-flow:  row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;

    & > h2 {
        font-family: var(--font-primary-nunito);
        font-weight: var(--font-weight-900);
        font-size: var(--font-subtitle-18);
        color: var(--color-primary);
    }

    & > p {
        font-family: var(--font-primary-nunito);
        font-weight: var(--font-weight-900);
        font-size: var(--font-subtitle-18);
        color: var(--color-primary);
    }

    & > span {
    color: var(--color-primary);
    font-family: var(--font-primary-nunito);
    font-weight: var(--font-weight-700);
    text-transform: uppercase;
    border: 1px solid var(--color-primary);
    padding: 8px;
    }
`;

export const ToPaymentButton = styled(Link)`
    text-decoration: none;
    color: var(--color-primary);
    font-family: var(--font-primary-nunito);
    font-weight: var(--font-weight-700);
    text-transform: uppercase;
    border: 1px solid var(--color-primary);
    padding: 8px;

    &:hover {
        background-color: aliceblue;
    }
`;

export const TrashIcon = styled.button`
    width: 20%;
    height: 100%;
    background: none;
    border: none;
    cursor: pointer;
`;

export const FranchiseInfo = styled.div`
    width: 45%;
    height: 100%;
    background-color: var(--color-tertiary);
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px 50px;

    & > h1 {
        font-family: var(--font-secondary-inter);
        font-weight: var(--font-weight-700);
        font-size: var(--font-subtitle-20);
        font-style: normal;
    }

    & > p {
        font-family: var(--font-primary-nunito);
        line-height: var(--font-line-height-24);
        font-weight: var(--font-weight-600);
        font-size: var(--font-text-16);
    }
`;

/* -------------------- Skip Line -------------------- */

export const ButtonsLayout = styled.div`
    width: 80%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`;

export const NextFranchiseButton = styled(Link)`
    width: 30%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-family: var(--font-secondary-inter);
    font-weight: var(--font-weight-700);
    color: var(--color-black-mode);
`;
export const PreviousFranchiseButton = styled(Link)`
    width: 30%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-family: var(--font-secondary-inter);
    font-weight: var(--font-weight-700);
    color: var(--color-black-mode);
`;

/* -------------------- Skip Line -------------------- */

export const SessionShowcase = styled.section`
    width: 100%;
    height: 70vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    overflow: auto;
`;

export const FilterSessionSpace = styled.div`
    width: 100%;
    height: 10vh;
    background-color: var(--color-scrollbar-1);
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0px 1px 50px 0px var(--color-navigation);
    z-index: 1000;

    & > form {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        align-items: center;
    }
`;

export const ButtonFilterSpace = styled.div`
    width: 100px;
    height: 9vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
`;

export const FilterButton = styled.button`
    width: 100%;
    height: 4vh;
    background-color: var(--color-secondary);
    border-radius: var(--radius-8);
    color: var(--color-primary);
    font-family: var(--font-primary-nunito);
    font-weight: var(--font-weight-700);
    font-size: var(--font-text-16);
    cursor: pointer;
`;

export const ResetFilterButton = styled.button`
    width: 100px;
    height: 4vh;
    background-color: var(--color-secondary);
    border-radius: var(--radius-8); 
    color: var(--color-primary);
    font-family: var(--font-primary-nunito);
    font-weight: var(--font-weight-700);
    font-size: var(--font-text-16);
    cursor: pointer;
    margin-right: 20px;
`;

export const SessioShowCaseDiv = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    overflow: auto;

    & > h1 {
        width: 100%;
        text-align: center;
    }
`;

export const InputContainer = styled.div`
    position: relative;

  .label-up {
    top: 0;
    left: 0;
    transform: translate(10px, -50%);
    font-size: 14px;
    color: #333;
    background-color: var(--color-scrollbar-1);
  }

  & > label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.2s ease-in-out;
    pointer-events: none;
    color: var(--color-black-mode);
    width: 70%;
    font-size: var(--font-text-14);
    font-family: var(--font-secondary-inter);
    font-weight: var(--font-weight-500);
  }

  & > input {
    display: block;
    width: 250px;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 2px solid var(--color-navigation);
    outline: none;
    transition: all 0.2s ease-in-out;
    background-color: var(--color-scrollbar-1);
  }
`;
