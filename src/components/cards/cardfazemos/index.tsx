"use client";
import { Lightbulb, Star, Send,NotebookPen } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';
import { CardFazemos2 } from './card';
import { motion } from "motion/react"
import { gsap} from "gsap";
import { ScrollTrigger } from  "gsap/ScrollTrigger";




export function CardFazemos() {

    const el = useRef<HTMLDivElement | null>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
            const ctx = gsap.context(() => {}, el);
        tl.current = gsap.timeline({
            scrollTrigger:{
                trigger:".modelo",
                scrub: true,
                start: "top 900px",
                end: "bottom 820px",

            }
        })
        .fromTo("#modelo-1",
            { y: 160, opacity: 0 },
            { y: 0, opacity: 1 },
        )
        .fromTo("#modelo-2",
            { y: 160, opacity: 0 },
            { y: 0, opacity: 1 }
        )
        .fromTo("#modelo-3",
            { y: 160, opacity: 0 },
            { y: 0, opacity: 1 }
        )
        .fromTo("#modelo-4",
            { y: 160, opacity: 0 },
            { y: 0, opacity: 1 }
        )
        .fromTo("#modelo-5",
            { y: 160, opacity: 0 },
            { y: 0, opacity: 1 }
        )
        
        return () => {
            gsap.killTweensOf(".modelo");
        }
    }, [])
    
    return (
        <div className=" grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4  conteudo" ref={el} >
            <div className='modelo' id='modelo-1'>
            <CardFazemos2
              Icone={Lightbulb}
              title="Gerenciamento de redes sociais" 
              descricao="Planejamento e produção  de conteúdo alinhado com a essência da marca"
              bgColor="#272EA2"
            />
            </div>
            <div className='modelo' id='modelo-2'>
             <CardFazemos2
              Icone={Send}
              title=" Criação de conteúdo"
              descricao="Posts, vídeos, reels e materiais visuais originais que conectam e engajam."
              bgColor="#CED62C"
            />
            </div>
            <div className='modelo' id='modelo-3'>
             <CardFazemos2
              Icone={NotebookPen}
              title="Branding e Identidade visual"
              descricao=" Rebranding de marca, desenvolvimento de paleta de cores, tipografia, templates e elementos 
                          gráficos que reforçam o posicionamento online."
              bgColor="#FB5397"
            />
            </div>
            <div className='modelo' id='modelo-4'>
             <CardFazemos2
              Icone={Star}
              title="Storymaker"
              descricao="Cobertura de eventos
                        corporativos ou pessoais
                        através de stories dinâmicos,
                        com linguagem, estética  e
                        narrativa  de acordo com o
                        estilo do cliente"
              bgColor="#FAAEBD"
            />
             </div>
             < div className='modelo' id='modelo-5'>
            <CardFazemos2
              Icone={Star}
              title="Transformação de perfil do instagram"
              descricao="Organizamos a bio, links,
                        destaques, posts fixados e
                        toda a estrutura visual do
                        perfil. Tudo com foco em
                        estética, clareza e
                        posicionamento. "
              bgColor="#FAAEBD"
            />
            </div>
            </div>
    )
}