import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icons from '../../components/Icons';

const RideHistory = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [rideHistory, setRideHistory] = useState([]);
  const [selectedRide, setSelectedRide] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Set ride history data immediately for SPA
    setRideHistory([
      {
        id: 1,
        date: '2024-04-27',
        time: '8:45 AM',
        from: 'South Hall',
        to: 'Student Center',
        driver: 'Karan M.',
        driverInitial: 'K',
        driverColor: '#f0f0f0',
        price: '$30',
        status: 'pending',
        rating: null,
        seats: '3 of 4',
        liveTracking: false
      },
      {
        id: 2,
        date: '2024-04-29',
        time: '10:30 AM',
        from: 'North Campus Gate',
        to: 'Downtown Station',
        driver: 'Riya S.',
        driverInitial: 'R',
        driverColor: '#8B5CF6',
        price: '$40',
        status: 'prepaid',
        rating: null,
        seats: '1 of 3',
        liveTracking: true,
        distance: '3.2 mi'
      },
      {
        id: 3,
        date: '2024-04-24',
        time: '11:00 AM',
        from: 'South Campus Gate',
        to: 'Downtown Station',
        driver: 'Riya S.',
        driverInitial: 'R',
        driverColor: '#8B5CF6',
        price: '$40',
        status: 'accepted',
        rating: 5,
        seats: '1 of 3',
        liveTracking: true,
        distance: '3.2 mi'
      },
      {
        id: 4,
        date: '2024-04-28',
        time: '2:15 PM',
        from: 'East Dorm',
        to: 'Library',
        driver: 'Priya N.',
        driverInitial: 'P',
        driverColor: '#3DBDA8',
        price: '$25',
        status: 'inprogress',
        rating: 5,
        seats: '2 of 4',
        liveTracking: false
      },
      
      {
        id: 5,
        date: '2024-04-26',
        time: '6:00 PM',
        from: 'West Dorm',
        to: 'Downtown',
        driver: 'Emma Davis',
        driverInitial: 'E',
        driverColor: '#EC4899',
        price: '$35',
        status: 'completed',
        rating: 4,
        seats: '4 of 4',
        liveTracking: false
      },
      {
        id: 6,
        date: '2024-04-25',
        time: '4:30 PM',
        from: 'North Campus Gate',
        to: 'Downtown Station',
        driver: 'Riya S.',
        driverInitial: 'R',
        driverColor: '#8B5CF6',
        price: '$40',
        status: 'cancelled',
        rating: null,
        seats: '1 of 3',
        liveTracking: true,
        distance: '3.2 mi'
      }
    ]);
  }, []);

  const filteredRides = activeTab === 'all' 
    ? rideHistory 
    : rideHistory.filter(ride => ride.status === activeTab);

  const getStatusClass = (status) => {
    const statusClasses = {
      pending: 'bg-[#FEF9EC] text-[#B45309] border border-[#F59E22]/30',
      prepaid: 'bg-[#EFF6FF] text-[#1D4ED8] border border-[#3B82F6]/25',
      accepted: 'bg-[#EAF9F7] text-[#2A9E8C] border border-[#3DBDA8]/25',
      inprogress: 'bg-[#F3EFFE] text-[#6D28D9] border border-[#8B5CF6]/25',
      completed: 'bg-[#EAF9F7] text-[#2A9E8C] border border-[#3DBDA8]/25',
      cancelled: 'bg-[#FEF9EC] text-[#B45309] border border-[#F59E22]/30'
    };
    return statusClasses[status] || statusClasses.pending;
  };

  const getStatusConfig = (status) => {
    const configs = {
      pending: { bg: '#FEF9EC', color: '#B45309', icon: 'schedule', label: 'Pending' },
      prepaid: { bg: '#EFF6FF', color: '#1D4ED8', icon: 'payments', label: 'Prepaid' },
      accepted: { bg: '#EAF9F7', color: '#2A9E8C', icon: 'check_circle', label: 'Accepted' },
      inprogress: { bg: '#F3EFFE', color: '#6D28D9', icon: 'directions_car', label: 'In Progress' },
      completed: { bg: '#EAF9F7', color: '#2A9E8C', icon: 'check_circle', label: 'Completed' },
      cancelled: { bg: '#FEF9EC', color: '#B45309', icon: 'cancel', label: 'Cancelled' }
    };
    return configs[status] || configs.pending;
  };

  const getTabBackgroundColor = (tab) => {
    const colors = {
      all: '#3DBDA8',
      pending: '#B45309',
      prepaid: '#1D4ED8',
      accepted: '#2A9E8C',
      inprogress: '#6D28D9',
      completed: '#2A9E8C',
      cancelled: '#B45309'
    };
    return colors[tab] || '#3DBDA8';
  };

  const openRideDetail = (ride) => {
    setSelectedRide(ride);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedRide(null);
  };

  
  return (
    <div className="min-h-screen bg-[#F7F7F5] relative flex flex-col">
      {/* Background Pattern */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3Cfilter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.022'/%3E%3C/svg%3E")`
        }}
      />

      {/* Fixed Header Section */}
      <div className="fixed top-0 left-0 right-0 z-20 bg-[#F7F7F5]">
        {/* Top Navigation */}
        <nav className="px-4 h-14 flex items-center gap-3" style={{ background: 'rgba(247,247,245,.95)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(0,0,0,.07)' }}>
          <button 
            onClick={() => navigate('/student-home')}
            className="w-9 h-9 rounded-xl bg-[#111]/5 flex items-center justify-center hover:bg-[#111]/10 shrink-0"
          >
            <Icons.ArrowBack />
          </button>
          <h1 className="text-base text-[#111] flex-1" style={{ fontFamily: 'Syne', fontWeight: 800 }}>My Rides</h1>
        </nav>

        {/* Status Filter Tabs */}
        <div className="bg-white border-b border-black/7 px-4 py-3">
          <div className="flex gap-2 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            {['all', 'pending', 'prepaid', 'accepted', 'inprogress', 'completed', 'cancelled'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`status-tab capitalize ${
                  activeTab === tab ? 'active' : ''
                }`}
                style={{
                  padding: '6px 14px',
                  borderRadius: '99px',
                  fontSize: '12px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all .18s ease',
                  whiteSpace: 'nowrap',
                  border: '1.5px solid transparent',
                  backgroundColor: activeTab === tab ? getTabBackgroundColor(tab) : '#fff',
                  borderColor: activeTab === tab ? getTabBackgroundColor(tab) : 'rgba(0,0,0,.1)',
                  color: activeTab === tab ? '#fff' : '#111',
                  opacity: activeTab === tab ? 1 : 0.45
                }}
              >
                {tab === 'all' ? 'All' : tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scrollable Content Section */}
      <div className="flex-1 pt-[112px] pb-[60px] overflow-y-auto z-10 relative">
        <div className="max-w-xl mx-auto px-4 pt-4">
          {/* Ride Cards */}
          {filteredRides.length === 0 ? (
            <div className="text-center py-16">
              <Icons.DirectionsCar />
              <p className="text-[#111]/60 mt-4">No rides found</p>
            </div>
          ) : (
            <div id="ride-list" className="space-y-4">
              {filteredRides.map((ride) => (
                <div key={ride.id} className="ride-card u1 bg-white border border-black/7 rounded-[20px] p-4 cursor-pointer" style={{ boxShadow: '0 1px 3px rgba(0,0,0,.04)' }} onClick={() => openRideDetail(ride)}>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#F3EFFE] flex items-center justify-center shrink-0" style={{ backgroundColor: ride.status === 'inprogress' ? '#F3EFFE' : ride.driverColor + '20' }}>
                      <span className="icon" style={{ fontSize: '20px', color: ride.status === 'inprogress' ? '#8B5CF6' : ride.driverColor }}>directions_car</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                        <p className="font-bold text-sm text-[#111]">Ride with {ride.driver}</p>
                        <span className={`status-pill ${getStatusClass(ride.status)} px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1`}>
                          {ride.status === 'inprogress' && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" style={{ animation: 'pulse 1.5s infinite' }}></span>
                          )}
                          {ride.status === 'inprogress' ? 'In Progress' : ride.status.charAt(0).toUpperCase() + ride.status.slice(1)}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-[#111]/45 mb-2">
                        <span className="icon" style={{ fontSize: '12px', color: '#3DBDA8' }}>trip_origin</span>
                        {ride.from}
                        <span className="icon-o" style={{ fontSize: '12px' }}>arrow_forward</span>
                        <span className="icon" style={{ fontSize: '12px', color: '#F07B3A' }}>location_on</span>
                        {ride.to}
                      </div>
                      <div className="flex items-center gap-3 text-xs text-[#111]/40">
                        <span className="flex items-center gap-1">
                          <span className="icon-o" style={{ fontSize: '12px' }}>schedule</span>
                          {ride.date === '2024-04-29' ? 'Today' : ride.date} · {ride.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="icon-o" style={{ fontSize: '12px' }}>payments</span>
                          {ride.price}
                        </span>
                      </div>
                    </div>
                    <span className="icon-o shrink-0 opacity-30" style={{ fontSize: '18px' }}>chevron_right</span>
                  </div>
                  
                  {/* Live Tracking Bar */}
                  {ride.liveTracking && ride.status === 'inprogress' && (
                    <div className="mt-3 bg-[#F3EFFE] rounded-xl p-3 flex items-center gap-2">
                      <span className="icon" style={{ fontSize: '16px', color: '#8B5CF6' }}>my_location</span>
                      <p className="text-xs font-semibold text-[#6D28D9]">Live · {ride.distance} to destination</p>
                      <button className="ml-auto text-xs text-[#8B5CF6] font-bold hover:underline">Track</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="bottom-nav fixed bottom-0 left-0 right-0 z-20 flex" style={{ background: 'rgba(255,255,255,.96)', backdropFilter: 'blur(16px)', borderTop: '1px solid rgba(0,0,0,.07)' }}>
        <button 
          onClick={() => navigate('/student-home')}
          className="nav-item"
          style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '3px', padding: '8px 4px', cursor: 'pointer' }}
        >
          <span className="icon-o nav-icon" style={{ fontSize: '22px', opacity: 0.3 }}>home</span>
          <span className="nav-label" style={{ fontSize: '10px', fontWeight: 600, opacity: 0.3 }}>Home</span>
        </button>
        <button 
          onClick={() => navigate('/find-ride')}
          className="nav-item"
          style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '3px', padding: '8px 4px', cursor: 'pointer' }}
        >
          <span className="icon-o nav-icon" style={{ fontSize: '22px', opacity: 0.3 }}>directions_car</span>
          <span className="nav-label" style={{ fontSize: '10px', fontWeight: 600, opacity: 0.3 }}>Rides</span>
        </button>
        <button 
          onClick={() => navigate('/find-food')}
          className="nav-item"
          style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '3px', padding: '8px 4px', cursor: 'pointer' }}
        >
          <span className="icon-o nav-icon" style={{ fontSize: '22px', opacity: 0.3 }}>restaurant</span>
          <span className="nav-label" style={{ fontSize: '10px', fontWeight: 600, opacity: 0.3 }}>Food</span>
        </button>
        <button 
          onClick={() => navigate('/chat-box')}
          className="nav-item"
          style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '3px', padding: '8px 4px', cursor: 'pointer' }}
        >
          <span className="icon-o nav-icon" style={{ fontSize: '22px', opacity: 0.3 }}>forum</span>
          <span className="nav-label" style={{ fontSize: '10px', fontWeight: 600, opacity: 0.3 }}>Messages</span>
        </button>
        <div className="nav-item active" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '3px', padding: '8px 4px' }}>
          <span className="icon nav-icon" style={{ fontSize: '22px', color: '#3DBDA8', opacity: 1 }}>person</span>
          <span className="nav-label" style={{ fontSize: '10px', fontWeight: 600, color: '#3DBDA8', opacity: 1 }}>Profile</span>
        </div>
      </nav>

      {/* Modal */}
      {showModal && selectedRide && (
        <>
          <div 
            className="fixed inset-0 z-40 bg-black/40 opacity-0 transition-opacity duration-250"
            style={{ pointerEvents: showModal ? 'all' : 'none', opacity: showModal ? 1 : 0 }}
            onClick={closeModal}
          ></div>
          <div 
            id="detail-drawer"
            className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-[24px] transform transition-transform duration-300 max-h-[85vh] overflow-y-auto"
            style={{ transform: showModal ? 'translateY(0)' : 'translateY(100%)' }}
          >
            {/* Modal Header */}
            {/* <div className="sticky top-0 bg-white z-10 px-4 py-3 border-b border-black/7">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg text-[#111]" style={{ fontFamily: 'Syne', fontWeight: 800 }}>Ride Details</h3>
                <button 
                  onClick={closeModal}
                  className="w-8 h-8 rounded-xl bg-[#111]/5 flex items-center justify-center hover:bg-[#111]/10"
                >
                  <Icons.Close />
                </button>
              </div>
            </div> */}

            {/* Modal Content */}
            <div className="p-4">
              {(() => {
                const cfg = getStatusConfig(selectedRide.status);
                const isActive = selectedRide.status === 'inprogress';
                const isCompleted = selectedRide.status === 'completed';
                const isCancelled = selectedRide.status === 'cancelled';
                
                return (
                  <>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-11 h-11 rounded-2xl flex items-center justify-center" 
                          style={{ background: cfg.bg }}
                        >
                          <span className="icon" style={{ fontSize: '22px', color: cfg.color }}>{cfg.icon}</span>
                        </div>
                        <div>
                          <p className="font-bold text-base text-[#111]">Ride Details</p>
                          <span className={`status-pill px-2 rounded-2xl ${getStatusClass(selectedRide.status)} text-[10px]`}>{cfg.label}</span>
                        </div>
                      </div>
                      <button 
                        onClick={closeModal} 
                        className="w-8 h-8 rounded-xl bg-black/5 flex items-center justify-center"
                      >
                        <span className="icon-o" style={{ fontSize: '18px' }}>close</span>
                      </button>
                    </div>

                    {/* Driver */}
                    <div className="flex items-center gap-3 bg-[#F7F7F5] rounded-2xl p-4 mb-4">
                      <div className="w-11 h-11 rounded-full bg-[#3DBDA8] flex items-center justify-center text-white font-bold shrink-0">
                        {selectedRide.driverInitial}
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-sm text-[#111]">{selectedRide.driver}</p>
                        <p className="text-xs text-[#111]/40">Toyota Camry · CA02 AZ 1234</p>
                        <div className="flex items-center gap-0.5 mt-0.5">
                          <span style={{ color: '#F5A54A', fontSize: '11px' }}>{'\u2605\u2605\u2605\u2605\u2605'}</span>
                          <span className="text-xs text-[#111]/50 ml-1">4.8</span>
                        </div>
                      </div>
                      <button className="w-9 h-9 rounded-xl bg-[#3DBDA8] flex items-center justify-center">
                        <span className="icon text-white" style={{ fontSize: '18px' }}>chat</span>
                      </button>
                    </div>

                    {/* Route */}
                    <div className="mb-4">
                      <div className="flex gap-3">
                        <div className="flex flex-col items-center pt-1">
                          <span className="icon" style={{ fontSize: '15px', color: '#3DBDA8' }}>trip_origin</span>
                          <div className="w-0.5 h-8 bg-black/10 my-1"></div>
                          <span className="icon" style={{ fontSize: '15px', color: '#F07B3A' }}>location_on</span>
                        </div>
                        <div className="flex flex-col justify-between" style={{ minHeight: '60px' }}>
                          <div>
                            <p className="text-sm font-semibold text-[#111]">{selectedRide.from}</p>
                            <p className="text-xs text-[#111]/40">{selectedRide.date === '2024-04-29' ? 'Today' : selectedRide.date} · {selectedRide.time}</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[#111]">{selectedRide.to}</p>
                            <p className="text-xs text-[#111]/40">~{selectedRide.time}</p>
                          </div>
                        </div>
                        <div className="ml-auto text-right">
                          <p style={{ fontFamily: 'Syne', fontWeight: 800 }} className="text-xl text-[#F07B3A]">{selectedRide.price}</p>
                          <p className="text-[10px] text-[#111]/35">paid via wallet</p>
                        </div>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="mb-5">
                      <p className="text-xs font-bold text-[#111]/30 uppercase tracking-widest mb-3">Timeline</p>
                      <div className="tl-item" style={{ display: 'flex', gap: '12px', paddingBottom: '18px', position: 'relative' }}>
                        <div className="tl-line" style={{ position: 'absolute', left: '11px', top: '22px', width: '2px', height: 'calc(100% - 4px)', background: 'rgba(0,0,0,.08)', borderRadius: '1px' }}></div>
                        <div className="tl-dot bg-[#EAF9F7]" style={{ width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                          <span className="icon" style={{ fontSize: '13px', color: '#3DBDA8' }}>check_circle</span>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[#111]">Booking confirmed</p>
                          <p className="text-[10px] text-[#111]/35">{selectedRide.date === '2024-04-29' ? 'Today' : selectedRide.date}, 10:05 AM</p>
                        </div>
                      </div>
                      <div className="tl-item" style={{ display: 'flex', gap: '12px', paddingBottom: '18px', position: 'relative' }}>
                        <div className="tl-line" style={{ position: 'absolute', left: '11px', top: '22px', width: '2px', height: 'calc(100% - 4px)', background: 'rgba(0,0,0,.08)', borderRadius: '1px' }}></div>
                        <div className="tl-dot bg-[#EAF9F7]" style={{ width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                          <span className="icon" style={{ fontSize: '13px', color: '#3DBDA8' }}>payments</span>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[#111]">Payment deducted</p>
                          <p className="text-[10px] text-[#111]/35">{selectedRide.price} from wallet · 10:05 AM</p>
                        </div>
                      </div>
                      <div className="tl-item" style={{ display: 'flex', gap: '12px', paddingBottom: '18px', position: 'relative' }}>
                        <div className="tl-line" style={{ position: 'absolute', left: '11px', top: '22px', width: '2px', height: 'calc(100% - 4px)', background: 'rgba(0,0,0,.08)', borderRadius: '1px' }}></div>
                        <div 
                          className="tl-dot" 
                          style={{ 
                            width: '22px', 
                            height: '22px', 
                            borderRadius: '50%', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            flexShrink: 0, 
                            marginTop: '1px',
                            background: isActive ? cfg.bg : 'rgba(0,0,0,.06)'
                          }}
                        >
                          <span 
                            className="icon" 
                            style={{ 
                              fontSize: '13px',
                              color: isActive ? cfg.color : 'rgba(0,0,0,.2)'
                            }}
                          >
                            directions_car
                          </span>
                        </div>
                        <div>
                          <p 
                            className="text-xs font-semibold text-[#111]" 
                            style={{ opacity: isActive ? 1 : 0.4 }}
                          >
                            Ride started
                          </p>
                          <p className="text-[10px] text-[#111]/35">{isActive ? `${selectedRide.date === '2024-04-29' ? 'Today' : selectedRide.date}, ${selectedRide.time}` : 'Pending'}</p>
                        </div>
                      </div>
                      <div className="tl-item" style={{ display: 'flex', gap: '12px', paddingBottom: '0', position: 'relative' }}>
                        <div 
                          className="tl-dot" 
                          style={{ 
                            width: '22px', 
                            height: '22px', 
                            borderRadius: '50%', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            flexShrink: 0, 
                            marginTop: '1px',
                            background: isCompleted ? '#F0FDF4' : 'rgba(0,0,0,.06)'
                          }}
                        >
                          <span 
                            className="icon" 
                            style={{ 
                              fontSize: '13px',
                              color: isCompleted ? '#22C55E' : 'rgba(0,0,0,.2)'
                            }}
                          >
                            flag
                          </span>
                        </div>
                        <div>
                          <p 
                            className="text-xs font-semibold text-[#111]" 
                            style={{ opacity: isCompleted ? 1 : 0.4 }}
                          >
                            Ride completed
                          </p>
                          <p className="text-[10px] text-[#111]/35">{isCompleted ? 'Yesterday, 9:38 AM' : 'Pending'}</p>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-2">
                      {isActive && selectedRide.status !== 'inprogress' && (
                        <button 
                          className="w-full h-11 rounded-2xl bg-[#FEF2F2] text-[#EF4444] font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#FECACA] transition-colors" 
                          onClick={closeModal}
                        >
                          <span className="icon" style={{ fontSize: '17px', color: '#EF4444' }}>cancel</span>
                          Cancel Request
                        </button>
                      )}
                      {isCompleted && (
                        <>
                          <button 
                            className="w-full h-11 rounded-2xl bg-[#F7F7F5] border border-black/8 text-[#111] font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#EAF9F7] transition-colors" 
                            onClick={closeModal}
                          >
                            <span className="icon" style={{ fontSize: '17px', color: '#F5A54A' }}>star</span>
                            Rate this ride
                          </button>
                          <button 
                            className="w-full h-11 rounded-2xl bg-[#F07B3A] text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#E8662A] transition-colors"
                            onClick={() => navigate('/find-ride')}
                          >
                            <span className="icon" style={{ fontSize: '17px' }}>add</span>
                            Book again
                          </button>
                        </>
                      )}
                      {isCancelled && (
                        <button 
                          className="w-full h-11 rounded-2xl bg-[#F07B3A] text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#E8662A] transition-colors"
                          onClick={() => navigate('/find-ride')}
                        >
                          <span className="icon" style={{ fontSize: '17px' }}>search</span>
                          Find a new ride
                        </button>
                      )}
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RideHistory;
