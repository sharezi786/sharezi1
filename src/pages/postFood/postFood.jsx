import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// Internal CSS Styles
const styles = `
  /* Global Styles */
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'DM Sans', sans-serif;
    background: #F7F7F5;
    color: #111;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
  }
  
  .icon {
    font-family: 'Material Symbols Rounded';
    font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    font-style: normal;
    line-height: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    user-select: none;
  }
  
  .icon-o {
    font-family: 'Material Symbols Rounded';
    font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
    font-style: normal;
    line-height: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    user-select: none;
  }
  
  /* Background Pattern */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3Cfilter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.022'/%3E%3C/svg%3E");
  }
  
  /* Navigation */
  .top-nav {
    background: rgba(247,247,245,.95);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(0,0,0,.07);
    position: sticky;
    top: 0;
    z-index: 20;
  }
  
  /* Section Styles */
  .section {
    background: #fff;
    border: 1.5px solid rgba(0,0,0,.07);
    border-radius: 20px;
    padding: 20px;
    position: relative;
  }
  
  /* Labels */
  .lbl {
    display: block;
    font-size: 13px;
    font-weight: 600;
    color: #111;
    margin-bottom: 8px;
  }
  
  /* Input Styles */
  .inp-wrap {
    position: relative;
    display: flex;
    align-items: center;
  }
  
  .inp {
    width: 100%;
    height: 44px;
    border: 1.5px solid rgba(0,0,0,.12);
    border-radius: 13px;
    padding: 0 16px 0 44px;
    font-size: 14px;
    font-weight: 500;
    background: #fff;
    transition: all .18s ease;
    outline: none;
  }
  
  .inp:focus {
    border-color: #F07B3A;
    box-shadow: 0 0 0 3px rgba(240,123,58,.1);
  }
  
  .inp.err {
    border-color: #EF4444;
    background: #FEF2F2;
  }
  
  .inp-ta {
    width: 100%;
    min-height: 88px;
    border: 1.5px solid rgba(0,0,0,.12);
    border-radius: 13px;
    padding: 12px 16px 12px 44px;
    font-size: 14px;
    font-weight: 500;
    background: #fff;
    transition: all .18s ease;
    outline: none;
    resize: vertical;
    font-family: 'DM Sans', sans-serif;
  }
  
  .inp-ta:focus {
    border-color: #F07B3A;
    box-shadow: 0 0 0 3px rgba(240,123,58,.1);
  }
  
  .inp-plain {
    width: 100%;
    height: 40px;
    border: 1.5px solid rgba(0,0,0,.12);
    border-radius: 10px;
    padding: 0 12px;
    font-size: 13px;
    font-weight: 500;
    background: #fff;
    transition: all .18s ease;
    outline: none;
  }
  
  .inp-plain:focus {
    border-color: #F07B3A;
    box-shadow: 0 0 0 3px rgba(240,123,58,.1);
  }
  
  /* Input Icons */
  .i-l {
    position: absolute;
    left: 16px;
    color: #111;
    opacity: 0.4;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .i-l-top {
    position: absolute;
    left: 16px;
    top: 12px;
    color: #111;
    opacity: 0.4;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .pfx {
    position: absolute;
    left: 44px;
    color: #111;
    opacity: 0.4;
    font-weight: 600;
    pointer-events: none;
  }
  
  /* Chips */
  .chip {
    height: 36px;
    padding: 0 16px;
    border-radius: 18px;
    font-size: 13px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    transition: all .18s ease;
    border: 1.5px solid rgba(0,0,0,.12);
    background: #fff;
    color: #111;
  }
  
  .chip:hover {
    border-color: rgba(0,0,0,.22);
    box-shadow: 0 2px 8px rgba(0,0,0,.08);
  }
  
  .chip.on-orange {
    background: #F07B3A;
    color: #fff;
    border-color: #F07B3A;
  }
  
  .chip.on-green {
    background: #15803D;
    color: #fff;
    border-color: #15803D;
  }
  
  .chip.on-red {
    background: #B91C1C;
    color: #fff;
    border-color: #B91C1C;
  }
  
  .chip.on-teal {
    background: #2A9E8C;
    color: #fff;
    border-color: #2A9E8C;
  }
  
  /* Stepper */
  .stepper {
    display: flex;
    align-items: center;
    gap: 4px;
    background: #F7F7F5;
    border-radius: 14px;
    padding: 4px;
  }
  
  .stepper-btn {
    width: 32px;
    height: 32px;
    border: none;
    background: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 300;
    cursor: pointer;
    transition: all .15s ease;
    box-shadow: 0 1px 3px rgba(0,0,0,.1);
  }
  
  .stepper-btn:hover {
    background: #F7F7F5;
  }
  
  .stepper-val {
    width: 40px;
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    color: #111;
    font-family: 'Syne', sans-serif;
  }
  
  /* Toggle Switch */
  .toggle-track {
    width: 52px;
    height: 28px;
    border-radius: 14px;
    position: relative;
    cursor: pointer;
    transition: background .3s ease;
  }
  
  .toggle-thumb {
    width: 22px;
    height: 22px;
    border-radius: 11px;
    background: #fff;
    position: absolute;
    top: 3px;
    transition: left .3s ease;
    box-shadow: 0 2px 4px rgba(0,0,0,.2);
  }
  
  /* Buttons */
  .btn-orange {
    background: #F07B3A;
    color: #fff;
    font-weight: 700;
    font-size: 15px;
    height: 52px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all .18s ease;
    box-shadow: 0 4px 16px rgba(240,123,58,.28);
    border: none;
    cursor: pointer;
    width: 100%;
  }
  
  .btn-orange:hover {
    background: #E8662A;
    transform: translateY(-1px);
    box-shadow: 0 8px 24px rgba(240,123,58,.38);
  }
  
  .btn-orange:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
  
  .btn-outline {
    background: #fff;
    color: #111;
    font-weight: 600;
    font-size: 14px;
    height: 44px;
    border-radius: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all .18s ease;
    border: 1.5px solid rgba(0,0,0,.12);
    cursor: pointer;
    width: 100%;
  }
  
  .btn-outline:hover {
    border-color: rgba(0,0,0,.22);
    box-shadow: 0 4px 10px rgba(0,0,0,.06);
  }
  
  /* Photo Upload */
  .photo-slot {
    position: relative;
    aspect-ratio: 1;
    border: 2px dashed rgba(0,0,0,.12);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all .18s ease;
    overflow: hidden;
    background: #F7F7F5;
  }
  
  .photo-slot:hover {
    border-color: #F07B3A;
    background: #FFF3EC;
  }
  
  .photo-slot img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  /* Error Messages */
  .ferr {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 6px;
    color: #EF4444;
    font-size: 12px;
    font-weight: 500;
  }
  
  /* Color Variables */
  .text-orange {
    color: #F07B3A;
  }
  
  .bg-orange {
    background: #F07B3A;
  }
  
  .text-teal-dark {
    color: #2A9E8C;
  }
  
  .bg-red-light {
    background: #FEF2F2;
  }
  
  /* Animations */
  @keyframes up {
    from {
      opacity: 0;
      transform: translateY(14px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .u1 {
    animation: up .45s .04s cubic-bezier(.22,1,.36,1) both;
  }
  
  .u2 {
    animation: up .45s .10s cubic-bezier(.22,1,.36,1) both;
  }
  
  .u3 {
    animation: up .45s .16s cubic-bezier(.22,1,.36,1) both;
  }
  
  .u4 {
    animation: up .45s .22s cubic-bezier(.22,1,.36,1) both;
  }
  
  .u5 {
    animation: up .45s .28s cubic-bezier(.22,1,.36,1) both;
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  .spinner {
    animation: spin .7s linear infinite;
  }
  
  /* Responsive */
  @media (max-width: 640px) {
    .section {
      padding: 16px;
    }
    
    .inp, .inp-ta {
      font-size: 16px; /* Prevent zoom on iOS */
    }
  }
  
  /* Focus styles for accessibility */
  .chip:focus,
  .stepper-btn:focus,
  .toggle-track:focus {
    outline: 2px solid #F07B3A;
    outline-offset: 2px;
  }
  
  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }
  
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }
  
  ::-webkit-scrollbar-track {
    background: #F7F7F5;
  }
  
  ::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,.2);
    border-radius: 3px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0,0,0,.3);
  }
`;

