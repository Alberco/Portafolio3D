import Image from "next/image";
import hero from "../../../../public/hero3.jpg";
import localFont from "next/font/local";

const local = localFont({
  src: "../../../../public/font2.woff2",
  display: "swap",
});

function About() {
  return (
    <section
      className={`relative bg-gray-900 z-10 py-20  h-full lg:min-h-screen flex justify-center`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto place-content-center px-8">
        <article className="flex items-center py-10 justify-center backdrop-blur-sm bg-white/5 rounded-sm shadow-2xl">
          <div className="p-1 lg:p-4">
            <p className="text-white text-xl lg:text-4xl ml-8 pl-3 border-l-4 font-extrabold">
              Sobre mi
            </p>
            <p className="text-white text-md lg:text-2xl mt-4 px-8">
              Soy una persona apasionada por la tecnología y el mundo digital.
              Disfruto en programar y crear soluciones innovadoras a través del
              código.
            </p>
          </div>
        </article>
        <article className="flex justify-center z-40 relative py-0 lg:py-20">
          {/*           <Image src={fondosecun} alt="fondo secundario" className='absolute rotate-180 inset-0 z-40' /> */}
          <Image src={hero} alt="personaje principal" className="z-50  " />
        </article>
      </div>
    </section>
  );
}

export default About;
