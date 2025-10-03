import React from 'react'
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <footer className='bg-[#6b4226] py-10 mt-96'>
        <div className='container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8'>
            {/* Logo */}
            <div className="text-3xl font-semibold mb-4 md:mb-0">
                <Link>
                    <h1>🍽️</h1>
                    <h2>Delicious</h2>
                    <h3>Plate</h3>
                </Link>
            </div>

            {/* Column 1 - Useful Links */}
            <div>
                <h4 className='font-bold mb-4 text-white text-xl'>Useful Links</h4>
                <ul className='space-y-2 text-sm'>
                    <li><Link to="/" className='hover:text-orange-400 text-[#fffcf5]' >Home</Link></li>
                    <li><Link to="/about" className='hover:text-orange-400 text-[#fffcf5]'>About</Link></li>
                    <li><Link to="/contact" className='hover:text-orange-400 text-[#fffcf5]'>Contact</Link></li>
                </ul>
            </div>

            {/* Column 2 - Categories */}
            <div>
                <h4 className='font-bold mb-4 text-white text-xl'>Categories</h4>
                <ul className='space-y-2 text-sm'>
                    <li><Link to="/veg" className='hover:text-orange-400 text-[#fffcf5]' >Veg</Link></li>
                    <li><Link to="/non-veg" className='hover:text-orange-400 text-[#fffcf5]'>Non-veg</Link></li>
                    <li><Link to="/desserts" className='hover:text-orange-400 text-[#fffcf5]'>Desserts</Link></li>
                </ul>
            </div>
        </div>

        {/* bottom - Copyright */}
        <br />
        <br />
        <hr className=' text-sm text-white opacity-25 mx-auto ' />
        <br />
        <div className=" text-white opacity-30 max-w-6xl mx-auto text-center ">
            © {new Date().getFullYear()} Delicious Plate. All rights reserved.
        </div>

    </footer>
  )
}