



import React from "react";

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-primary to-gray2">
      {/* Hero Section with Split Design */}
      <div className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwIDkuOTQtOC4wNiAxOC0xOCAxOFMwIDE4IDAgMTggMCA4LjA2IDggMGgxOGM5Ljk0IDAgMTggOC4wNiAxOCAxOHoiIGZpbGw9IiNlZDU2MjAiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-7xl font-bold mb-6 leading-tight">
              <span className="text-accent2">About</span>
              <br />
              <span className="text-white">Physics Club</span>
            </h1>
            <p className="text-gray3 text-xl leading-relaxed max-w-lg">
              Empowering the next generation of physicists through education, innovation, and community.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-accent2/20 rounded-full blur-3xl"></div>
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent2 rounded-lg flex items-center justify-center text-2xl">🎯</div>
                  <h3 className="text-white text-xl font-bold">Our Mission</h3>
                </div>
                <p className="text-gray3">To inspire and nurture young minds in their journey through physics.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section with Modern Design */}
      <div className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-accent2">Our Journey</span>
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent2/30"></div>
            
            {/* Timeline Items */}
            <div className="space-y-24">
              <div className="relative">
                <div className="flex items-center gap-8">
                  <div className="w-1/2 text-right pr-12">
                    <h3 className="text-2xl font-bold text-white mb-2">2010</h3>
                    <p className="text-gray3">The Beginning of Our Story</p>
                  </div>
                  <div className="w-8 h-8 bg-accent2 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                  <div className="w-1/2 pl-12">
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                      <p className="text-gray3">Founded by passionate physicists and educators with a shared vision.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center gap-8">
                  <div className="w-1/2 text-right pr-12">
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                      <p className="text-gray3">Launched the Physics For Youth Program (PFYP).</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-accent2 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                  <div className="w-1/2 pl-12">
                    <h3 className="text-2xl font-bold text-white mb-2">2015</h3>
                    <p className="text-gray3">Expanding Our Reach</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center gap-8">
                  <div className="w-1/2 text-right pr-12">
                    <h3 className="text-2xl font-bold text-white mb-2">2020</h3>
                    <p className="text-gray3">Digital Transformation</p>
                  </div>
                  <div className="w-8 h-8 bg-accent2 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                  <div className="w-1/2 pl-12">
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                      <p className="text-gray3">Adapted to virtual learning environments, expanding globally.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section with Cards */}
      <div className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-accent2">Our Core Values</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 transform transition-all duration-300 group-hover:scale-105">
                <div className="w-16 h-16 bg-accent2 rounded-xl flex items-center justify-center text-3xl mb-6 transform transition-transform duration-300 group-hover:rotate-12">🎓</div>
                <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
                <p className="text-gray3 leading-relaxed">Committed to maintaining the highest standards in physics education and research.</p>
              </div>
            </div>
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 transform transition-all duration-300 group-hover:scale-105">
                <div className="w-16 h-16 bg-accent2 rounded-xl flex items-center justify-center text-3xl mb-6 transform transition-transform duration-300 group-hover:rotate-12">🤝</div>
                <h3 className="text-2xl font-bold text-white mb-4">Community</h3>
                <p className="text-gray3 leading-relaxed">Building a supportive network of learners, educators, and researchers.</p>
              </div>
            </div>
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 transform transition-all duration-300 group-hover:scale-105">
                <div className="w-16 h-16 bg-accent2 rounded-xl flex items-center justify-center text-3xl mb-6 transform transition-transform duration-300 group-hover:rotate-12">💡</div>
                <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
                <p className="text-gray3 leading-relaxed">Continuously exploring new ways to make physics education more engaging.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section with Modern Cards */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-accent2">Our Leadership Team</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20">
                <div className="h-64 bg-accent2/20 flex items-center justify-center text-6xl">👨‍🔬</div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Dr. Sarah Chen</h3>
                  <p className="text-accent2 mb-4">Director & Lead Physicist</p>
                  <p className="text-gray3">PhD in Quantum Physics with 15 years of research experience.</p>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20">
                <div className="h-64 bg-accent2/20 flex items-center justify-center text-6xl">👨‍🏫</div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Prof. James Wilson</h3>
                  <p className="text-accent2 mb-4">Education Coordinator</p>
                  <p className="text-gray3">Former high school physics teacher with a passion for innovative teaching.</p>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20">
                <div className="h-64 bg-accent2/20 flex items-center justify-center text-6xl">👩‍💻</div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Dr. Maria Rodriguez</h3>
                  <p className="text-accent2 mb-4">Research Lead</p>
                  <p className="text-gray3">Specializes in experimental physics and leads our laboratory sessions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Join Us Section with Modern Design */}
      <div className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8">
              <span className="text-accent2">Join Our Community</span>
            </h2>
            <p className="text-xl text-gray3 mb-12 leading-relaxed">
              Whether you're a student, educator, or physics enthusiast, there's a place for you in our community. 
              Together, we can explore the wonders of physics and inspire the next generation of scientists.
            </p>
            <button className="bg-accent2 hover:bg-accent text-white font-bold py-4 px-12 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-accent2/30">
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
