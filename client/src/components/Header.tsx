import React, { useState, useEffect } from "react";
import RegistrationAlert from "./RegistrationAlert";

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
    const [isMobileView, setIsMobileView] = useState(false);
    const [isProgramsOpen, setIsProgramsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 1024);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div className="sticky top-0 z-50 w-full bg-primary/95 text-gray3 shadow-lg">
            <header className="sticky top-0 z-50 w-full bg-primary/95 text-gray3 shadow-lg">
            {/* Physics-themed background accent */}
            <div className="absolute inset-0 h-[90px] w-full overflow-hidden pointer-events-none select-none -z-10">
                <svg className="absolute left-0 top-0 opacity-30" width="400" height="90" viewBox="0 0 400 90" fill="none">
                    <ellipse cx="120" cy="45" rx="100" ry="30" stroke="#ed5620" strokeWidth="6" />
                    <ellipse cx="220" cy="45" rx="60" ry="20" stroke="#d25f1c" strokeWidth="4" transform="rotate(15 220 45)" />
                    <ellipse cx="320" cy="45" rx="80" ry="25" stroke="#b6b6b6" strokeWidth="3" transform="rotate(-10 320 45)" />
                </svg>
            </div>
            <div className="w-full bg-white/15 backdrop-blur-lg shadow-lg border-b border-accent2/40">
                <div className="max-w-[1300px] mx-auto h-[90px] flex items-center justify-between px-4 md:px-8 relative">
                    {/* Logo and Brand */}
                    <div className="flex items-center gap-3">
                        <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=80&q=80" alt="Physics Logo" className="w-12 h-12 rounded-full object-cover border-2 border-accent2 shadow-md" />
                        <span className="text-accent2 text-2xl font-extrabold tracking-wider drop-shadow">ATSNEE Physics Club</span>
                    </div>

                    {/* Hamburger Menu Button */}
                    <button 
                        className="lg:hidden text-gray3 hover:text-accent2 transition-colors ml-auto"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <div className="w-8 h-8 flex flex-col justify-center items-center">
                            <span className={`block h-1 w-8 bg-accent2 rounded transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block h-1 w-8 bg-accent2 rounded transition-all duration-300 my-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block h-1 w-8 bg-accent2 rounded transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex flex-row items-center space-x-8 text-lg font-semibold">
                      {navItems.map((item) =>
                        item.dropdown ? (
                          <div key={item.name} className="relative">
                            <button
                              onClick={() => setIsProgramsOpen((open) => !open)}
                              className="flex items-center px-6 py-4 md:py-0 text-gray-900 hover:text-accent2 transition-colors border-b-0 hover:underline hover:underline-offset-8 decoration-accent2 decoration-2"
                            >
                              {item.name}
                              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d={isProgramsOpen ? "M19 15l-7-7-7 7" : "M19 9l-7 7-7-7"} />
                              </svg>
                            </button>
                            {isProgramsOpen && (
                              <div
                                className="absolute left-0 mt-4 w-40 bg-white rounded shadow-lg z-50 transition-all duration-300 ease-out opacity-100 translate-y-2"
                                style={{
                                  opacity: isProgramsOpen ? 1 : 0,
                                  transform: isProgramsOpen ? "translateY(8px)" : "translateY(0)",
                                  pointerEvents: isProgramsOpen ? "auto" : "none",
                                }}
                              >
                                {item.dropdown.map((sub) => (
                                  <a
                                    key={sub.name}
                                    href={sub.href}
                                    className="block px-4 py-2 text-gray-700 hover:bg-accent2/10 hover:text-accent2 transition-colors"
                                    onClick={() => setIsProgramsOpen(false)}
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
                            className="block px-6 py-4 md:py-0 text-gray-900 hover:text-accent2 transition-colors border-b-0 hover:underline hover:underline-offset-8 decoration-accent2 decoration-2"
                          >
                            {item.name}
                          </a>
                        )
                      )}
                    </nav>
                </div>
                {/* Mobile Menu Dropdown */}
                {isMobileView && (
                    <div
                        className={`fixed top-[90px] left-0 w-full bg-primary/95 text-gray3 shadow-lg border-b border-accent2/40 transition-all duration-300 z-40 ${isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'} overflow-hidden`}
                        style={{backdropFilter: 'blur(12px)'}}
                    >
                        <nav className="flex flex-col items-center py-4 w-full bg-white/15 backdrop-blur-lg shadow-lg border-b border-accent2/40">
                            {navItems.map((item) =>
                              item.dropdown ? (
                                <div key={item.name} className="w-full">
                                  <button
                                    onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                                    className="w-full text-left py-3 px-4 text-lg font-semibold text-gray-900 hover:text-accent2 flex items-center justify-between"
                                  >
                                    {item.name}
                                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" d={isProgramsOpen ? "M19 15l-7-7-7 7" : "M19 9l-7 7-7-7"} />
                                    </svg>
                                  </button>
                                  {isProgramsOpen && (
                                    <div className="pl-4 transition-all duration-300 ease-out">
                                      {item.dropdown.map((sub) => (
                                        <a
                                          key={sub.name}
                                          href={sub.href}
                                          onClick={closeMenu}
                                          className="block w-full py-2 text-gray-700 hover:text-accent2 transition-colors"
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
                                  onClick={closeMenu}
                                  className="block w-full text-center py-3 text-lg font-semibold text-gray-900 hover:text-accent2 transition-colors last:border-b-0"
                                >
                                  {item.name}
                                </a>
                              )
                            )}
                        </nav>
                    </div>
                )}
            </div>
            </header>
            <RegistrationAlert />
            <div className="hidden">
[]


            </div>r
        </div>
    );
};

export default Header; 
