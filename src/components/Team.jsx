import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import vansh from "../assets/vansh-chavda.jpg";
import yash from "../assets/yash-gohel.jpg";
import { Github, Linkedin, Instagram } from "lucide-react"; // Import Lucide React icons
import { FaXTwitter } from "react-icons/fa6"; // Import FaTwitter icon

const teamMembers = [
  {
    name: "Vansh Chavda",
    image: vansh,
    github: "itsvanshchavda",
    linkedin: "vanshchavda07",
    twitter: "vanshchavda_",
    instagram: "vanshhh._.07",
  },
  {
    name: "Yash Gohel",
    image: yash,
    github: "BurningHat20",
    linkedin: "yashgohel777",
    twitter: "yashgohel_",
    instagram: "yashdgaf._",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function Team() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.pageYOffset;
      const height = window.innerHeight;
      const sectionPosition = document.getElementById("Team").offsetTop;

      if (top + height >= sectionPosition && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  return (
    <div name="team" id="Team">
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-40 lg:py-16">
          <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl mb-8">
            Meet Our Team
          </h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col items-center justify-center text-center p-8"
                variants={cardVariants}
              >
                <img
                  alt={member.name}
                  src={member.image}
                  className="h-40 w-40 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>

                <div className="flex justify-center space-x-4 mb-4">
                  <a
                    href={`https://github.com/${member.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github
                      size={24}
                      className="text-gray-400 hover:text-gray-300 transition duration-300"
                    />
                  </a>
                  <a
                    href={`https://www.linkedin.com/in/${member.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin
                      size={24}
                      className="text-gray-400 hover:text-gray-300 transition duration-300"
                    />
                  </a>
                  <a
                    href={`https://twitter.com/${member.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter
                      size={24}
                      className="text-gray-400 hover:text-gray-300 transition duration-300"
                    />
                  </a>
                  <a
                    href={`https://www.instagram.com/${member.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram
                      size={24}
                      className="text-gray-400 hover:text-gray-300 transition duration-300"
                    />
                  </a>
                </div>

                <p className="text-gray-500 mb-4">Full Stack Developer</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Team;