// Inject styles into document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

// Icons Component
const Icons = {
  ArrowBack: () => <span className="icon-o" style={{fontSize: '20px'}}>arrow_back</span>,
  Restaurant: () => <span className="icon-o" style={{fontSize: '17px'}}>restaurant</span>,
  AddPhoto: () => <span className="icon-o" style={{fontSize: '28px', opacity: 0.5, color: '#F07B3A'}}>add_photo_alternate</span>,
  Add: () => <span className="icon-o" style={{fontSize: '20px', opacity: 0.3}}>add</span>,
  AttachMoney: () => <span className="icon-o" style={{fontSize: '17px'}}>attach_money</span>,
  Schedule: () => <span className="icon-o" style={{fontSize: '17px'}}>schedule</span>,
  TimerOff: () => <span className="icon-o" style={{fontSize: '17px'}}>timer_off</span>,
  Place: () => <span className="icon-o" style={{fontSize: '17px'}}>place</span>,
  Notes: () => <span className="icon-o" style={{fontSize: '17px'}}>notes</span>,
  SpeakerNotes: () => <span className="icon-o" style={{fontSize: '17px'}}>speaker_notes</span>,
  ExpandMore: () => <span className="icon-o" style={{fontSize: '16px'}}>expand_more</span>,
  CheckCircle: () => <span className="icon" style={{fontSize: '16px', color: '#3DBDA8'}}>check_circle</span>,
  Remove: () => <span className="icon" style={{fontSize: '14px', color: '#EF4444'}}>remove</span>,
  AddCircle: () => <span className="icon" style={{fontSize: '14px'}}>add</span>,
  Draft: () => <span className="icon-o" style={{fontSize: '18px'}}>draft</span>,
  Bolt: () => <span className="icon" style={{fontSize: '18px'}}>bolt</span>,
  Error: () => <span className="icon" style={{fontSize: '12px', color: '#EF4444'}}>error</span>,
  CheckCircleGreen: () => <span className="icon" style={{fontSize: '14px', color: '#3DBDA8'}}>check_circle</span>,
  Close: () => <span className="icon" style={{fontSize: '12px'}}>close</span>,
  LunchDining: () => <span className="icon-o" style={{fontSize: '14px'}}>lunch_dining</span>,
  BakeryDining: () => <span className="icon-o" style={{fontSize: '14px'}}>bakery_dining</span>,
  Cake: () => <span className="icon-o" style={{fontSize: '14px'}}>cake</span>,
  LocalCafe: () => <span className="icon-o" style={{fontSize: '14px'}}>local_cafe</span>,
  Group: () => <span className="icon-o" style={{fontSize: '14px'}}>group</span>,
  MoreHoriz: () => <span className="icon-o" style={{fontSize: '14px'}}>more_horiz</span>,
  Eco: () => <span className="icon-o" style={{fontSize: '14px'}}>eco</span>,
  Savings: () => <span className="icon" style={{fontSize: '18px', color: '#3DBDA8'}}>savings</span>,
  Circle: ({ color = '#111' }) => <span className="icon" style={{fontSize: '12px', color}}>circle</span>,
};

