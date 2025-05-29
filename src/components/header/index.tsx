
import Link from "next/link";
import { Poppins } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import { Container } from "../container";

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
  })

  const montserrat = Montserrat({
    weight: '900',
    subsets: ['latin-ext'],
  })

export default function Header(){

    return (
        <header className="w-full flex items-center px-2 py-4 bg-black h-20 shadow-sm">
            <Container>
            <nav className="w-full flex items-center justify-between max-w-7x1 mx-auto">
                <Link href="/">
                   <h1 className={`${montserrat.className} font-extrabold text-2xl pl-1 hover:tracking-widest duration-300 text-white`} >
                      MOOVE
                   </h1>
                </Link>
                <ul className={`${poppins.className} flex items-center gap-4`}>
                    <li>
                        <Link href="/" className="text-[#A3A3A3] hover:text-yellow-300 transition-colors duration-300">
                            Inicio 
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-[#A3A3A3] hover:text-yellow-300 transition-colors duration-300">
                            sobre nós
                        </Link>
                    </li>
                    <li>
                        <Link href="/trabalhos" className="text-[#A3A3A3] hover:text-yellow-300 transition-colors duration-300">
                            Trabalhos
                        </Link>
                    </li>
                    </ul>
            </nav>
            </Container>
        </header>
    )
}