import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className='flex justify-start items-center gap-4 text-lg font-mono text-[#402714] bg-[#E6A4B4] px-10 h-10'>
           Copyright © 2024 <Link href="https://github.com/elifdiril">elifdiril</Link>
        </div>
    );
};

export default Footer;