import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-primary/95 text-gray3 pt-10 pb-4 px-4 mt-16 flex flex-col items-center border-t-2 border-accent2">
      <div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-start md:items-start px-2  md:gap-12">
        {/* Logo, Description, and Contact */}
        <div className="flex flex-col items-start space-y-2 mb-2 md:mb-0 min-w-[240px] md:max-w-xs w-full">
          <div className="flex items-center space-x-3">
            {/* <div className="w-12 h-12 bg-accent2 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">⚛️</div> */}
            <span className="text-accent2 text-2xl font-extrabold tracking-wider drop-shadow">Physics Club</span>
          </div>
          <p className="text-gray2 text-sm max-w-xs text-left leading-snug py-3">Empowering youth through science, competitions, and the Physics For Youth Program. Join us to explore, learn, and innovate in the world of physics!</p>
          {/* Contact Us */}
          <div className="mt-4 flex flex-col items-start w-full">
            <span className="text-accent font-extrabold text-2xl mb-2">Contact Us</span>
            <a href="mailto:info@physicsclub.org" className="text-gray2 text-lg font-bold hover:text-accent2 transition mb-3">info@physicsclub.org</a>
            <div className="flex justify-start space-x-4 mt-1 text-2xl w-full">
              <a href="#" aria-label="Twitter" className="hover:text-accent2 transition"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Facebook" className="hover:text-accent2 transition"><i className="fab fa-facebook"></i></a>
              <a href="#" aria-label="Instagram" className="hover:text-accent2 transition"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        {/* Divider for mobile */}
        <div className="w-full h-px bg-gray2/30 md:hidden" />
        {/* Links: stack vertically until md, then two columns */}
        <div className="my-4 grid grid-cols-2 gap-4 w-full md:w-auto justify-start items-start md:pt-8">
          <div>
            <h4 className="text-primary font-medium text-base mb-2">Explore</h4>
            <ul className="space-y-2 text-base font-semibold min-w-[120px] text-left">
              <li><a href="#about" className="hover:text-accent2 transition">About</a></li>
              <li><a href="#competition" className="hover:text-accent2 transition">Competition</a></li>
              <li><a href="#pfyp" className="hover:text-accent2 transition">PFYP</a></li>
              <li><a href="#history" className="hover:text-accent transition">Our History</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary font-medium text-base mb-2">Resources</h4>
            <ul className="space-y-2 text-base font-semibold min-w-[120px] text-left">
              <li><a href="#events" className="hover:text-accent transition">Events</a></li>
              <li><a href="#team" className="hover:text-accent transition">Team</a></li>
              <li><a href="#faq" className="hover:text-accent transition">FAQ</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="w-full max-w-4xl text-center text-xs text-gray2 border-t border-gray1 pt-2 mt-1 px-2">
        &copy; {new Date().getFullYear()} Physics Club. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 