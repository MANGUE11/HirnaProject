import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  disabled = false,
  type = 'button',
  ...props 
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-hirna-orange text-white hover:bg-[#a85a18] hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0',
    secondary: 'bg-transparent text-white border-2 border-hirna-orange hover:bg-hirna-orange disabled:opacity-50',
    success: 'bg-hirna-green text-white hover:bg-[#28a83d] hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0',
    ghost: 'bg-transparent text-white hover:bg-hirna-purple/30 disabled:opacity-50',
    gradient: 'bg-gradient-lr text-white hover:opacity-90 hover:-translate-y-0.5 disabled:opacity-50',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
