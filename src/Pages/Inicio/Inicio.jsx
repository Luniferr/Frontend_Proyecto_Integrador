import React from "react";
import { SectionCards } from "../../Component/SectionCards/SectionCards.jsx";
import { Home } from "../../Component/Home/Home.jsx";
import { Mapa } from "../../Component/Mapa/Mapa.jsx";

function Inicio() {
  return (
    <>
      <Home />
      <SectionCards header="Nuestras Historias" />
      <Mapa />
    </>
  );
}

export { Inicio };
