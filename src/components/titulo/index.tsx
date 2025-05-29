import { Poppins } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import { Container } from '../container';

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  weight: '900',
  subsets: ['latin-ext'],
});

interface TituloProps {
  title?: string;
  description?: string;
  titleColor?: string;        // 🆕 cor do título (ex: text-white)
  descriptionColor?: string;  // 🆕 cor da descrição (ex: text-neutral-400)
}

export default function Titulo({
  title,
  description,
  titleColor = "text-black",            // cor padrão
  descriptionColor = "text-neutral-600" // cor padrão
}: TituloProps) {
  return (
    <Container>
      <div className="my-10 sm:my-30 flex flex-col items-center justify-center text-center">
        <p className={`${montserrat.className} text-2xl sm:text-4xl font-bold ${titleColor}`}>
          {title}
        </p>
        <p className={`${poppins.className} text-sm sm:text-base lg:text-xl mt-4 ${descriptionColor}`}>
          {description ||
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
        </p>
      </div>
    </Container>
  );
}
