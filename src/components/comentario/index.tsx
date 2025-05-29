import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
  })

export default function Comentario() {
    return (
        <div className="mb-20 p-4">
            <div className="bg-gray-100  sm:p-0 rounded-lg shadow-md grid grid-cols-1 justify-center sm:grid-cols-2">
                <div className="flex p-6"> 
                <span className="  ">
                            <Image
                            src="/aspas.png"
                            alt="Avatar"
                            width={900}
                            height={300}
                            className=" w-30 sm:w-45 bg-[#FAAEBD] rounded-full p-1 sm:p-2 mr-3" />   
                        </span>
                    <p className={`${poppins.className} text- text-center sm:text-sm md:text-lg lg:text-3xl items-center flex`}>
                         Empresas que enxergam o digital
                            como ferramenta essencial para
                            crescer, fortalecer presença e se
                            conectar com o público. 
                    </p>
                    
                    <span className=" flex items-end">
                            <Image
                            src="/aspas.png"
                            alt="Avatar"
                            width={900}
                            height={300}
                            className="w-30 sm:w-45 bg-[#FAAEBD] flex justify-end scale-x-[-1] rounded-full p-1 sm:p-2 mb-1" />   
                        </span>
                </div>
                <div>
                <Image
                    src="/pessoas.webp"
                    alt="Avatar"
                    width={900}
                    height={300}
                    className="w-full mt-3 sm:mt-0 p-5"
                />
                </div>
            </div>
        </div>
    )
}