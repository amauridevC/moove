"use client";
import {useLayoutEffect, use } from 'react';
import { Lightbulb, Star, Send,NotebookPen } from 'lucide-react';
import CardDiferencia2 from './card';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';




export default function CardDiferencial() {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo("#modelo", {
            x: -200,
            opacity: 0

        }, {
            x: 0,
            opacity: 1,
            duration: 10,
            scrollTrigger: {
                trigger: ".items",
                scrub: true,
                start: "top 900px",
                end: "bottom 720px",
            }

        })
    }, []);


    return (
        <div className='items'>
        <div className="w-full max-w-7xl mx-auto px-2 my-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 id" id='modelo'>
                
                <CardDiferencia2
                    Icone={Lightbulb}
                    title="Olhar criativo e estratégico"
                    descricao="Unimos estética e propósito para criar conteúdos que realmente comunicam."
                    bgColor="#FDE047"
                />
               
                 <CardDiferencia2
                    Icone={Send}
                    title="Atendimento personalizado"
                    descricao="Cada cliente é único — e a nossa entrega também."
                    bgColor="#FDE047"
                />
                 <CardDiferencia2
                    Icone={NotebookPen}
                    title="Autenticidade"
                    descricao="Produzimos materiais alinhados com a essência e o posicionamento de cada marca."
                    bgColor="#FDE047"
                />
                 <CardDiferencia2
                    Icone={Star}
                    title="Movimento constante"
                    descricao="Estamos sempre atualizadas com as tendências e inovações do universo digital."
                    bgColor="#FDE047"
                />
            </div>
          
        </div>
        </div>
    )
}