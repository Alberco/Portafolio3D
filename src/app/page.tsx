import { Inter } from 'next/font/google'
import { Hero, Proyectos, About } from './components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <div className='bg-gray-900 px-8 pb-4 lg:pb-20 z-50'>
        <p className='container mx-auto border-l-4 border-white text-xl lg:text-4xl text-white font-bold pl-2 '>Proyectos Recientes</p>
        <Proyectos />
      </div>
    </main>
  )
}
