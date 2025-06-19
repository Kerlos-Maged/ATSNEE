import React from 'react';
import { timeline } from '../constants/index';

const HistoryPage: React.FC = () => {
  return (
    <div className="w-full bg-primary/95">
      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-primary to-gray2 opacity-95" />
        {/* Animated Background Elements */}
        <div className="absolute left-[-10%] top-[-10%] w-[400px] h-[400px] bg-accent2/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute right-[-10%] bottom-[-10%] w-[400px] h-[400px] bg-accent/20 rounded-full blur-3xl animate-pulse delay-700" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent2 text-lg font-semibold mb-4 block">Established 2020</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-accent2">Our Legacy</span>
              <span className="block text-white mt-2">Through Time</span>
            </h1>
            <p className="text-gray3 text-xl md:text-2xl mb-8 leading-relaxed">
              Journey through the milestones and memories that shaped our Physics Club.
            </p>
            <div className="flex justify-center gap-4">
              <div className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-gray3">Members: 500+</span>
              </div>
              <div className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-gray3">Events: 100+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First Session Highlight with Improved Layout */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-accent2/20 rounded-3xl blur-3xl group-hover:bg-accent2/30 transition-all duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 transform transition-all duration-500 hover:scale-[1.02]">
                <div className="aspect-video bg-accent2/20 rounded-xl overflow-hidden mb-6 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=800&q=80" 
                    alt="First Session" 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-accent2 transition-colors">Our First Session</h2>
                <p className="text-gray3 mb-6 leading-relaxed">
                  The club's first session was a remarkable event, filled with excitement and curiosity. Members gathered to explore the wonders of quantum mechanics, participate in hands-on experiments, and connect with fellow enthusiasts.
                </p>
                <ul className="space-y-3 text-gray3">
                  {['Introduction to Quantum Mechanics', 'Live Physics Demonstrations', 'Community Networking'].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 group/item">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-accent2 group-hover/item:scale-150 transition-transform"></span>
                      <span className="group-hover/item:text-accent2 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>  

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="group aspect-square rounded-xl overflow-hidden bg-accent2/20 shadow-lg relative">
                    <img 
                      src={`https://images.unsplash.com/photo-${index + 1}?auto=format&fit=crop&w=400&q=80`}
                      alt={`Session ${index + 1}`} 
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-white/5 to-transparent relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-accent2 relative inline-block">
              Milestones
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-accent2/20"></div>
            </h2>
            <p className="text-xl text-gray3">Key moments that shaped our journey.</p>
          </div>
             <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line with Gradient */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent2 via-accent2/50 to-transparent"></div>

            {timeline.map((item, idx) => (
              <div 
                key={idx} 
                className={`mb-16 last:mb-0 relative flex flex-col md:flex-row gap-8 items-start
                  ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 -translate-x-[10px] md:-translate-x-[10px] mt-6">
                  <div className="w-5 h-5 rounded-full bg-accent2 border-4 border-gray-900"></div>
                  <div className="absolute inset-0 w-5 h-5 rounded-full border-2 border-accent2 animate-ping"></div>
                </div>

                {/* Date Badge */}
                <div className={
                  idx % 2 === 0
                    ? "md:w-1/2 pl-8 md:pl-0 flex md:justify-start"
                    : "md:w-1/2 pl-8 md:pl-0 flex justify-end md:justify-end"
                }>
                  <div className="inline-block px-4 py-2 bg-accent2/20 backdrop-blur-sm rounded-lg border border-accent2/30">
                    <span className="text-xl font-bold text-accent2">{item.year}</span>
                  </div>
                </div>

                {/* Content Card */}
                <div className="md:w-1/2 pl-8 md:pl-0 md:px-8">
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 
                    transform transition-all duration-300 hover:scale-[1.02] hover:bg-white/15 group">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent2 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray3 leading-relaxed">{item.description}</p>
                    {/* Optional Achievement List */}
                    {/* {item.achievements && (
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-center text-gray3">
                              <span className="mr-2 text-accent2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )} */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HistoryPage;