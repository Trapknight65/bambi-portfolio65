import React, { useState } from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    const navLinks = [
        { href: '#/', label: 'Home' },
        { href: '#/about', label: 'About' },
        { href: '#/discover', label: 'Discover' },
        { href: '#/client-feedback', label: 'Client Feedback' },
        { href: '#/contact-form', label: 'Contact' }
    ];

    return (
        <>
            {/* Desktop & Mobile Header */}
            <header
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
                style={{
                    background: 'linear-gradient(145deg, rgba(20,20,20,0.15), rgba(10,10,10,0.15))',
                    backdropFilter: 'blur(12px)',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    boxShadow: `
            8px 8px 16px rgba(0,0,0,0.6),
            -8px -8px 16px rgba(40,40,40,0.1),
            inset 2px 2px 4px rgba(0,0,0,0.3),
            inset -2px -2px 4px rgba(60,60,60,0.1)
          `
                }}
            >
                <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#/"
                        className="flex items-center opacity-0 animate-fadeIn"
                        onClick={closeMenu}
                        style={{
                            animationDuration: '2.1s',
                            animationFillMode: 'both'
                        }}
                    >
                        <picture>
                            <source srcSet="/bambi-title.webp" type="image/webp" />
                            <img
                                src="/bambi-title.png"
                                alt="Bambi"
                                className="h-8 md:h-10 object-contain"
                                loading="eager"
                            />
                        </picture>
                    </a>
                    <p
                        className="text-xs md:text-sm text-neutral-300 italic opacity-0 animate-fadeIn"
                        style={{
                            animationDuration: '2.1s',
                            animationDelay: '0.3s',
                            animationFillMode: 'both'
                        }}
                    >
                        A gentle, poetic and unforgettable visual signature.
                    </p>
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-2">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 opacity-0 animate-fadeIn"
                                style={{
                                    background: 'linear-gradient(145deg, rgba(30,30,30,0.1), rgba(15,15,15,0.1))',
                                    boxShadow: `
                    4px 4px 8px rgba(0,0,0,0.5),
                    -4px -4px 8px rgba(50,50,50,0.1),
                    inset 1px 1px 2px rgba(0,0,0,0.2)
                  `,
                                    animationDuration: '2.1s',
                                    animationDelay: `${0.6 + (index * 0.2)}s`,
                                    animationFillMode: 'both'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'scale(0.98)';
                                    e.currentTarget.style.boxShadow = `
                    inset 4px 4px 8px rgba(0,0,0,0.7),
                    inset -4px -4px 8px rgba(60,60,60,0.15),
                    2px 2px 4px rgba(0,0,0,0.3)
                  `;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.boxShadow = `
                    4px 4px 8px rgba(0,0,0,0.5),
                    -4px -4px 8px rgba(50,50,50,0.1),
                    inset 1px 1px 2px rgba(0,0,0,0.2)
                  `;
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-white p-2 rounded-lg transition-all opacity-0 animate-fadeIn"
                        style={{
                            background: 'linear-gradient(145deg, rgba(30,30,30,0.15), rgba(15,15,15,0.15))',
                            animationDuration: '2.1s',
                            animationDelay: '0.6s',
                            animationFillMode: 'both'
                        }}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                            </svg>
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
                    onClick={closeMenu}
                />
            )}

            {/* Mobile Menu Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-64 z-50 md:hidden transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                style={{
                    background: 'linear-gradient(180deg, rgba(15,15,15,0.98) 0%, rgba(25,25,25,0.98) 100%)',
                    borderLeft: '1px solid rgba(255,255,255,0.05)',
                    boxShadow: `
            -8px 0 20px rgba(0,0,0,0.6),
            inset 2px 0 4px rgba(0,0,0,0.3)
          `
                }}
            >
                <div className="p-6">
                    {/* Close button */}
                    <button
                        onClick={closeMenu}
                        className="absolute top-4 right-4 text-white p-2 rounded-lg transition-all"
                        style={{
                            background: 'linear-gradient(145deg, rgba(30,30,30,0.9), rgba(15,15,15,0.9))',
                            boxShadow: `
                4px 4px 8px rgba(0,0,0,0.5),
                -4px -4px 8px rgba(50,50,50,0.1)
              `
                        }}
                        aria-label="Close menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                        </svg>
                    </button>

                    {/* Mobile Navigation Links */}
                    <nav className="flex flex-col gap-3 mt-12">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                className="text-white text-lg font-medium py-3 px-4 rounded-xl transition-all"
                                style={{
                                    background: 'linear-gradient(145deg, rgba(30,30,30,0.9), rgba(15,15,15,0.9))',
                                    boxShadow: `
                    4px 4px 8px rgba(0,0,0,0.5),
                    -4px -4px 8px rgba(50,50,50,0.1),
                    inset 1px 1px 2px rgba(0,0,0,0.2)
                  `
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Contact Info in Mobile Menu */}
                    <div className="mt-8 pt-8 border-t border-white/10">
                        <p className="text-neutral-400 text-sm mb-3">Get in touch</p>
                        <a
                            href="mailto:info@bambi-productions.com"
                            className="text-white text-sm hover:text-orange-400 transition-colors block mb-2"
                        >
                            info@bambi-productions.com
                        </a>
                        <a
                            href="tel:+351960114077"
                            className="text-white text-sm hover:text-orange-400 transition-colors block"
                        >
                            +351 960 114 077
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
