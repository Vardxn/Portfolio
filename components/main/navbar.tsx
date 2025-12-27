'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

const brandNameStyle = `
  .brand-name {
    transition: all 0.3s ease;
  }
  
  .brand-name:hover {
    text-shadow:
      0 0 12px rgba(34, 211, 238, 0.6),
      0 0 30px rgba(167, 139, 250, 0.5);
    transform: scale(1.05);
  }

  .brand-accent {
    color: #22d3ee;
    font-weight: 800;
  }

  .nav-link {
    position: relative;
    color: #d1d5db;
    transition: color 0.3s ease;
  }

  .nav-link:hover {
    color: #22d3ee;
  }

  .nav-link::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #22d3ee, #a78bfa);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  .nav-link:hover::after {
    width: 100%;
  }
`;

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map(link => link.link.replace('#', ''));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(`#${currentSection}`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style suppressHydrationWarning>{brandNameStyle}</style>
      <div className="w-full h-[80px] fixed top-0 border border-white/5 z-50 px-6 md:px-10" style={{backdropFilter: 'blur(16px)', background: 'rgba(15, 12, 30, 0.6)', boxShadow: '0 10px 40px rgba(138, 92, 246, 0.2)'}}>
        {/* Navbar Container */}
        <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
          {/* Logo + Name */}
          <Link
            href="#home"
          className="flex items-center"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={70}
            height={70}
            draggable={false}
            className="cursor-pointer"
          />
          <div className="hidden md:flex ml-[12px] text-3xl font-bold leading-none bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent brand-name" style={{textShadow: '0 0 20px rgba(167, 139, 250, 0.4)', transition: 'all 0.3s ease'}}>Vardan<span className="brand-accent">.</span>Pal</div>
        </Link>

        {/* Web Navbar */}
        <nav className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20" aria-label="Main navigation">
          <ul className="flex items-center justify-between w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 list-none">
            {NAV_LINKS.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.link}
                  className={`nav-link ${activeSection === link.link ? 'text-cyan-400' : ''}`}
                  aria-current={activeSection === link.link ? 'page' : undefined}
                >
                  {link.title}
                </Link>
              </li>
            ))}

            {/* Source Code */}
            <li>
              <Link
                href={LINKS.sourceCode}
                target="_blank"
                rel="noreferrer noopener"
                className="nav-link"
              >
                Source Code
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social Icons (Web) */}
        <div className="hidden md:flex flex-row gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-6 w-6 text-white" />
            </Link>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none text-4xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`absolute top-[80px] left-0 w-full bg-[#030014] border-t border-purple-500/30 flex-col items-center text-gray-300 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'flex p-5' : 'hidden'
        }`}
        aria-label="Mobile navigation"
      >
        {/* Links */}
        <ul className="flex flex-col items-center gap-4 w-full list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.title} className="w-full">
              <Link
                href={link.link}
                className={`block text-center py-2 px-4 rounded-lg transition-all hover:bg-purple-500/10 ${
                  activeSection === link.link ? 'text-cyan-400 bg-purple-500/20' : 'hover:text-cyan-400'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-current={activeSection === link.link ? 'page' : undefined}
              >
                {link.title}
              </Link>
            </li>
          ))}
          <li className="w-full">
            <Link
              href={LINKS.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="block text-center py-2 px-4 rounded-lg transition-all hover:bg-purple-500/10 hover:text-cyan-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Source Code
            </Link>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6 pt-4 border-t border-gray-700">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
              aria-label={name}
              className="transform hover:scale-110 transition-transform"
            >
              <Icon className="h-8 w-8 text-white hover:text-cyan-400 transition-colors" />
            </Link>
          ))}
        </div>
      </nav>
    </div>
    </>
  );
};