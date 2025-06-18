import React from 'react';
import { timeline } from '../constants/index';


const HistoryPage: React.FC = () => {
  return (
    <div className="w-full bg-primary/95">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-primary to-gray2 opacity-95" />
        <div className="absolute left-[-10%] top-[-10%] w-[400px] h-[400px] bg-accent2/20 rounded-full blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-10%] w-[400px] h-[400px] bg-accent/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-accent2">Our History</span>
            </h1>
            <p className="text-gray3 text-xl md:text-2xl mb-8 leading-relaxed">
              Journey through the milestones and memories that shaped our Physics Club.
            </p>
          </div>
        </div>
      </section>

      {/* First Session Highlight */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-accent2/20 rounded-full blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="aspect-video bg-accent2/20 rounded-xl overflow-hidden mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=800&q=80" 
                    alt="First Session" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Our First Session</h2>
                <p className="text-gray3 mb-6">
                  The club's first session was a remarkable event, filled with excitement and curiosity. Members gathered to explore the wonders of quantum mechanics, participate in hands-on experiments, and connect with fellow enthusiasts.
                </p>
                <ul className="space-y-3 text-gray3">
                  <li className="flex items-center gap-2">
                    <span className="text-accent2">•</span>
                    <span>Introduction to Quantum Mechanics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent2">•</span>
                    <span>Live Physics Demonstrations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent2">•</span>
                    <span>Community Networking</span>
                  </li>
                </ul>
              </div>
            </div>  

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-xl overflow-hidden bg-accent2/20">
                  <img 
                    src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" 
                    alt="Session 1" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden bg-accent2/20">
                  <img 
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" 
                    alt="Session 2" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden bg-accent2/20">
                  <img 
                    src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" 
                    alt="Session 3" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden bg-accent2/20">
                  <img 
                    src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" 
                    alt="Session 4" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-white/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-accent2">Milestones</h2>
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

