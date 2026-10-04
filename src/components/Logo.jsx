import React from 'react';

export const Logo = ({ className = "h-11", showText = true, variant = "light" }) => {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* High-Resolution Transparent Emblem */}
      <div className="h-full flex items-center justify-center shrink-0">
        <img 
          src="/assets/images/logo-icon.png" 
          alt="Technofinity Emblem" 
          className="h-full w-auto max-h-full object-contain transition-transform duration-200 group-hover:scale-105"
        />
      </div>

      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <div className="flex items-center text-xl sm:text-2xl font-black tracking-tight font-sans">
            <span className={variant === "dark" ? "text-white" : "text-[#001554]"}>TECHNO</span>
            <span className="text-[#0188FE] bg-gradient-to-r from-[#0050CD] to-[#0188FE] bg-clip-text text-transparent">FINITY</span>
          </div>
          <span className={`text-[8.5px] uppercase tracking-wider font-bold mt-0.5 ${
            variant === "dark" ? "text-slate-400" : "text-slate-500"
          }`}>
            PROJECT INNOVATION CENTER
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
