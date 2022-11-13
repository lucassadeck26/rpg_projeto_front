import styled from "styled-components";

export const HeaderHome = styled.header`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .container-header {
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 146px;
  }
  .h1-header {
    color: #2ad4fd;
    font-size: 20px;
  }
  .btn-logout {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;
    width: 55.49px;
    height: 32px;
    background: #212529;
    border-radius: 4px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 28px;
    text-align: center;
    color: #f8f9fa;
  }
`;

export const ContainerInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  padding: 12px;
  gap: 10px;
  text-align: center;
  width: 100%;
  height: 131px;
  background: #121214;
  .span-info {
    width: 151px;
    height: 28px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #f8f9fa;
  }

  .span-info-module {
    width: 241px;
    height: 22px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #868e96;
  }

  @media screen and (min-width: 800px) {
    flex-direction: row;

    justify-content: space-around;
  }
`;

export const AddTechs = styled.section`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 57px;

  .img-btn {
    cursor: pointer;
  }
`;
// a ul que dá para servir como card

export const ContainerTechs = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px 19px;
  gap: 16px;
  width: 1200px;
  heigth: 1500px;
  min-height: 416.37px;
  max-height: 4000px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .container_alert {
    background: #d10012;
    width: 120px;
    heigth: 60px;
  }

  .container-card {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;

    width: 320px;

    height: 600px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    gap: 20px;
    border: solid white 2px;
    text-align: center;
    font-size: 14px;
    font-family: inherit;

    .container-cart-img {
      width: 100%;
      height: 30%;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      gap: 20px;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
    }

    .cart-img {
      width: 50%;
    }
  }

  .container_btn_compras {
    display: flex;
    justify-content: center;
  }
  .btn-compras {
    background-color: #2ad4fd;
    color: gray;
    font-size: 20px;
    width: 100px;
    height: 55px;
  }

  .li-techs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12.182px;
    gap: 12.18px;
    width: 279px;
    height: 48.73px;
    cursor: pointer;

    background: #121214;
    border-radius: 4.06066px;
  }
  .span-tech {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14.2123px;
    line-height: 24px;

    color: #f8f9fa;
  }
  .span-tech-information {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 22px;
    text-align: right;
    color: #868e96;
  }
`;

export const Lines = styled.div`
  width: 100%;
  height: 1px;
  background: #212529;
`;

export const AddModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.45);
  display: flex;

    .container{
        position: relative
        padding: 3rem;
        width: 100%;
        max-width: 600px;
        background: #ffffff;
        .close{
            cursor: pointer:
            position: absolute;
            top: 2rem;
            right: 2rem;
            background: transparent;
            border: none;
            opacity: .5;
            transition: .4s;
            &:hover{
                opacity: 1;

            }

        }
    }
`;
