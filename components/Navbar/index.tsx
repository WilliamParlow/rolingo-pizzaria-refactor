'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  return (
    <nav className='sticky top-0 z-50 w-full'>
      <div className="bg-[#FF5722] h-[50px] navbar-header flex justify-between items-center text-white">
        <Link className={`cursor-pointer transition duration-300 hover:bg-[#D91010] w-full justify-center h-full flex items-center ${pathname === '/pizza' ? 'bg-[#D91010]' : ''}`} href='/pizza'>Pizzas</Link>
        <Link className={`cursor-pointer transition duration-300 hover:bg-[#D91010] w-full justify-center h-full flex items-center ${pathname === '/dessert' ? 'bg-[#D91010]' : ''}`} href='/dessert'>Sobremesas</Link>
        <Link className={`cursor-pointer transition duration-300 hover:bg-[#D91010] w-full justify-center h-full flex items-center ${pathname === '/drinks' ? 'bg-[#D91010]' : ''}`} href='/drinks'>Bebidas</Link>
      </div>
    </nav>
  );
};

export default Navbar;