import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { AlertCircle, Send, User, Mail, MessageSquare, Sparkles, X } from 'lucide-react';

// Enhanced Ripple effect with more dynamic animation
const Ripple = React.memo(({ x, y }) => (
  <div 
    className="fixed w-64 h-64 -ml-32 -mt-32 mix-blend-difference pointer-events-none"
    style={{ left: x, top: y }}
  >
    <div className="absolute inset-0 border-2 border-current rounded-full animate-ripple opacity-75" />
    <div className="absolute inset-0 border border-current rounded-full animate-ripple-delayed opacity-50" />
    <div className="absolute inset-0 border border-current rounded-full animate-ripple-slow opacity-25" />
    <div className="absolute inset-0 bg-current rounded-full animate-ripple-fade opacity-10" />
  </div>
));

Ripple.displayName = 'Ripple';

// Floating particles effect component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-current rounded-full opacity-20 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  );
};

// Enhanced form input with floating label and animation
const FormInput = React.memo(({ 
  icon: Icon, 
  value, 
  onChange, 
  placeholder, 
  type = 'text', 
  isTextArea = false,
  error
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isLight = type === 'text' || type === 'email';
  const hasValue = value.length > 0;

  const inputProps = {
    value,
    onChange: (e) => onChange(e.target.value),
    onFocus: () => setIsFocused(true),
    onBlur: () => setIsFocused(false),
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    className: `
      w-full bg-transparent px-8 py-3 text-lg
      transition-all duration-300 ease-out
      border-b-2 focus:outline-none
      ${isTextArea ? 'h-32 resize-none' : ''}
      ${isLight 
        ? 'text-black placeholder-transparent focus:border-black/50' 
        : 'text-white placeholder-transparent focus:border-white/50'}
      ${error 
        ? 'border-red-500' 
        : isLight 
          ? 'border-black/10' 
          : 'border-white/10'}
      ${(isFocused || hasValue) ? 'pt-6' : ''}
    `,
    placeholder,
    onClick: (e) => e.stopPropagation()
  };

  return (
    <div className="relative w-80 group">
      <Icon 
        className={`
          absolute left-0 transition-all duration-300
          ${isTextArea ? 'top-4' : 'top-1/2 -translate-y-1/2'}
          ${isLight ? 'text-black/30' : 'text-white/30'}
          ${isFocused || isHovered ? 'scale-110' : ''}
        `}
      />
      
      <label 
        className={`
          absolute left-8 transition-all duration-300
          ${isLight ? 'text-black/50' : 'text-white/50'}
          ${(isFocused || hasValue) 
            ? 'text-xs top-1' 
            : 'text-base top-1/2 -translate-y-1/2'}
        `}
      >
        {placeholder}
      </label>

      {isTextArea ? (
        <textarea {...inputProps} />
      ) : (
        <input type={type} {...inputProps} />
      )}

      {error && (
        <span className="absolute right-0 top-1/2 -translate-y-1/2 text-red-500 text-sm">
          {error}
        </span>
      )}

      <div 
        className={`
          absolute bottom-0 left-0 w-full h-0.5 
          transition-transform duration-700 ease-out
          ${isLight ? 'bg-black/5' : 'bg-white/5'}
          ${isFocused ? 'scale-x-100' : 'scale-x-0'}
        `} 
      />
    </div>
  );
});

FormInput.displayName = 'FormInput';

// Success animation component
const SuccessAnimation = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-green-500 animate-success-fade">
    <Sparkles className="w-16 h-16 text-white animate-success-sparkle" />
  </div>
);

