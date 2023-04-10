import styled from "styled-components";
import { Link } from "react-router-dom";
import bannerIntro from "../../assets/img/bannerIntro.jpg"

export const Main = styled.main`
    background-color: var(--color-white-mode);
    width: 100%;
    height: 90vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 10vh;
    background-image: url(${bannerIntro});
    background-position: center;
    background-size: cover;

    @media screen and (min-width: 480px) {
    }
    @media screen and (min-width: 600px) {
    }
    @media screen and (min-width: 768px) {
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

export const SectionFormUser = styled.section`
    width: 80%;
    height: 60vh;
    background-color: var(--blur-effect-02);
    margin-top: 50px;
    border-radius: var(--radius-8);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 10px 5px var(--color-primary);

    & > span { 
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-12);
    font-weight: var(--font-weight-600);
    color: var(--color-white-mode);
  }

  @media screen and (min-width: 480px) {
    }
    @media screen and (min-width: 600px) {
    }
    @media screen and (min-width: 768px) {
      width: 600px;
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

export const RegisterBtn = styled(Link)`
  width: 90%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: var(--color-primary);
  color: var(--color-grey-1);
  font-family: var(--font-secondary-inter);
  font-size: var(--font-text-14);
  font-weight: var(--font-weight-500);
  border: 1px solid var(--color-primary);
  border-radius: var(--radius-4);
  cursor: pointer;
  margin-top: 10px;
`;

export const FormStructure = styled.form`
  width: 90%;
  height: 65%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;

  & > h2 {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-subtitle-20);
    letter-spacing: 3px;
    font-weight: var(--font-weight-700);
    color: var(--color-grey-0);
  }
  & > button {
    width: 80%;
    height: 40px;
    background-color: var(--color-quartenary);
    border: 1px solid var(--color-senary);
    border-radius: var(--radius-4);
    color: var(--color-black-mode);
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-14);
    font-weight: var(--font-weight-500);
    cursor: pointer;
    margin: 0 auto;
  }
  
`;

export const DataSpaceInput = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
  background-color: transparent;
  & > label {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-10);
    font-weight: var(--font-weight-400);
    color: var(--color-grey-0);
  }
  & > input,
  & > select {
    width: 100%;
    height: 40px;
    background-color: var(--color-grey-3);
    border: 1px solid var(--color-grey-0);
    border-radius: var(--radius-4);
    color: var(--color-grey-0);
    padding-left: 20px;
  }
  & > input::placeholder {
    color: var(--color-white-mode);
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-12);
    font-weight: var(--font-weight-400);
  }
  & > input:focus::placeholder {
    color: transparent;
  }
  & > input:focus {
    outline: none;
    border: 1px solid var(--color-secondary);
  }
  & > p {
    color: var(--color-grey-0);
    margin-top: 5px;
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-10);
  }
`;

