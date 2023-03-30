"use client";
import { Center, Html, Text3D } from "@react-three/drei";
import React from "react";
import { GitHub, LinkedIn, WhatsApp } from "../Icons";

function Computer() {
  return (
    <>
      {/*       <Center position={[-2,2,-1]}>
        <Html>
              <p className="text-white text-xl lg:text-4xl font-extrabold text-start leading-relaxed w-[400px]">
                Hola,
                Soy Guillermo Alberco Capistrano,
                Web Developer
              </p>
        </Html>
      </Center> */}
      <Center position={[0, 0, 0]}>
        <Center position={[0.2, 4, -0.5]} rotation={[0, 0, 0]}>
          <Text3D
            curveSegments={32}
            bevelEnabled
            bevelSize={0.04}
            bevelThickness={0.1}
            height={0.5}
            lineHeight={0.8}
            letterSpacing={-0.06}
            size={0.5}
            font="/Roboto Slab_Bold.json"
          >
            {`Hola,\nsoy Guilermo Alberco.C`}
            <meshNormalMaterial />
          </Text3D>
          <Html position={[0.1, -1.2, -0.5]}>
            <p className="text-white text-xl lg:text-4xl font-extrabold text-start leading-relaxed w-[700px]">
              Soy un desarrollador web, me considero una persona con iniciativa
              a superar problemas,ademas me gusta aprender nuevas tecnologias y
              llevar mis proyectos al siguiente nivel.
            </p>
            <div className="w-[120px] my-2 h-auto flex gap-3 fill-white">
              <GitHub />
              <LinkedIn />
              <WhatsApp />
            </div>
            <button className="border-2 text-2xl py-2 px-4 text-white mt-2 rounded-md hover:bg-black hover:text-white transition-all duration-300">
              Decargar CV
            </button>
          </Html>
        </Center>
        <Old scale={1} />
      </Center>
    </>
  );
}

export default Computer;
