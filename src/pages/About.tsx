import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Define Team Member Data
const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Lead AI Researcher",
    image: "src/pages/Images/modi.jpg",
    socials: [
      { icon: FaTwitter, url: "https://twitter.com/SarahJohnson", color: "text-blue-400 hover:text-blue-600" },
      { icon: FaFacebook, url: "https://facebook.com/SarahJohnson", color: "text-blue-600 hover:text-blue-800" },
      { icon: FaInstagram, url: "https://instagram.com/SarahJohnson", color: "text-pink-500 hover:text-pink-700" },
      { icon: FaGithub, url: "https://github.com/SarahJohnson", color: "text-gray-800 hover:text-gray-900" },
      { icon: FaLinkedin, url: "https://linkedin.com/in/SarahJohnson", color: "text-blue-700 hover:text-blue-900" },
    ],
  },
  {
    name: "Dr. Michael Chen",
    role: "Speech Processing Expert",
    image: "src/pages/Images/Tom.jpg",
    socials: [
      { icon: FaTwitter, url: "https://twitter.com/MichaelChen", color: "text-blue-400 hover:text-blue-600" },
      { icon: FaFacebook, url: "https://facebook.com/MichaelChen", color: "text-blue-600 hover:text-blue-800" },
      { icon: FaInstagram, url: "https://instagram.com/MichaelChen", color: "text-pink-500 hover:text-pink-700" },
      { icon: FaGithub, url: "https://github.com/MichaelChen", color: "text-gray-800 hover:text-gray-900" },
      { icon: FaLinkedin, url: "https://linkedin.com/in/MichaelChen", color: "text-blue-700 hover:text-blue-900" },
    ],
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "ML Architecture Lead",
    image: "src/pages/Images/tony.jpg",
    socials: [
      { icon: FaTwitter, url: "https://twitter.com/EmilyRodriguez", color: "text-blue-400 hover:text-blue-600" },
      { icon: FaFacebook, url: "https://facebook.com/EmilyRodriguez", color: "text-blue-600 hover:text-blue-800" },
      { icon: FaInstagram, url: "https://instagram.com/EmilyRodriguez", color: "text-pink-500 hover:text-pink-700" },
      { icon: FaGithub, url: "https://github.com/EmilyRodriguez", color: "text-gray-800 hover:text-gray-900" },
      { icon: FaLinkedin, url: "https://linkedin.com/in/EmilyRodriguez", color: "text-blue-700 hover:text-blue-900" },
    ],
  },
];

export default function About() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-cyan-600 to-purple-700 min-h-screen flex flex-col items-center">
      {/* Blurred 3D Moving Background */}
      <div className="absolute inset-0 bg-opacity-50 backdrop-blur-md"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-extrabold text-white mb-8 text-center drop-shadow-lg">
          Meet Our Amazing Team 🚀
        </h1>

        <p className="text-lg text-white mb-12 text-center max-w-2xl mx-auto drop-shadow-md">
          Experts dedicated to pushing AI-powered voice analysis to the next level.
        </p>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.06 }} // Increased Card Size on Hover
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="relative bg-white bg-opacity-30 backdrop-blur-md shadow-xl rounded-3xl p-8 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:bg-opacity-40 flex flex-col items-center"
            >
              {/* Border Glow Effect */}
              <div className="absolute inset-0 rounded-3xl border-4 border-transparent transition-all duration-500 hover:border-cyan-400"></div>

              {/* Zoomable Image Inside Circle */}
              <ZoomableImage src={member.image} alt={member.name} />

              {/* Centered Name & Role */}
              <div className="text-center mt-4">
                <h3 className="text-2xl font-bold text-white drop-shadow-lg">{member.name}</h3>
                <p className="text-gray-200">{member.role}</p>
              </div>

              {/* Social Media Icons with Hover & Links */}
              <div className="flex justify-center space-x-4 mt-4">
                {member.socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-2xl cursor-pointer transition-transform transform hover:scale-110 duration-300 ${social.color}`}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scrolling Copyright Footer */}
      <div className="relative w-full py-4 mt-12 bg-gray-900 bg-opacity-80 backdrop-blur-md">
        <motion.div
          className="text-white text-sm font-light whitespace-nowrap overflow-hidden"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          © 2025 YourCompany | Inspired by Google, Microsoft, and OpenAI | All Rights Reserved | Privacy Policy | Terms & Conditions |
        </motion.div>
      </div>
    </div>
  );
}

// ✅ Zoomable Image Component (Image Zooms Inside Circle)
const ZoomableImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return (
    <div className="w-56 h-56 mx-auto mb-4 overflow-hidden rounded-full border-4 border-gray-300 shadow-lg cursor-pointer">
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.2 }} // Zooms only inside the circular frame
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
    </div>
  );
};
