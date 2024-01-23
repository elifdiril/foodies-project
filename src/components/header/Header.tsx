import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div className='flex items-center gap-4 text-lg text-[#FFBB5C] justify-end bg-[#C63D2F] px-10 h-10'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
        </div>
    );
};

export default Header;