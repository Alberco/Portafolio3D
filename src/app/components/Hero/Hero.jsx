"use client";
import { GitHub, LinkedIn, WhatsApp } from "../Icons";
import { Heebo } from "next/font/google";
import { Canvas } from "@react-three/fiber";
import Robot from "../Robot";
import { Center, OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";
import localFont from "next/font/local";
import Cargador from "../Cargador/Cargador";

const local = localFont({
  src: "../../../../public/font2.woff2",
  display: "swap",
});

const heebo = Heebo({
  subsets: ["latin"],
  weight: "400",
});

function Hero() {
  return (
    <section
      className={`${heebo.className} relative flex justify-center items-center bg-gray-900 z-40 min-h-screen `}
    >
      <article className="container mx-auto flex gap-10 lg:gap-0 flex-wrap-reverse lg:flex-wrap justify-center items-center z-50 w-full mt-20 lg:mt-20">
        <div className="basis-full lg:basis-1/2 mx-8 lg:mx-0">
          <p className="text-white text-xl lg:text-7xl font-extrabold text-start  ">
            Hola,
            <span className="block">Soy Guillermo Alberco Capistrano,</span>
            Web Developer
          </p>
          <p className="text-white text-md  lg:text-2xl my-4 ">
            Soy un desarrollador web, me considero una persona con iniciativa a
            superar problemas,ademas me gusta aprender nuevas tecnologias y
            llevar mis proyectos al siguiente nivel.
          </p>
          <div className="w-[140px] my-6 h-auto flex gap-4 fill-white">
            <GitHub />
            <LinkedIn />
            <WhatsApp />
          </div>
          <button className="border-2 border-white/20 text-xl py-2 px-4 text-white flex justify-center items-center hover:bg-gray-800/80 hover:text-white transition-all duration-300">
            Descargar CV
          </button>
        </div>
        <div className="basis-1/2 inset-0 h-[300px] lg:h-screen flex justify-center items-center">
          <Canvas position={[0, -8, 0]}>
            <Suspense fallback={<Cargador />}>
              <Center position={[0, -2, 0]}>
                <Robot scale={4} />
              </Center>
            </Suspense>
            <OrbitControls
              autoRotate={true}
              autoRotateSpeed={0.5}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
            />
            <ambientLight intensity={0.8} />
            <directionalLight position={[10, 10, 10]} />
          </Canvas>
        </div>
      </article>
    </section>
  );
}

export default Hero;
