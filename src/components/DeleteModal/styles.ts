import styled from "styled-components";

export const ContainerModal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
 
  background: rgba(18, 18, 20, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    color: #000;
    width: 60%;
    height: 60%;
    border-radius: 20px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    left: 11px;
    position: absolute;
    bottom: 80px;

    .modal-container{  
      display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: flex-start;
    -webkit-box-align: flex-start;
    -ms-flex-align: flex-start;
    -webkit-align-items: flex-start;
    -webkit-box-align: flex-start;
    -ms-flex-align: flex-start;
    align-items: flex-start;
    gap: 18.65px;
    overflow-y: scroll;
    background: #212529;
    box-shadow: 0px 3.20867px 32.0867px -8.02168pxrgba(0,0,0,0.25);
    border-radius: 3.20867px;
    height: 392px;
    width: 265px;
    position: absolute;
    left: 20px;
    bottom: 114px;

    .p-warning {
      color: #e81123;
      width: 262px;
      font-size: 9.73988px;
      line-height: 0px;
      height: 0px;
      font-size: 14px;
    }

    .close{
      background-color: tranparent;
      borde: none;
      outline: none;
      width: 32px;
      height: 32px;
      right: calc(-100% + 64px);
      top: 16px;
      cursor: pointer;
      display:flex;
      position: relative;
      align-items: center;
     &:before,  
     &after: after

     {
      content: '';
      position: absolute;
      width: 2.5px;
      height: 24px;
      background-color: #000;
     }
     
     &:before{
      transform: rotate(45deg);
      }
     &:after{
      transform: rotate(-45deg);
         }
 
       }
    }
  }
}
`;

export const ContainerForm = styled.form`


  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 296px;
  left: 12px;
  top: 148.83px;
  overflow-y: scroll;
  background: #212529;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgb(0 0 0 / 25%);
  border-radius: 3.20867px;
  height: 392px px;
  width: 265px;
  height: 392px px;
  width: 265px;
  height: 392px;
  gap: 25px;

.div-modal {
  width: 100%;
  height: 37.11px;
  display: flex;
  flex-direction: row;
  padding: 9.62602px 18.0434px;
  gap: 95.02px;
  background: #343b41;
  border-radius: 3.20867px 14.20867px 0px 0px;
  align-items: center;
  justify-content: center;

.h2-modal {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 11.2304px;
  line-height: 19px;

  color: #f8f9fa;
}
.x-modal {
  color: #868e96;
}


}



.label {
  width: 28px;
  height: 0px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 9.772px;
  line-height: 0px;

  color: #f8f9fa;
}

.input {
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 13.0293px;
  gap: 8.14px;

  width: 264.66px;
  height: 38.5px;

  background: #343b41;

  border: 0.9772px solid #f8f9fa;
  border-radius: 3.20867px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13.0293px;
  line-height: 21px;

  color: #f8f9fa;
}







.container-update-delete {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 15px;




.btn-update {
  box-sizing: border-box;

  align-items: center;
  padding: 0px 22.3336px;
  gap: 10.15px;

  width: 60%;
  height: 38.37px;

  background: #59323f;

  border: 1.2182px solid #59323f;
  border-radius: 4px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12.7913px;
  line-height: 21px;
  color: #ffffff;
}

.btn-delete {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 22.3336px;
  gap: 10.15px;
  width: 78.35px;
  height: 38.37px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12.7913px;
  line-height: 21px;
  color: #ffffff;
  background: #868e96;
  border: 1.2182px solid #868e96;
  border-radius: 4px;
}


}



}
`;
