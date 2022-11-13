import styled, { css, keyframes } from "styled-components";

interface Props {
  isLeave: boolean;
  hasDescription: boolean;
  type: string;
}

const translateXAnimationFrom = keyframes`

0%{
    background: transparent;
    transform: translateX(120%);
}

95%{
    trasnform: translateX(-20px);
}

100%{
    transform: translateX(0);
}

`;

const translateXAnimationLeave = keyframes`
from{

transform: translateX(0);

}
to{
    background: transparent;
    transform: translateX(120%);   
}`;

const ToastTypeVariatons = {
  success: css`
    background: var(--color-success);
  `,
  error: css`
    background: var(--color-error);
  `,
  warning: css`
    background: var(--color-warning);
    color: black;
  `,
};

const translateYAnimationMobileFrom = keyframes`

from{
    background: transparent;
    transform: translateY(-120%);
}



to{
    transform: translateY(0);
}

`;

const translateYAnimationMobileLeave = keyframes`
from{

transform: translateY(0);

}
to{
    background: transparent;
    transform: translateY(-120%);   
}`;

export const Container = styled.div<Props>`
  width: 286px;
  height: 69px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: #343b41;
  border-radius: 4px;

  .container-icons {
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;

    justify-content: space-around;
    flex-direction: row;

    .span-X {
      font-family: "Nunito";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;
      padding-bottom: 29px;
      /* padding-right: 5px; */
      color: #868e96;
      padding-left: 24px;
    }
    .span-sucess {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;

      color: #f8f9fa;
    }

    .img-error {
      width: 28px;
      height: 28px;
    }

    .div-img {
      width: 15%;
      display: flex;

      padding: 5px;
    }
    .div-span {
      width: 75%;
      display: flex;
    }
    .div-button {
      width: 10%;
      display: flex;
      align-items: baseline;
      justify-content: flex-start;
      height: 40px;
    }
    .btn {
      position: block;
      border: 0;
      background: transparent;
      color: inherit;
    }
  }

  .rectangule-sucess {
    height: 6px;
    background: #3fe864;
    border-radius: 0px 0px 0px 4px;
    display: flex;
    padding: 2;
    margin-right: 86px;
  }

  .rectangle-err {
    width: 252px;
    height: 6px;
    background: #e83f5b;
    border-radius: 0px 0px 0px 4px;
    display: flex;
    padding: 2;
    margin-right: 86px;
  }

  ${(p) => {
    switch (p.type) {
      case "sucess":
        return ToastTypeVariatons.success;
      case "error":
        return ToastTypeVariatons.error;
      case "warning":
        return ToastTypeVariatons.warning;
      default:
        return "";
    }
  }}

  ${({ isLeave }) =>
    css`
      animation: ${isLeave ? translateXAnimationLeave : translateXAnimationFrom}
        0.8s;
    `}
  animation-fill-mode: forwards;

  > svg {
    margin: 4px 12px 0 0;
  }

  ${({ hasDescription }) =>
    !hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}

  div {
    strong {
      font-weigth: bold;
    }

    p {
      margin-top: 4px;
      font-size: 14px;
    }
  }

  button {
    position: absolute;
    right: 29px;
    top: 13px;
    border: 0;
    background: transparent;
    color: inherit;
  }
  @media (max-width: 420px) {
    width: 90%;
    margin: 10px auto;

    ${({ isLeave }) =>
      css`
        animation: ${isLeave
            ? translateYAnimationMobileLeave
            : translateYAnimationMobileFrom}
          0.8s;
      `}
  }
`;