// Photo Upload Component
const PhotoUpload = ({ photos, onPhotoChange, onPhotoRemove }) => {
  const triggerUpload = (index) => {
    document.getElementById(`file-${index}`).click();
  };

  return (
    <div className="section u1" style={{position: 'relative', zIndex: 20}}>
      <p className="lbl mb-3" style={{opacity: 0.5, fontSize: '11px', letterSpacing: '0.06em', textTransform: 'uppercase'}}>
        Food photos <span className="opacity-60">(up to 4)</span>
      </p>
      <div className="grid grid-cols-4 gap-2" id="photo-grid">
        {/* Main photo slot */}
        <div 
          className="photo-slot col-span-2 row-span-2" 
          style={{aspectRatio: 1}} 
          onClick={() => triggerUpload(0)}
        >
          <input 
            type="file" 
            accept="image/*" 
            className="hidden" 
            id="file-0" 
            onChange={(e) => onPhotoChange(0, e.target.files[0])}
          />
          {photos[0] ? (
            <>
              <img src={photos[0]} className="absolute inset-0 w-full h-full object-cover" alt="Main food" />
              <button 
                onClick={(e) => { e.stopPropagation(); onPhotoRemove(0); }}
                className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-black/60 flex items-center justify-center z-10"
              >
                <Icons.Close />
              </button>
            </>
          ) : (
            <>
              <Icons.AddPhoto />
              <p className="text-[11px] text-[#111]/30 mt-1 font-medium">Main photo</p>
            </>
          )}
        </div>
        
        {/* Additional photo slots */}
        {[1, 2, 3].map((index) => (
          <div 
            key={index}
            className="photo-slot" 
            onClick={() => triggerUpload(index)}
          >
            <input 
              type="file" 
              accept="image/*" 
              className="hidden" 
              id={`file-${index}`} 
              onChange={(e) => onPhotoChange(index, e.target.files[0])}
            />
            {photos[index] ? (
              <>
                <img src={photos[index]} className="absolute inset-0 w-full h-full object-cover" alt={`Food ${index + 1}`} />
                <button 
                  onClick={(e) => { e.stopPropagation(); onPhotoRemove(index); }}
                  className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-black/60 flex items-center justify-center z-10"
                >
                  <Icons.Close />
                </button>
              </>
            ) : (
              <Icons.Add />
            )}
          </div>
        ))}
      </div>
      <p className="text-[11px] text-[#111]/30 mt-2">
        First photo appears as the cover. JPG or PNG · Max 5MB each.
      </p>
    </div>
  );
};

