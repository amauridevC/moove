import { LucideIcon } from 'lucide-react';
import { Poppins, Montserrat } from 'next/font/google'



const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
  })

 const montserrat = Montserrat({
      weight: '700',
      subsets: ['latin-ext'],
    })


interface CardObjetivosProps {
  Icone?: LucideIcon; 
  title?: string;
  footer?: string;
  bgColor?: string; 
}

export function CardObjetivos({ Icone, footer, bgColor, title }: CardObjetivosProps) {
  const isHexColor = bgColor?.startsWith("#"); 

  return (
    <div
      className={`rounded-lg border flex flex-col justify-center p-8 items-center ${isHexColor ? '' : bgColor}`}
      style={isHexColor ? { backgroundColor: bgColor } : {}}
    >
      {Icone && (
            <Icone size={100} className="stroke-current" style={{ strokeWidth: 0.9 }} />
    )}
    <p className={`${montserrat.className} text-2xl text-center mb-10`}>{title}</p>
      <p className={`${poppins.className} text-white`}>{footer}</p>
    </div>
  );
}
