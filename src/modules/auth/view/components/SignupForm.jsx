import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupFormStep from './SignupFormStep';
import RoleSelectStep from './RoleSelectStep';

const SignupForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: role select, 2: form
  const [selectedRole, setSelectedRole] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    sid: '',
    password: '',
    terms: false
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef();

  const roleConfig = {
    student: { label: 'Student', icon: 'school', bg: '#3dbda8', rgb: '61,189,168', btnClass: 'teal', hint: 'Find rides, split food costs, and save money with campus mates.' },
    driver: { label: 'Driver', icon: 'directions_car', bg: '#f07b3a', rgb: '240,123,58', btnClass: 'orange', hint: 'Offer rides, cover petrol costs, earn with your campus community.' },
    admin: { label: 'Admin', icon: 'admin_panel_settings', bg: '#8b5cf6', rgb: '139,92,246', btnClass: 'purple', hint: 'Manage users, verify IDs, and oversee platform operations.' },
  };

  const selectRole = (role) => {
    setSelectedRole(role);
  };

  const goToForm = () => {
    if (!selectedRole) return;
    setStep(2);
  };

  const goBack = () => {
    setStep(1);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleFileUpload = (file) => {
    if (!file) return;
    setUploadedFile(file);
  };

  const clearFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation logic here
    // For now, mock success
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Navigate to verify
    }, 1400);
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] flex flex-col">
      {/* Nav */}
      <nav className="shrink-0 px-5 sm:px-8 h-16 flex items-center justify-between border-b border-black/7 bg-white/90 backdrop-blur-md z-20 sticky top-0">
        <span onClick={() => navigate('/')} className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-xl bg-[#F07B3A] flex items-center justify-center">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </div>
          <span style={{ fontFamily: 'Syne', fontWeight: 800 }} className="text-[#111] text-lg">Sharezi</span>
        </span>
        <span onClick={() => navigate('/login')} className="text-sm text-[#111]/45 hover:text-[#111] transition-colors cursor-pointer">
          Have an account? <span className="text-[#F07B3A] font-semibold">Log in</span>
        </span>
      </nav>

      <div id="scroll-area" className="flex-1 overflow-y-auto">
        <div className="flex-1 flex items-start justify-center px-4 py-10 relative z-10">
          <div className="w-full max-w-[460px]">

            {step === 1 && (
              <RoleSelectStep
                selectedRole={selectedRole}
                onSelectRole={selectRole}
                onContinue={goToForm}
                roleConfig={roleConfig}
              />
            )}

            {step === 2 && (
              <SignupFormStep
                selectedRole={selectedRole}
                formData={formData}
                errors={errors}
                onChange={handleInputChange}
                onSubmit={handleSubmit}
                uploadedFile={uploadedFile}
                onFileUpload={handleFileUpload}
                clearFile={clearFile}
                fileInputRef={fileInputRef}
                roleConfig={roleConfig}
                loading={loading}
                onBack={goBack}
              />
            )}

          </div>
        </div>
      </div>

    </div>
  );
};

export default SignupForm;