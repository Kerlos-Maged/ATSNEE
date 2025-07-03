import React from "react";
import sciencePhoto from "../assets/homepage.jpg";
import reactLogo from "../assets/react.svg";
import homepageImg from "../assets/homepage.jpg";
import sciencePhoto2 from "../assets/sciencephoto2.2.jpg";

const sectionData = [
  {
    title: "About Us",
    description:
      "Learn about our mission, values, and the passionate team behind ATSNEE Physics Club. We inspire and nurture young minds in their journey through physics.",
    image: homepageImg,
    link: "/about",
    button: "Meet Our Team",
  },
  {
    title: "History",
    description:
      "Journey through our milestones and achievements since our establishment in 2020. Discover the legacy and key moments that shaped our club.",
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=800&q=80",
    link: "/history",
    button: "See Our Story",
  },
  {
    title: "Programs",
    description:
      "Explore our seasonal programs, workshops, and educational initiatives. Physics for Youth Program coming soon!",
    image: sciencePhoto2,
    link: "/programs",
    button: "View Programs",
  },
  {
    title: "Contact Us",
    description:
      "Get in touch with us for inquiries, collaborations, or to join our community. We are dedicated to fostering a love for physics among students.",
    image: reactLogo,
    link: "/contact",
    button: "Contact Now",
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="w-full">
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
              <a href="/programs">
                <button className="bg-accent2 hover:bg-accent text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-accent2/30">
                  Join Us
                </button>
              </a>
              <a href="/contact">
                <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-lg">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

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

      {/* Main Sections for Each Page */}
      <section className="py-20 relative bg-gradient-to-br from-primary via-accent2/30 to-gray3/60 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 flex flex-col gap-32">
          {/* About Us Section - Hero Banner with Overlay */}
          <div className="relative min-h-[50vh] flex items-center justify-center rounded-3xl overflow-hidden shadow-xl">
            <img src={sectionData[0].image} alt="About Us" className="absolute inset-0 w-full h-full object-cover object-center scale-105" />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 text-center px-6 py-12 md:py-24 w-full">
              <h3 className="text-5xl md:text-6xl font-bold text-accent2 mb-4 drop-shadow-lg">{sectionData[0].title}</h3>
              <p className="text-gray3 text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">{sectionData[0].description}</p>
              <a href={sectionData[0].link} className="inline-block">
                <button className="bg-gradient-to-r from-accent2 to-accent hover:from-accent hover:to-accent2 text-white font-bold py-4 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent2/20">
                  {sectionData[0].button}
                </button>
              </a>
            </div>
          </div>

          {/* History Section - Vertical Timeline */}
          <div className="relative w-full max-w-3xl mx-auto">
            <h3 className="text-4xl font-bold text-accent2 mb-10 text-center">{sectionData[1].title}</h3>
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent2 via-accent2/30 to-transparent -translate-x-1/2" />
            <div className="flex flex-col gap-16 relative z-10">
              {/* Example timeline events, you can map real data here */}
              <div className="flex items-center gap-8">
                <div className="w-10 h-10 rounded-full bg-accent2 flex items-center justify-center text-white font-bold text-lg border-4 border-white">20</div>
                <div className="bg-white/10 rounded-xl p-6 shadow-lg flex-1">
                  <h4 className="text-2xl font-bold text-white mb-2">Founded</h4>
                  <p className="text-gray3">The club was established and began its journey to inspire young physicists.</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="w-10 h-10 rounded-full bg-accent2 flex items-center justify-center text-white font-bold text-lg border-4 border-white">21</div>
                <div className="bg-white/10 rounded-xl p-6 shadow-lg flex-1">
                  <h4 className="text-2xl font-bold text-white mb-2">First Major Event</h4>
                  <p className="text-gray3">Hosted our first large-scale physics workshop with over 100 participants.</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="w-10 h-10 rounded-full bg-accent2 flex items-center justify-center text-white font-bold text-lg border-4 border-white">22</div>
                <div className="bg-white/10 rounded-xl p-6 shadow-lg flex-1">
                  <h4 className="text-2xl font-bold text-white mb-2">Growth & Recognition</h4>
                  <p className="text-gray3">Club membership surpassed 500 and received national recognition.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Programs Section - Horizontal Scrollable Carousel */}
          <div>
            <h3 className="text-4xl font-bold text-accent2 mb-10 text-center">{sectionData[2].title}</h3>
            <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-accent2/50 scrollbar-track-transparent">
              {/* Example program cards, you can map real data here */}
              <div className="min-w-[320px] bg-gradient-to-br from-accent2/20 to-white/10 rounded-2xl shadow-xl p-8 flex flex-col items-center">
                <img src={sectionData[2].image} alt="Program" className="w-32 h-32 object-cover rounded-xl mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">Physics for Youth</h4>
                <p className="text-gray3 mb-4">A seasonal program introducing physics to young students in a fun, interactive way.</p>
                <a href={sectionData[2].link} className="inline-block mt-auto">
                  <button className="bg-accent2 hover:bg-accent text-white font-bold py-2 px-8 rounded-full transition-all duration-300">Learn More</button>
                </a>
              </div>
              <div className="min-w-[320px] bg-gradient-to-br from-accent/20 to-white/10 rounded-2xl shadow-xl p-8 flex flex-col items-center">
                <img src={sectionData[2].image} alt="Program" className="w-32 h-32 object-cover rounded-xl mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">Workshops</h4>
                <p className="text-gray3 mb-4">Hands-on workshops covering a variety of physics topics and experiments.</p>
                <a href={sectionData[2].link} className="inline-block mt-auto">
                  <button className="bg-accent2 hover:bg-accent text-white font-bold py-2 px-8 rounded-full transition-all duration-300">Learn More</button>
                </a>
              </div>
              <div className="min-w-[320px] bg-gradient-to-br from-accent2/20 to-white/10 rounded-2xl shadow-xl p-8 flex flex-col items-center">
                <img src={sectionData[2].image} alt="Program" className="w-32 h-32 object-cover rounded-xl mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">Competitions</h4>
                <p className="text-gray3 mb-4">Exciting physics competitions to challenge and inspire students.</p>
                <a href={sectionData[2].link} className="inline-block mt-auto">
                  <button className="bg-accent2 hover:bg-accent text-white font-bold py-2 px-8 rounded-full transition-all duration-300">Learn More</button>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Us Section - Centered Card with Floating Icons */}
          <div className="relative flex flex-col items-center justify-center min-h-[40vh]">
            <svg className="absolute left-10 top-0 w-16 h-16 opacity-20 animate-float-slow" viewBox="0 0 64 64" fill="none"><rect x="8" y="20" width="48" height="28" rx="6" stroke="#38bdf8" strokeWidth="3" fill="#f472b6" fillOpacity="0.15" /><polyline points="8,20 32,44 56,20" stroke="#facc15" strokeWidth="3" fill="none" /></svg>
            <svg className="absolute right-10 bottom-0 w-16 h-16 opacity-20 animate-float-slow" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="12" stroke="#facc15" strokeWidth="2" /><circle cx="16" cy="8" r="2" fill="#38bdf8" /><circle cx="24" cy="16" r="2" fill="#f472b6" /></svg>
            <div className="bg-white/10 rounded-3xl shadow-2xl p-12 flex flex-col items-center max-w-lg w-full">
              <img src={sectionData[3].image} alt="Contact Us" className="w-24 h-24 object-cover rounded-full border-4 border-accent2/40 mb-4" />
              <h3 className="text-3xl font-bold text-accent2 mb-2">{sectionData[3].title}</h3>
              <p className="text-gray3 text-lg mb-6 text-center">{sectionData[3].description}</p>
              <a href={sectionData[3].link} className="inline-block">
                <button className="bg-gradient-to-r from-accent2 to-accent hover:from-accent hover:to-accent2 text-white font-bold py-3 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent2/20">
                  {sectionData[3].button}
                </button>
              </a>
            </div>
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
          <a href="/programs">
            <button className="bg-accent2 hover:bg-accent text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Join ATSNEE Today
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;