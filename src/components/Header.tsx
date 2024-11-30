import React from 'react'
import Link from 'next/link'
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className='header'>
        <h1 className='heading'>Watch World Cars</h1>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/cars">Cars</Link>
            <Link href="/aboutus">About us</Link>
            <Link href="/contactus">Contact us</Link>
            <FaShoppingCart size={20} />
        </nav>
    </header>
  )
}

export default Header
