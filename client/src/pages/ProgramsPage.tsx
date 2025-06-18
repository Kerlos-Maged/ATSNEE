import React from 'react';

const ProgramsPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
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
              <span className="text-accent2">Physics For Youth Program</span>
            </h1>
            <p className="text-gray3 text-xl md:text-2xl mb-8 leading-relaxed">
              Discover our comprehensive range of physics programs designed to inspire, educate, and challenge students at all levels.
            </p>
          </div>
        </div>
      </section>
    {/* god destroyed our plans when he see that the our plans will destroye us oneday you will thanks your self for not giving up  you must to be patint and wait for the right time  you must to be strong and never give up you must  to be strong and to be the boos for yor family for your self for your dreems and for your life you can do anything you want in your life if you belive in your self and if you belive in your dreems and if you belive in your plans and if you belive in your goals and if you belive in your future anything is possible if you belive in your self but you must to truth the process and told to your self that you can do it and you will do it and you will be the best in ypur life and you will be the best in your field and you will be the best in your work but remmber that everything will happened god will not gives you what you want but he will gives you what ypu need and what you daserve can be achieved with hard work and dedication i can give my self as an examplre of this i was not the best student in my class but i worked hard and i studied hard and i never gave up and how i am the best student in my class and i am the best student in my school and i am the best student in my country  but every step of the the way i hard work and dedication and never gave up on my dreems and never gave up on my goals someday i feel that i havent knowledge and i havent skills to do this but i never gave up and i will increase my knowledge and i will increase my skills l */}
 <div className="absolute inset-0 bg-gradient-to-br from-dark via-primary to-gray2 opacity-95" />
        <div className="absolute inset-0">
          <div className="absolute left-[-10%] top-[-10%] w-[500px] h-[500px] bg-accent2/20 rounded-full blur-3xl" />
          <div className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl" />
        </div>
      {/* Call to Action Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              <span className="text-accent2">Ready to Join Our Programs?</span>
            </h2>
            <p className="text-xl text-gray3 mb-12 leading-relaxed">
              Take the first step towards your physics journey. Choose a program that matches your interests and goals.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-accent2 hover:bg-accent text-white font-bold py-4 px-12 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-accent2/30">
                Apply Now
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-12 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage; 