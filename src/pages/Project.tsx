import React from 'react';
import { FileText, Mic, AudioWaveform as Waveform, Users } from 'lucide-react';

export default function Project() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Project Details</h1>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <FeatureCard
          icon={<Mic className="w-8 h-8 text-indigo-600" />}
          title="Speech Recognition"
          description="Convert spoken language into text using advanced audio processing and machine learning techniques."
        />
        <FeatureCard
          icon={<Waveform className="w-8 h-8 text-purple-600" />}
          title="Audio Analysis"
          description="Extract and analyze audio features including MFCCs, spectral contrast, and pitch contours."
        />
        <FeatureCard
          icon={<Users className="w-8 h-8 text-blue-600" />}
          title="Gender Prediction"
          description="Predict speaker gender using machine learning models trained on audio characteristics."
        />
        <FeatureCard
          icon={<FileText className="w-8 h-8 text-green-600" />}
          title="Data Processing"
          description="Process and clean audio data for improved accuracy in recognition and analysis."
        />
      </div>

      {/* Process Flow */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Implementation</h2>
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold mb-4">Key Components</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Speech recognition using Google Web Speech API</li>
            <li>Audio feature extraction with librosa library</li>
            <li>Machine learning models for gender prediction</li>
            <li>Cross-validation for model evaluation</li>
            <li>Data preprocessing and balancing techniques</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}