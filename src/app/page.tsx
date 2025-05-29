import { Container } from "@/components/container";
import Image from "next/image";
import { Poppins, Montserrat } from 'next/font/google'
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CardObjetivos } from "@/components/cards/cardObjetivos";
import { Lightbulb, Star, Send,NotebookPen } from 'lucide-react';
import { CardFazemos } from "@/components/cards/cardfazemos";
import Titulo from "@/components/titulo";
import CardDiferencial from "@/components/cards/carddiferencial";
import CardDiferencia2 from "@/components/cards/carddiferencial/card";
import Comentario from "@/components/comentario";
import CardValores2 from "@/components/cards/cardValores/index";
import CardContato2 from "@/components/cards/cardcontato/card";



const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
  })

 const montserrat = Montserrat({
      weight: '900',
      subsets: ['latin-ext'],
    })

export default function Home() {
  return (
    <div >
      <main>
       <section className="flex w-full sm:h-115">
        <Image
          src="/banner.jpg"
          alt="Hero Image"
          width={1000}
          height={600}
          className="w-full h-full flex object-cover rounded-b-[25px] sm:rounded-b-[40px]"
        />
       </section>
       <section className="mt-20">
         <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2  w-full gap-6 sm:p-17 p-4 bg-[#FAAEBD] rounded-lg">
              <div className="">
                <Image
                  src="/gemeas.JPG"
                  alt="gemeas"
                  width={800}
                  height={300}
                  className=" w-50 sm:w-full object-cover rounded-lg h-50 sm:h-100 "
                />
              </div>
           
               <div className="flex flex-col justify-between ">
                <div className="flex flex-">
                 <p className={`${montserrat.className} text-2xl sm:text-4xl font-bold`}>sobre nós  </p>
                      <Image
                      src="/estrela.webp"
                      alt="Banner Image"
                      width={800}
                      height={300}
                      className="w-10 object-cover rounded-lg animate-spin ml-2"
                      style={{ animationDuration: '4s' }} 
                    />
                
                 </div>

                   <p className={`${poppins.className} text- sm:text-xs  lg:text-base xl:text-xl `}>
                   Somos a <span className={`${montserrat.className} hover:tracking-widest duration-300`}> Moove</span>, uma agência que nasceu da união entre
                  a <span className={`${montserrat.className} hover:tracking-widest duration-300`}> criatividade de uma publicitária</span> e o <span className={`${montserrat.className} hover:tracking-widest duration-300`}> olhar estético de
                  uma arquiteta.</span> Somos uma dupla apaixonada por <span className={`${montserrat.className} hover:tracking-widest duration-300`} > ideias,
                  design, estratégia e inovação digital </span>— e acreditamos
                  que marcas com <span className={`${montserrat.className} hover:tracking-widest duration-300`}> propósito </span> merecem se comunicar com
                  autenticidade e movimento.
                  Com <span className={`${montserrat.className} hover:tracking-widest duration-300`} >foco</span>  em criação <span className={`${montserrat.className} hover:tracking-widest duration-300`} > mobile first,</span> desenvolvemos
                  conteúdos que não só encantam visualmente, mas
                  também são <span className={`${montserrat.className} hover:tracking-widest duration-300`} >pensados</span> para proporcionar uma
                  experiência fluida e <span className={`${montserrat.className} hover:tracking-widest duration-300`} >engajante</span> nas plataformas digitais.
                   </p>
                   <div className="grid grid-cols-2 gap-4">
                   <Button > Nossas redes</Button>
                   <Button> Nossas redes</Button>
                   </div>
                 </div>
             </div>
        </Container>
       </section>
       <Titulo
          title="Nossos Valores"
          description="Na Moove, acreditamos que a essência de uma marca se reflete em seus valores. 
                      Conheça os pilares que nos guiam na criação de conteúdos autênticos e impactantes."
       />
      
       <section className="mb-20">
          <Container>
            <div className=" p-4 ">
            <CardValores2/>
            </div>
          </Container>
       </section>
   
         
       
       <section className=" pt-1 pb-20 bg-black rounded-[40px]"> 
       <Container>
       <Titulo
          title="O que fazemos"
          titleColor="text-white"
          descriptionColor="text-white"
          description="Na Moove, acreditamos que a essência de uma marca se reflete em seus valores. 
                      Conheça os pilares que nos guiam na criação de conteúdos autênticos e impactantes."
       />
        <div className=" p-4">
           <CardFazemos/>
           </div>
         </Container>
       </section>
       <Titulo
          title="Nosso diferencial"
          description="Na Moove, acreditamos que a essência de uma marca se reflete em seus valores. 
                      Conheça os pilares que nos guiam na criação de conteúdos autênticos e impactantes."
       />
      <section>
        <Container>
            <div className=" mb-0 sm:mb-50">
              <CardDiferencial/>  
            </div>
        </Container>
      </section>
      <Titulo
          title="Clientes ideias"
          description="Na Moove, acreditamos que a essência de uma marca se reflete em seus valores. 
                      Conheça os pilares que nos guiam na criação de conteúdos autênticos e impactantes."
       />
      <section>
        <Container>
            <Comentario/>
        </Container>
      </section>
      <Titulo
          title="Entre em contato conosco!"
          description="Na Moove, acreditamos que a essência de uma marca se reflete em seus valores. 
                      Conheça os pilares que nos guiam na criação de conteúdos autênticos e impactantes."
       />
      <section>
        <Container>
            <div className="p-4 mb-20">
              <CardContato2/>
            </div>
        </Container>

      </section>
       
      </main>
   
    </div>
  );
}
