import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../../components/BottomNavigation';

const FindFood = () => {
  const navigate = useNavigate();
  
  // State management
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [detailDrawerOpen, setDetailDrawerOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  const [maxPrice, setMaxPrice] = useState(500);
  const [dietPreference, setDietPreference] = useState('any');
  const [readyTime, setReadyTime] = useState('any');
  const [pickupHostel, setPickupHostel] = useState('any');
  const [quickFilter, setQuickFilter] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [orderCount, setOrderCount] = useState(0);

  // Food data
  const foodData = [
    {
      id: 'tiffin1',
      emoji: '🍱',
      name: 'Lentil Rice Combo',
      price: '$80',
      by: 'Priya N.',
      hostel: 'East Dorm',
      portions: 2,
      ready: '10 min',
      veg: true,
      desc: 'Home-cooked dal tadka with steamed rice, pickle, and papad. Made fresh every day.',
      rating: '4.8',
      reviews: 32,
      category: 'tiffin',
      tags: ['veg', 'popular'],
      gradient: 'linear-gradient(135deg,#FFF3EC,#FFECD6)'
    },
    {
      id: 'snacks1',
      emoji: '🍜',
      name: 'Noodle Bowl',
      price: '$40',
      by: 'Karan M.',
      hostel: 'South Hall',
      portions: 5,
      ready: '5 min',
      veg: true,
      desc: 'Classic two-minute Noodles with veggies and spiced. Customise with extra spice!',
      rating: '4.5',
      reviews: 18,
      category: 'snacks',
      tags: ['veg', 'new'],
      gradient: 'linear-gradient(135deg,#FFFBEC,#FFF3CC)'
    },
    {
      id: 'group',
      emoji: '🍕',
      name: 'Campus Pizza Group Order',
      price: '$150',
      by: 'Sneha R.',
      hostel: 'West Dorm',
      portions: 2,
      ready: '45 min',
      veg: false,
      desc: 'Split a large campus pizza order with hostel mates. 4 of 6 slots filled – join before 8 PM!',
      rating: null,
      reviews: 0,
      category: 'group',
      tags: ['group'],
      isGroup: true,
      joined: 4,
      totalSlots: 6,
      gradient: 'linear-gradient(135deg,#F3EFFE,#EDE0FF)'
    },
    {
      id: 'tiffin2',
      emoji: '🍗',
      name: 'Chicken Curry + Rice',
      price: '$120',
      by: 'Arjun T.',
      hostel: 'North Hall',
      portions: 3,
      ready: '15 min',
      veg: false,
      desc: 'Spicy home-style chicken curry served with fragrant basmati rice and a side salad.',
      rating: '4.9',
      reviews: 44,
      category: 'tiffin',
      tags: ['nonveg'],
      gradient: 'linear-gradient(135deg,#FEF2F2,#FFE4E1)'
    },
    {
      id: 'sweets1',
      emoji: '🍮',
      name: 'Homemade Honey Donuts',
      price: '$60',
      by: 'Riya N.',
      hostel: 'East Dorm',
      portions: 8,
      ready: 'Now',
      veg: true,
      desc: 'Soft and syrupy honey donuts made from khoya. 4 pieces per portion.',
      rating: '5.0',
      reviews: 61,
      category: 'sweets',
      tags: ['veg', 'popular'],
      gradient: 'linear-gradient(135deg,#FFF9EC,#FFEECC)'
    },
    {
      id: 'drinks1',
      emoji: '☕',
      name: 'Spiced Chai',
      price: '$30',
      by: 'Mihir P.',
      hostel: 'South Hall',
      portions: 10,
      ready: '3 min',
      veg: true,
      desc: 'Strong spiced chai with ginger, cardamom, and tulsi. Best had hot!',
      rating: '4.7',
      reviews: 27,
      category: 'drinks',
      tags: ['veg', 'hot'],
      gradient: 'linear-gradient(135deg,#FFF3EC,#FFE8D6)'
    },
    {
      id: 'snacks2',
      emoji: '🥪',
      name: 'Egg Sandwich',
      price: '$70',
      by: 'Rohan K.',
      hostel: 'Central Dorm',
      portions: 4,
      ready: '8 min',
      veg: false,
      desc: 'Double egg sandwich on toasted bread with cheese, lettuce and mayo.',
      rating: '4.6',
      reviews: 21,
      category: 'snacks',
      tags: ['nonveg'],
      gradient: 'linear-gradient(135deg,#F0FDF4,#D1FAE5)'
    },
    {
      id: 'tiffin3',
      emoji: '🫓',
      name: 'Cottage Cheese Sabji + Flatbread',
      price: '$90',
      by: 'Sneha R.',
      hostel: 'West Dorm',
      portions: 2,
      ready: '20 min',
      veg: true,
      desc: 'Cottage Cheese bhurji with 3 soft rotis. Mildly spiced and perfect for dinner.',
      rating: '4.7',
      reviews: 15,
      category: 'tiffin',
      tags: ['veg'],
      gradient: 'linear-gradient(135deg,#EFF6FF,#DBEAFE)'
    }
  ];

  // Categories
  const categories = [
    { key: 'all', label: 'All', icon: 'restaurant', color: '#F07B3A' },
    { key: 'tiffin', label: 'Tiffin', icon: 'lunch_dining', color: '#3DBDA8' },
    { key: 'snacks', label: 'Snacks', icon: 'bakery_dining', color: '#F5B942' },
    { key: 'group', label: 'Group orders', icon: 'group', color: '#8B5CF6' },
    { key: 'sweets', label: 'Sweets', icon: 'cake', color: '#EC4899' },
    { key: 'drinks', label: 'Drinks', icon: 'local_cafe', color: '#F07B3A' }
  ];

  // Reusable filter button component
  const FilterButton = ({ icon, iconType = 'outlined', label, isActive, onClick, iconColor }) => (
    <button 
      onClick={onClick}
      className={`filter-chip h-8 px-3 rounded-full text-xs font-semibold flex items-center gap-1 cursor-pointer transition-all whitespace-nowrap ${
        isActive 
          ? 'bg-black text-white border-black' 
          : 'border border-black/10 bg-white text-[#111]'
      }`}
    >
      <span className={iconType === 'filled' ? 'icon' : 'icon-o'} style={{ 
        fontSize: iconType === 'filled' ? '12px' : '14px', 
        color: isActive ? '#fff' : (iconColor || '#111') 
      }}>
        {icon}
      </span>
      {label}
    </button>
  );

  // Filter food based on search and category
  const filteredFood = foodData.filter(food => {
    const matchCategory = activeCategory === 'all' || food.category === activeCategory;
    const matchSearch = !searchQuery || food.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Show toast notification
  const showToast = (message) => {
    setToast({ show: true, message, type: 'success' });
    setTimeout(() => {
      setToast({ show: false, message: '', type: '' });
    }, 3000);
  };

  // Add to order
  const addToOrder = (name, price) => {
    setOrderCount(prev => prev + 1);
    showToast(`${name} added · ${price}`);
  };

  // Open food detail
  const openDetail = (foodId) => {
    navigate(`/food-details/${foodId}`);
  };

  // Close detail drawer
  const closeDetail = () => {
    setDetailDrawerOpen(false);
    setSelectedFood(null);
  };

  // Category colors
  const getCategoryColor = (cat) => {
    const category = categories.find(c => c.key === cat);
    return category ? category.color : '#F07B3A';
  };

  return (
    <div className="h-screen bg-[#F7F7F5] flex flex-col relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.022'/%3E%3C/svg%3E")`
        }}
      />

      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 px-4 h-14 flex items-center gap-3 z-20 bg-white/95 backdrop-blur-md border-b border-black/7">
        <button 
          onClick={() => navigate('/student-home')}
          className="w-9 h-9 rounded-xl bg-[#111]/5 flex items-center justify-center hover:bg-[#111]/10 transition-colors shrink-0"
        >
          <span className="icon-o" style={{ fontSize: '20px' }}>arrow_back</span>
        </button>
        <h1 className="text-base text-[#111] flex-1">Find Food</h1>
        <button 
          onClick={() => navigate('/post-food')}
          className="flex items-center gap-1.5 bg-[#F07B3A] text-white text-xs font-bold px-3 h-8 rounded-xl hover:bg-[#E8662A] transition-colors"
        >
          <span className="icon" style={{ fontSize: '15px' }}>add</span>
          Post food
        </button>
      </nav>

      {/* Search and Filters */}
      <div className="fixed top-14 left-0 right-0 bg-white border-b border-black/7 px-4 pt-4 pb-4 z-10 h-44">
        {/* Search Bar */}
        <div className="relative mb-3">
          <span className="icon-o absolute left-[13px] top-1/2 -translate-y-1/2 text-[#111]/30 pointer-events-none" style={{ fontSize: '18px' }}>
            search
          </span>
          <input
            type="text"
            placeholder="Search meals, cuisines, hostels"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-inp w-full h-[44px] pl-10 pr-4 border border-black/10 rounded-xl bg-white text-sm font-['DM Sans'] text-[#111] outline-none focus:border-[#F07B3A] focus:shadow-[0_0_0_3px_rgba(240,123,58,.10)]"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <span className="icon" style={{ fontSize: '18px', color: '#111', opacity: 0.3 }}>close</span>
            </button>
          )}
        </div>

        {/* Category Chips */}
        <div className="flex gap-2 overflow-x-auto mb-3" style={{ scrollbarWidth: 'none' }}>
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`cat-chip h-8 px-3 rounded-full text-xs font-semibold flex items-center gap-1 cursor-pointer transition-all whitespace-nowrap border-2 ${
                activeCategory === cat.key ? 'active' : ''
              }`}
              style={{
                background: activeCategory === cat.key ? cat.color : '#fff',
                borderColor: activeCategory === cat.key ? cat.color : 'rgba(0,0,0,.1)',
                color: activeCategory === cat.key ? '#fff' : '#111'
              }}
            >
              <span className={activeCategory === cat.key ? 'icon' : 'icon-o'} style={{ fontSize: '14px' }}>
                {cat.icon}
              </span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Filter Row */}
        <div className="flex gap-2 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
          <FilterButton 
            icon="tune" 
            label="Filters" 
            isActive={false}
            onClick={() => setFilterDrawerOpen(true)}
          />
          <FilterButton 
            icon="circle" 
            iconType="filled"
            label="Veg only" 
            isActive={dietPreference === 'veg'}
            onClick={() => {
              setDietPreference('veg');
              setQuickFilter('veg');
            }}
            iconColor="#15803D"
          />
          <FilterButton 
            icon="currency_rupee" 
            label="Under $100" 
            isActive={quickFilter === 'under100'}
            onClick={() => {
              setMaxPrice(100);
              setQuickFilter('under100');
            }}
          />
          <FilterButton 
            icon="near_me" 
            label="Nearby" 
            isActive={quickFilter === 'nearby'}
            onClick={() => {
              setReadyTime('nearby');
              setQuickFilter('nearby');
            }}
          />
          <FilterButton 
            icon="bolt" 
            label="Available now" 
            isActive={quickFilter === 'available'}
            onClick={() => {
              setReadyTime('available');
              setQuickFilter('available');
            }}
          />
        </div>

        {/* Result Count */}
        <div className="flex items-center justify-between mt-2.5">
          <p className="text-xs text-[#111]/40 font-medium">
            <span>{filteredFood.length}</span> meals available
          </p>
          <button 
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
              setDietPreference('any');
              setMaxPrice(500);
              setReadyTime('any');
              setPickupHostel('any');
              setQuickFilter('');
            }}
            className="text-xs text-[#F07B3A] font-semibold hover:underline flex items-center gap-1"
          >
            <span className="icon" style={{ fontSize: '12px', color: '#F07B3A' }}>close</span>
            Clear
          </button>
        </div>
      </div>

      {/* Scroll Area */}
      <div className="absolute top-[calc(56px+176px)] left-0 right-0 bottom-16 overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
        <div className="px-4 sm:px-6 py-4">
          
          {/* Quick Promo */}
          <div 
            className="bg-[#111] rounded-2xl p-4 mb-5 flex items-center gap-4 cursor-pointer"
            onClick={() => openDetail('group')}
          >
            <div>
              <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-0.5">Group order</p>
              <p className="text-base text-white font-bold mb-1">Split Campus Pizza with hostel mates</p>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  openDetail('group');
                }}
                className="bg-[#F07B3A] text-white text-xs font-bold px-3 py-1.5 rounded-xl hover:bg-[#E8662A] transition-colors"
              >
                Join order
              </button>
            </div>
            <div className="text-5xl ml-auto opacity-30 select-none">🍕</div>
          </div>

          {/* Food Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredFood.map((food, index) => (
              <div
                key={food.id}
                className="food-card bg-white border border-black/7 rounded-2xl overflow-hidden cursor-pointer transition-all hover:shadow-lg"
                onClick={() => openDetail(food.id)}
                style={{
                  animation: `up 0.4s ${0.04 + index * 0.04}s cubic-bezier(.22,1,.36,1) both`
                }}
              >
                {/* Image */}
                <div className="h-40 relative overflow-hidden" style={{ background: food.gradient }}>
                  <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-40">
                    {food.emoji}
                  </div>
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    {food.tags.includes('veg') && (
                      <span className="tag bg-[#F0FDF4] text-[#15803D] text-xs font-bold px-2 py-0.5 rounded-full">
                        ● Veg
                      </span>
                    )}
                    {food.tags.includes('nonveg') && (
                      <span className="tag bg-[#FEF2F2] text-[#B91C1C] text-xs font-bold px-2 py-0.5 rounded-full">
                        ● Non-veg
                      </span>
                    )}
                    {food.tags.includes('popular') && (
                      <span className="tag bg-[#F3EFFE] text-[#7C3AED] text-xs font-bold px-2 py-0.5 rounded-full">
                        Popular
                      </span>
                    )}
                    {food.tags.includes('new') && (
                      <span className="tag bg-[#FFF3EC] text-[#E8662A] text-xs font-bold px-2 py-0.5 rounded-full">
                        New
                      </span>
                    )}
                    {food.tags.includes('hot') && (
                      <span className="tag bg-[#FFF3EC] text-[#E8662A] text-xs font-bold px-2 py-0.5 rounded-full">
                        Hot
                      </span>
                    )}
                    {food.tags.includes('group') && (
                      <span className="tag bg-[#EFF6FF] text-[#1D4ED8] text-xs font-bold px-2 py-0.5 rounded-full">
                        Group
                      </span>
                    )}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded-xl px-2.5 py-1 text-xs font-bold text-[#F07B3A]">
                    {food.price}
                  </div>
                  
                  {/* Group Progress */}
                  {food.isGroup && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm px-3 py-2">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-white text-[10px] font-semibold">{food.joined} of {food.totalSlots} joined</p>
                        <p className="text-white/60 text-[10px]">{food.totalSlots - food.joined} spots left</p>
                      </div>
                      <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#F07B3A] rounded-full" 
                          style={{ width: `${(food.joined / food.totalSlots) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1">
                      <p className="font-bold text-sm text-[#111] mb-1">{food.name}</p>
                      <p className="text-xs text-[#111]/60 leading-relaxed line-clamp-2">
                        {food.desc}
                      </p>
                    </div>
                    {food.rating && (
                      <div className="flex items-center gap-0.5 shrink-0">
                        <span style={{ color: '#F5A54A', fontSize: '11px' }}>★</span>
                        <span className="text-xs font-semibold text-[#111]/60">{food.rating}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#111]/45 mb-3">
                    <span>By {food.by}</span>
                    <span className="w-1 h-1 bg-[#111]/20 rounded-full"></span>
                    <span>{food.hostel}</span>
                    <span className="w-1 h-1 bg-[#111]/20 rounded-full"></span>
                    <span>{food.portions} portions</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-[#111]/40">
                      <span className="icon-o" style={{ fontSize: '13px' }}>schedule</span>
                      Ready in {food.ready}
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        addToOrder(food.name, food.price);
                      }}
                      className={`h-8 px-3 rounded-xl text-white text-xs font-bold transition-colors flex items-center gap-1 ${
                        food.isGroup 
                          ? 'bg-[#8B5CF6] hover:bg-[#7C3AED]' 
                          : 'bg-[#F07B3A] hover:bg-[#E8662A]'
                      }`}
                    >
                      <span className="icon" style={{ fontSize: '14px' }}>
                        {food.isGroup ? 'group_add' : 'add'}
                      </span>
                      {food.isGroup ? 'Join' : 'Order'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredFood.length === 0 && (
            <div className="text-center py-16">
              <span className="icon-o" style={{ fontSize: '48px', opacity: 0.2, display: 'block', marginBottom: '12px' }}>
                search_off
              </span>
              <p className="text-sm font-semibold text-[#111]/40">No meals found</p>
              <p className="text-xs text-[#111]/25 mt-1">Try a different category or clear filters</p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />

      {/* Filter Drawer */}
      {filterDrawerOpen && (
        <>
          <div 
            className="fixed inset-0 z-40 bg-black/40 opacity-100"
            onClick={() => setFilterDrawerOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl px-5 pt-5 pb-8 transform translate-y-0 transition-transform">
            <div className="w-10 h-1 bg-black/10 rounded-full mx-auto mb-5" />
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg text-[#111]">Filters</h3>
              <button 
                onClick={() => setFilterDrawerOpen(false)}
                className="w-8 h-8 rounded-xl bg-black/5 flex items-center justify-center"
              >
                <span className="icon-o" style={{ fontSize: '18px' }}>close</span>
              </button>
            </div>
            
            <div className="flex flex-col gap-5">
              {/* Price Range */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold text-[#111]">Max price</p>
                  <p className="text-sm font-bold text-[#F07B3A]">${maxPrice}</p>
                </div>
                <input
                  type="range"
                  min="20"
                  max="500"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full h-1 rounded-full bg-black/10 outline-none"
                  style={{
                    WebkitAppearance: 'none',
                  }}
                />
              </div>

              {/* Diet Preference */}
              <div>
                <p className="text-sm font-semibold text-[#111] mb-2">Diet preference</p>
                <div className="flex gap-2 flex-wrap">
                  <button 
                    onClick={() => setDietPreference('any')}
                    className={`filter-chip h-8 px-3 rounded-full text-xs font-semibold ${
                      dietPreference === 'any' 
                        ? 'bg-black text-white border-black' 
                        : 'border border-black/10 bg-white text-[#111]'
                    }`}
                  >
                    Any
                  </button>
                  <button 
                    onClick={() => setDietPreference('veg')}
                    className={`filter-chip h-8 px-3 rounded-full text-xs font-semibold flex items-center gap-1 ${
                      dietPreference === 'veg' 
                        ? 'bg-black text-white border-black' 
                        : 'border border-black/10 bg-white text-[#111]'
                    }`}
                  >
                    <span className="icon" style={{ fontSize: '12px', color: '#15803D' }}>circle</span>
                    Veg only
                  </button>
                  <button 
                    onClick={() => setDietPreference('non-veg')}
                    className={`filter-chip h-8 px-3 rounded-full text-xs font-semibold flex items-center gap-1 ${
                      dietPreference === 'non-veg' 
                        ? 'bg-black text-white border-black' 
                        : 'border border-black/10 bg-white text-[#111]'
                    }`}
                  >
                    <span className="icon" style={{ fontSize: '12px', color: '#B91C1C' }}>circle</span>
                    Non-veg
                  </button>
                </div>
              </div>

              {/* Ready Time */}
              <div>
                <p className="text-sm font-semibold text-[#111] mb-2">Ready within</p>
                <div className="flex gap-2 flex-wrap">
                  <button 
                    onClick={() => setReadyTime('any')}
                    className={`filter-chip h-8 px-3 rounded-full text-xs font-semibold ${
                      readyTime === 'any' 
                        ? 'bg-black text-white border-black' 
                        : 'border border-black/10 bg-white text-[#111]'
                    }`}
                  >
                    Any time
                  </button>
                  <button 
                    onClick={() => setReadyTime('5')}
                    className={`filter-chip h-8 px-3 rounded-full text-xs font-semibold ${
                      readyTime === '5' 
                        ? 'bg-black text-white border-black' 
                        : 'border border-black/10 bg-white text-[#111]'
                    }`}
                  >
                    5 min
                  </button>
                  <button 
                    onClick={() => setReadyTime('15')}
                    className={`filter-chip h-8 px-3 rounded-full text-xs font-semibold ${
                      readyTime === '15' 
                        ? 'bg-black text-white border-black' 
                        : 'border border-black/10 bg-white text-[#111]'
                    }`}
                  >
                    15 min
                  </button>
                  <button 
                    onClick={() => setReadyTime('30')}
                    className={`filter-chip h-8 px-3 rounded-full text-xs font-semibold ${
                      readyTime === '30' 
                        ? 'bg-black text-white border-black' 
                        : 'border border-black/10 bg-white text-[#111]'
                    }`}
                  >
                    30 min
                  </button>
                </div>
              </div>

              {/* Pickup Hostel */}
              <div>
                <p className="text-sm font-semibold text-[#111] mb-2">Pickup hostel</p>
                <div className="flex gap-2 flex-wrap">
                  <button 
                    onClick={() => setPickupHostel('any')}
                    className={`filter-chip h-8 px-3 rounded-full text-xs font-semibold ${
                      pickupHostel === 'any' 
                        ? 'bg-black text-white border-black' 
                        : 'border border-black/10 bg-white text-[#111]'
                    }`}
                  >
                    Any
                  </button>
                  <button 
                    onClick={() => setPickupHostel('H7')}
                    className={`filter-chip h-8 px-3 rounded-full text-xs font-semibold ${
                      pickupHostel === 'H7' 
                        ? 'bg-black text-white border-black' 
                        : 'border border-black/10 bg-white text-[#111]'
                    }`}
                  >
                    H7
                  </button>
                  <button 
                    onClick={() => setPickupHostel('H9')}
                    className={`filter-chip h-8 px-3 rounded-full text-xs font-semibold ${
                      pickupHostel === 'H9' 
                        ? 'bg-black text-white border-black' 
                        : 'border border-black/10 bg-white text-[#111]'
                    }`}
                  >
                    H9
                  </button>
                  <button 
                    onClick={() => setPickupHostel('C3')}
                    className={`filter-chip h-8 px-3 rounded-full text-xs font-semibold ${
                      pickupHostel === 'C3' 
                        ? 'bg-black text-white border-black' 
                        : 'border border-black/10 bg-white text-[#111]'
                    }`}
                  >
                    C3
                  </button>
                  <button 
                    onClick={() => setPickupHostel('B2')}
                    className={`filter-chip h-8 px-3 rounded-full text-xs font-semibold ${
                      pickupHostel === 'B2' 
                        ? 'bg-black text-white border-black' 
                        : 'border border-black/10 bg-white text-[#111]'
                    }`}
                  >
                    B2
                  </button>
                  <button 
                    onClick={() => setPickupHostel('A1')}
                    className={`filter-chip h-8 px-3 rounded-full text-xs font-semibold ${
                      pickupHostel === 'A1' 
                        ? 'bg-black text-white border-black' 
                        : 'border border-black/10 bg-white text-[#111]'
                    }`}
                  >
                    A1
                  </button>
                </div>
              </div>
            </div>

            <button 
              onClick={() => {
                setFilterDrawerOpen(false);
                showToast('Filters applied');
              }}
              className="mt-5 w-full h-12 rounded-2xl bg-[#F07B3A] text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#E8662A] transition-colors"
            >
              <span className="icon" style={{ fontSize: '18px' }}>check</span>
              Apply filters
            </button>
          </div>
        </>
      )}

      {/* Food Detail Drawer */}
      {detailDrawerOpen && selectedFood && (
        <>
          <div 
            className="fixed inset-0 z-40 bg-black/40 opacity-100"
            onClick={closeDetail}
          />
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl max-h-[90vh] overflow-y-auto transform translate-y-0 transition-transform">
            <div className="w-10 h-1 bg-black/10 rounded-full mx-auto mb-1 mt-4" />
            <div className="px-5 pb-8">
              {/* Image */}
              <div 
                className="h-48 rounded-2xl flex items-center justify-center text-8xl mb-5 -mx-5" 
                style={{ background: selectedFood.gradient }}
              >
                {selectedFood.emoji}
              </div>

              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-2">
                <h2 className="text-xl text-[#111] leading-tight">{selectedFood.name}</h2>
                <p className="text-xl text-[#F07B3A] shrink-0" style={{ fontFamily: 'Syne', fontWeight: 800 }}>
                  {selectedFood.price}
                </p>
              </div>

              {/* Tags + Rating */}
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className={`tag text-xs font-bold px-2 py-0.5 rounded-full ${
                  selectedFood.veg ? 'bg-[#F0FDF4] text-[#15803D]' : 'bg-[#FEF2F2] text-[#B91C1C]'
                }`}>
                  {selectedFood.veg ? '● Veg' : '● Non-veg'}
                </span>
                {selectedFood.isGroup && (
                  <span className="tag bg-[#EFF6FF] text-[#1D4ED8] text-xs font-bold px-2 py-0.5 rounded-full">
                    Group order
                  </span>
                )}
                {selectedFood.rating && (
                  <div className="flex items-center gap-0.5 ml-auto">
                    <span style={{ color: '#F5A54A', fontSize: '12px' }}>★</span>
                    <span className="text-xs font-bold text-[#111]">{selectedFood.rating}</span>
                    <span className="text-xs text-[#111]/35 ml-1">({selectedFood.reviews} reviews)</span>
                  </div>
                )}
              </div>

              <p className="text-sm text-[#111]/55 leading-relaxed mb-4">{selectedFood.desc}</p>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-[#F7F7F5] rounded-xl p-3">
                  <p className="text-[10px] text-[#111]/35 font-semibold uppercase tracking-wider mb-1">Posted by</p>
                  <p className="text-sm font-bold text-[#111]">{selectedFood.by}</p>
                  <p className="text-xs text-[#111]/40">{selectedFood.hostel}</p>
                </div>
                <div className="bg-[#F7F7F5] rounded-xl p-3">
                  <p className="text-[10px] text-[#111]/35 font-semibold uppercase tracking-wider mb-1">Ready in</p>
                  <p className="text-sm font-bold text-[#111]">{selectedFood.ready}</p>
                  <p className="text-xs text-[#111]/40">{selectedFood.portions} portions left</p>
                </div>
              </div>

              {/* Group Progress */}
              {selectedFood.isGroup && (
                <div className="mb-5 bg-[#F3EFFE] rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-bold text-[#6D28D9]">Group order progress</p>
                    <p className="text-xs text-[#111]/45">{selectedFood.joined} of {selectedFood.totalSlots} joined</p>
                  </div>
                  <div className="h-2.5 bg-white/60 rounded-full overflow-hidden mb-2">
                    <div 
                      className="h-full bg-[#8B5CF6] rounded-full" 
                      style={{ width: `${(selectedFood.joined / selectedFood.totalSlots) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs text-[#111]/45">
                    {selectedFood.totalSlots - selectedFood.joined} more needed to place the order. Deadline: 
                    <span className="font-semibold text-[#6D28D9]"> 8:00 PM tonight</span>
                  </p>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3">
                <button 
                  onClick={closeDetail}
                  className="flex-1 h-12 rounded-2xl border border-black/10 bg-white font-semibold text-sm text-[#111] hover:bg-[#F7F7F5] transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => {
                    addToOrder(selectedFood.name, selectedFood.price);
                    closeDetail();
                  }}
                  className={`flex-1 h-12 rounded-2xl text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors ${
                    selectedFood.isGroup ? 'bg-[#8B5CF6] hover:bg-[#7C3AED]' : 'bg-[#F07B3A] hover:bg-[#E8662A]'
                  }`}
                >
                  <span className="icon" style={{ fontSize: '18px' }}>
                    {selectedFood.isGroup ? 'group_add' : 'shopping_cart'}
                  </span>
                  {selectedFood.isGroup ? 'Join group order' : 'Add to order'}
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Toast */}
      <div 
        className={`fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-[#111] text-white text-xs font-semibold px-4 py-2.5 rounded-full z-70 pointer-events-none flex items-center gap-2 transition-all ${
          toast.show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <span className="icon" style={{ fontSize: '14px', color: '#3DBDA8' }}>check_circle</span>
        <span>{toast.message}</span>
      </div>

      <style jsx>{`
        @keyframes up {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
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
        .search-inp::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #F07B3A;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(240,123,58,.4);
        }
        .search-inp::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #F07B3A;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(240,123,58,.4);
          border: none;
        }
        .food-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(0,0,0,.1);
        }
        .filter-chip.active-chip {
          background: #111;
          color: #fff;
          border-color: #111;
        }
      `}</style>
    </div>
  );
};

export default FindFood;
