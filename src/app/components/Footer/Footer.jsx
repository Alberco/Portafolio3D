import { GitHub, LinkedIn, WhatsApp } from "../Icons";

function Footer() {
  return (
    <footer className="bg-gray-900 border-t-2 border-white/10">
      <div className="container mx-auto grid gap-4 lg:gap-0 grid-cols-1 lg:grid-cols-3 bg-gray-900 place-content-center py-8">
        <ul className="flex text-white justify-center lg:justify-start items-center gap-2">
          <li>Logo</li>
          <li>Guillermo Alberco.C</li>
        </ul>
        <ul className="flex gap-4 text-white font-bold  items-center justify-center ">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Sobre mí</a>
          </li>
          <li>
            <a href="#">Proyectos</a>
          </li>
        </ul>
        <ul className="flex gap-4 justify-center lg:justify-end items-center w-auto fill-white">
          <li className="w-6">
            <GitHub />
          </li>
          <li className="w-6">
            <LinkedIn />
          </li>
          <li className="w-6">
            <WhatsApp />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
