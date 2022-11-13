import add from "./../../components/img/Button Plus.png";
import { useNavigate } from "react-router-dom";
import {
  HeaderHome,
  ContainerInfo,
  AddTechs,
  ContainerTechs,
  Lines,
  ImagensTechs,
} from "./styles";
import { useContext, useEffect, useState } from "react";
import { IProdutos, UserContext } from "../../components/contexts/UserContext";
import AddModal from "../../components/AddModal";
import { ToastContext } from "../../components/contexts/ToastContext";
import DeleteModal from "../../components/DeleteModal";
import { TechContext } from "../../components/contexts/ TechProvider";
import api from "../../services/api";

function Home() {
  const navigate = useNavigate();

  const { user, setUser, produtos, setProdutos } = useContext(UserContext);

  const {
    isModalAddVisible,
    setIsModalAddVisible,
    isModalDeleteVisible,
    setIsModalDeleteVisible,
  } = useContext(UserContext);
  const { SetAddIDTECH } = useContext(TechContext);

  const Logout = () => {
    window.localStorage.clear();
    setUser(undefined);
    navigate("/login");
  };

  useEffect(() => {
    api
      .get("/inimigos")
      .then((res) => {
        return setProdutos(res.data);
      })
      .catch((error) => {
        console.log(`deu erro do tipo ${error}`);
      });
  }, []);

  const { addToastSucess } = useContext(ToastContext);

  useEffect(() => {
    addToastSucess({
      title: "Conta criada com sucesso!",
      description: "Funcionando muito bem!",
    });
  }, []);

  return (
    <>
      <HeaderHome className="container-header-Home">
        <div className="container-header">
          <h1 className="h1-header"> MangaKai</h1>
          <button className="btn-logout" onClick={() => Logout()}>
            Sair
          </button>
        </div>
      </HeaderHome>
      <Lines />

      <ContainerInfo>
        <span className="span-info"> Olá, {user?.name} </span>
        <span className="span-info"> email: {user?.email} </span>
        <span className="span-info"> telefone: {user?.telefone} </span>

        <span className="span-info-module"> Seja bem-vindo</span>
      </ContainerInfo>
      <Lines />
      <AddTechs>
        <span>Mangás</span>
      </AddTechs>

      <div>
        {isModalAddVisible ? (
          <AddModal
            onClose={() => setIsModalAddVisible(false)}
            children={undefined}
            id={""}
          ></AddModal>
        ) : null}
      </div>

      <div>
        {isModalDeleteVisible ? (
          <DeleteModal
            onClose={() => setIsModalDeleteVisible(false)}
            children={undefined}
            id={""}
          ></DeleteModal>
        ) : null}
      </div>

      <ContainerTechs>
        {produtos === undefined ? (
          <></>
        ) : (
          produtos?.map((produto, index) => {
            if (produto.isPromo === true) {
              const preco_Promo = produto.preco - produto.preco * 0.1;
              const preco_Promocional = preco_Promo.toFixed(2);
              return (
                <li className="container-card">
                  <div className="container_alert">
                    <span>Oferta de 10%</span>
                  </div>
                  <div className="container-cart-img">
                    <img className="cart-img" src={produto.imagem} alt="" />
                  </div>
                  <h2>{produto.descricao}</h2>
                  <span>Número de paǵinas:{produto.numero_paginas}</span>
                  <span>Preço: {produto.preco}</span>
                  <span>Preço Promocional: {preco_Promocional}</span>
                  <div className="container_btn_compras">
                    <button className="btn-compras">Comprar</button>
                  </div>
                </li>
              );
            }

            return (
              <li className="container-card">
                <div className="container-cart-img">
                  <img className="cart-img" src={produto.imagem} alt="" />
                </div>
                <h2>{produto.descricao}</h2>
                <span>Número de paǵinas:{produto.numero_paginas}</span>
                <span>Preço: {produto.preco}</span>
                <div className="container_btn_compras">
                  <button className="btn-compras">Comprar</button>
                </div>
              </li>
            );
          })
        )}
      </ContainerTechs>
    </>
  );
}
export default Home;
