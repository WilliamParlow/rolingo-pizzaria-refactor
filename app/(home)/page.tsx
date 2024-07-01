'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createContext } from 'react';
import { useCookies } from 'react-cookie';

export const userContext = createContext<User | null>(null);

export default function Home() {
  const [cookies] = useCookies(['user']);
  const router = useRouter();

  !cookies?.user && router.push('/login');

  return (
    <main>
      <h1 className='text-xl text-center'>Bem vindo à Rolingo, {cookies?.user?.name}!</h1>
      <div className='mt-6'>
        <p className='text-center p-4 mb-4'>
          Que receita você gostaria de ver hoje?
        </p>
        <div className='grid grid-cols-1 gap-4'>
          <Link className='shadow-md cursor-pointer transition duration-300 hover:opacity-60 w-full justify-center flex items-center h-32 font-bold rounded-md bg-cover bg-[url("https://static.itdg.com.br/images/360-240/cf2da6aff0dead381432a891fc23e06e/shutterstock-378226756.jpg")]' href='/pizza'>Pizzas</Link>
          <Link className='shadow-md cursor-pointer transition duration-300 hover:opacity-60 w-full justify-center flex items-center h-32 font-bold rounded-md bg-cover bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuIodzRsbbrBYz8TzUyIJoM20n0Xwu1x9ujg&usqp=CAU")]' href='/dessert'>Sobremesas</Link>
          <Link className='shadow-md cursor-pointer transition duration-300 hover:opacity-60 w-full justify-center flex items-center h-32 font-bold rounded-md bg-cover bg-[url("https://static.itdg.com.br/images/auto-auto/fb6a935d31c043928d03b0db90237817/caloria-dos-drinks-famosos.jpg")]' href='/drinks'>Bebidas</Link>
        </div>
      </div>
    </main>
  );
}
