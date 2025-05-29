import { Instagram } from 'lucide-react';
import { PhoneCall } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Poppins, Montserrat } from 'next/font/google'
import Image from 'next/image';
import Link from 'next/link';


const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
  })

 const montserrat = Montserrat({
      weight: '700',
      subsets: ['latin'],
    })


export default function CardContato2() {
    return (
        <div >
            <div className="grid grid-cols-1 shadow rounded-lg border">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-white rounded-lg ">
                    <div className="border p-3 rounded-lg flex sm:flex-col lg:flex-row justify-center items-center space-x-2">
                    <div className='flex w-full items-center justify-between mx-5 flex-col lg:flex-row'>
                        <div className='bg-[#FAAEBD] p-4 rounded-full '>  <Mail size={30} /></div>
                        <h2 className={`${montserrat.className} `}>E-mail:</h2>
                        <Link 
                            href=""
                            target='_blank'
                            >
                        <p className={`${poppins.className} text-gray-600 `}>mooveagc@gmail.com</p>
                        </Link>
                        </div>
                    </div>
                    <div className="border p-3 rounded-lg flex sm:flex-col lg:flex-row justify-center items-center space-x-2">
                        <div className='flex w-full items-center justify-between mx-5 flex-col lg:flex-row'>
                        <div className='bg-[#FAAEBD] p-4 rounded-full '>  <PhoneCall size={30} /></div>
                        <h2 className={`${montserrat.className}`}>Whatsapp:</h2>
                        <Link 
                            href=""
                            target='_blank'
                            >
                        <p className={`${poppins.className} text-gray-600`}>(81) 984621717 </p>
                        </Link>
                        </div>
                    </div>
                    <div className="border p-3 rounded-lg flex  justify-center items-center ">
                    <div className='flex w-full items-center justify-between mx-5 flex-col lg:flex-row'>
                        <div className='bg-[#FAAEBD] p-4 rounded-full '>     <Instagram size={30} /> </div>
                        <h2 className={`${montserrat.className}`}>instagram:</h2>
                        <Link 
                            href=""
                            target='_blank'
                            >
                        <p className={`${poppins.className} text-gray-600`}> moove.agc</p>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 p-4 bg-white rounded-lg  mt-4 ">
                <div className="border p-3 rounded-lg flex flex-col  justify-center items-center space-x-2 ">
                        <div className=' p-4  '>  
                            <Image
                                    src="/qrcode.svg"
                                    alt="Banner Image"
                                    width={800}
                                    height={300}
                                    className="w-30 object-cover rounded-lg "
                                    />
                                           
                        </div>
                        <h2 className={`${montserrat.className} text-center`}>Escaneie o QRCODE para entar em contato.</h2>
                       
                    </div>
                </div>

            </div>
            
        </div>
    )
}