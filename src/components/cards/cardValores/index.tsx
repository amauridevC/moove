import CardTeste from "./card";
import Image from "next/image";

export default function CardValores2() {
    return (

        <div>
            <div className="flex flex-col w-full sm:flex-row gap-10">
                <div className="flex flex-col justify-between sm:w-1/2 space-y-3">
                   <CardTeste 
                    title="Missão"
                    description="Transformar ideias em conteúdos criativos e estratégicos, ajudando marcas a se comunicarem com autenticidade nas redes sociais."
                   />
                    <CardTeste 
                    title="Visão"
                    description="Ser referência em social media criativo para marcas construindo presenças digitais que conectam e geram valor."
                   />
                    <CardTeste 
                    title="Valores"
                    description="Criatividade, autenticidade, estratégia, parceria e evolução constante."
                   />
                  
                </div>
                <div>
                     <Image
                            src="/amigas.jpg"
                            alt="Banner Image"
                            width={800}
                            height={300}
                            className="w-full object-cover rounded-lg h-full"
                            />
                </div>
            </div>
        </div>

    )
}