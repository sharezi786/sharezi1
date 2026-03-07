import React from 'react';
import { useNavigate } from 'react-router-dom';
import { roles, MapPinIcon } from '../../model/roles';

const RoleSelect = ({ onSelect }) => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="font-display font-bold text-3xl text-[#2D3748] mb-3">Join Campus Share-All</h1>
        <p className="text-[#8A95A3] max-w-md">Choose your role to get started with rides and food sharing on campus.</p>
      </div>

      {/* Role cards */}
      <div className="grid sm:grid-cols-2 gap-4 w-full max-w-2xl mb-8">
        {roles.map(({ key, Icon, color, shadow, title, desc, cta, ctaCls }) => (
          <div key={key}
            className="bg-white rounded-2xl border border-[#E2E8F0] p-7 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            {/* Icon */}
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} text-white flex items-center justify-center mb-5`}
              style={{ boxShadow: `0 8px 20px ${shadow}` }}>
              <Icon />
            </div>

            <h2 className="font-display font-bold text-xl text-[#2D3748] mb-2">{title}</h2>
            <p className="text-sm text-[#8A95A3] leading-relaxed mb-6">{desc}</p>

            <button
              onClick={onSelect}
              className={`w-full h-11 rounded-xl font-bold text-sm transition-all ${ctaCls}`}>
              {cta}
            </button>
          </div>
        ))}
      </div>

      <p className="text-sm text-[#8A95A3]">
        Already have an account?{" "}
        <span onClick={() => navigate('/login')} className="text-[#F07B3A] font-semibold hover:underline cursor-pointer">
          Log In
        </span>
      </p>
    </div>
  );
};

export default RoleSelect;
