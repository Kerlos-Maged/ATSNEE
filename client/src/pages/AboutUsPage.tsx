import React from "react";
import {TeamMembers} from "../constants/index"; // Assuming you have a data file for team members


const AboutUsPage: React.FC = () => {
  return (
    <>
    <div className="w-full bg-primary/95 text-gray3 pb-4 px-4 flex flex-col justify-center items-center border-b-2 border-accent2">
    <div className="w-full max-w-[1300px] flex flex-col justify-center items-center px-2 gap-12">
            {/* Hero Section with Split Design */}
            <div className="relative min-h-[80vh] flex items-center ">

               <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                    <h1 className="text-7xl font-bold mb-6 leading-tight">
                    <span className="text-accent2">About us?</span>
                    <br />
                    {/* <span className="text-white text-6xl">ATSNEE Physics Club</span> */}
                    </h1>
                    <p className="text-gray3 text-xl leading-relaxed max-w-lg text-center md:text-left">
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, voluptates voluptate aut animi voluptatibus eum rem adipisci maxime aliquid, molestiae tempore beatae quas, nihil temporibus doloribus nemo mollitia aspernatur sequi?
                    </p>
                    <button className="mt-5 bg-accent2 hover:bg-accent text-white font-bold py-4 px-12 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-accent2/30">
                    Meet Our Team
                    </button>
                </div>
                
                <div className="flex flex-col gap-4">
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
                   <div className="relative">
                    <div className="absolute inset-0 bg-accent2/20 rounded-full blur-3xl"></div>
                    <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-accent2 rounded-lg flex items-center justify-center text-2xl">🎯</div>
                        <h3 className="text-white text-xl font-bold">Our Vision</h3>
                        </div>
                        <p className="text-gray3">To inspire and nurture young minds in their journey through physics.</p>
                    </div>
                    </div>
                </div>
                
                </div>
                </div>

                
            </div>
            {/* Team Members*/}
            <div className="">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        <span className="text-accent2">Our Leadership Team</span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TeamMembers.map((member, index) => (
                            <div key={index} className="group">
                                <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20">
                                    <div className="h-64 bg-accent2/20 flex items-center justify-center text-6xl">{member.image ? <img src={member.image} alt={member.name} className="w-full h-full object-cover" /> : "👨‍🔬"}</div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                                        <p className="text-accent2 mb-4">{member.role}</p>
                                        <p className="text-gray3">{member.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
             {/* Join Us Section with Modern Design */}
            <div className="py-8 bg-white/5 rounded-3xl">
                <div className="container mx-auto px-4 ">
                <div className="max-w-4xl mx-auto text-center gap-6 flex flex-col items-center">
                    <h2 className="text-4xl font-bold">
                    <span className="text-accent2">Join Our Community</span>
                    </h2>
                    <p className="text-[18px] text-gray3 leading-relaxed">
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
        </div>
    </>
  
  );
};

export default AboutUsPage;
