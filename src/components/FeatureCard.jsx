import React from 'react';

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  variant = 'default',
  className = '' 
}) => {
  const variants = {
    default: 'bg-hirna-navy border-t-4 border-hirna-orange',
    outlined: 'bg-transparent border border-white/20',
  };

  return (
    <div className={`rounded-xl p-6 text-center ${variants[variant]} ${className}`}>
      {/* Icon Container */}
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 rounded-full bg-hirna-orange/20 flex items-center justify-center text-hirna-orange">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-hirna-orange mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-white/80 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
