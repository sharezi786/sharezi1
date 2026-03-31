import React from 'react';

const FoodSection = () => {
  const restaurants = [
    {
      id: 1,
      name: "Domino's Powai",
      emoji: "🍕",
      gradient: "from-yellow-400 to-orange-400",
      slots: "4 slots open",
      price: "₹200–₹400",
      status: "Join",
      statusColor: "bg-[#EAF9F7] text-[#2A9E8C]",
      rating: 4.2,
      fullStars: 4
    },
    {
      id: 2,
      name: "McDonald's Hiranandani",
      emoji: "🍔",
      gradient: "from-red-400 to-red-600",
      slots: "2 slots open",
      price: "₹150–₹350",
      status: "2 left",
      statusColor: "bg-[#FFF3EC] text-[#F07B3A]",
      rating: 4.8,
      fullStars: 5
    },
    {
      id: 3,
      name: "Subway Vihar Lake",
      emoji: "🥗",
      gradient: "from-green-400 to-emerald-600",
      slots: "3 slots open",
      price: "₹120–₹280",
      status: "Join",
      statusColor: "bg-[#EAF9F7] text-[#2A9E8C]",
      rating: 4.1,
      fullStars: 4
    }
  ];

  const features = [
    {
      icon: "savings",
      color: "#F07B3A",
      title: "Split delivery fee",
      description: "₹0–₹20 per person"
    },
    {
      icon: "bolt",
      color: "#3DBDA8",
      title: "30 min or less",
      description: "Hostellers know the fastest spots"
    },
    {
      icon: "smartphone",
      color: "#F07B3A",
      title: "UPI payments",
      description: "Pay your share, nothing more"
    },
    {
      icon: "apartment",
      color: "#3DBDA8",
      title: "Hostel delivery",
      description: "Drop at your block's gate"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-[#F7F7F5] section-divider" id="food">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <RestaurantList restaurants={restaurants} />
        <FoodContent features={features} />
      </div>
    </section>
  );
};

const RestaurantList = ({ restaurants }) => {
  return (
    <div className="order-2 lg:order-1">
      <div className="bg-white rounded-3xl border border-black/7 p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <p 
            className="text-[#111] font-bold text-base" 
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Open now near you
          </p>
          <span className="chip bg-[#EAF9F7] text-[#2A9E8C]">{restaurants.length} active</span>
        </div>
        
        <div className="space-y-3">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

const RestaurantCard = ({ restaurant }) => {
  const { name, emoji, gradient, slots, price, status, statusColor, rating, fullStars } = restaurant;
  
  return (
    <div 
      className="card-lift bg-[#F7F7F5] border border-black/6 rounded-2xl p-3.5 flex gap-3 cursor-pointer"
      role="button"
      tabIndex={0}
      aria-label={`Join ${name} food order`}
    >
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-xl shrink-0`}>
        {emoji}
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-[#111] font-semibold text-sm">{name}</p>
            <p className="text-[#111]/40 text-xs">{slots} · {price}</p>
          </div>
          <span className={`chip ${statusColor} shrink-0`}>{status}</span>
        </div>
        
        <RatingStars rating={rating} fullStars={fullStars} />
      </div>
    </div>
  );
};

const RatingStars = ({ rating, fullStars }) => {
  const emptyStars = 5 - fullStars;
  
  return (
    <div className="flex gap-0.5 mt-1.5">
      {Array.from({ length: fullStars }).map((_, i) => (
        <span key={`full-${i}`} className="star">★</span>
      ))}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <span 
          key={`empty-${i}`} 
          className="star" 
          style={{ color: '#ddd' }}
        >
          ★
        </span>
      ))}
      <span className="text-[#111]/35 text-[10px] ml-1">{rating}</span>
    </div>
  );
};

const FoodContent = ({ features }) => {
  return (
    <div className="order-1 lg:order-2">
      <span className="section-label text-[#3DBDA8] mb-3 block">Food Sharing</span>
      <h2 className="text-4xl sm:text-5xl text-[#111] leading-tight mb-5">
        Group orders,<br/><span className="grad-teal">student prices</span>
      </h2>
      <p className="text-[#111]/50 text-base mb-8 leading-relaxed">
        Post a food order, let others join and split delivery costs. Like Zomato + WhatsApp group, but smarter. One payment, one address, shared by verified hostel mates.
      </p>
      
      <div className="grid grid-cols-2 gap-3">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    </div>
  );
};

const FeatureCard = ({ feature }) => {
  const { icon, color, title, description } = feature;
  
  return (
    <div className="bg-white border border-black/7 rounded-2xl p-4 shadow-sm">
      <span 
        className="icon text-2xl mb-2 block" 
        style={{ color }}
      >
        {icon}
      </span>
      <p className="text-[#111] font-semibold text-sm mb-0.5">{title}</p>
      <p className="text-[#111]/40 text-xs">{description}</p>
    </div>
  );
};

export default FoodSection;
