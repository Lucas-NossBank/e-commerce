import { Link } from "react-router-dom";
import styled from "styled-components";

export const NoticeCard = styled.article`
    position: relative;
    min-width: 300px; /* change to width to fix size */ 
    max-width: 300px;
    height: 45vh;
    background-color: var(--color-navigation);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
    overflow: hidden;
    -webkit-transition: box-shadow 0.5s;
    transition: box-shadow 0.5s;
    border-radius: var(--radius-8);
    margin: 20px;

  &:hover {
    box-shadow: 0 0 50px rgba(255, 255, 255, 0.3);
  }

  &:hover .headerS {
    height: 130px;
  }

  &:hover .headerS .imageS {
    opacity: 0.6;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  &:hover .cardBodyS {
    height: 300px;
  }

  &:hover .cardPS {
    opacity: 1;
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }

    @media screen and (min-width: 480px) {
    }
    @media screen and (min-height: 650px) {
        height: 60vh;
    }
    @media screen and (min-height: 768px) {
        height: 50vh;
    }
    @media screen and (min-height: 800px) {
        height: 45vh;
    }
    @media screen and (min-height: 900px) {
        height: 43vh;
    }
    @media screen and (min-height: 1024px) {
        height: 40vh;
    }
    @media screen and (min-height: 1100px) {
        height: 38vh;
    }
    @media screen and (min-height: 1200px) {
        height: 34vh;
    }
    @media screen and (max-width: 1920px) {
    }
`;

export const NoticeCardHeader = styled.header`
  height: 230px;
  overflow: hidden;
  background-color: var(--color-primary);
  -webkit-transition: height 0.5s;
  transition: height 0.5s;

  & > a { 
    color: inherit;
    text-decoration: none;
  }

  & > a > img {
    width: 100%;
    display: block;
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: opacity 0.5s, -webkit-transform 0.5s;
    transition: opacity 0.5s, -webkit-transform 0.5s;
    transition: opacity 0.5s, transform 0.5s;
    transition: opacity 0.5s, transform 0.5s, -webkit-transform 0.5s;
  }
`;

export const NoticeCardDate = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 45px;
  height: 45px;
  padding-top: 10px;
  font-family: var(--font-primary-nunito);
  background-color: var(--button-color-red);
  border-radius: 50%;
  color: var(--color-white-mode);
  text-align: center;
  font-weight: 700;
  line-height: 13px;
  letter-spacing: 1px;
`;
export const CardLocation = styled.div`
  position: absolute;
  top: 20px;
  right: 80px;
  width: 45px;
  height: 45px;
  background-color: var(--button-color-red);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardLocationMap = styled(Link)`

`;

export const NoticeCardDay = styled.span`
  font-size: var(--font-text-14);
`;

export const NoticeCardMonth = styled.span`
  text-transform: uppercase;
  font-size: 10px;
`;

export const NoticeCardBody = styled.section`
  position: relative;
  height: 185px;
  padding: 20px;
  -webkit-transition: height 0.5s;
  transition: height 0.5s;
  display: flex; 
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;

  & > h2 > a {
    margin: 0;
    padding: 0 0 10px 0;
    color: var(--color-white-mode);
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
    color: coral;
  }

  & > p {
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: 120px;
    margin: 0;
    padding: 0;
    color: var(--color-grey-5);
    font-family: var(--font-primary-nunito);
    line-height: 27px;
    opacity: 0;
    -webkit-transform: translateY(45px);
    transform: translateY(45px);
    -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
    transition: opacity 0.3s, -webkit-transform 0.3s;
    transition: opacity 0.3s, transform 0.3s;
    transition: opacity 0.3s, transform 0.3s, -webkit-transform 0.3s;
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 2; 
    -webkit-box-orient: vertical;
  }
`;

export const NoticeCardCategory = styled.div`
    position: absolute;
    top: -30px;
    left: 0;
    height: 30px;
    padding: 0 15px;
    background-color: coral;

  & > h2 { 
    color: #fff;
    text-transform: uppercase;
    font-family: var(--font-secondary-inter);
    font-weight: var(--font-weight-700);
    font-size: var(--font-text-12);
    line-height: 25px;
    text-decoration: none;
  }
`;
export const NoticeCardName = styled.div`
    position: absolute;
    top: -30px;
    left: 20%;
    height: 30px;
    padding: 0 15px;
    background-color: var(--button-color-green);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 2; 
    -webkit-box-orient: vertical;

  & > h2 { 
    color: var(--color-black-mode);
    text-transform: uppercase;
    font-family: var(--font-secondary-inter);
    font-weight: var(--font-weight-700);
    font-size: var(--font-text-12);
    line-height: 25px;
    text-decoration: none;
  }
`;

export const NoticeCardFooter = styled.footer`
  position: absolute;
  bottom: 12px;
  left: 20px;
  right: 20px;
  font-size: 11px;
  color: #A3A9A2;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

export const FooterClock = styled.div`
    display: inline-block;
    vertical-align: middle;
    margin: -2px 0 0 2px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

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