const SplitDimensionContact = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [ripples, setRipples] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Required';
    if (!formData.email) newErrors.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }
    if (!formData.message) newErrors.message = 'Required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFieldChange = useCallback((field) => (value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: '' }));
  }, []);

  const addRipple = useCallback((x, y) => {
    const newRipple = { id: Date.now(), x, y };
    setRipples(prev => [...prev, newRipple]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 2000);
  }, []);

  const handleSectionClick = useCallback((section, e) => {
    if (activeSection === section) return;
    if (e) {
      addRipple(e.clientX, e.clientY);
    }
    setActiveSection(section);
  }, [activeSection, addRipple]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
      setShowSuccess(true);
      
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setActiveSection(null);
        setSubmitted(false);
        setShowSuccess(false);
      }, 2000);
    } catch (error) {
      console.error('Submission error:', error);
      setErrors({ submit: 'Failed to submit. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setActiveSection(null);
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <div className="h-screen w-screen flex overflow-hidden bg-black absolute top-[625vh] left-[-1vw]">
      {/* Left Section */}
      <div
        className={`
          w-1/2 h-full relative transition-all duration-700 ease-out
          ${activeSection === 'left' ? 'bg-white' : 'bg-black'}
          ${activeSection === null ? 'cursor-pointer hover:bg-white/10' : ''}
        `}
        onClick={(e) => handleSectionClick('left', e)}
      >
        <FloatingParticles />
        
        <div 
          className={`
            absolute inset-0 flex flex-col items-center justify-center gap-16
            ${activeSection === 'left' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}
            transition-all duration-700 ease-out
          `}
        >
          <FormInput
            icon={User}
            value={formData.name}
            onChange={handleFieldChange('name')}
            placeholder="YOUR NAME"
            type="text"
            error={errors.name}
          />
          <FormInput
            icon={Mail}
            value={formData.email}
            onChange={handleFieldChange('email')}
            placeholder="YOUR EMAIL"
            type="email"
            error={errors.email}
          />
        </div>
      </div>

      {/* Right Section */}
      <div
        className={`
          w-1/2 h-full relative transition-all duration-700 ease-out
          ${activeSection === 'right' ? 'bg-black' : 'bg-white'}
          ${activeSection === null ? 'cursor-pointer hover:bg-black/10' : ''}
        `}
        onClick={(e) => handleSectionClick('right', e)}
      >
        <FloatingParticles />
        
        <div 
          className={`
            absolute inset-0 flex flex-col items-center justify-center gap-8
            ${activeSection === 'right' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}
            transition-all duration-700 ease-out
          `}
        >
          <FormInput
            icon={MessageSquare}
            value={formData.message}
            onChange={handleFieldChange('message')}
            placeholder="YOUR MESSAGE"
            type="message"
            isTextArea
            error={errors.message}
          />

          <button
            onClick={handleSubmit}
            disabled={submitted || isLoading}
            className={`
              group flex items-center gap-3 px-8 py-3
              border-2 border-white/20 rounded-full
              text-white text-lg font-medium
              transition-all duration-300
              hover:bg-white hover:text-black
              disabled:opacity-50 disabled:cursor-not-allowed
              ${submitted ? 'bg-white text-black scale-105' : ''}
              ${isLoading ? 'animate-pulse' : ''}
            `}
          >
            <span>{isLoading ? 'SENDING...' : submitted ? 'SENT!' : 'SEND MESSAGE'}</span>
            <Send className={`
              w-4 h-4 transition-all duration-300
              ${submitted ? 'translate-x-2 -translate-y-2 rotate-12' : 'group-hover:translate-x-1'}
            `} />
          </button>
        </div>
      </div>

      {/* Initial State Guide */}
      {activeSection === null && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="flex items-center gap-3 text-gray-500 animate-pulse">
            <AlertCircle className="w-6 h-6" />
            <span className="text-xl font-light">Choose a side to begin</span>
          </div>
        </div>
      )}

      {/* Reset Button */}
      {activeSection !== null && (
        <button
          onClick={resetForm}
          className="absolute top-6 right-6 p-2 rounded-full bg-gray-800/20 
            hover:bg-gray-800/40 transition-all duration-300"
        >
          <X className="w-5 h-5 text-current" />
        </button>
      )}

      {/* Ripple Effects */}
      {ripples.map(ripple => (
        <Ripple key={ripple.id} x={ripple.x} y={ripple.y} />
      ))}

      {/* Success Animation */}
      {showSuccess && <SuccessAnimation />}

      {/* Split Line */}
      <div className="absolute left-1/2 top-0 w-px h-full bg-current mix-blend-difference" />
    </div>
  );
};

// Add required keyframe animations to the document
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(10px, -10px); }
    50% { transform: translate(-5px, 5px); }
    75% { transform: translate(5px, -5px); }
  }
  
  @keyframes ripple {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(1); opacity: 0; }
  }
  
  @keyframes ripple-delayed {
    0% { transform: scale(0); opacity: 0.8; }
    50% { transform: scale(0.5); opacity: 0.4; }
    100% { transform: scale(1); opacity: 0; }
  }
  
  @keyframes ripple-slow {
    0% { transform: scale(0); opacity: 0.6; }
    75% { transform: scale(0.75); opacity: 0.2; }
    100% { transform: scale(1); opacity: 0; }
  }
  
  @keyframes ripple-fade {
    0% { transform: scale(0); opacity: 0.3; }
    100% { transform: scale(1); opacity: 0; }
  }

  @keyframes success-fade {
    0% { opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { opacity: 0; }
  }

  @keyframes success-sparkle {
    0% { transform: scale(0) rotate(0deg); opacity: 0; }
    25% { transform: scale(1.2) rotate(45deg); opacity: 1; }
    50% { transform: scale(1) rotate(90deg); opacity: 0.8; }
    75% { transform: scale(1.2) rotate(135deg); opacity: 1; }
    100% { transform: scale(0) rotate(180deg); opacity: 0; }
  }

  .animate-float { animation: float 8s infinite; }
  .animate-ripple { animation: ripple 2s ease-out forwards; }
  .animate-ripple-delayed { animation: ripple-delayed 2s ease-out forwards; }
  .animate-ripple-slow { animation: ripple-slow 2s ease-out forwards; }
  .animate-ripple-fade { animation: ripple-fade 2s ease-out forwards; }
  .animate-success-fade { animation: success-fade 2.5s ease-out forwards; }
  .animate-success-sparkle { animation: success-sparkle 2.5s ease-out forwards; }
`;

document.head.appendChild(style);

export default SplitDimensionContact;