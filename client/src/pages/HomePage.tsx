import React from "react";
import sciencePhoto from "../assets/sciencephoto2.2.jpg";

const pageOverviews = [
  {
    title: "About Us",
    description: "Learn about our mission, values, and the passionate team behind ATSNEE Physics Club.",
    icon: "🎯",
    link: "/about",
    bgColor: "bg-accent2/10",
  },
  {
    title: "History",
    description: "Journey through our milestones and achievements since our establishment in 2020.",
    icon: "📚",
    link: "/history",
    bgColor: "bg-accent/10",
  },
  {
    title: "Programs",
    description: "Explore our seasonal programs, workshops, and educational initiatives.",
    icon: "🔬",
    link: "/programs",
    bgColor: "bg-accent2/10",
  },
  {
    title: "Contact",
    description: "Get in touch with us for inquiries, collaborations, or to join our community.",
    icon: "📧",
    link: "/contact",
    bgColor: "bg-accent/10",
  },
];

const HomePage: React.FC = () => {
    return (
        <div className="w-full">
            {/* ...existing hero section... */}
   {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={sciencePhoto}
                        alt="Physics background"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/70" />
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
            {/* ...existing about section... */}
               {/* Quick Stats Section */}
            <section className="py-16 bg-primary/95">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: "500+", label: "Members" },
                            { number: "50+", label: "Events" },
                            { number: "20+", label: "Partners" },
                            { number: "2", label: "Seasons" },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl font-bold text-accent2 mb-2">{stat.number}</div>
                                <div className="text-gray3">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Page Overviews Section */}
            <section className="py-20 bg-primary/95">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                        <span className="text-accent2">Explore Our World</span>
                    </h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {pageOverviews.map((page, index) => (
                            <a 
                                key={index}
                                href={page.link}
                                className="group relative overflow-hidden"
                            >
                                <div className={`${page.bgColor} rounded-2xl p-8 border border-white/20 backdrop-blur-sm
                                    transform transition-all duration-300 hover:scale-105 hover:bg-white/10`}
                                >
                                    <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
                                        {page.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent2 transition-colors">
                                        {page.title}
                                    </h3>
                                    <p className="text-gray3">
                                        {page.description}
                                    </p>
                                    <div className="mt-4 flex items-center text-accent2 opacity-0 transform translate-x-[-20px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                                        <span>Learn More</span>
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

         

            {/* Call to Action Section */}
            <section className="py-20 bg-gradient-to-b from-primary/95 to-gray-900">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Join Our Community?
                    </h2>
                    <p className="text-gray3 text-lg mb-8 max-w-2xl mx-auto">
                        Become part of a vibrant physics community and embark on an exciting journey of discovery.
                    </p>
                    <button className="bg-accent2 hover:bg-accent text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                        Join ATSNEE Today
                    </button>
                </div>
            </section>
        </div>
    );
};

export default HomePage;