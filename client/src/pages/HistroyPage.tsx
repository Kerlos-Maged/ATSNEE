import React from 'react';

const timeline = [
  {
    year: '2023',
    title: 'Club Founded',
    description: 'The Physics Club was officially established, bringing together students passionate about exploring the universe.',
  },
  {
    year: '2023',
    title: 'First Session',
    description: 'Our inaugural session featured an introduction to quantum mechanics, interactive experiments, and a vibrant community gathering.',
  },
  {
    year: '2024',
    title: 'First Competition',
    description: 'Hosted our first annual physics competition, challenging students with real-world problems and experiments.',
  },
  // Add more milestones as needed
];

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
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-accent2">Milestones</h2>
            <p className="text-xl text-gray3">Key moments that shaped our journey.</p>
          </div>
          <div className="relative border-l-4 border-accent2 pl-8">
            {timeline.map((item, idx) => (
              <div key={idx} className="mb-12 relative">
                <div className="absolute -left-5 top-2 w-6 h-6 bg-accent2 rounded-full border-4 border-white"></div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title} <span className="text-accent2 text-lg font-semibold ml-2">({item.year})</span></h3>
                  <p className="text-gray3">{item.description}</p>
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