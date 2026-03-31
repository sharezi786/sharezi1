import React, { memo } from 'react';

// Move data outside component to prevent recreation on every render
const SAFETY_FEATURES = [
  {
    id: 1,
    icon: 'verified',
    bgColor: '#FFF3EC',
    borderColor: '#F07B3A',
    iconColor: '#F07B3A',
    title: 'Student ID Verified',
    description: 'Every user uploads a valid student ID. Our team reviews manually within 24h.'
  },
  {
    id: 2,
    icon: 'my_location',
    bgColor: '#EAF9F7',
    borderColor: '#3DBDA8',
    iconColor: '#3DBDA8',
    title: 'Live GPS Tracking',
    description: 'Share your live location with trusted contacts during any ride.'
  },
  {
    id: 3,
    icon: 'sos',
    bgColor: '#FFF3EC',
    borderColor: '#F07B3A',
    iconColor: '#F07B3A',
    title: 'SOS Emergency',
    description: 'One-tap SOS alerts your emergency contacts with your current location.'
  },
  {
    id: 4,
    icon: 'forum',
    bgColor: '#EAF9F7',
    borderColor: '#3DBDA8',
    iconColor: '#3DBDA8',
    title: 'In-app Chat Only',
    description: 'No personal numbers shared. All communication stays inside the app.'
  },
  {
    id: 5,
    icon: 'star',
    bgColor: '#FFF3EC',
    borderColor: '#F07B3A',
    iconColor: '#F07B3A',
    title: 'Mutual Ratings',
    description: 'Both riders and drivers rate each other. Low scores = automatic suspension.'
  },
  {
    id: 6,
    icon: 'headset_mic',
    bgColor: '#EAF9F7',
    borderColor: '#3DBDA8',
    iconColor: '#3DBDA8',
    title: '24/7 Support',
    description: 'Campus support team available for any incident reports or disputes.'
  }
];

// Memoize components to prevent unnecessary re-renders
const SafetyHeader = memo(() => (
  <div className="max-w-5xl mx-auto text-center mb-14">
    <span className="section-label text-[#3DBDA8] mb-3 block">Safety First</span>
    <h2 className="text-4xl sm:text-5xl text-[#111] leading-tight mb-4">
      Uber-level safety,<br/><span className="grad-orange">campus scale</span>
    </h2>
    <p className="text-[#111]/45 text-base max-w-xl mx-auto">
      Every feature built with your safety as priority 1.
    </p>
  </div>
));

SafetyHeader.displayName = 'SafetyHeader';

const SafetyGrid = memo(({ features }) => (
  <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
    {features.map((feature) => (
      <SafetyFeatureCard key={feature.id} feature={feature} />
    ))}
  </div>
));

SafetyGrid.displayName = 'SafetyGrid';

const SafetyFeatureCard = memo(({ feature }) => {
  const { icon, bgColor, borderColor, iconColor, title, description } = feature;
  
  // Pre-compute styles to avoid inline style creation
  const iconContainerStyle = {
    backgroundColor: bgColor,
    borderColor: `${borderColor}15`
  };
  
  const iconStyle = {
    fontSize: '20px',
    color: iconColor
  };
  
  return (
    <article 
      className="card-lift bg-[#F7F7F5] border border-black/7 rounded-3xl p-6"
      role="article"
      aria-labelledby={`safety-title-${feature.id}`}
    >
      <div 
        className="w-10 h-10 rounded-2xl flex items-center justify-center mb-4 border"
        style={iconContainerStyle}
      >
        <span 
          className="icon" 
          style={iconStyle}
          aria-hidden="true"
        >
          {icon}
        </span>
      </div>
      <h3 
        id={`safety-title-${feature.id}`}
        className="text-base text-[#111] mb-2 font-semibold"
      >
        {title}
      </h3>
      <p className="text-[#111]/45 text-sm leading-relaxed">
        {description}
      </p>
    </article>
  );
});

SafetyFeatureCard.displayName = 'SafetyFeatureCard';

const SafetyCard = () => {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white section-divider" id="safety">
      <SafetyHeader />
      <SafetyGrid features={SAFETY_FEATURES} />
    </section>
  );
};

export default SafetyCard;
