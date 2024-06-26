import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className='sticky top-0 z-50 w-full'>
      <div className="bg-[#FF5722] h-[50px] navbar-header flex justify-between items-center gap-4 text-white">
        <Link className='cursor-pointer transition duration-300 hover:bg-[#D91010] w-full justify-center h-full flex items-center' href='/pizza'>Pizzas</Link>
        <Link className='cursor-pointer transition duration-300 hover:bg-[#D91010] w-full justify-center h-full flex items-center' href='/dessert'>Sobremesas</Link>
        <Link className='cursor-pointer transition duration-300 hover:bg-[#D91010] w-full justify-center h-full flex items-center' href='/drinks'>Bebidas</Link>
      </div>
    </nav>
  );
};

export default Navbar;