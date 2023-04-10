import styled from "styled-components";


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
    width: 200px;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 2px solid var(--color-navigation);
    outline: none;
    transition: all 0.2s ease-in-out;
    background-color: var(--color-scrollbar-1);
  }

  & > input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button,
      input[type=number] {
    -webkit-appearance: none;
    margin: 0;
    -moz-appearance: textfield;
  }


`;
