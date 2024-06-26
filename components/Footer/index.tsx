import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full flex justify-center items-center h-16 text-white bg-[#FF5722] h-[50px]">
      <address>Developed by Will - {new Date().getFullYear()}</address>
    </footer>
  );
};

export default Footer;