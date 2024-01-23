import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className='flex justify-start items-center gap-4 text-lg text-[#FFBB5C] bg-[#C63D2F] px-10 h-10'>
           Copyright © 2024 <Link href="https://github.com/elifdiril">elifdiril</Link>
        </div>
    );
};

export default Footer;