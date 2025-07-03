import React, { useState, useEffect } from "react";
// import RegistrationAlert from "./RegistrationAlert";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "History", href: "/history" },
  { 
    name: "Programs", 
    dropdown: [
      { name: "Season 1", href: "/programs/season1" },
      { name: "Season 2", href: "/programs/season2" },
    ]
  },
  { name: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProgramsOpen, setIsProgramsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <header className={`sticky top-0 z-50 w-full transition-all duration-300 bg-transparent ${
                isScrolled ? '' : ''
            }`}>
                <div className="w-full bg-primary/95 backdrop-blur-sm border-b border-accent2/20">
                    <div className="max-w-[1300px] mx-auto h-[90px] flex items-center justify-between px-4 md:px-8 relative">
                        {/* Logo and Brand */}
                        <div className="flex items-center gap-4">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-accent2/20 rounded-full blur-md group-hover:bg-accent2/30 transition-all duration-300"></div>
                                <img 
                                    src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=80&q=80" 
                                    alt="Physics Logo" 
                                    className="w-12 h-12 rounded-full object-cover border-2 border-accent2 shadow-md relative z-10"
                                />
                            </div>
                            <span className="text-accent2 text-2xl font-extrabold tracking-wider drop-shadow">
                                ATSNEE <span className="text-white/90">Physics Club</span>
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-1">
                            {navItems.map((item) =>
                                item.dropdown ? (
                                    <div key={item.name} className="relative px-2">
                                        <button
                                            onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                                            className="group flex items-center px-4 py-2 rounded-lg text-gray-100 hover:bg-white/10 transition-all duration-300"
                                        >
                                            <span className="relative">
                                                {item.name}
                                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent2 transition-all duration-300 group-hover:w-full"></span>
                                            </span>
                                            <svg className="ml-1 w-4 h-4 transition-transform duration-300" 
                                                style={{ transform: isProgramsOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {isProgramsOpen && (
                                            <div className="absolute left-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-lg rounded-lg shadow-xl border border-accent2/20 overflow-hidden">
                                                {item.dropdown.map((sub) => (
                                                    <a
                                                        key={sub.name}
                                                        href={sub.href}
                                                        className="block px-4 py-3 text-gray-100 hover:bg-accent2/20 transition-colors"
                                                    >
                                                        {sub.name}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="group px-4 py-2 rounded-lg text-gray-100 hover:bg-white/10 transition-all duration-300"
                                    >
                                        <span className="relative">
                                            {item.name}
                                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent2 transition-all duration-300 group-hover:w-full"></span>
                                        </span>
                                    </a>
                                )
                            )}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button 
                            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <div className="w-6 flex flex-col items-end">
                                <span className={`bg-accent2 h-0.5 rounded-full transition-all duration-300 ${
                                    isMenuOpen ? 'w-6 rotate-45 translate-y-0.5' : 'w-6'
                                }`} />
                                <span className={`bg-accent2 h-0.5 rounded-full my-1 transition-all duration-300 ${
                                    isMenuOpen ? 'w-0' : 'w-4'
                                }`} />
                                <span className={`bg-accent2 h-0.5 rounded-full transition-all duration-300 ${
                                    isMenuOpen ? 'w-6 -rotate-45 -translate-y-0.5' : 'w-6'
                                }`} />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
                    isMenuOpen ? 'max-h-screen' : 'max-h-0'
                }`}>
                    <nav className="bg-gray-900/95 backdrop-blur-lg border-t border-accent2/20">
                        {navItems.map((item) =>
                            item.dropdown ? (
                                <div key={item.name} className="border-b border-white/10">
                                    <button
                                        onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                                        className="w-full px-6 py-4 flex items-center justify-between text-gray-100"
                                    >
                                        {item.name}
                                        <svg className={`w-4 h-4 transition-transform duration-300 ${
                                            isProgramsOpen ? 'rotate-180' : ''
                                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <div className={`bg-white/5 transition-all duration-300 ${
                                        isProgramsOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'
                                    }`}>
                                        {item.dropdown.map((sub) => (
                                            <a
                                                key={sub.name}
                                                href={sub.href}
                                                className="block px-8 py-3 text-gray-300 hover:text-accent2"
                                            >
                                                {sub.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="block px-6 py-4 text-gray-100 hover:bg-white/5 border-b border-white/10"
                                >
                                    {item.name}
                                </a>
                            )
                        )}
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;