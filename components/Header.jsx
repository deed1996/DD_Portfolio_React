'use client';
import Image from "next/image";
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Image 
            src="/dd_logo.png" 
            alt="Logo" 
            width={80} 
            height={60}
            priority />
        </div>

        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#aboutme" onClick={() => setIsOpen(false)}>About Me</a></li>
          <li><a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a></li>
          <li><a href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>

        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );

}