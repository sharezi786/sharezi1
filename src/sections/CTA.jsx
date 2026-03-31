import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';

// Memoize CTA component for performance
const CTA = memo(() => {
  const navigate = useNavigate();
  
  const handleStudentJoin = () => {
    navigate('/signup');
  };
  
  const handleDriverJoin = () => {
    navigate('/signup?role=driver');
  };
  
  return (
    <section className="py-20 px-4 sm:px-6 bg-white section-divider">
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#111] rounded-3xl overflow-hidden p-10 sm:p-14 text-center">
          <span className="icon text-5xl mb-4 block" style={{ color: '#F07B3A' }}>
            school
          </span>
          <h2 className="text-4xl sm:text-5xl text-white leading-tight mb-4">
            Your campus,<br/>your community.
          </h2>
          <p className="text-white/50 text-base mb-9 max-w-md mx-auto">
            Join 2,400+ students already sharing rides and food on Sharezi. Takes 2 minutes to sign up.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button 
              className="btn-glow font-bold text-sm px-8 py-3.5 rounded-2xl inline-flex items-center justify-center gap-2"
              onClick={handleStudentJoin}
              aria-label="Join as Student"
            >
              Join as Student
              <span className="icon" style={{ fontSize: '17px' }}>arrow_forward</span>
            </button>
            <button 
              className="border border-white/20 text-white/80 hover:border-white/40 hover:text-white text-sm font-semibold px-8 py-3.5 rounded-2xl inline-flex items-center justify-center transition-colors"
              onClick={handleDriverJoin}
              aria-label="Become a Driver"
            >
              Become a Driver
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

CTA.displayName = 'CTA';

export default CTA;
