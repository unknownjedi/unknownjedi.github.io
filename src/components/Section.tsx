import React from 'react';
import { SpecificIconProps } from './icons';

interface SectionProps {
  id: string;
  title: string;
  icon: React.ReactElement<SpecificIconProps>;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, icon, children }) => (
  <section
    id={id}
    className="py-16 md:py-24 px-4 md:px-8 relative bg-black/80"
  >
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center mb-12">
        {React.isValidElement(icon)
          ? React.cloneElement(icon, {
            size: 32,
            className: 'text-green-400 mr-4',
          })
          : null}
        <h2
          className="text-3xl md:text-4xl font-bold text-green-400"
          style={{ textShadow: '0 0 5px #00FF41' }}
        >
          {title}
        </h2>
      </div>
      {children}
    </div>
  </section>
);

export default Section