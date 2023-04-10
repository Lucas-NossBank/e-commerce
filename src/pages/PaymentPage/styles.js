import styled from "styled-components";
import QRCode from "react-qr-code";

export const PaymentMain = styled.main`
    width: 100%;
    height: 150vh;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: var(--color-white-mode );
    overflow: auto;
    margin-top: 10vh;
`;

export const PaymentSection = styled.section`
    width: 80vw;
    height: 100%;
    display: flex;
    flex-flow:  column nowrap;
    justify-content: space-evenly;
    align-items: center;
    background-color: var(--color-tertiary);
`;

export const PixBox = styled.div`
    width: 900px;
    height: 40vh;
    margin: 10px auto;
    overflow: hidden;
    background-color: var(--color-grey-ex-1);
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--radius-8);
    box-shadow: 0px 0px 15px 5px var(--color-navigation);
`;

export const FormSpacePayment = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-flow:  column nowrap;
    justify-content: center;
    align-items: center;
    padding-left: 20px;

    & > h1 {
        font-family: var(--font-primary-nunito);
        font-size: var(--font-text-16);
        font-weight: var(--font-weight-700);
        color: var(--color-senary);
    }

    & > form { 
        width: 100%;
        height: 40%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
    }

    & > form > input {
        width: 90%;
        height: 30px;
        margin-bottom: 20px;
        background: none;
        border: none;
        display: none;
    }

    & > form > button {
        width: 90%;
        height: 30px;
        background-color: var(--color-primary);
        border-radius: var(--radius-4);
        border: none;
        margin-bottom: 20px;
    }

    & > form > a {
        text-decoration: none;
        color: var(--color-black-mode);
        font-family: var(--font-primary-nunito);
        font-size: var(--font-text-14);
        font-weight: var(--font-weight-700);
        cursor: pointer;
    }

    & > div > h2 {
        color: var(--color-black-mode);
        font-family: var(--font-primary-nunito);
        font-size: var(--font-text-14);
        font-weight: var(--font-weight-700);
        cursor: pointer;
        width: 100%;
        text-align: center;
    }
`;

export const QrCodeSpace = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    & > h1 {
        color: var(--color-black-mode);
        font-family: var(--font-primary-nunito);
        font-size: var(--font-subittle-18);
        font-weight: var(--font-weight-600);

    }
`;

export const QrCodeImg = styled(QRCode)`
    width: 90%;
    height: 90%;
`;