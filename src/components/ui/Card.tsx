import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
}

interface CardDescriptionProps {
  className?: string;
  children: React.ReactNode;
}

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

interface CardFooterProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children }) => (
  <div
    className={`bg-gray-900/70 backdrop-blur-sm border border-green-700/30 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-green-500/20 ${className}`}
  >
    {children}
  </div>
);

const CardHeader: React.FC<CardHeaderProps> = ({ className, children }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);
const CardTitle: React.FC<CardTitleProps> = ({ className, children }) => (
  <h3 className={`text-xl font-semibold text-green-400 ${className}`}>
    {children}
  </h3>
);
const CardDescription: React.FC<CardDescriptionProps> = ({
  className,
  children,
}) => <p className={`text-sm text-gray-400 ${className}`}>{children}</p>;
const CardContent: React.FC<CardContentProps> = ({ className, children }) => (
  <div className={className}>{children}</div>
);
const CardFooter: React.FC<CardFooterProps> = ({ className, children }) => (
  <div className={`mt-4 pt-4 border-t border-green-700/20 ${className}`}>
    {children}
  </div>
);

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
