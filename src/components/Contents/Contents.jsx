import React from "react";
import "./Contents.scss";
import { FaPager } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import video1 from "./video1.mp4";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Contents() {
  const urls = [
    "/produto/camiseta-branca",
    "/produto/tenis-nike",
    "/produto/jeans-skinny",
    "/produto/jaqueta-couro",
    "/produto/relogio-digital",
    "/produto/oculos-sol",
    "/produto/bolsa-feminina",
    "/produto/mochila-escolar",
    "/produto/calcado-masculino",
    "/produto/camiseta-estampada",
    "/produto/shorts-feminino",
    "/produto/sapato-social",
    "/produto/cueca-boxer",
    "/produto/sutiã-renda",
    "/produto/meia-algodao",
    "/produto/camiseta-lisa",
    "/produto/bone-aba-reta",
    "/produto/chinelo-havaianas",
    "/produto/sandalia-salto",
    "/produto/vestido-verao",
    "/produto/bermuda-masculina",
    "/produto/jaqueta-jeans",
    "/produto/moletom-capuz",
    "/produto/saia-plissada",
    "/produto/macacao-jeans",
    "/produto/regata-fitness",
    "/produto/legging-preta",
    "/produto/blazer-feminino",
    "/produto/camisa-social",
    "/produto/cinto-couro",
    "/produto/relógio-analógico",
    "/produto/colar-prata",
    "/produto/brinco-argola",
    "/produto/pulseira-couro",
    "/produto/anel-ouro",
    "/produto/toalha-banho",
    "/produto/roupao-felpudo",
    "/produto/jogo-lencol",
    "/produto/cortina-sala",
    "/produto/tapete-peludo",
    "/produto/almofada-decorativa",
    "/produto/luminaria-mesa",
    "/produto/copo-vidro",
    "/produto/prato-ceramica",
    "/produto/panela-inox",
    "/produto/fogao-4-bocas",
    "/produto/geladeira-duplex",
    "/produto/microondas-espelhado",
    "/produto/liquidificador-turbo",
    "/produto/ventilador-mesa",
    "/produto/ar-condicionado",
    "/produto/lavadora-roupa",
    "/produto/ferro-passar",
    "/produto/aspirador-po",
    "/produto/maquina-cafe",
    "/produto/airfryer-eletrica",
    "/produto/smart-tv-55",
    "/produto/celular-galaxy",
    "/produto/iphone-14-pro",
    "/produto/notebook-gamer",
    "/produto/tablet-infantil",
    "/produto/monitor-ultrawide",
    "/produto/teclado-mecanico",
    "/produto/mouse-gamer",
    "/produto/headset-bluetooth",
    "/produto/caixa-som",
    "/produto/webcam-fullhd",
    "/produto/roteador-wifi6",
    "/produto/modem-internet",
    "/produto/impressora-wifi",
    "/produto/cadeira-escritorio",
    "/produto/mesa-gamer",
    "/produto/estante-livros",
    "/produto/sofa-retratil",
    "/produto/rack-tv",
    "/produto/cama-casal",
    "/produto/guarda-roupa",
    "/produto/colchao-ortopedico",
    "/produto/travesseiro-nasa",
    "/produto/edredom-king",
    "/produto/cobertor-microfibra",
    "/produto/berco-bebe",
    "/produto/carrinho-passeio",
    "/produto/cadeirinha-carro",
    "/produto/mochila-maternidade",
    "/produto/kit-higiene-bebe",
    "/produto/fralda-p",
    "/produto/mamadeira-anti-colica",
    "/produto/chupeta-silicone",
    "/produto/termometro-digital",
    "/produto/escova-dentes",
    "/produto/kit-cuidados",
    "/produto/shampoo-infantil",
    "/produto/protetor-solar",
    "/produto/creme-corporal",
    "/produto/maquiagem-base",
    "/produto/sombra-paleta",
    "/produto/rimel-preto",
    "/produto/batom-vermelho",
    "/produto/kit-maquiagem",
  ];

  const pages = `<div className="flex-grow-1 d-flex flex-column overflow-hidden pb-4">
      <h4 className="px-4 pt-4 mb-4">Páginas</h4>
      <ul
        className="px-4 d-flex flex-column gap-3 overflow-auto"
        style={{ maxHeight: "100%" }}
      >
        {urls.map((item, key) => (
          <li
            key={key}
            className="d-flex justify-content-between bg-light p-3 rounded-3"
          >
            <div className="d-flex align-items-center gap-3">
              <div className="d-flex fs-5 align-items-center">
                <FaPager />
              </div>
              <span>{item}</span>
            </div>
            <div className="d-flex fs-5 align-items-center text-danger">
              <LuPencil />
            </div>
          </li>
        ))}
      </ul>
    </div>`;

  return (
    // <div className="edit-pages d-flex flex-column overflow-hidden pb-4">
    //   <h4 className="px-4 pt-4 mb-4">
    //     Editar: <span className="fw-normal">/produto/camiseta-branca</span>
    //   </h4>
    //   <div className="px-4">
    //     <Swiper slidesPerView={2}>
    //       <SwiperSlide>
    //         <video src={video1}></video>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <video src={video1}></video>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <video src={video1}></video>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <video src={video1}></video>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <video src={video1}></video>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <video src={video1}></video>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <video src={video1}></video>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <video src={video1}></video>
    //       </SwiperSlide>
    //     </Swiper>
    //   </div>
    // </div>
     <div className="flex-grow-1 d-flex flex-column overflow-hidden pb-4">
       <h4 className="px-4 pt-4 mb-4">Páginas</h4>
       <ul
         className="px-4 d-flex flex-column gap-3 overflow-auto"
         style={{ maxHeight: "100%" }}
       >
         {urls.map((item, key) => (
           <li
             key={key}
             className="d-flex justify-content-between bg-white p-3 rounded-3"
           >
             <div className="d-flex align-items-center gap-3">
               <div className="d-flex fs-5 align-items-center">
                 <FaPager />
               </div>
               <span>{item}</span>
             </div>
             <div className="d-flex fs-5 align-items-center text-danger">
               <LuPencil />
             </div>
           </li>
         ))}
       </ul>
     </div>
  );

  // return (
  //   <></>
  //   // <div className="d-flex flex-column pb-4">
  //   //   <h4 className="px-4 pt-4 mb-4">
  //   //     Editar página:{" "}
  //   //     <span className="fw-normal">/produto/camiseta-branca</span>
  //   //   </h4>
  //   //   <Swiper
  //   //     slidesPerView={3}
  //   //   >
  //   //     <SwiperSlide><video src={video1}></video></SwiperSlide>
  //   //     <SwiperSlide><video src={video1}></video></SwiperSlide>
  //   //     <SwiperSlide><video src={video1}></video></SwiperSlide>
  //   //     <SwiperSlide><video src={video1}></video></SwiperSlide>
  //   //     <SwiperSlide><video src={video1}></video></SwiperSlide>
  //   //     <SwiperSlide><video src={video1}></video></SwiperSlide>
  //   //     <SwiperSlide><video src={video1}></video></SwiperSlide>
  //   //     <SwiperSlide><video src={video1}></video></SwiperSlide>
  //   //   </Swiper>
  //   // </div>
  // );
}
