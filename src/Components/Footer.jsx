import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-400 py-6 text-center mt-auto w-full">
        <div className="container mx-auto px-4">
        
        <Link className='underline'>
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </Link>
        
        </div>
    </footer>
    );
};

export default Footer;