import React from 'react';

interface IconProps {
  path: string;
  size?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ path, size = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d={path} />
  </svg>
);

// Define props for specific icons (optional, mainly for consistency if needed)
type SpecificIconProps = Omit<IconProps, 'path'>;

const Mail: React.FC<SpecificIconProps> = (props) => (
  <Icon
    path="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6"
    {...props}
  />
);
const Phone: React.FC<SpecificIconProps> = (props) => (
  <Icon
    path="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    {...props}
  />
);
const MapPin: React.FC<SpecificIconProps> = (props) => (
  <Icon
    path="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
    {...props}
  />
);
const Github: React.FC<SpecificIconProps> = (props) => (
  <Icon
    path="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
    {...props}
  />
);
const Linkedin: React.FC<SpecificIconProps> = (props) => (
  <Icon
    path="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
    {...props}
  />
);
const Briefcase: React.FC<SpecificIconProps> = (props) => (
  <Icon path="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" {...props} />
);
const GraduationCap: React.FC<SpecificIconProps> = (props) => (
  <Icon
    path="M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-5"
    {...props}
  />
);
const Code: React.FC<SpecificIconProps> = (props) => (
  <Icon path="M16 18l6-6-6-6M8 6l-6 6 6 6" {...props} />
);
const GitMerge: React.FC<SpecificIconProps> = (props) => (
  <Icon
    path="M18 18h-4.5a4.5 4.5 0 0 1 0-9H18 M6 6h4.5a4.5 4.5 0 0 1 0 9H6 M12 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
    {...props}
  />
);
const Layers: React.FC<SpecificIconProps> = (props) => (
  <Icon
    path="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
    {...props}
  />
);

export {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Briefcase,
  GraduationCap,
  Code,
  GitMerge,
  Layers,
};
