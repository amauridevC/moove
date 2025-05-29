import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='min-h-[calc(100vh-10rem)] flex justify-center items-center flex-col gap-4'>
      <h2 className='text-4xl'>404</h2>
      <p>você acessou uma pagina que não existe.</p>
      <Link href="/" className='hover:text-yellow-300 font-bold'>retornar ao inicio</Link>
    </div>
  )
}