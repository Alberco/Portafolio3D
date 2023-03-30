import Image from "next/image";
import React from "react";
import {
  JavaScript,
  Python,
  Ruby,
  Vuedotjs,
  Reactjs,
  Django,
  Flask,
  FastApi,
  RubyonRails,
  Typescript,
  PostgreSQL,
  Nextjs,
  Tailwind,
  StyleComponent,
  Vercel,
  Netlify,
} from "../Icons";
import nft from "../../../../public/nft.webp";
import valorant from "../../../../public/valorant.webp";
import epic from "../../../../public/epic.webp";

function Proyectos() {
  return (
    <section className="container mx-auto grid grid-cols-1 lg:grid-cols-3 grid-rows-1 lg:grid-rows-2 gap-10 lg:gap-20 py-10 z-50">
      <article className="bg-white/5 backdrop-blur-sm rounded-md order-1 lg:order-none">
        <header>
          <p className="text-xl lg:text-3xl text-white font-extrabold px-4 pt-6">
            NFT web
          </p>
        </header>
        <div className="p-4">
          <Image src={nft} alt="nft" className="rounded-lg" />
        </div>
        <footer className="gap-4 fill-white">
          <div className="flex gap-2 mx-6 my-2">
            <span className="w-6 lg:w-8 h-auto">
              <Reactjs />
            </span>
            <span className="w-6 lg:w-8 h-auto">
              <Tailwind />
            </span>
            <span className="w-6 lg:w-8 h-auto">
              <Nextjs />
            </span>
            <span className="w-6 lg:w-8 h-auto">
              <Vercel />
            </span>
          </div>
          <div className="flex items-center justify-center gap-4 py-8">
            <button
              className="p-2 bg-blue-400/10 text-white border-2 border-transparent font-bold px-6 rounded-sm 
                    hover:bg-gray-900/40 hover:border-2 hover:border-white/80  transition-all duration-300"
            >
              Demo
            </button>
            <button
              className="p-2 bg-blue-400/10 text-white border-2 border-transparent font-bold px-6 rounded-sm 
                    hover:bg-gray-900/40 hover:border-2 hover:border-white/80  transition-all duration-300"
            >
              Github
            </button>
          </div>
        </footer>
      </article>
      <article className="bg-white/5 backdrop-blur-sm rounded-md lg:order-none order-2">
        <header>
          <p className="text-xl lg:text-3xl text-white font-extrabold px-4 pt-6">
            Valorant web
          </p>
        </header>
        <div className="p-4">
          <Image src={valorant} alt="nft" className="rounded-lg" />
        </div>
        <footer className="gap-4 fill-white">
          <div className="flex gap-2 mx-6 my-2">
            <span className="w-8 h-auto">
              <Reactjs />
            </span>
            <span className="w-6 lg:w-8 h-auto">
              <StyleComponent />
            </span>
            <span className="w-6 lg:w-8 h-auto">
              <Typescript />
            </span>
            <span className="w-6 lg:w-8 h-auto">
              <Netlify />
            </span>
          </div>
          <div className="flex items-center justify-center gap-4 py-8">
            <button
              className="p-2 bg-blue-400/10 text-white border-2 border-transparent font-bold px-6 rounded-sm 
                    hover:bg-gray-900/40 hover:border-2 hover:border-white/80  transition-all duration-300
                    "
            >
              Demo
            </button>
            <button
              className="p-2 bg-blue-400/10 text-white border-2 border-transparent font-bold px-6 rounded-sm 
                    hover:bg-gray-900/40 hover:border-2 hover:border-white/80  transition-all duration-300"
            >
              Github
            </button>
          </div>
        </footer>
      </article>
      <article className=" row-auto lg:row-span-2 rounded-lg backdrop-blur-sm gap-4 px-8 lg:px-14 py-4 pb-8 bg-white/5 lg:order-none order-4">
        <p className="text-white text-md font-medium lg:text-xl my-3">
          Lenguajes de programacion y Framework
        </p>
        <div className="flex flex-col gap-4 h-auto">
          <article className="flex items-center gap-3 shadow-xl py-3 px-2 rounded-lg  backdrop-blur-sm  bg-blue-200/10 group">
            <span className="text-white">1</span>
            <span className="w-6 lg:w-8 fill-white group-hover:fill-yellow-300 duration-300">
              <JavaScript />
            </span>
            <p className="text-white font-bold text-sm lg:text-md">
              Javascript
            </p>
          </article>
          <article className="flex items-center gap-3 shadow-xl py-3 px-2 rounded-lg  backdrop-blur-sm  bg-blue-200/10 group">
            <span className="text-white">2</span>
            <span className="w-6 lg:w-8 fill-white group-hover:fill-blue-600 duration-300">
              <Typescript />
            </span>
            <p className="text-white font-bold text-sm lg:text-md">
              Typescript
            </p>
          </article>
          <article className="flex items-center gap-3 shadow-xl py-3 px-2 rounded-lg  backdrop-blur-sm  bg-blue-200/10 group">
            <span className="text-white">3</span>
            <span className="w-6 lg:w-8 fill-white group-hover:fill-blue-300 duration-300 ">
              <Python />
            </span>
            <p className="text-white font-bold text-sm lg:text-md">Python</p>
          </article>
          <article className="flex items-center gap-3 shadow-xl py-3 px-2 rounded-lg  backdrop-blur-sm  bg-blue-200/10 group">
            <span className="text-white">4</span>
            <span className="w-6 lg:w-8 fill-white group-hover:fill-red-600 duration-300">
              <Ruby />
            </span>
            <p className="text-white font-bold text-sm lg:text-md">Ruby</p>
          </article>
          <article className="flex items-center gap-3 shadow-xl py-3 px-2 rounded-lg  backdrop-blur-sm  bg-blue-200/10 group">
            <span className="text-white">5</span>
            <span className="w-6 lg:w-8 fill-white group-hover:fill-cyan-400 duration-300">
              <Reactjs />
            </span>
            <p className="text-white font-bold text-sm lg:text-md">React</p>
          </article>
          <article className="flex items-center gap-3 shadow-xl py-3 px-2 rounded-lg  backdrop-blur-sm  bg-blue-200/10 group">
            <span className="text-white">6</span>
            <span className="w-6 lg:w-8 fill-white group-hover:fill-black duration-300">
              <Nextjs />
            </span>
            <p className="text-white font-bold text-sm lg:text-md">Next</p>
          </article>
          <article className="flex items-center gap-3 shadow-xl py-3 px-2 rounded-lg  backdrop-blur-sm  bg-blue-200/10 group">
            <span className="text-white">7</span>
            <span className="w-6 lg:w-8 fill-white group-hover:fill-green-400 duration-300">
              <Django />
            </span>
            <p className="text-white font-bold text-sm lg:text-md">Django</p>
          </article>
          <article className="flex items-center gap-3 shadow-xl py-3 px-2 rounded-lg  backdrop-blur-sm  bg-blue-200/10 group">
            <span className="text-white">8</span>
            <span className="w-6 lg:w-8 fill-white group-hover:fill-black duration-300">
              <Flask />
            </span>
            <p className="text-white font-bold text-sm lg:text-md">Flask</p>
          </article>
          <article className="flex items-center gap-3 shadow-xl py-3 px-2 rounded-lg  backdrop-blur-sm  bg-blue-200/10 group">
            <span className="text-white">9</span>
            <span className="w-6 lg:w-8 fill-white group-hover:fill-cyan-600 duration-300">
              <FastApi />
            </span>
            <p className="text-white font-bold text-sm lg:text-md">FastApi</p>
          </article>
          <article className="flex items-center gap-3 shadow-xl py-3 px-2 rounded-lg  backdrop-blur-sm  bg-blue-200/10 group">
            <span className="text-white">10</span>
            <span className="w-6 lg:w-8 fill-white group-hover:fill-red-500 duration-300">
              <RubyonRails />
            </span>
            <p className="text-white font-bold text-sm lg:text-md">
              Ruby on Rails{" "}
            </p>
          </article>
          <article className="flex items-center gap-3 shadow-xl py-3 px-2 rounded-lg  backdrop-blur-sm  bg-blue-200/10 group">
            <span className="text-white">11</span>
            <span className="w-6 lg:w-8 fill-white group-hover:fill-blue-400 duration-300">
              <PostgreSQL />
            </span>
            <p className="text-white font-bold text-sm lg:text-md">
              PostgreSQL
            </p>
          </article>
        </div>
      </article>
      <article className="bg-white/5 backdrop-blur-sm py-8 col-auto lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 rounded-md px-4  lg:order-none order-3">
        <header className="flex flex-col justify-center order-2 lg:order-none ">
          <p className="text-xl lg:text-3xl text-white font-extrabold px-4 ">
            Valorant web
          </p>
          <p className="text-md lg:text-xl text-white font-normal px-4 pt-4">
            Es una replica de la store de epic game hecho con tailwind css y
            javascript.Es una replica de la store de epic game hecho con
            tailwind css y javascript.
          </p>
          <div className="flex gap-2 mx-6 my-4 fill-white justify-start items-center">
            <span className="w-8 h-auto">
              <Reactjs />
            </span>
            <span className="w-6 lg:w-8 h-auto">
              <StyleComponent />
            </span>
            <span className="w-6 lg:w-8 h-auto">
              <Typescript />
            </span>
            <span className="w-6 lg:w-8 h-auto">
              <Netlify />
            </span>
          </div>
          <div className="flex items-center justify-center gap-4 my-2">
            <button
              className="p-2 bg-blue-400/10 text-white border-2 border-transparent font-bold px-6 rounded-sm 
                    hover:bg-gray-900/40 hover:border-2 hover:border-white/80  transition-all duration-300"
            >
              Demo
            </button>
            <button
              className="p-2 bg-blue-400/10 text-white border-2 border-transparent font-bold px-6 rounded-sm 
                    hover:bg-gray-900/40 hover:border-2 hover:border-white/80  transition-all duration-300"
            >
              Github
            </button>
          </div>
        </header>
        <div className="p-4 h-auto flex justify-center items-center order-1 lg:order-none">
          <Image src={epic} alt="nft" className="rounded-lg" />
        </div>
      </article>
    </section>
  );
}

export default Proyectos;
