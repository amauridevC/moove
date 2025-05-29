import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  import { Poppins, Montserrat } from 'next/font/google'
  
interface CardTesteProps {
    title: string;
    description: string;
}

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
  })

 const montserrat = Montserrat({
      weight: '700',
      subsets: ['latin-ext'],
    })

export default function CardTeste(
    { title, description }: CardTesteProps
) {
    return (
        <div>
            <Accordion type="single" collapsible className="rounded-lg bg-white border  shadow p-4 ">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className={`${montserrat.className} text-lg`}>{title}</AccordionTrigger>
                        <AccordionContent className={`${poppins.className}`}>
                        {description}
                        </AccordionContent>
                    </AccordionItem>
            </Accordion>
        </div>
    )
}