import React from "react";

const competitions = [
  {
    title: "Physics Olympiad",
    date: "August 15, 2025",
    description: "A challenging competition for high school students to test their physics knowledge and problem-solving skills.",
    link: "/competitions/olympiad",
    image: "/assets/competition1.jpg",
  },
  {
    title: "Experimental Physics Challenge",
    date: "October 10, 2025",
    description: "Teams compete in hands-on experiments and present their findings to a panel of judges.",
    link: "/competitions/experimental",
    image: "/assets/competition2.jpg",
  },
  {
    title: "Physics Quiz Bowl",
    date: "December 5, 2025",
    description: "A fast-paced quiz competition covering all areas of physics, open to all club members.",
    link: "/competitions/quizbowl",
    image: "/assets/competition3.jpg",
  },
];

const CompetitionPage: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-primary/30 to-gray-800 py-16 px-4">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-accent2 mb-8 text-center">Competitions</h1>
      <p className="text-gray3 text-lg text-center mb-12">
        Join our exciting physics competitions and challenge yourself with the best minds!
      </p>
      <div className="grid gap-10 md:grid-cols-2">
        {competitions.map((comp, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-lg rounded-2xl border border-accent2/20 shadow-lg overflow-hidden flex flex-col md:flex-row"
          >
            <div className="md:w-1/3 w-full h-48 md:h-auto flex-shrink-0 bg-accent2/10 flex items-center justify-center">
              <img
                src={comp.image}
                alt={comp.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h2 className="text-2xl font-bold text-accent2 mb-2">{comp.title}</h2>
                <p className="text-gray-400 mb-2">{comp.date}</p>
                <p className="text-gray3 mb-4">{comp.description}</p>
              </div>
              <a
                href={comp.link}
                className="inline-block mt-2 bg-accent2 hover:bg-accent text-white font-semibold px-6 py-2 rounded-full transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default CompetitionPage;