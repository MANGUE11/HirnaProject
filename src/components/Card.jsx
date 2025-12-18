import React from 'react';

const Card = ({ 
  children, 
  variant = 'default', 
  className = '',
  hover = true,
  ...props 
}) => {
  const baseStyles = 'rounded-2xl p-6 transition-all duration-300';
  
  const variants = {
    default: 'bg-hirna-navy',
    gradient: 'bg-gradient-tb',
    dark: 'bg-hirna-dark border border-hirna-purple/20',
    glass: 'bg-hirna-purple/10 backdrop-blur-lg border border-hirna-purple/20',
  };

  const hoverStyles = hover 
    ? 'hover:-translate-y-1 hover:shadow-xl hover:shadow-hirna-purple/10' 
    : '';

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// Sous-composants pour une meilleure organisation
Card.Header = ({ children, className = '' }) => (
  <div className={`mb-4 ${className}`}>
    {children}
  </div>
);

Card.Title = ({ children, className = '' }) => (
  <h3 className={`text-xl font-semibold text-white ${className}`}>
    {children}
  </h3>
);

Card.Description = ({ children, className = '' }) => (
  <p className={`text-hirna-gray ${className}`}>
    {children}
  </p>
);

Card.Content = ({ children, className = '' }) => (
  <div className={className}>
    {children}
  </div>
);

Card.Footer = ({ children, className = '' }) => (
  <div className={`mt-4 pt-4 border-t border-hirna-purple/20 ${className}`}>
    {children}
  </div>
);

export default Card;
