import { Link } from "react-router-dom";
import styled from "styled-components";
import banner01 from "../../assets/img/tratamento-depilacao-1.jpg"

export const SessionCardArticle = styled.article`
    position: relative;
    min-width: 300px;
    height: 50vh;
    background-color: var(--color-senary);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
    overflow: hidden;
    -webkit-transition: box-shadow 0.5s;
    transition: box-shadow 0.5s;
    border-radius: var(--radius-8);
    margin: 0px 20px;

  &:hover {
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
  }
`;

export const SessionCardHeader = styled.header`
  height: 20vh;
  overflow: hidden;
  background-color: var(--color-primary);
  background-image: url(${props => props.elem.mainImageUrl});;
  background-repeat:  no-repeat;
  background-size: cover;
  background-position: center;
  border-bottom: 10px solid var(--color-primary);
`;

export const SessionCardBody = styled.section`
  position: relative;
  height: 235px;
  padding: 20px;
  display: flex; 
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;

  & > h2 {
    color: var(--color-primary);
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-18);
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
  }

  & > h3 {
    margin-top: 10px;
    padding: 0 0 10px 0;
    font-size: var(--font-text-16);
    font-family: var(--font-primary-nunito);
    color: var(--color-grey-ex-1);
    text-align: center;
    width: 100%;
  }

  & > h3 > span {
    font-weight: var(--font-weight-700);
    text-transform: uppercase;
    color: var(--color-white-mode);
  }

`;

export const ExtraInfoSpace = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 20px;
`;

export const Infos = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;

    & > h4 {
      font-family: var(--font-primary-nunito);
      font-weight: var(--font-weight-700);
      font-size: var(--font-text-16);
      color: var(--color-white-mode);
      border: 1px solid var(--color-white-mode);
      padding: 5px;
    }

    & > h5 {
      font-family: var(--font-primary-nunito);
      font-weight: var(--font-weight-600);
      font-size: var(--font-text-16);
      padding-top: 5px;
      color: var(--color-white-mode);
    }
`;

export const SessionCardFooter = styled.footer`
  position: absolute;
  bottom: 12px;
  left: 20px;
  right: 20px;
  font-size: 11px;
  color: var(--color-white-mode);
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

`;

export const FooterHeart = styled.button`
    display: inline-block;
    vertical-align: middle;
    margin: -2px 0 0 2px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    border: none;
    background: none;
    cursor: pointer;

    & > span {
        font-size: var(--font-text-14);
        color: var(--color-white-mode);
        padding-left: 10px;
    }
`;
export const FooterComment = styled.div`
    display: inline-block;
    vertical-align: middle;
    margin: -2px 0 0 2px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    padding-left: 10px;

    & > span {
        font-size: var(--font-text-14);
        color: var(--color-white-mode);
        padding-left: 10px;
    }
`;

export const BuyButton = styled.button`
    width: 90%;
    height: 30px;
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
    margin: 0 auto;
    cursor: pointer;
    border-radius: var(--radius-4);
    font-family: var(--font-primary-nunito);
    font-weight: var(--font-weight-700);
    font-size: var(--font-text-16);
    

   &:hover {
    background-color: var(--button-color-green);
   }
`;