import CardTrabalhos2 from "@/components/cards/cardtrabalhos";
import CardTrabalhos from "@/components/cards/cardtrabalhos/card";
import Titulo from "@/components/titulo";

export default function Trabalhos(){
    return (
        <div>
            <main>
                    <Titulo
                          title="Trabalhos"
                          description="Na Moove, acreditamos que a essência de uma marca se reflete em seus valores. 
                                      Conheça os pilares que nos guiam na criação de conteúdos autênticos e impactantes."
                       />
                
                <section className="mt-20 mb-20 min-h-[calc(100vh-20rem)] p-4">
                    <div>
               <CardTrabalhos2/>
               </div>
               </section>
            </main>
        </div>
    )
}