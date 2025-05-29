import { Instagram } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { Twitter } from 'lucide-react';

export default function Footer() {
    return(
        <footer className="w-full flex items-center justify-center bg-black h-20 ">
            <div className="text-white w-full ">
                <div className='flex flex-col justify-center sm:flex-row sm:justify-between w-full px-3 '>
                <p className='justify-center flex'>© 2025 moove. Todos os direitos reservados.</p>
                <div className='flex flex-row space-x-2 h-full items-center justify-center'> <Youtube size={25} /> <Instagram size={20} /><Twitter size={20} /></div>
                </div>
                
            </div>
        </footer>
    )
}