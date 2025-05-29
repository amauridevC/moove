import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { AlarmClock } from 'lucide-react';
  import { Poppins } from 'next/font/google'
  import { LucideIcon } from 'lucide-react';


const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
  })

interface CardTesteProps {
    Icone: LucideIcon; 
    title: string;
    descricao?: string;
    bgColor?: string;
}


export function CardFazemos2(
    { Icone,title, descricao, bgColor }: CardTesteProps
) {
    const isHexColor = bgColor?.startsWith("#");  
    return (
        <Card className={`${poppins.className} h-full`}>
            <CardHeader>
                <CardTitle className="flex ">
                    <div className={`rounded-lg border flex flex-col justify-center p-3 items-center ${isHexColor ? '' : bgColor}`}
                         style={isHexColor ? { backgroundColor: bgColor } : {}}>
                          <Icone className="text-white " />
                    </div>
                </CardTitle>
                <CardDescription className="font-bold text-black text-base animate-bounce">{title}</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm">
                    {descricao || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                </p>
            </CardContent>
          
        </Card>

    )
}