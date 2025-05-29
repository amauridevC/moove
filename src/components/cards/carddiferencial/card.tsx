import { Lightbulb, Star, Send,NotebookPen } from 'lucide-react';
import { Poppins } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import { LucideIcon } from 'lucide-react';

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
  })

 const montserrat = Montserrat({
      weight: '800',
      subsets: ['latin-ext'],
    })



interface CardProps {
    Icone: LucideIcon; 
    title?: string;
    descricao?: string;
    bgColor?: string;
}

export default function CardDiferencia2(
    { Icone, title, descricao, bgColor }: CardProps
) {
    const isHexColor = bgColor?.startsWith("#");  
    
    return (
                <div className="flex flex-col hover:scale-105 transition-transform duration-500 ease-in-out rounded-lg shadow-lg  hover:bg-amber-200 ">
                    <div className={`flex flex-col bg-yellow-300 h-15 rounded-lg p-4 shadow-lg ${isHexColor ? '' : bgColor} `} style={isHexColor ? { backgroundColor: bgColor } : {}}>
                        <h3 className="text-xl font-semibold mb-2 flex justify-center">  <Icone size={35} className="text-black " /> </h3>
                    </div>
                    <div className="p-6 rounded-lg shadow-lg h-full">
                        <h3 className={` ${montserrat.className} text-base font-semibold mb-2 text-center font-p`}>{title}</h3>
                        <p className={`${poppins.className} text-gray-700`}>{descricao}</p>
                    </div>
                </div>
    )
}