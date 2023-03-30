"use client";
import { Center, Html } from "@react-three/drei";
import React from "react";

function Cargador() {
  return (
    <Center>
      <Html>
        <div id="contenedor">
          <div class="contenedor-loader">
            <div class="rueda"></div>
          </div>
          <div class="cargando">Cargando...</div>
        </div>
      </Html>
    </Center>
  );
}

export default Cargador;
