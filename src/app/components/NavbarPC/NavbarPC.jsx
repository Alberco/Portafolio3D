import Image from "next/image";
import logo from "../../../../public/logo2.png";
import { HomeIcon, UserIcon, ProyectIcon } from "../Icons";

function NavbarPC() {
  return (
    <nav className="fixed top-0 z-50 inset-x-0 w-full bg-gray-900 border-b-2 border-white/10">
      <div className="container mx-auto flex items-center justify-between py-6">
        <ul className="mx-4 text-white flex gap-1 lg:gap-3 font-bold text-md lg:text-xl items-center">
          <li>
            <Image
              src={logo}
              width={20}
              height={20}
              alt="logo de portafolio personal"
            />
          </li>
          <li>Hyde</li>
        </ul>
        <ul className="text-white lg:flex gap-4 font-bold text-sm lg:text-lg items-center hidden">
          <li className="flex justify-center items-center gap-1">
            <span>
              <HomeIcon />
            </span>
            Inicio
          </li>
          <li className="flex justify-center items-center gap-1">
            <span>
              <UserIcon />
            </span>
            Sobre mi
          </li>
          <li className="flex justify-center items-center gap-1">
            <span>
              <ProyectIcon />
            </span>
            Proyectos
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarPC;
