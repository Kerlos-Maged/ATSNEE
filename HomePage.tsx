import React from "react";


const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/sciencephoto2.2.jpg"
          alt="Physics background"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="flex-1 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl font-bold text-orange-500 mb-6 drop-shadow-lg">
              Welcome to ATSNEE Physics Club
            </h1>
            <p className="text-xl text-gray-100 mb-8 drop-shadow">
              Explore the wonders of physics through hands-on experiments, engaging discussions, and innovative learning.
            </p>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">
              Join Our Community
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Card */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all border border-gray-700">
              <h2 className="text-2xl font-bold text-orange-500 mb-4">About</h2>
              <p className="text-gray-300">
                Learn more about our mission and the passionate minds behind ATSNEE Physics Club.
              </p>
            </div>

            {/* Programs Card */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all border border-gray-700">
              <h2 className="text-2xl font-bold text-orange-500 mb-4">Programs</h2>
              <div className="space-y-2">
                <p className="text-gray-300 mb-4">
                  Discover our educational initiatives and learning opportunities.
                </p>
                <a href="/programs/season1" className="block text-orange-400 hover:text-orange-300">Season 1 →</a>
                <a href="/programs/season2" className="block text-orange-400 hover:text-orange-300">Season 2 →</a>
              </div>
            </div>

            {/* History Card */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all border border-gray-700">
              <h2 className="text-2xl font-bold text-orange-500 mb-4">History</h2>
              <p className="text-gray-300">
                Explore our journey and achievements throughout the years.
              </p>
            </div>

            {/* Contact Card */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all border border-gray-700">
              <h2 className="text-2xl font-bold text-orange-500 mb-4">Contact</h2>
              <p className="text-gray-300">
                Get in touch with us for inquiries or collaborations.
              </p>
            </div>
          </div>
        </section>

        {/* Latest Events Section */}
        <section className="py-16 px-4 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">Latest Events</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-700">
                  <div className="h-48 bg-gray-700"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-orange-400 mb-2">Event Title</h3>
                    <p className="text-gray-300">Brief description of the event goes here.</p>
                    <button className="mt-4 text-orange-400 font-semibold hover:text-orange-300">
                      Learn More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 px-4 bg-gray-900/50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-orange-500 mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter for the latest updates and events.
            </p>
            <div className="flex gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 w-full max-w-sm focus:outline-none focus:border-orange-500"
              />
              <button className="bg-orange-600 hover:bg-orange-700 text-gray-100 px-6 py-2 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;