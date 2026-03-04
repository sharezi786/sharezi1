import React from 'react';

const InputField = ({ id, type, value, onChange, placeholder, error, icon, inputMode }) => {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        inputMode={inputMode}
        className={`h-11 px-4 pr-10 rounded-xl border bg-white text-sm outline-none focus:border-[#F07B3A] w-full ${error ? 'border-[#E53E3E]' : 'border-[#E2E8F0]'}`}
      />
      {icon && <div className="absolute right-3 top-1/2 transform -translate-y-1/2">{icon}</div>}
      {error && <p className="text-[#E53E3E] text-xs mt-1">{error}</p>}
    </div>
  );
};

export default InputField;