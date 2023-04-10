import styled from "styled-components";

export const SessionAdmin = styled.section`
    width: 100%;
    height: 120vh;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: var(--color-grey-ex-1);
    overflow: auto;
    margin-top: 10vh;
`;

/* -------------------- Skip Line -------------------- */

export const EditSessionSpace = styled.main`
    width: 85vw;
    height: 120vh;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding: 0px 80px;
    align-items: center;
    overflow: auto;
    position: relative;
`;

export const EditableSpace = styled.section`
    width: 50%;
    height: 100%;

    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
`;

export const UploadImageForm = styled.div`
    width: 100%;
    height: 15vh;
    background-color: var(--color-navigation);
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    border-radius: var(--radius-8);

    & > label {
        font-family: var(--font-primary-nunito);
        color: var(--color-primary);
        font-weight: var(--font-weight-700);
        font-size: var(--font-subtitle-20);
    }

    & > input[type="file"] {
        height: 30px;
        display: flex;
        flex-flow:  row nowrap;
        justify-content: center;
        align-items: center;
        font-family: var(--font-primary-nunito);
        font-size: var(--font-text-16);
        color: var(--color-primary);

    }
`;

export const EditSessionFormSection = styled.div`
    width: 100%;
    height: 90vh;
    background-color: var(--color-white-mode);
    border-radius: var(--radius-8);
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: auto;
    position: relative;
    z-index: 1000;
    padding: 40px;
`;

/* -------------------- Skip Line -------------------- */

export const EditSessionForm = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;

    & > h2 {
        font-family: var(--font-primary-nunito);
        font-weight: var(--font-weight-900);
        font-size: var(--font-subtitle-20);
        color: var(--color-black-mode);
    }

    & > h3 {
        font-family: var(--font-primary-nunito);
        font-weight: var(--font-weight-600);
        font-size: var(--font-text-16);
    }

    & > button {
      width: 50%;
      height: 40px;
      background-color: var(--color-primary);
      border: none;
      border-radius: var(--radius-4);
      cursor: pointer;
    }

    & > button:hover{
      opacity: 0.7;
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
    font-size: var(--font-text-14);
    font-weight: var(--font-weight-400);
    color: var(--color-senary);
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

  & > input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
  & > input:focus::placeholder {
    color: transparent;
  }
  & > input:focus {
    outline: none;
    border: 1px solid var(--color-secondary);
  }
  & > p {
    color: var(--color-feedback-negative);
    margin-top: 5px;
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-12);
    font-weight: var(--font-weight-700);
    letter-spacing: 1px;
  }
`;

/* -------------------- Skip Line -------------------- */

export const ModelExample = styled.section`
    width: 40%;
    height: 100%;
    background-color: blueviolet;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 50px 0px;
`;

export const ImageDivExample = styled.div`
    width: 100%;
    height: 20vh;
    background-color: aliceblue;

    & > div {
        width: 90%;
        margin: 0 auto;
        height: 100%;
    }

    & > div > img {
        width: 100%;
        height: 100%;
    }
`;