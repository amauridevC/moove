import { Poppins, Montserrat, Geist, Geist_Mono } from 'next/font/google';

export const poppins = Poppins({
  weight: ['400', '700'], 
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const montserrat = Montserrat({
  weight: ['400', '700'], 
  subsets: ['latin'],
  variable: '--font-montserrat',
});