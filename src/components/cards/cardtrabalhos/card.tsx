import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
import Image from "next/image";

export default function CardTrabalhos(){
    return (
        <div>
            <div className="flex flex-col">
                <div className="flex flex-row gap-4 mb-4">
                <Dialog >
                                <DialogTrigger className="w-full h-full">
                                    <Image
                                            src="/amigas.jpg"
                                            alt="Banner Image"
                                            width={800}
                                            height={300}
                                            className="w-full h-40 object-cover rounded-lg "
                                            />
                                 </DialogTrigger>
                                <DialogContent className="w-full">
                                    <Image
                                            src="/amigas.jpg"
                                            alt="Banner Image"
                                            width={800}
                                            height={300}
                                            className="w-full  object-cover rounded-lg "
                                            />
                                </DialogContent>
                        </Dialog>
                        <Dialog >
                                <DialogTrigger className="w-full h-full">
                                    <Image
                                            src="/amigas.jpg"
                                            alt="Banner Image"
                                            width={800}
                                            height={300}
                                            className="w-full h-40 object-cover rounded-lg "
                                            />
                                 </DialogTrigger>
                                <DialogContent className="w-full">
                                    <Image
                                            src="/amigas.jpg"
                                            alt="Banner Image"
                                            width={800}
                                            height={300}
                                            className="w-full  object-cover rounded-lg "
                                            />
                                </DialogContent>
                        </Dialog>            
                        </div>
                        <div className="mb-4 ">
                        <Dialog >
                                <DialogTrigger className="w-full h-full">
                                    <Image
                                            src="/amigas.jpg"
                                            alt="Banner Image"
                                            width={800}
                                            height={300}
                                            className="w-full h-40 object-cover rounded-lg "
                                            />
                                 </DialogTrigger>
                                <DialogContent className="w-full">
                                    <Image
                                            src="/amigas.jpg"
                                            alt="Banner Image"
                                            width={800}
                                            height={300}
                                            className="w-full  object-cover rounded-lg "
                                            />
                                </DialogContent>
                        </Dialog>
                       
                        </div>
                        <div className=" flex flex-col w-full bg-black rounded-lg text-white p-4 break-words whitespace-normal">
                                <p>Empresa: </p>
                                <p>Trabalho realizado: </p>
                                <p>Data: </p>
                        </div>
                    
               
            </div>
        </div>
        
    )
}