import React from 'react';

interface BadgeProps {
  className?: string;
  children: React.ReactNode;
  variant?: 'default' | 'secondary';
}

const Badge: React.FC<BadgeProps> = ({
  className,
  children,
  variant = 'default',
}) => {
  const variants = {
    default: 'bg-green-900/80 text-green-300 border-green-700/50',
    secondary: 'bg-gray-700/80 text-gray-300 border-gray-600/50',
  };
  // Ensure variant is one of the keys in variants object
  const currentVariant = variants[variant] || variants.default;

  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium border ${currentVariant} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
