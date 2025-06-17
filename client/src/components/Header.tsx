import React from "react";

const Header: React.FC = () => {
    return (
        <header>
            <div className="w-full bg-primary/95 text-gray3 pt-10 pb-4 px-4 flex flex-col items-center border-b-2 border-accent2">
                <div className="w-full max-w-[1300px] flex flex-col md:flex-row justify-between items-start md:items-start px-2 md:gap-12">
                    
                    <div className="flex items-center space-x-3 mb-2 md:mb-0">
                        <span className="text-accent2 text-2xl font-extrabold tracking-wider drop-shadow">ATSNEE Physics Club</span>
                    </div>

                    <nav className="flex space-x-6 text-lg font-semibold">
                        <a href="#about" className="hover:text-accent2 transition">About</a>
                        <a href="#competition" className="hover:text-accent2 transition">Competition</a>
                        <a href="#pfyp" className="hover:text-accent2 transition">PFYP</a>
                        <a href="#history" className="hover:text-accent transition">Our History</a>
                    </nav>

                </div>
            </div>
        </header>   
    )
}

export default Header;