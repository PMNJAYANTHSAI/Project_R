import React from 'react';
import { Mic, AudioWaveform as Waveform, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center w-full overflow-hidden">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Voice Analysis & Recognition
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI-powered speech recognition and gender analysis system
          </p>
          <div className="relative w-full max-w-4xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1590658006821-04f4008d5717?auto=format&fit=crop&q=80&w=1200"
              alt="Voice Analysis"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <FeatureCard
            icon={<Mic className="w-12 h-12 text-indigo-600 mb-4" />}
            title="Voice Recognition"
            description="State-of-the-art speech recognition with high accuracy"
          />
          <FeatureCard
            icon={<Waveform className="w-12 h-12 text-purple-600 mb-4" />}
            title="Audio Analysis"
            description="Advanced audio feature extraction and processing"
          />
          <FeatureCard
            icon={<Users className="w-12 h-12 text-blue-600 mb-4" />}
            title="Gender Detection"
            description="ML-powered gender prediction from voice samples"
          />
        </div>
      </div>

      {/* Copyright Scrolling Footer */}
      <CopyrightFooter />
    </div>
  );
}

// ✅ Reusable Feature Card Component
const FeatureCard: React.FC<{ icon: JSX.Element; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
      {icon}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// ✅ Fixed Copyright Footer Component
const CopyrightFooter = () => {
  return (
    <div className="relative w-full py-4 bg-gray-900 bg-opacity-80 backdrop-blur-md overflow-hidden">
      <motion.div
        className="text-white text-sm font-light whitespace-nowrap"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        © 2025 YourCompany | Inspired by Google, Microsoft, and OpenAI | All Rights Reserved | Privacy Policy | Terms & Conditions |
      </motion.div>
    </div>
  );
};
