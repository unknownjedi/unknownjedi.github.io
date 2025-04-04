import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from '../icons';
import { HeroData } from '../../types';

interface HeroProps {
  data: HeroData;
}

const Hero: React.FC<HeroProps> = ({ data }) => (
  <section
    id="hero"
    className="min-h-screen flex flex-col justify-center items-center text-center p-8 relative bg-gradient-to-b from-black/90 via-black/70 to-transparent"
  >
    <h1
      className="text-5xl md:text-7xl font-bold text-green-400 mb-4 animate-fade-in-down"
      style={{ textShadow: '0 0 10px #00FF41' }}
    >
      {data.name}
    </h1>
    <p className="text-xl md:text-2xl text-gray-300 mb-6 animate-fade-in-up delay-100">
      {data.title}
    </p>
    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 animate-fade-in-up delay-200">
      {data.intro}
    </p>
    <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up delay-300">
      <a
        href={`mailto:${data.contact.email}`}
        className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition duration-300"
      >
        <Mail size={20} />
        <span>{data.contact.email}</span>
      </a>
      <span className="flex items-center space-x-2 text-green-400">
        <Phone size={20} />
        <span>{data.contact.phone}</span>
      </span>
      <span className="flex items-center space-x-2 text-green-400">
        <MapPin size={20} />
        <span>{data.contact.location}</span>
      </span>
    </div>
    <div className="flex justify-center gap-6 animate-fade-in-up delay-400">
      <a
        href={`https://github.com/${data.contact.github}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-green-400 transition duration-300"
      >
        <Github size={32} />
      </a>
      <a
        href={`https://linkedin.com/in/${data.contact.linkedin}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-green-400 transition duration-300"
      >
        <Linkedin size={32} />
      </a>
    </div>
    <div className="absolute bottom-10 text-green-500 animate-bounce">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>
  </section>
);

export default Hero