import styled from "styled-components";

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 33.6911px 17.6477px;
  gap: 17.65px;
  width: 80%;
  max-width: 296px;
  left: 12px;
  top: 114.4px;
  overflow-y: scroll;
  background: #212529;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgb(0 0 0 / 25%);
  border-radius: 3.20867px;
  min-height: 402px;

  .label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 9.772px;
    line-height: 0px;
    min-width: 264.66px;
    color: #f8f9fa;
  }
  .input-login {
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 13.0293px;
    gap: 8.14px;
    min-width: 264.66px;
    max-width: 329.93px;

    height: 38.5px;

    background: #343b41;

    border: 0.9772px solid #f8f9fa;
    border-radius: 3.20867px;
  }

  .btn-Logar {
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    gap: 10.15px;

    width: 259.9px;
    height: 38.5px;

    background: #1034a6;

    border: 1.2182px solid #1034a6;
    border-radius: 4.06066px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12.8347px;
    line-height: 21px;
    /* identical to box height, or 165% */
    cursor: pointer;
    color: #ffffff;
  }
  .h2-Login {
    width: 39.31px;
    height: 22.46px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14.439px;
    line-height: 22px;

    color: #f8f9fa;
  }
  .span-Register {
    width: 132.72px;
    height: 17.59px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 9.59437px;
    line-height: 18px;

    color: #868e96;
  }
  .p-warning {
    color: #e81123;
    width: 262px;
    font-size: 9.73988px;
    line-height: 0px;
    height: 0px;
    font-size: 14px;
  }

  .span-Voltar {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 28px;

    text-align: center;

    color: #f8f9fa;
  }

  .container-Voltar {
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;
    width: 42px;
    height: 31.95px;
    background: #212529;
    border-radius: 4px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 9.59437px;
    line-height: 23px;
    text-align: center;
    color: #f8f9fa;
  }
  .container-h1-Header {
    display: flex;
    width: 135px;
    height: 46px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .span-information {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 9.62602px;
    line-height: 14px;

    color: #868e96;
  }

  .container-btn-cadastre-se {
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    gap: 10.15px;

    width: 259.9px;
    height: 38.5px;

    background: #868e96;

    border: 1.2182px solid #868e96;
    border-radius: 4px;
  }
  .span-cadastre-se {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12.8347px;
    line-height: 21px;

    color: #f8f9fa;
  }
`;
export const HeaderLogin = styled.header`
  .container-header-Login {
    display: flex;
    width: 80%;
    height: 130px;
    gap: 43px;
    align-items: center;
    padding-top: 10px;
  }

  .h1-Header-Login {
    color: #2ad4fd;
    font-size: 20px;
    width: 116.59px;
    height: 16.9px;
  }
`;
