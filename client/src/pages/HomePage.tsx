import React from "react";

const HomePage: React.FC = () => {
    return (
        <div className="w-full">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark via-primary to-gray2 opacity-95" />
            <div className="absolute inset-0">
            <div className="absolute left-[-10%] top-[-10%] w-[500px] h-[500px] bg-accent2/20 rounded-full blur-3xl" />
            <div className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-accent2">Welcome to</span>
                <br />
                <span className="text-white">ATSNEE Physics Club</span>
                </h1>
                <p className="text-gray3 text-xl md:text-2xl mb-8 leading-relaxed">
                Empowering the next generation of physicists through education, innovation, and community.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button className="bg-accent2 hover:bg-accent text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-accent2/30">
                    Join Us
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-lg">
                    Contact Us
                </button>
            
                </div>
            </div>
            </div>
        </section>
    </div>
    );
};

export default HomePage;
