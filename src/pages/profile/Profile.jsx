import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icons from '../../components/Icons';

const Profile = () => {
  const navigate = useNavigate();
  const [editDrawerOpen, setEditDrawerOpen] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '' });
  const [isSaving, setIsSaving] = useState(false);

  const [toggleStates, setToggleStates] = useState({
    notif:true, 
    location:true, 
    dark:false
  });

  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    university: 'State University',
    major: 'B.S. Computer Science',
    bio: 'Campus commuter & foodie. Always looking for ride buddies and good deals on homemade meals ðð',
    phone: '(555) 867-5309',
    rating: 4.9,
    totalReviews: 36,
    rides: 24,
    orders: 18,
    saved: 320,
    memberSince: 'Sep 2024',
    location: 'East Campus'
  });

  const [editedData, setEditedData] = useState({...profileData});

  const reviews = [
    { id: 1, name: 'Riya S.', rating: 5, text: 'Super easy to coordinate with. Was at the pickup spot right on time. Highly recommend!', time: '2 days ago', color: '#3DBDA8' },
    { id: 2, name: 'Karan M.', rating: 5, text: 'Great passenger, very communicative and punctual. Would happily ride with again.', time: '5 days ago', color: '#8B5CF6' },
    { id: 3, name: 'Priya N.', rating: 5, text: 'Picked up the food order quickly and left a nice tip. Great customer!', time: '1 week ago', color: '#EC4899' }
  ];

  const ratingDistribution = [
    { stars: 5, count: 29, percentage: 80 },
    { stars: 4, count: 6, percentage: 17 },
    { stars: 3, count: 1, percentage: 3 }
  ];

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 2500);
  };

  const toggleSetting = (id) => {
    setToggleStates(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
    const newState = !toggleStates[id];
    showToast(`${id.charAt(0).toUpperCase() + id.slice(1)} ${newState ? 'enabled' : 'disabled'}`);
  };

  const openEdit = () => {
    setEditDrawerOpen(true);
    setEditedData({...profileData});
  };

  const closeEdit = () => {
    setEditDrawerOpen(false);
  };

  const saveProfile = () => {
    setIsSaving(true);
    setTimeout(() => {
      setProfileData(editedData);
      setIsSaving(false);
      closeEdit();
      showToast('Profile updated!');
    }, 1200);
  };

  const handleInputChange = (field, value) => {
    setEditedData(prev => ({ ...prev, [field]: value }));
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="h-screen bg-[#F7F7F5] relative flex flex-col">
      {/* Background Pattern */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3Cfilter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.022'/%3E%3C/svg%3E")`
        }}
      />

      {/* Fixed Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-20 px-4 h-14 flex items-center gap-3 bg-white/95 backdrop-blur-md border-b border-black/7">
        <button 
          onClick={() => navigate('/student-home')}
          className="w-9 h-9 rounded-xl bg-[#111]/5 flex items-center justify-center hover:bg-[#111]/10 shrink-0"
        >
          <Icons.ArrowBack />
        </button>
        <h1 className="text-base text-[#111] flex-1">My Profile</h1>
        <button 
          onClick={openEdit}
          className="w-9 h-9 rounded-xl bg-[#111]/5 flex items-center justify-center hover:bg-[#111]/10"
        >
          <Icons.Edit />
        </button>
        <button 
          onClick={() => showToast('Share profile link copied!')}
          className="w-9 h-9 rounded-xl bg-[#111]/5 flex items-center justify-center hover:bg-[#111]/10"
        >
          <Icons.Share />
        </button>
      </nav>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto pt-14" style={{ scrollbarWidth: 'thin' }}>
        <div className="max-w-xl mx-auto px-4 py-6 pb-20 flex flex-col gap-4">

          {/* Profile Hero */}
          <div className="bg-white border border-black/7 rounded-[20px] overflow-hidden u1">
            {/* Cover */}
            <div className="h-24 relative" style={{background: 'linear-gradient(135deg,#111 0%,#1e1e1e 60%,#F07B3A 100%)'}}>
              <button 
                onClick={() => showToast('Cover photo updated')}
                className="absolute top-3 right-3 w-8 h-8 rounded-xl bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 transition-colors"
              >
                <Icons.PhotoCamera />
              </button>
            </div>

            {/* Avatar + info */}
            <div className="px-5 pb-5">
              <div className="flex items-end justify-between -mt-11 mb-4">
                <div className="relative">
                  <div className="w-22 h-22 rounded-full bg-gradient-to-r from-[#F07B3A] to-[#3DBDA8] p-0.75 inline-flex">
                    <div className="w-full h-full rounded-full bg-[#F07B3A] flex items-center justify-center text-white font-bold text-2xl border-3 border-white" style={{ fontFamily: 'Syne' }}>
                      {profileData.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <button 
                    onClick={() => showToast('Photo updated')}
                    className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-[#F07B3A] border-2 border-white flex items-center justify-center hover:bg-[#E8662A] transition-colors"
                  >
                    <span className="icon text-white" style={{ fontSize: '13px' }}>photo_camera</span>
                  </button>
                </div>
                {/* Badges */}
                <div className="flex flex-col items-end gap-1.5 mt-2">
                  <div className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: '#EAF9F7', color: '#2A9E8C', border: '1px solid rgba(61,189,168,.2)' }}>
                    <Icons.Verified />Verified Student
                  </div>
                  <div className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: '#FFF9EC', color: '#F5B942', border: '1px solid rgba(245,183,66,.3)' }}>
                    <Icons.Star />Gold Member
                  </div>
                </div>
              </div>

              {/* Name + bio */}
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h2 className="text-xl text-[#111] mb-0.5" style={{ fontFamily: 'Syne', fontWeight: 800 }}>{profileData.name}</h2>
                  <p className="text-sm text-[#111]/50 mb-1">{profileData.major} · {profileData.university}</p>
                  <p className="text-xs text-[#111]/40 flex items-center gap-1 mb-3">
                    <Icons.Place />{profileData.location} · Member since {profileData.memberSince}
                  </p>
                  <p className="text-sm text-[#111]/60 leading-relaxed">{profileData.bio}</p>
                </div>
                <button 
                  onClick={openEdit}
                  className="shrink-0 px-4 py-2 rounded-xl bg-[#F07B3A] text-white font-semibold text-xs flex items-center gap-2 transition-all hover:bg-[#E8662A]"
                  style={{ boxShadow: '0 4px 16px rgba(240,123,58,.28)' }}
                >
                  <Icons.Edit />
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 border-t border-black/7">
              <div className="py-4 text-center border-r border-black/7">
                <p className="text-lg text-[#111]" style={{ fontFamily: 'Syne', fontWeight: 800 }}>{profileData.rides}</p>
                <p className="text-[10px] text-[#111]/40 font-semibold">Rides</p>
              </div>
              <div className="py-4 text-center border-r border-black/7">
                <p className="text-lg text-[#111]" style={{ fontFamily: 'Syne', fontWeight: 800 }}>{profileData.orders}</p>
                <p className="text-[10px] text-[#111]/40 font-semibold">Orders</p>
              </div>
              <div className="py-4 text-center border-r border-black/7">
                <p className="text-lg text-[#F07B3A]" style={{ fontFamily: 'Syne', fontWeight: 800 }}>{profileData.rating}★</p>
                <p className="text-[10px] text-[#111]/40 font-semibold">Rating</p>
              </div>
              <div className="py-4 text-center">
                <p className="text-lg text-[#3DBDA8]" style={{ fontFamily: 'Syne', fontWeight: 800 }}>${profileData.saved}</p>
                <p className="text-[10px] text-[#111]/40 font-semibold">Saved</p>
              </div>
            </div>
          </div>

          {/* Vehicle Info */}
          <div className="bg-white border border-black/7 rounded-[20px] px-5 py-4 u2">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-bold text-[#111]/30 uppercase tracking-widest">My Vehicle</p>
              <button className="text-xs text-[#F07B3A] font-semibold hover:underline flex items-center gap-1">
                <Icons.Edit />Edit
              </button>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#F7F7F5] flex items-center justify-center shrink-0">
                <Icons.DirectionsCar />
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm text-[#111]">Toyota Camry · White</p>
                <p className="text-xs text-[#111]/40 mt-0.5">CA02 AZ 1234 · 2021</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#EAF9F7] text-[#2A9E8C]">Verified</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#F3F4F6] text-[#6B7280]">4 seats</span>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="bg-white border border-black/7 rounded-[20px] overflow-hidden u3">
            <div className="flex items-center justify-between px-5 pt-5 mb-1">
              <p className="text-xs font-bold text-[#111]/30 uppercase tracking-widest">Reviews</p>
              <div className="flex items-center gap-1.5">
                <span style={{ color: '#F5A54A', fontSize: '16px' }}>★</span>
                <span className="font-bold text-[#111]">{profileData.rating}</span>
                <span className="text-xs text-[#111]/35">· {profileData.totalReviews} reviews</span>
              </div>
            </div>
            <div className="px-5 pb-5">
              {/* Rating bars */}
              <div className="flex flex-col gap-1.5 mb-5">
                {ratingDistribution.map((item) => (
                  <div key={item.stars} className="flex items-center gap-2">
                    <span className="text-[11px] text-[#111]/45 w-3">{item.stars}</span>
                    <div className="flex-1 h-2 bg-black/8 rounded-full overflow-hidden">
                      <div className="h-full bg-[#F5A54A] rounded-full" style={{ width: `${item.percentage}%` }} />
                    </div>
                    <span className="text-[11px] text-[#111]/35 w-5 text-right">{item.count}</span>
                  </div>
                ))}
              </div>
              {/* Review list */}
              <div>
                {reviews.map((review) => (
                  <div key={review.id} className="pb-4 border-b border-black/6 last:border-b-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[11px] font-bold shrink-0" style={{ backgroundColor: review.color }}>
                        {review.name[0]}
                      </div>
                      <p className="text-xs font-semibold text-[#111]">{review.name}</p>
                      <span style={{ color: '#F5A54A', fontSize: '11x' }}>{'★'.repeat(review.rating)}</span>
                      <span className="text-[10px] text-[#111]/30 ml-auto">{review.time}</span>
                    </div>
                    <p className="text-xs text-[#111]/60 leading-relaxed">{review.text}</p>
                  </div>
                ))}
              </div>
              <button className="mt-3 w-full text-xs text-[#F07B3A] font-semibold hover:underline text-center">
                View all {profileData.totalReviews} reviews
              </button>
            </div>
          </div>

          {/* Settings */}
          <div className="bg-white border border-black/7 rounded-[20px] u4">
            <p className="text-xs font-bold text-[#111]/30 uppercase tracking-widest px-5 pt-5 mb-1">Account</p>
            <div className="px-2 pb-2">
              <div className="flex items-center gap-3 p-3 cursor-pointer transition-colors rounded-[14px] hover:bg-black/4" onClick={openEdit}>
                <div className="w-9 h-9 rounded-xl bg-[#F7F7F5] flex items-center justify-center shrink-0">
                  <Icons.Person />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#111]">Edit profile</p>
                  <p className="text-xs text-[#111]/40">Name, bio, photo</p>
                </div>
                <Icons.ChevronRight />
              </div>
              <div className="flex items-center gap-3 p-3 cursor-pointer transition-colors rounded-[14px] hover:bg-black/4" onClick={() => showToast('Verification page')}>
                <div className="w-9 h-9 rounded-xl bg-[#EAF9F7] flex items-center justify-center shrink-0">
                  <Icons.VerifiedUser />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#111]">Verification</p>
                  <p className="text-xs text-[#3DBDA8] font-semibold">Verified ✓</p>
                </div>
                <Icons.ChevronRight />
              </div>
              <div className="flex items-center gap-3 p-3 cursor-pointer transition-colors rounded-[14px] hover:bg-black/4" onClick={() => navigate('/wallet')}>
                <div className="w-9 h-9 rounded-xl bg-[#FFF3EC] flex items-center justify-center shrink-0">
                  <Icons.AccountBalanceWallet />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#111]">Wallet & Rewards</p>
                  <p className="text-xs text-[#111]/40">Balance: $240 · 1,240 pts</p>
                </div>
                <Icons.ChevronRight />
              </div>
              <div className="flex items-center gap-3 p-3 cursor-pointer transition-colors rounded-[14px] hover:bg-black/4" onClick={() => showToast('Payment settings')}>
                <div className="w-9 h-9 rounded-xl bg-[#F3EFFE] flex items-center justify-center shrink-0">
                  <Icons.CreditCard />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#111]">Payment methods</p>
                  <p className="text-xs text-[#111]/40">Debit card ··· 4242</p>
                </div>
                <Icons.ChevronRight />
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-white border border-black/7 rounded-[20px] u4">
            <p className="text-xs font-bold text-[#111]/30 uppercase tracking-widest px-5 pt-5 mb-1">Preferences</p>
            <div className="px-2 pb-2">
              {/* Notification toggle */}
              <div className="flex items-center gap-3 p-3">
                <div className="w-9 h-9 rounded-xl bg-[#F7F7F5] flex items-center justify-center shrink-0">
                  <Icons.Notifications />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#111]">Push notifications</p>
                  <p className="text-xs text-[#111]/40">Ride updates, messages</p>
                </div>
                <div 
                  className="w-11 h-6 rounded-full cursor-pointer transition-colors relative shrink-0"
                  style={{ background: toggleStates.notif ? '#3DBDA8' : 'rgba(0,0,0,.12)' }}
                  onClick={() => toggleSetting('notif')}
                >
                  <div 
                    className="w-4.5 h-4.5 rounded-full bg-white absolute top-0.5 transition-transform shadow-md"
                    style={{ left: toggleStates.notif ? '23px' : '3px', transform: 'translateY(0.5px)' }}
                  />
                </div>
              </div>

              {/* Location toggle */}
              <div className="flex items-center gap-3 p-3">
                <div className="w-9 h-9 rounded-xl bg-[#F7F7F5] flex items-center justify-center shrink-0">
                  <Icons.LocationOn />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#111]">Location sharing</p>
                  <p className="text-xs text-[#111]/40">During rides only</p>
                </div>
                <div 
                  className="w-11 h-6 rounded-full cursor-pointer transition-colors relative shrink-0"
                  style={{ background: toggleStates.location ? '#3DBDA8' : 'rgba(0,0,0,.12)' }}
                  onClick={() => toggleSetting('location')}
                >
                  <div 
                    className="w-4.5 h-4.5 rounded-full bg-white absolute top-0.5 transition-transform shadow-md"
                    style={{ left: toggleStates.location ? '23px' : '3px', transform: 'translateY(0.5px)' }}
                  />
                </div>
              </div>

              {/* Dark mode toggle */}
              <div className="flex items-center gap-3 p-3">
                <div className="w-9 h-9 rounded-xl bg-[#F7F7F5] flex items-center justify-center shrink-0">
                  <Icons.DarkMode />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#111]">Dark mode</p>
                  <p className="text-xs text-[#111]/40">App appearance</p>
                </div>
                <div 
                  className="w-11 h-6 rounded-full cursor-pointer transition-colors relative shrink-0"
                  style={{ background: toggleStates.dark ? '#3DBDA8' : 'rgba(0,0,0,.12)' }}
                  onClick={() => toggleSetting('dark')}
                >
                  <div 
                    className="w-4.5 h-4.5 rounded-full bg-white absolute top-0.5 transition-transform shadow-md"
                    style={{ left: toggleStates.dark ? '23px' : '3px', transform: 'translateY(0.5px)' }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 cursor-pointer transition-colors rounded-[14px] hover:bg-black/4" onClick={() => showToast('Language settings')}>
                <div className="w-9 h-9 rounded-xl bg-[#F7F7F5] flex items-center justify-center shrink-0">
                  <Icons.Language />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#111]">Language</p>
                  <p className="text-xs text-[#111]/40">English (US)</p>
                </div>
                <Icons.ChevronRight />
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="bg-white border border-black/7 rounded-[20px] u5">
            <p className="text-xs font-bold text-[#111]/30 uppercase tracking-widest px-5 pt-5 mb-1">Support</p>
            <div className="px-2 pb-2">
              <div className="flex items-center gap-3 p-3 cursor-pointer transition-colors rounded-[14px] hover:bg-black/4" onClick={() => showToast('Help center opening...')}>
                <div className="w-9 h-9 rounded-xl bg-[#F7F7F5] flex items-center justify-center shrink-0">
                  <Icons.Help />
                </div>
                <p className="flex-1 text-sm font-semibold text-[#111]">Help center</p>
                <Icons.ChevronRight />
              </div>
              <div className="flex items-center gap-3 p-3 cursor-pointer transition-colors rounded-[14px] hover:bg-black/4" onClick={() => showToast('Safety center opening...')}>
                <div className="w-9 h-9 rounded-xl bg-[#EAF9F7] flex items-center justify-center shrink-0">
                  <Icons.Shield />
                </div>
                <p className="flex-1 text-sm font-semibold text-[#111]">Safety center</p>
                <Icons.ChevronRight />
              </div>
              <div className="flex items-center gap-3 p-3 cursor-pointer transition-colors rounded-[14px] hover:bg-black/4" onClick={() => showToast('Privacy policy opening...')}>
                <div className="w-9 h-9 rounded-xl bg-[#F7F7F5] flex items-center justify-center shrink-0">
                  <Icons.PrivacyTip />
                </div>
                <p className="flex-1 text-sm font-semibold text-[#111]">Privacy policy</p>
                <Icons.ChevronRight />
              </div>
              <div className="flex items-center gap-3 p-3 cursor-pointer transition-colors rounded-[14px] hover:bg-black/4" onClick={() => showToast('Terms opening...')}>
                <div className="w-9 h-9 rounded-xl bg-[#F7F7F5] flex items-center justify-center shrink-0">
                  <Icons.Description />
                </div>
                <p className="flex-1 text-sm font-semibold text-[#111]">Terms of service</p>
                <Icons.ChevronRight />
              </div>
            </div>
          </div>

          {/* App info + logout */}
          <div className="u5">
            <p className="text-center text-[11px] text-[#111]/25 mb-4">Sharezi v1.0.0 · Made with â¤ï¸ on campus</p>
            <button 
              onClick={() => setLogoutModalOpen(true)}
              className="w-full h-12 rounded-2xl border border-[#EF4444]/30 bg-[#FEF2F2] text-[#EF4444] font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#FECACA] transition-colors"
            >
              <Icons.Logout />Log out
            </button>
          </div>

        </div>
      </div>

      {/* Fixed Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-20 flex bg-white/96 backdrop-blur-md border-t border-black/7">
        <button 
          onClick={() => navigate('/student-home')}
          className="flex-1 flex flex-col items-center justify-center gap-1 p-2 cursor-pointer"
        >
          <Icons.Home />
          <span className="text-[10px] font-semibold" style={{ opacity: 0.3 }}>Home</span>
        </button>
        <button 
          onClick={() => navigate('/find-ride')}
          className="flex-1 flex flex-col items-center justify-center gap-1 p-2 cursor-pointer"
        >
          <Icons.DirectionsCarNav />
          <span className="text-[10px] font-semibold" style={{ opacity: 0.3 }}>Rides</span>
        </button>
        <button 
          onClick={() => navigate('/find-food')}
          className="flex-1 flex flex-col items-center justify-center gap-1 p-2 cursor-pointer"
        >
          <Icons.Restaurant />
          <span className="text-[10px] font-semibold" style={{ opacity: 0.3 }}>Food</span>
        </button>
        <button 
          onClick={() => navigate('/chat-box')}
          className="flex-1 flex flex-col items-center justify-center gap-1 p-2 cursor-pointer"
        >
          <Icons.Forum />
          <span className="text-[10px] font-semibold" style={{ opacity: 0.3 }}>Messages</span>
        </button>
        <div className="flex-1 flex flex-col items-center justify-center gap-1 p-2">
          <Icons.PersonNav />
          <span className="text-[10px] font-semibold" style={{ color: '#3DBDA8', opacity: 1 }}>Profile</span>
        </div>
      </nav>

      {/* Edit Profile Drawer */}
      {editDrawerOpen && (
        <>
          <div 
            className="fixed inset-0 z-40 bg-black/40 opacity-100"
            onClick={closeEdit}
          />
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl px-5 pt-5 pb-9 transform translate-y-0 transition-transform" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
            <div className="w-10 h-1 bg-black/10 rounded-full mx-auto mb-5"></div>
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg text-[#111]">Edit Profile</h3>
              <button onClick={closeEdit} className="w-8 h-8 rounded-xl bg-black/5 flex items-center justify-center">
                <Icons.Close />
              </button>
            </div>

            {/* Avatar picker */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#F07B3A] to-[#3DBDA8] p-0.75 inline-flex">
                  <div className="w-full h-full rounded-full bg-[#F07B3A] flex items-center justify-center text-white font-bold text-2xl border-3 border-white" style={{ fontFamily: 'Syne' }}>
                    {editedData.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <button className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-[#F07B3A] border-2 border-white flex items-center justify-center">
                  <span className="icon text-white" style={{ fontSize: '13px' }}>photo_camera</span>
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#111]/50 mb-1.5">Full name</label>
                <div className="relative">
                  <span className="icon-o absolute left-3 top-1/2 -translate-y-1/2 text-[#111]/28 pointer-events-none" style={{ fontSize: '17px' }}>
                    <Icons.Person />
                  </span>
                  <input 
                    className="w-full h-12 rounded-[13px] border border-black/10 bg-[#F7F7F5] px-4 pl-11 text-sm text-[#111] outline-none transition-colors focus:border-[#F07B3A]" 
                    type="text" 
                    value={editedData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    style={{ fontFamily: 'DM Sans' }}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#111]/50 mb-1.5">University</label>
                <div className="relative">
                  <span className="icon-o absolute left-3 top-1/2 -translate-y-1/2 text-[#111]/28 pointer-events-none" style={{ fontSize: '17px' }}>
                    <Icons.AccountBalance />
                  </span>
                  <input 
                    className="w-full h-12 rounded-[13px] border border-black/10 bg-[#F7F7F5] px-4 pl-11 text-sm text-[#111] outline-none transition-colors focus:border-[#F07B3A]" 
                    type="text" 
                    value={editedData.university}
                    onChange={(e) => handleInputChange('university', e.target.value)}
                    style={{ fontFamily: 'DM Sans' }}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#111]/50 mb-1.5">Major / Program</label>
                <div className="relative">
                  <span className="icon-o absolute left-3 top-1/2 -translate-y-1/2 text-[#111]/28 pointer-events-none" style={{ fontSize: '17px' }}>
                    <Icons.School />
                  </span>
                  <input 
                    className="w-full h-12 rounded-[13px] border border-black/10 bg-[#F7F7F5] px-4 pl-11 text-sm text-[#111] outline-none transition-colors focus:border-[#F07B3A]" 
                    type="text" 
                    value={editedData.major}
                    onChange={(e) => handleInputChange('major', e.target.value)}
                    style={{ fontFamily: 'DM Sans' }}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#111]/50 mb-1.5">Bio</label>
                <textarea 
                  className="w-full border border-black/10 rounded-[13px] bg-[#F7F7F5] px-4 py-3 text-sm text-[#111] outline-none resize-none transition-colors focus:border-[#F07B3A]" 
                  rows={3} 
                  maxLength={150}
                  value={editedData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  style={{ fontFamily: 'DM Sans' }}
                />
                <p className="text-[11px] text-[#111]/30 mt-1 text-right">{editedData.bio.length}/150</p>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#111]/50 mb-1.5">Phone number</label>
                <div className="relative">
                  <span className="icon-o absolute left-3 top-1/2 -translate-y-1/2 text-[#111]/28 pointer-events-none" style={{ fontSize: '17px' }}>
                    <Icons.Phone />
                  </span>
                  <span className="absolute left-10 top-1/2 -translate-y-1/2 text-[13px] text-[#111]/45 pointer-events-none pr-2 border-r border-black/10">+1</span>
                  <input 
                    className="w-full h-12 rounded-[13px] border border-black/10 bg-[#F7F7F5] px-4 pl-20 text-sm text-[#111] outline-none transition-colors focus:border-[#F07B3A]" 
                    type="tel" 
                    value={editedData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    style={{ fontFamily: 'DM Sans' }}
                  />
                </div>
              </div>
              <button 
                onClick={saveProfile}
                className="w-full h-12 rounded-[14px] bg-[#F07B3A] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all hover:bg-[#E8662A]"
                style={{ boxShadow: '0 4px 16px rgba(240,123,58,.28)' }}
              >
                {isSaving ? (
                  <div className="w-4.5 h-4.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                ) : (
                  <>
                    Save changes
                    <span className="icon" style={{ fontSize: '18px' }}>check_circle</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </>
      )}

      {/* Logout Modal */}
      {logoutModalOpen && (
        <div className="fixed inset-0 z-60 flex items-end justify-center">
          <div 
            className="absolute inset-0 bg-black/45"
            onClick={() => setLogoutModalOpen(false)}
          />
          <div className="relative z-10 bg-white rounded-t-3xl p-5 w-full max-w-lg">
            <div className="w-10 h-1 bg-black/10 rounded-full mx-auto mb-5"></div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-[#FEF2F2] flex items-center justify-center shrink-0">
                <Icons.Logout />
              </div>
              <div>
                <p className="font-bold text-base text-[#111]">Log out?</p>
                <p className="text-xs text-[#111]/45">You'll need to sign back in to access your account.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => setLogoutModalOpen(false)}
                className="flex-1 h-12 rounded-2xl bg-[#F7F7F5] border border-black/8 text-[#111] font-bold text-sm hover:bg-[#EEE] transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleLogout}
                className="flex-1 h-12 rounded-2xl bg-[#EF4444] text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#DC2626] transition-colors"
              >
                <Icons.Logout />Log out
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast.show && (
        <div 
          className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-[#111] text-white px-4 py-2.5 rounded-full text-xs font-semibold z-40 flex items-center gap-2 transition-all"
          style={{ opacity: toast.show ? 1 : 0, transform: `translateX(-50%) translateY(${toast.show ? 0 : 16}px)` }}
        >
          <Icons.CheckCircle />
          <span>{toast.message}</span>
        </div>
      )}
    </div>
  );
};

export default Profile;
