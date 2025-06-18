import React, { useState } from "react";

const Links = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
    { name: "About", href: "/about" },
    { name: "Competition", href: "#competition" },
    { name: "Our History", href: "#history" },
]
const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="sticky top-0 z-50">
            <div className="w-full bg-primary/95 text-gray3 h-[70px] flex flex-col items-center border-b-2 border-accent2">
                <div className="w-full h-[70px] max-w-[1300px] flex md:flex-row justify-between items-center px-4 md:px-2 md:gap-12">
                    {/* Logo and Brand */}
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <div className="flex items-center space-x-3">
                            <span className="text-accent2 text-2xl font-extrabold tracking-wider drop-shadow">ATSNEE Physics Club</span>
                        </div>
                        
                        {/* Hamburger Menu Button */}
                        <button 
                            className="md:hidden text-gray3 hover:text-accent2 transition-colors"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            <svg 
                                className="w-6 h-6" 
                                fill="none" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-lg font-semibold w-full md:w-auto bg-primary/95 md:bg-transparent py-4 md:py-0`}>
                        {Links.map((link) => (
                            <a key={link.name} href={link.href} className="hover:text-accent2 transition-colors w-full md:w-auto text-center">
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>   
    );
};


export default Header; 