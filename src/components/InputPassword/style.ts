import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.3rem;
  flex-direction: column;
  width: 100%;
  background: var(--color_white);
  border-radius: 8px;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    > label {
      width: 100%;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      display: flex;
      align-items: center;
      text-align: center;
      color: var(--color_1);
    }
    > .inputPassword__box {
      width: 100%;
      display: flex;
      > input {
        width: 100%;
        border: none;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;

        display: flex;
        outline: 0;
        height: 3rem;
        min-height: 3rem;

        border: 1px solid var(--color_4);
        border-radius: 8px;

        color: var(--color_6);
        color: var(--color_1);

        padding: 0 1rem;
        position: relative;
      }
      > button {
        height: 16px;
        width: 16px;
        margin: -40px;
        position: relative;
        right: -10px;
        bottom: -57px;
        border: none;
        background-color: transparent;
      }
    }
  }
  > p {
    height: 16px;
    font-size: 10px;
    color: red;
  }
`;
