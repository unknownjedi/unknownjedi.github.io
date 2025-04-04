import React from 'react';

// Define the possible variants for the button
type ButtonVariant = 'default' | 'outline' | 'ghost' | 'link';

// Define the props for the Button component
// Extends standard HTML button attributes
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
}

// Button component converted to TypeScript
const Button: React.FC<ButtonProps> = ({
  className,
  children,
  variant = 'default', // Default variant
  ...props // Spread remaining props (like onClick, disabled, etc.)
}) => {
  // Define styles for each variant
  const variants: Record<ButtonVariant, string> = {
    default:
      'bg-green-600 hover:bg-green-700 text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-md hover:shadow-lg',
    outline:
      'bg-transparent border border-green-500 text-green-400 hover:bg-green-900/50 hover:text-green-300 py-2 px-4 rounded transition duration-300',
    ghost:
      'hover:bg-green-900/50 text-green-400 py-2 px-4 rounded transition duration-300',
    link: 'text-green-400 hover:text-green-300 underline py-2 px-4',
  };

  // Get the style string for the current variant, fallback to default
  const variantStyle = variants[variant] ?? variants.default;

  return (
    // Apply the variant style, any custom className, and pass down other props
    <button className={`${variantStyle} ${className || ''}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