// Basic Info Component
const BasicInfo = ({ formData, errors, onInputChange, onCategoryChange, onDietChange }) => {
  const categories = [
    { id: 'tiffin', label: 'Tiffin', icon: <Icons.LunchDining /> },
    { id: 'snacks', label: 'Snacks', icon: <Icons.BakeryDining /> },
    { id: 'sweets', label: 'Sweets', icon: <Icons.Cake /> },
    { id: 'drinks', label: 'Drinks', icon: <Icons.LocalCafe /> },
    { id: 'group', label: 'Group order', icon: <Icons.Group /> },
    { id: 'other', label: 'Other', icon: <Icons.MoreHoriz /> },
  ];

  const dietTypes = [
    { id: 'veg', label: 'Veg', color: '#15803D' },
    { id: 'nonveg', label: 'Non-veg', color: '#B91C1C' },
    { id: 'vegan', label: 'Vegan', icon: <Icons.Eco /> },
  ];

  return (
    <div className="section u2" style={{position: 'relative', zIndex: 19}}>
      <p className="text-xs font-bold text-[#111]/30 uppercase tracking-widest mb-4">Basic Info</p>

      {/* Meal name */}
      <div className="mb-4">
        <label className="lbl">Meal name</label>
        <div className="inp-wrap">
          <span className="i-l"><Icons.Restaurant /></span>
          <input 
            className={`inp ${errors.name ? 'err' : ''}`}
            type="text" 
            placeholder="e.g. Lentil Rice Combo, Egg Sandwich…" 
            value={formData.name}
            onChange={(e) => onInputChange('name', e.target.value)}
          />
        </div>
        {errors.name && (
          <div className="ferr" style={{display: 'flex'}}>
            <Icons.Error />
            <span>{errors.name}</span>
          </div>
        )}
      </div>

      {/* Category */}
      <div className="mb-4">
        <label className="lbl">Category</label>
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button 
              key={cat.id}
              className={`chip ${formData.category === cat.id ? 'on-orange' : ''}`}
              onClick={() => onCategoryChange(cat.id)}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>
        {errors.category && (
          <div className="ferr" style={{display: 'flex'}}>
            <Icons.Error />
            <span>{errors.category}</span>
          </div>
        )}
      </div>

      {/* Diet type */}
      <div className="mb-4">
        <label className="lbl">Diet type</label>
        <div className="flex gap-2">
          {dietTypes.map((diet) => (
            <button 
              key={diet.id}
              className={`chip ${formData.diet === diet.id ? `on-${diet.id === 'veg' ? 'green' : diet.id === 'nonveg' ? 'red' : 'teal'}` : ''}`}
              onClick={() => onDietChange(diet.id)}
            >
              {diet.icon || <Icons.Circle color={diet.color} />}
              {diet.label}
            </button>
          ))}
        </div>
        {errors.diet && (
          <div className="ferr" style={{display: 'flex'}}>
            <Icons.Error />
            <span>{errors.diet}</span>
          </div>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="lbl">Description <span className="opacity-50">(optional)</span></label>
        <div className="inp-wrap">
          <span className="i-l-top"><Icons.Notes /></span>
          <textarea 
            className="inp-ta" 
            placeholder="What's in it? How was it made? Any customisation options?" 
            maxLength="250"
            value={formData.description}
            onChange={(e) => onInputChange('description', e.target.value)}
          />
        </div>
        <p className="text-[11px] text-[#111]/30 mt-1 text-right">
          {formData.description.length}/250
        </p>
      </div>
    </div>
  );
};

// Pricing Component
const Pricing = ({ formData, errors, onInputChange, portions, onPortionsChange }) => {
  const potentialEarnings = (parseFloat(formData.price) || 0) * portions;

  return (
    <div className="section u3" style={{position: 'relative', zIndex: 18}}>
      <p className="text-xs font-bold text-[#111]/30 uppercase tracking-widest mb-4">Pricing & Portions</p>

      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Price */}
        <div>
          <label className="lbl">Price per portion</label>
          <div className="inp-wrap">
            <span className="i-l"><Icons.AttachMoney /></span>
            <span className="pfx">$</span>
            <input 
              className={`inp ${errors.price ? 'err' : ''}`}
              style={{paddingLeft: '72px'}} 
              type="number" 
              min="0" 
              max="999" 
              placeholder="8" 
              inputMode="decimal"
              value={formData.price}
              onChange={(e) => onInputChange('price', e.target.value)}
            />
          </div>
          {errors.price && (
            <div className="ferr" style={{display: 'flex'}}>
              <Icons.Error />
              <span>{errors.price}</span>
            </div>
          )}
        </div>

        {/* Portions stepper */}
        <div>
          <label className="lbl">Portions available</label>
          <div className="stepper">
            <button className="stepper-btn" onClick={() => onPortionsChange(-1)}>−</button>
            <span className="stepper-val">{portions}</span>
            <button className="stepper-btn" onClick={() => onPortionsChange(1)}>+</button>
          </div>
        </div>
      </div>

      {/* Earnings preview */}
      <div className="bg-[#EAF9F7] rounded-xl p-3 flex items-center gap-2">
        <Icons.Savings />
        <p className="text-xs text-teal-dark">
          Potential earnings: <span className="font-bold text-teal-dark">${potentialEarnings.toFixed(0)}</span> if all portions sold
        </p>
      </div>
    </div>
  );
};

// Availability Component
const Availability = ({ formData, errors, onInputChange, delivery, onDeliveryToggle }) => {
  const readyOptions = [
    { value: '', label: 'Select…' },
    { value: 'now', label: 'Ready now' },
    { value: '5', label: '5 minutes' },
    { value: '10', label: '10 minutes' },
    { value: '15', label: '15 minutes' },
    { value: '20', label: '20 minutes' },
    { value: '30', label: '30 minutes' },
    { value: '45', label: '45 minutes' },
    { value: '60', label: '1 hour' },
  ];

  return (
    <div className="section u4" style={{position: 'relative', zIndex: 17}}>
      <p className="text-xs font-bold text-[#111]/30 uppercase tracking-widest mb-4">Availability</p>

      <div className="grid grid-cols-2 gap-3 mb-4">
        {/* Ready in */}
        <div>
          <label className="lbl">Ready in</label>
          <div className="inp-wrap">
            <span className="i-l"><Icons.Schedule /></span>
            <select 
              className={`inp ${errors.readyIn ? 'err' : ''}`}
              style={{appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer'}}
              value={formData.readyIn}
              onChange={(e) => onInputChange('readyIn', e.target.value)}
            >
              {readyOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
            <span className="i-l" style={{right: '13px', left: 'auto', opacity: 0.3, pointerEvents: 'none'}}>
              <Icons.ExpandMore />
            </span>
          </div>
          {errors.readyIn && (
            <div className="ferr" style={{display: 'flex'}}>
              <Icons.Error />
              <span>{errors.readyIn}</span>
            </div>
          )}
        </div>

        {/* Available until */}
        <div>
          <label className="lbl">Available until</label>
          <div className="inp-wrap">
            <span className="i-l"><Icons.TimerOff /></span>
            <input 
              className="inp" 
              type="time" 
              value={formData.availableUntil}
              onChange={(e) => onInputChange('availableUntil', e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Pickup location */}
      <div className="mb-4">
        <label className="lbl">Pickup location</label>
        <div className="inp-wrap">
          <span className="i-l"><Icons.Place /></span>
          <input 
            className={`inp ${errors.location ? 'err' : ''}`}
            type="text" 
            placeholder="e.g. East Dorm, Room 204" 
            value={formData.location}
            onChange={(e) => onInputChange('location', e.target.value)}
          />
        </div>
        {errors.location && (
          <div className="ferr" style={{display: 'flex'}}>
            <Icons.Error />
            <span>{errors.location}</span>
          </div>
        )}
      </div>

      {/* Delivery toggle */}
      <div className="flex items-center justify-between py-3 border-t border-black/7">
        <div className="flex-1 pr-4">
          <p className="text-sm font-semibold text-[#111]">Offer delivery</p>
          <p className="text-xs text-[#111]/40 mt-0.5">You'll deliver within your dorm or building</p>
        </div>
        <div 
          className="toggle-track" 
          onClick={onDeliveryToggle}
          style={{background: delivery ? '#3DBDA8' : 'rgba(0,0,0,.12)'}}
        >
          <div className="toggle-thumb" style={{left: delivery ? '23px' : '3px'}}></div>
        </div>
      </div>
    </div>
  );
};

// Includes Component
const Includes = ({ includes, onAddInclude, onRemoveInclude }) => {
  return (
    <div className="section u4" style={{position: 'relative', zIndex: 16}}>
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs font-bold text-[#111]/30 uppercase tracking-widest">What's included</p>
        <button onClick={onAddInclude} className="text-xs text-orange font-semibold hover:underline flex items-center gap-1">
          <Icons.AddCircle />
          Add item
        </button>
      </div>
      <div className="flex flex-col gap-2">
        {includes.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <Icons.CheckCircle />
            <input 
              className="inp-plain flex-1" 
              type="text" 
              placeholder="e.g. 1 cup basmati rice" 
              style={{height: '40px', borderRadius: '10px', fontSize: '13px'}}
              value={item}
              onChange={(e) => onRemoveInclude(index, e.target.value)}
            />
            {includes.length > 1 && (
              <button 
                onClick={() => onRemoveInclude(index)} 
                className="w-8 h-8 rounded-lg bg-red-light flex items-center justify-center shrink-0"
              >
                <Icons.Remove />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Allergens Component
const Allergens = ({ formData, onInputChange, onAllergenToggle }) => {
  const allergens = [
    { id: 'gluten', label: 'Gluten' },
    { id: 'dairy', label: 'Dairy' },
    { id: 'eggs', label: 'Eggs' },
    { id: 'nuts', label: 'Tree nuts' },
    { id: 'peanuts', label: 'Peanuts' },
    { id: 'soy', label: 'Soy' },
    { id: 'shellfish', label: 'Shellfish' },
  ];

  return (
    <div className="section u5" style={{position: 'relative', zIndex: 15}}>
      <p className="text-xs font-bold text-[#111]/30 uppercase tracking-widest mb-4">Allergens & Notes</p>

      {/* Allergen chips */}
      <div className="mb-4">
        <label className="lbl">Contains (select all that apply)</label>
        <div className="flex gap-2 flex-wrap">
          {allergens.map((allergen) => (
            <button 
              key={allergen.id}
              className={`chip ${formData.allergens.includes(allergen.id) ? 'on-orange' : ''}`}
              onClick={() => onAllergenToggle(allergen.id)}
            >
              {allergen.label}
            </button>
          ))}
        </div>
      </div>

      {/* Extra notes */}
      <div>
        <label className="lbl">Additional notes <span className="opacity-50">(optional)</span></label>
        <div className="inp-wrap">
          <span className="i-l-top"><Icons.SpeakerNotes /></span>
          <textarea 
            className="inp-ta" 
            placeholder="Spice level options, custom requests, halal/kosher info, contact preference…" 
            maxLength="200"
            value={formData.notes}
            onChange={(e) => onInputChange('notes', e.target.value)}
          />
        </div>
        <p className="text-[11px] text-[#111]/30 mt-1 text-right">
          {formData.notes.length}/200
        </p>
      </div>
    </div>
  );
};

// Preview Component
const Preview = ({ formData, portions }) => {
  const catEmojis = {
    tiffin: '🍱',
    snacks: '🍜',
    sweets: '🍮',
    drinks: '☕',
    group: '🍕',
    other: '🍽️',
  };

  const catBgs = {
    tiffin: 'linear-gradient(135deg,#FFF3EC,#FFECD6)',
    snacks: 'linear-gradient(135deg,#FFFBEC,#FFF3CC)',
    sweets: 'linear-gradient(135deg,#FFF9EC,#FFEECC)',
    drinks: 'linear-gradient(135deg,#FFF3EC,#FFE8D6)',
    group: 'linear-gradient(135deg,#F3EFFE,#EDE0FF)',
    other: 'linear-gradient(135deg,#F7F7F5,#EEEEEE)',
  };

  const dietTags = {
    veg: { label: '● Veg', style: 'background:#F0FDF4;color:#15803D;' },
    nonveg: { label: '● Non-veg', style: 'background:#FEF2F2;color:#B91C1C;' },
    vegan: { label: '🌱 Vegan', style: 'background:#EAF9F7;color:#2A9E8C;' },
  };

  const readyLabels = {
    now: 'Ready now',
    '5': '5 min',
    '10': '10 min',
    '15': '15 min',
    '20': '20 min',
    '30': '30 min',
    '45': '45 min',
    '60': '1 hour',
  };

  if (!formData.name && !formData.price) return null;

  return (
    <div className="section u5">
      <p className="text-xs font-bold text-[#111]/30 uppercase tracking-widest mb-3">Preview</p>
      <div className="bg-white border-[1.5px] border-black/7 rounded-[20px] overflow-hidden shadow-sm">
        <div 
          className="h-36 flex items-center justify-center relative" 
          style={{background: catBgs[formData.category] || catBgs.other}}
        >
          <span className="text-6xl select-none">
            {catEmojis[formData.category] || '🍽️'}
          </span>
          <div className="absolute top-3 left-3 flex gap-1.5">
            {formData.diet && (
              <span 
                className="text-[10px] font-bold px-2 py-0.5 rounded-full" 
                style={{fontSize: '10px', fontWeight: '700', padding: '2px 8px', borderRadius: '99px', ...(dietTags[formData.diet]?.style ? {background: dietTags[formData.diet].style.split(';')[0].split(':')[1], color: dietTags[formData.diet].style.split(';')[1].split(':')[1]} : {})}}
              >
                {dietTags[formData.diet]?.label}
              </span>
            )}
          </div>
          <div className="absolute top-3 right-3 bg-white-90 backdrop-blur rounded-xl px-2 py-1 text-xs font-bold text-orange">
            ${formData.price || '0'}
          </div>
        </div>
        <div className="p-4">
          <p className="font-bold text-sm text-[#111] mb-0.5">{formData.name || 'Your meal name'}</p>
          <p className="text-xs text-[#111]/45 mb-3">
            By You · {formData.location || 'Your dorm'} · {portions} portions
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-xs text-[#111]/40">
              <Icons.Schedule />
              <span>{readyLabels[formData.readyIn] || 'Ready time TBD'}</span>
            </div>
            <div className="h-8 px-3 rounded-xl bg-orange text-white text-xs font-bold flex items-center gap-1">
              <Icons.Add />
              Order
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Toast Component
const Toast = ({ message, show }) => {
  return (
    <div 
      id="toast"
      style={{
        position: 'fixed',
        bottom: '30px',
        left: '50%',
        transform: `translateX(-50%) translateY(${show ? '0' : '16px'})`,
        background: '#111',
        color: '#fff',
        fontSize: '12px',
        fontWeight: '600',
        padding: '10px 18px',
        borderRadius: '99px',
        opacity: show ? 1 : 0,
        transition: 'all .28s ease',
        zIndex: 70,
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <Icons.CheckCircleGreen />
      <span>{message}</span>
    </div>
  );
};

const PostFood = () => {
  const navigate = useNavigate();
  const [portions, setPortions] = useState(3);
  const [delivery, setDelivery] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '' });
  const [isPublishing, setIsPublishing] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    diet: '',
    description: '',
    price: '',
    readyIn: '',
    availableUntil: '',
    location: '',
    allergens: [],
    notes: '',
  });

  const [errors, setErrors] = useState({});
  const [photos, setPhotos] = useState([null, null, null, null]);
  const [includes, setIncludes] = useState(['', '']);

  // Set default time (1hr from now)
  useEffect(() => {
    const d = new Date();
    d.setHours(d.getHours() + 1);
    const time = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
    setFormData(prev => ({ ...prev, availableUntil: time }));
  }, []);

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: '' }), 2500);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleCategoryChange = (category) => {
    setFormData(prev => ({ ...prev, category }));
    if (errors.category) {
      setErrors(prev => ({ ...prev, category: '' }));
    }
  };

  const handleDietChange = (diet) => {
    setFormData(prev => ({ ...prev, diet }));
    if (errors.diet) {
      setErrors(prev => ({ ...prev, diet: '' }));
    }
  };

  const handlePortionsChange = (change) => {
    setPortions(prev => Math.max(1, Math.min(20, prev + change)));
  };

  const handleDeliveryToggle = () => {
    setDelivery(prev => !prev);
  };

  const handlePhotoChange = (index, file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newPhotos = [...photos];
        newPhotos[index] = e.target.result;
        setPhotos(newPhotos);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePhotoRemove = (index) => {
    const newPhotos = [...photos];
    newPhotos[index] = null;
    setPhotos(newPhotos);
  };

  const handleAllergenToggle = (allergen) => {
    setFormData(prev => ({
      ...prev,
      allergens: prev.allergens.includes(allergen)
        ? prev.allergens.filter(a => a !== allergen)
        : [...prev.allergens, allergen]
    }));
  };

  const handleAddInclude = () => {
    setIncludes(prev => [...prev, '']);
  };

  const handleRemoveInclude = (index, value) => {
    if (typeof value === 'string') {
      const newIncludes = [...includes];
      newIncludes[index] = value;
      setIncludes(newIncludes);
    } else {
      if (includes.length > 1) {
        setIncludes(prev => prev.filter((_, i) => i !== index));
      }
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Enter a meal name';
    if (!formData.category) newErrors.category = 'Select a category';
    if (!formData.diet) newErrors.diet = 'Select diet type';
    const price = parseFloat(formData.price);
    if (!price || price < 0.5) newErrors.price = 'Enter a valid price';
    if (!formData.readyIn) newErrors.readyIn = 'Select ready time';
    if (!formData.location.trim()) newErrors.location = 'Enter a pickup location';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePublish = () => {
    if (!validate()) return;
    
    setIsPublishing(true);
    setTimeout(() => {
      showToast('🎉 Meal posted!');
      setTimeout(() => navigate('/food'), 1200);
    }, 1400);
  };

  const saveDraft = () => {
    showToast('Draft saved');
  };

  const loadDraft = () => {
    setFormData(prev => ({
      ...prev,
      name: 'Lentil Rice Combo',
      price: '8',
      location: 'East Dorm, Room 204',
      category: 'tiffin',
      diet: 'veg',
    }));
    showToast('Draft loaded');
  };

  return (
    <div className="flex flex-col h-screen bg-[#F7F7F5] relative">
      {/* Top Nav */}
      <nav className="top-nav shrink-0 px-4 h-14 flex items-center gap-3 z-20 relative">
        <button 
          onClick={() => navigate('/food')} 
          className="w-9 h-9 rounded-xl bg-[#111]/5 flex items-center justify-center hover:bg-[#111]/10 transition-colors shrink-0"
        >
          <Icons.ArrowBack />
        </button>
        <h1 className="text-base text-[#111] flex-1">Post Food</h1>
        <button 
          onClick={loadDraft} 
          className="text-xs text-orange font-semibold hover:underline flex items-center gap-1"
        >
          <Icons.Draft />
          Load draft
        </button>
      </nav>

      {/* Scroll Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-xl mx-auto px-4 py-5 pb-12 flex flex-col gap-4">
          {/* Photo Upload */}
          <PhotoUpload 
            photos={photos} 
            onPhotoChange={handlePhotoChange} 
            onPhotoRemove={handlePhotoRemove} 
          />

          {/* Basic Info */}
          <BasicInfo 
            formData={formData}
            errors={errors}
            onInputChange={handleInputChange}
            onCategoryChange={handleCategoryChange}
            onDietChange={handleDietChange}
          />

          {/* Pricing & Portions */}
          <Pricing 
            formData={formData}
            errors={errors}
            onInputChange={handleInputChange}
            portions={portions}
            onPortionsChange={handlePortionsChange}
          />

          {/* Availability */}
          <Availability 
            formData={formData}
            errors={errors}
            onInputChange={handleInputChange}
            delivery={delivery}
            onDeliveryToggle={handleDeliveryToggle}
          />

          {/* What's Included */}
          <Includes 
            includes={includes}
            onAddInclude={handleAddInclude}
            onRemoveInclude={handleRemoveInclude}
          />

          {/* Allergens & Notes */}
          <Allergens 
            formData={formData}
            onInputChange={handleInputChange}
            onAllergenToggle={handleAllergenToggle}
          />

          {/* Preview */}
          <Preview formData={formData} portions={portions} />

          {/* Actions */}
          <div className="flex flex-col gap-3 u5">
            <button 
              className="btn-orange" 
              onClick={handlePublish}
              disabled={isPublishing}
            >
              {isPublishing ? (
                <span className="spinner" style={{width: '18px', height: '18px', borderRadius: '50%', border: '2.5px solid rgba(255,255,255,.3)', borderTopColor: '#fff', animation: 'spin .7s linear infinite', display: 'inline-block'}}></span>
              ) : (
                <>
                  <span>Post Meal</span>
                  <Icons.Bolt />
                </>
              )}
            </button>
            <button className="btn-outline" onClick={saveDraft}>
              <Icons.Draft />
              Save as Draft
            </button>
          </div>
        </div>
      </div>

      {/* Toast */}
      <Toast message={toast.message} show={toast.show} />

      {/* Bottom Navigation */}
      {/* <BottomNavBar /> */}
    </div>
  );
};

export default PostFood;
