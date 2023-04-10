import styled from "styled-components";

export const NavBarMenuBtn = styled.button`
  width: 55px;
  height: 50px;
  position: fixed;
  top: 18%;
  left: 80%;
  background-color: var(--color-grey-2);
  border-radius: var(--radius-8);
  z-index: 1101;
  cursor: pointer;
  & > svg {
    transform: scale(1.5);
  }
  @media screen and (min-width: 370px) {
    left: 82%;
  }
  @media screen and (min-width: 480px) {
    display: block;
  }
  @media screen and (min-width: 1024px) {
    & {
      display: none;
    }
  }
`;

/*------------------------- Skip line -------------------------*/