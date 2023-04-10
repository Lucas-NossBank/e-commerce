import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import bannerRegister from "../../assets/img/registerBanner.jpg"

/****************************************
    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: (11) 9-7749-2121
    Name: Geek Hub 
    Description: Project made with react
    ~ *   Register Space - CSS styles   * ~
            Version: 1.0
    ****************************************/

  const Animate = keyframes`
  0%{
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
  }
  100%{
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
  }
`;

export const RegisterSection = styled.section`
  width: 100%;
  height: 150vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  padding-top: 30px;
  background-color: var(--color-white-mode);
  background-image: url(${bannerRegister});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: auto;
  margin-top: 10vh;
  & > img {
    margin-bottom: 20px;
  }
  z-index: 1000;
`;

export const RegisterTitle = styled.div`
  width: 90%;
  height: 50px;
  margin-bottom: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 1000;
  @media screen and (min-width: 480px) {
    & {
      width: 450px;
    }
  }
  @media screen and (min-width: 768px) {
    & {
      width: 450px;
    }
  }
  @media screen and (min-width: 1024px) {
    & {
      width: 450px;
    }
  }
  @media screen and (min-width: 1200px) {
    & {
      width: 450px;
    }
  }
`;

export const BackBtn = styled(Link)`
  width: 80px;
  height: 40px;
  border-radius: var(--radius-4);
  background-color: var(--color-grey-2);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--color-grey-0);
  font-family: var(--font-secondary-inter);
  font-size: var(--font-text-10);
  font-weight: var(--font-weight-600);
  border: 1px solid var(--color-primary);
  cursor: pointer;
`;

export const DataStructure = styled.div`
  width: 90%;
  height: 85%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--blur-effect-02);
  border-radius: var(--radius-4);
  box-shadow: 0px 4px 4px -8px rgba(0, 0, 0, 0.25);
  z-index: 1000;
  box-shadow: 0px 0px 10px 5px var(--color-primary);
  @media screen and (min-width: 480px) {
    & {
      width: 450px;
      height: 80%;
    }
  }
  @media screen and (min-width: 768px) {
    & {
      width: 450px;
      height: 80%;
    }
  }
  @media screen and (min-width: 1024px) {
    & {
      width: 450px;
      height: 80%;
    }
  }
  @media screen and (min-width: 1200px) {
    & {
      width: 450px;
      height: 80%;
    }
  }
`;

export const FormStructure = styled.form`
  width: 90%;
  height: 90%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  & > h2 {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-subtitle-18);
    font-weight: var(--font-weight-700);
    color: var(--color-grey-0);
    letter-spacing: 3px;
  }
  & > h3 {
    color: var(--color-white-mode);
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-12);
    font-weight: var(--font-weight-400);
  }
  & > button {
    width: 100%;
    height: 40px;
    margin-top: 18px;
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
    border-radius: var(--radius-4);
    color: var(--color-black-mode);
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-14);
    font-weight: var(--font-weight-500);
    cursor: pointer;
  }

  & > button:hover{
    opacity: 0.6;
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
    font-size: var(--font-text-12);
    font-weight: var(--font-weight-400);
    color: var(--color-primary);
  }
  & > input {
    width: 100%;
    height: 40px;
    background-color: var(--color-grey-3);
    border: 1px solid var(--color-grey-0);
    border-radius: var(--radius-4);
    color: var(--color-grey-0);
    padding-left: 20px;
  }
  & > select {
    width: 100%;
    height: 40px;
    background-color: var(--color-grey-3);
    border: 1px solid var(--color-grey-0);
    color: var(--color-grey-0);
    border-radius: 0px;
    padding-left: 20px;
  }
  & > input::placeholder {
    color: var(--color-grey-5);
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-12);
    font-weight: var(--font-weight-400);
    letter-spacing: 1px;
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

export const DataSpecialInput = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  & > label {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-12);
    font-weight: var(--font-weight-400);
    color: var(--color-primary);
  }
  & > input {
    width: 20px;
    height: 20px;
    background-color: var(--color-grey-3);
    border: 1px solid var(--color-grey-0);
    border-radius: var(--radius-4);
    color: var(--color-grey-0);
    padding-left: 20px;
  }
  & > select {
    width: 100%;
    height: 40px;
    background-color: var(--color-grey-3);
    border: 1px solid var(--color-grey-0);
    color: var(--color-grey-0);
    border-radius: 0px;
    padding-left: 20px;
  }
  & > input::placeholder {
    color: var(--color-grey-5);
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-12);
    font-weight: var(--font-weight-400);
    letter-spacing: 1px;
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


export const Area = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150vh;
  margin-top: 10vh;
  overflow: hidden;
  & > li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: var(--color-quartenary);
    animation: ${Animate} 25s linear infinite;
    bottom: -150px;
  }
  & > li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }
  & > li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
  }
  & > li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
  }
  & > li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
  }
  & > li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
  }
  & > li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
  }
  & > li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
  }
  & > li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
  }
  & > li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
  }
  & > li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
  }
`;
