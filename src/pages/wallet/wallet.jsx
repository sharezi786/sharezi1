import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavBar from '../../components/bannerComponents/layout/BottomNavBar';

const Wallet = () => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(240.00);
  const [activeSegment, setActiveSegment] = useState('txn');
  const [showTopUp, setShowTopUp] = useState(false);
  const [showSend, setShowSend] = useState(false);
  const [topUpAmount, setTopUpAmount] = useState('');
  const [selectedTopUpChip, setSelectedTopUpChip] = useState(null);
  const [sendTo, setSendTo] = useState('');
  const [sendAmount, setSendAmount] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [promoResult, setPromoResult] = useState({ show: false, message: '', success: false });
  const [toast, setToast] = useState({ show: false, message: '' });
  const [processingTopUp, setProcessingTopUp] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const transactions = [
    { id: 1, type: 'ride', title: 'Ride · North Campus → Downtown', subtitle: 'Today, 10:30 AM · Riya S.', amount: -40, method: 'Wallet' },
    { id: 2, type: 'reward', title: 'Reward redeemed · RIDE5', subtitle: 'Today, 10:25 AM', amount: 5, method: 'Credit' },
    { id: 3, type: 'food', title: 'Food · Lentil Rice Combo', subtitle: 'Yesterday, 12:15 PM · Priya N.', amount: -8, method: 'Wallet' },
    { id: 4, type: 'topup', title: 'Wallet top-up', subtitle: 'Yesterday · Bank transfer', amount: 100, method: 'Added' },
    { id: 5, type: 'ride', title: 'Ride · Campus Lake → Central Station', subtitle: '2 days ago · Karan M.', amount: -55, method: 'Wallet' },
    { id: 6, type: 'food', title: 'Food · Spiced Chai × 2', subtitle: '2 days ago · Mihir P.', amount: -6, method: 'Wallet' },
    { id: 7, type: 'reward', title: 'Referral bonus · Jake M. joined', subtitle: '3 days ago', amount: 10, method: 'Credit' },
    { id: 8, type: 'topup', title: 'Wallet top-up', subtitle: '1 week ago · Debit card', amount: 200, method: 'Added' }
  ];

  const stats = [
    { label: 'Total spent', value: '$840', color: '#F07B3A' },
    { label: 'Total saved', value: '$320', color: '#3DBDA8' },
    { label: 'Points', value: '1,240', color: '#8B5CF6' }
  ];

  const rewards = [
    { id: 1, icon: 'directions_car', color: '#3DBDA8', bg: '#EAF9F7', title: '$5 ride credit', subtitle: 'Valid for 30 days after redemption', points: '500 pts' },
    { id: 2, icon: 'lunch_dining', color: '#F07B3A', bg: '#FFF3EC', title: '$3 food credit', subtitle: 'Use on any food order', points: '300 pts' },
    { id: 3, icon: 'person_add', color: '#8B5CF6', bg: '#F3EFFE', title: 'Refer a friend', subtitle: 'Earn 200 pts per referral + $10 for them', points: 'Earn 200 pts', special: 'Share' },
    { id: 4, icon: 'diamond', color: '#9CA3AF', bg: '#F7F7F5', title: '$20 credit (Platinum only)', subtitle: 'Unlock at Platinum tier', points: '1,000 pts · Platinum required', locked: true }
  ];

  const promos = [
    { id: 1, icon: 'restaurant', color: '#3DBDA8', bg: '#EAF9F7', title: 'First food order free', subtitle: 'Up to $10 off your first food order', code: 'FIRSTFOOD', badge: 'New', expires: 'Dec 31' },
    { id: 2, icon: 'group', color: '#8B5CF6', bg: '#F3EFFE', title: 'Group ride discount', subtitle: '20% off when 3+ people share a ride', code: 'SQUAD20', expires: 'Nov 30' },
    { id: 3, icon: 'local_offer', color: '#9CA3AF', bg: '#F3F4F6', title: 'Weekend special', subtitle: '$5 off Saturday rides · WEEKEND5', code: 'WEEKEND5', badge: 'Expired', expires: null, expired: true }
  ];

  const recentContacts = [
    { id: 1, name: 'Riya S.', initial: 'R', color: '#3DBDA8' },
    { id: 2, name: 'Karan M.', initial: 'K', color: '#8B5CF6' },
    { id: 3, name: 'Mihir P.', initial: 'M', color: '#10B981' },
    { id: 4, name: 'Sneha R.', initial: 'S', color: '#EF4444' }
  ];

  const validCodes = {
    'CAMPUS3': '3 free rides applied!',
    'FIRSTFOOD': '$10 food credit added!',
    'SQUAD20': '20% group ride discount active!'
  };

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast({ show: false, message: '' });
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const showToast = (message) => {
    setToast({ show: true, message });
  };

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    showToast(`Code "${code}" copied!`);
  };

  const handleTopUp = () => {
    const amount = parseFloat(topUpAmount);
    if (!amount || amount <= 0) return;
    
    setProcessingTopUp(true);
    
    setTimeout(() => {
      setBalance(prev => prev + amount);
      setTopUpAmount('');
      setSelectedTopUpChip(null);
      setShowTopUp(false);
      setProcessingTopUp(false);
      showToast(`$${amount} added to wallet!`);
    }, 1400);
  };

  const handleSend = () => {
    const amount = parseFloat(sendAmount);
    if (!sendTo.trim() || !amount || amount <= 0) {
      showToast('Enter recipient and amount');
      return;
    }
    
    setBalance(prev => prev - amount);
    setSendAmount('');
    setSendTo('');
    setShowSend(false);
    showToast(`$${amount} sent to ${sendTo}!`);
  };

  const applyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    
    if (validCodes[code]) {
      setPromoResult({ show: true, message: validCodes[code], success: true });
    } else {
      setPromoResult({ show: true, message: 'Invalid or expired code', success: false });
    }
  };

  const redeemReward = (name, pts) => {
    showToast(`${name} redeemed · ${pts} pts used`);
  };

  const selectContact = (name) => {
    setSendTo(name);
  };

  const getFilteredTransactions = () => {
    if (activeFilter === 'all') return transactions;
    return transactions.filter(tx => tx.type === activeFilter);
  };

  const formatAmount = (amount) => {
    return `${amount >= 0 ? '+' : '-'}$${Math.abs(amount).toFixed(2)}`;
  };

  return (
    <div className="flex flex-col h-screen bg-[#F7F7F5] relative">
      {/* Toast */}
      {toast.show && (
        <div 
          className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-[#111] text-white text-xs font-semibold px-4 py-2.5 rounded-full z-50 flex items-center gap-2 transition-all duration-280 ease-in-out"
          style={{ opacity: toast.show ? 1 : 0, transform: `translateX(-50%) ${toast.show ? 'translateY(0)' : 'translateY(16px)'}` }}
        >
          <span className="material-icons" style={{ fontSize: '14px', color: '#3DBDA8' }}>check_circle</span>
          <span>{toast.message}</span>
        </div>
      )}

      {/* Top Navigation */}
      <nav className="bg-[rgba(247,247,245,.95)] backdrop-blur-md border-b border-black/7 px-4 h-14 flex items-center gap-3 z-20 relative shrink-0">
        <button 
          onClick={() => navigate('/student-home')}
          className="w-9 h-9 rounded-xl bg-[#111]/5 flex items-center justify-center hover:bg-[#111]/10 shrink-0 transition-colors"
        >
          <span className="material-icons" style={{ fontSize: '20px' }}>arrow_back</span>
        </button>
        <h1 className="text-base text-[#111] flex-1 font-syne font-bold">Wallet & Rewards</h1>
        <button className="w-9 h-9 rounded-xl bg-[#111]/5 flex items-center justify-center hover:bg-[#111]/10 transition-colors">
          <span className="material-icons" style={{ fontSize: '20px' }}>more_vert</span>
        </button>
      </nav>

      {/* Scroll Area */}
      <div className="flex-1 overflow-y-auto" id="scroll-area">
        <div className="max-w-xl mx-auto px-4 py-5 pb-28 flex flex-col gap-4">

          {/* Wallet Card */}
          <div className="bg-gradient-to-br from-[#111] to-[#1e1e1e] rounded-3xl p-7 relative overflow-hidden u1">
            <div className="absolute top-[-40px] right-[-40px] w-44 h-44 rounded-full bg-[rgba(240,123,58,.15)]"></div>
            <div className="absolute bottom-[-60px] left-[-20px] w-48 h-48 rounded-full bg-[rgba(61,189,168,.08)]"></div>
            
            <div className="relative z-10">
              {/* Top row */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#F07B3A] flex items-center justify-center">
                    <span className="material-icons" style={{ fontSize: '17px' }}>hub</span>
                  </div>
                  <span className="text-white text-sm font-syne font-bold">Sharezi Pay</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full" 
                     style={{ background: 'rgba(240,183,58,.15)', color: '#F5B942', border: '1px solid rgba(245,183,66,.3)' }}>
                  <span className="material-icons" style={{ fontSize: '13px', color: '#F5B942' }}>star</span>
                  Gold Member
                </div>
              </div>

              {/* Balance */}
              <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-1">Available Balance</p>
              <div className="flex items-end gap-3 mb-6">
                <p className="text-5xl text-white font-syne font-bold">${balance.toFixed(2)}</p>
                <span className="text-[#3DBDA8] text-sm font-semibold mb-1 flex items-center gap-1">
                  <span className="material-icons" style={{ fontSize: '14px', color: '#3DBDA8' }}>trending_up</span>
                  +$30 this week
                </span>
              </div>

              {/* Quick actions */}
              <div className="flex gap-3">
                <button 
                  onClick={() => setShowTopUp(true)}
                  className="flex-1 h-11 rounded-2xl bg-white/10 border border-white/15 text-white text-xs font-bold flex items-center justify-center gap-2 hover:bg-white/15 transition-colors backdrop-blur-sm"
                >
                  <span className="material-icons" style={{ fontSize: '17px' }}>add</span>
                  Add Money
                </button>
                <button 
                  onClick={() => setShowSend(true)}
                  className="flex-1 h-11 rounded-2xl bg-white/10 border border-white/15 text-white text-xs font-bold flex items-center justify-center gap-2 hover:bg-white/15 transition-colors backdrop-blur-sm"
                >
                  <span className="material-icons" style={{ fontSize: '17px' }}>send</span>
                  Send
                </button>
                <button 
                  onClick={() => showToast('QR code shown')}
                  className="flex-1 h-11 rounded-2xl bg-white/10 border border-white/15 text-white text-xs font-bold flex items-center justify-center gap-2 hover:bg-white/15 transition-colors backdrop-blur-sm"
                >
                  <span className="material-icons" style={{ fontSize: '17px' }}>qr_code</span>
                  QR Pay
                </button>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-3 u2">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white border border-black/7 rounded-2xl p-4 text-center shadow-sm">
                <p className="text-xl font-syne font-bold" style={{ color: stat.color }}>{stat.value}</p>
                <p className="text-[10px] text-[#111]/40 mt-0.5 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Segment Tabs */}
          <div className="bg-[#111]/5 rounded-xl p-1 flex gap-1 u3">
            {[
              { id: 'txn', icon: 'receipt_long', label: 'Transactions' },
              { id: 'rewards', icon: 'card_giftcard', label: 'Rewards' },
              { id: 'promo', icon: 'local_offer', label: 'Promos' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSegment(tab.id)}
                className={`flex-1 h-9 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-180 ease-in-out cursor-pointer ${
                  activeSegment === tab.id 
                    ? 'bg-white text-[#111] shadow-md' 
                    : 'text-[#111] opacity-40'
                }`}
              >
                <span className="material-icons" style={{ fontSize: '15px' }}>
                  {tab.icon}
                </span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Transactions */}
          {activeSegment === 'txn' && (
            <div className="flex flex-col gap-3 u4">
              {/* Filter pills */}
              <div className="flex gap-2 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
                {[
                  { id: 'all', label: 'All' },
                  { id: 'ride', label: 'Rides' },
                  { id: 'food', label: 'Food' },
                  { id: 'topup', label: 'Top-ups' },
                  { id: 'reward', label: 'Rewards' }
                ].map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`h-7 px-3 rounded-full text-xs font-semibold border transition-colors shrink-0 ${
                      activeFilter === filter.id
                        ? 'bg-[#111] text-white border-[#111]'
                        : 'bg-white text-[#111]/50 border-black/10'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              {/* Transaction list */}
              <div className="bg-white border border-black/7 rounded-2xl px-4 shadow-sm">
                {getFilteredTransactions().map((tx) => (
                  <div key={tx.id} className={`flex items-center gap-3 py-3.5 ${tx.id !== 1 ? 'border-t border-black/6' : ''}`}>
                    <div className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0"
                         style={{
                           backgroundColor: 
                             tx.type === 'ride' ? '#EAF9F7' :
                             tx.type === 'food' ? '#FFF3EC' :
                             tx.type === 'reward' ? '#FFF9EC' : '#F3EFFE'
                         }}>
                      <span className="material-icons" style={{
                        fontSize: '20px',
                        color: 
                          tx.type === 'ride' ? '#3DBDA8' :
                          tx.type === 'food' ? '#F07B3A' :
                          tx.type === 'reward' ? '#F5B942' : '#8B5CF6'
                      }}>
                        {tx.type === 'ride' ? 'directions_car' :
                         tx.type === 'food' ? (tx.title.includes('Chai') ? 'local_cafe' : 'lunch_dining') :
                         tx.type === 'reward' ? (tx.title.includes('Referral') ? 'card_giftcard' : 'star') : 'add_circle'}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-[#111]">{tx.title}</p>
                      <p className="text-xs text-[#111]/40">{tx.subtitle}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className={`text-sm font-bold ${tx.amount >= 0 ? 'text-[#3DBDA8]' : 'text-[#EF4444]'}`}>
                        {formatAmount(tx.amount)}
                      </p>
                      <p className="text-[10px] text-[#111]/30">{tx.method}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Rewards */}
          {activeSegment === 'rewards' && (
            <div className="flex flex-col gap-4 u4">
              {/* Points card */}
              <div className="bg-white border border-black/7 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs font-bold text-[#111]/30 uppercase tracking-widest mb-1">Sharezi Points</p>
                    <p className="text-4xl text-[#111] font-syne font-bold">1,240 <span className="text-lg text-[#F5B942]">pts</span></p>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-[#FFF9EC] flex items-center justify-center">
                    <span className="material-icons" style={{ fontSize: '34px', color: '#F5B942' }}>star</span>
                  </div>
                </div>
                
                {/* Tier progress */}
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full"
                          style={{ background: '#FFF9EC', color: '#F5B942', border: '1px solid rgba(245,183,66,.3)' }}>
                      <span className="material-icons" style={{ fontSize: '11px', color: '#F5B942' }}>star</span>
                      Gold
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full"
                          style={{ background: '#F3F4F6', color: '#9CA3AF', border: '1px solid rgba(0,0,0,.08)' }}>
                      <span className="material-icons" style={{ fontSize: '11px', color: '#9CA3AF' }}>diamond</span>
                      Platinum
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-black/8 overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-600 ease-in-out"
                         style={{ width: '62%', background: 'linear-gradient(90deg, #F5B942, #F07B3A)' }}></div>
                  </div>
                  <p className="text-[11px] text-[#111]/40 mt-1.5">760 more points to reach <span className="font-semibold text-[#111]/60">Platinum</span></p>
                </div>
                
                {/* Tier perks */}
                <div className="bg-[#FFF9EC] rounded-xl p-3 flex items-start gap-2">
                  <span className="material-icons" style={{ fontSize: '16px', color: '#F5B942', flexShrink: 0 }}>info</span>
                  <p className="text-xs text-[#111]/55 leading-relaxed">
                    Gold members get <span className="font-bold text-[#111]/70">5% cashback</span> on all rides and <span className="font-bold text-[#111]/70">free delivery</span> on food orders over $5.
                  </p>
                </div>
              </div>

              {/* Redeem options */}
              <div>
                <p className="text-xs font-bold text-[#111]/30 uppercase tracking-widest mb-3">Redeem Points</p>
                <div className="flex flex-col gap-3">
                  {rewards.map((reward) => (
                    <div key={reward.id} className="bg-white border border-black/7 rounded-2xl p-4 transition-all duration-200 ease-in-out hover:translate-y-[-2px] hover:shadow-lg"
                         style={{ opacity: reward.locked ? 0.55 : 1 }}>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: reward.bg }}>
                          <span className="material-icons" style={{ fontSize: '24px', color: reward.color }}>
                            {reward.icon}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-sm text-[#111]">{reward.title}</p>
                          <p className="text-xs text-[#111]/40">{reward.subtitle}</p>
                          <p className="text-xs font-bold text-[#F5B942] mt-0.5">{reward.points}</p>
                        </div>
                        {reward.locked ? (
                          <div className="h-9 px-4 rounded-xl bg-[#F3F4F6] text-[#9CA3AF] text-xs font-bold flex items-center shrink-0">
                            Locked
                          </div>
                        ) : (
                          <button 
                            onClick={() => reward.special === 'Share' ? showToast('Referral link copied!') : redeemReward(reward.title, reward.points)}
                            className="h-9 px-4 rounded-xl text-white text-xs font-bold transition-colors shrink-0 hover:opacity-90"
                            style={{ backgroundColor: reward.special === 'Share' ? '#8B5CF6' : reward.color }}
                          >
                            {reward.special || 'Redeem'}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* How points work */}
              <div className="bg-white border border-black/7 rounded-2xl p-5 shadow-sm">
                <p className="text-xs font-bold text-[#111]/30 uppercase tracking-widest mb-3">How you earn points</p>
                <div className="flex flex-col gap-3">
                  {[
                    { icon: 'directions_car', color: '#3DBDA8', bg: '#EAF9F7', text: 'Each ride = ', bold: '10 pts' },
                    { icon: 'restaurant', color: '#F07B3A', bg: '#FFF3EC', text: 'Each food order = ', bold: '5 pts' },
                    { icon: 'person_add', color: '#8B5CF6', bg: '#F3EFFE', text: 'Referral = ', bold: '200 pts' },
                    { icon: 'rate_review', color: '#F5B942', bg: '#FFF9EC', text: 'Leaving a review = ', bold: '20 pts' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: item.bg }}>
                        <span className="material-icons" style={{ fontSize: '16px', color: item.color }}>
                          {item.icon}
                        </span>
                      </div>
                      <p className="text-sm text-[#111]/65">
                        {item.text}<span className="font-bold text-[#111]">{item.bold}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Promos */}
          {activeSegment === 'promo' && (
            <div className="flex flex-col gap-3 u4">
              {/* Active promo */}
              <div className="bg-[#111] rounded-2xl p-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#F07B3A]/15 translate-y-[-50%] translate-x-1/2"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-icons" style={{ fontSize: '18px', color: '#F5B942' }}>local_offer</span>
                    <span className="text-xs font-bold text-white/50 uppercase tracking-wider">Active promo</span>
                  </div>
                  <p className="text-2xl text-white font-syne font-bold mb-1">3 rides free</p>
                  <p className="text-white/45 text-sm mb-4">Use code <span className="text-[#F07B3A] font-bold">CAMPUS3</span> at checkout</p>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-white/10 rounded-xl px-3 py-2 flex items-center justify-between">
                      <span className="text-white font-bold text-sm">CAMPUS3</span>
                      <button 
                        onClick={() => copyCode('CAMPUS3')}
                        className="text-[#3DBDA8] text-xs font-bold hover:underline"
                      >
                        Copy
                      </button>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-white/35 text-[10px]">Expires in</p>
                      <p className="text-white font-bold text-sm">2d 14h</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Promo list */}
              <div className="flex flex-col gap-3">
                {promos.map((promo) => (
                  <div key={promo.id} className="bg-white border border-black/7 rounded-2xl p-4 transition-all duration-200 ease-in-out hover:translate-y-[-2px] hover:shadow-lg"
                       style={{ opacity: promo.expired ? 0.5 : 1 }}>
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: promo.bg }}>
                        <span className="material-icons" style={{ fontSize: '20px', color: promo.color }}>
                          {promo.icon}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <p className="font-bold text-sm text-[#111]">{promo.title}</p>
                          {promo.badge && (
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              promo.badge === 'New' ? 'bg-[#EAF9F7] text-[#2A9E8C]' : 'bg-[#FEF2F2] text-[#B91C1C]'
                            }`}>
                              {promo.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#111]/40">{promo.subtitle}</p>
                      </div>
                    </div>
                    {!promo.expired && (
                      <div className="flex items-center justify-between">
                        <div className="bg-[#F7F7F5] rounded-xl px-3 py-1.5 flex items-center gap-2">
                          <span className="text-sm font-bold text-[#111]">{promo.code}</span>
                          <button 
                            onClick={() => copyCode(promo.code)}
                            className="text-[#3DBDA8] text-xs font-bold hover:underline"
                          >
                            Copy
                          </button>
                        </div>
                        {promo.expires && (
                          <span className="text-xs text-[#111]/35">Expires: {promo.expires}</span>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Enter promo code */}
              <div className="bg-white border border-black/7 rounded-2xl p-4 shadow-sm">
                <p className="text-sm font-bold text-[#111] mb-3">Have a promo code?</p>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-[#111]/28 pointer-events-none" 
                          style={{ fontSize: '17px' }}>local_offer</span>
                    <input 
                      type="text" 
                      placeholder="Enter code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                      className="w-full h-12 rounded-[13px] border border-black/10 bg-white px-14 text-sm text-[#111] outline-none transition-all duration-160 focus:border-[#F07B3A] focus:shadow-[0_0_0_3px_rgba(240,123,58,.10)]"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    />
                  </div>
                  <button 
                    onClick={applyPromo}
                    className="h-12 px-5 rounded-[13px] bg-[#F07B3A] text-white font-bold text-sm transition-colors shrink-0 hover:bg-[#E8662A]"
                  >
                    Apply
                  </button>
                </div>
                {promoResult.show && (
                  <div className={`mt-2 text-xs font-semibold flex items-center gap-1 ${promoResult.success ? 'text-[#3DBDA8]' : 'text-[#EF4444]'}`}>
                    <span className="material-icons" style={{ fontSize: '14px' }}>
                      {promoResult.success ? 'check_circle' : 'error'}
                    </span>
                    <span>{promoResult.message}</span>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Top-up Drawer */}
      {showTopUp && (
        <>
          <div 
            className="fixed inset-0 z-40 bg-black/40 transition-opacity duration-250"
            style={{ opacity: showTopUp ? 1 : 0 }}
            onClick={() => setShowTopUp(false)}
          />
          <div 
            className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl p-5 pb-9 shadow-[0_-4px_32px_rgba(0,0,0,.12)] transition-transform duration-300 ease-in-out"
            style={{ transform: showTopUp ? 'translateY(0)' : 'translateY(100%)' }}
          >
            <div className="w-10 h-1 bg-black/10 rounded-full mx-auto mb-5"></div>
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg text-[#111]">Add Money</h3>
              <button 
                onClick={() => setShowTopUp(false)}
                className="w-8 h-8 rounded-xl bg-black/5 flex items-center justify-center"
              >
                <span className="material-icons" style={{ fontSize: '17px' }}>close</span>
              </button>
            </div>

            {/* Amount input */}
            <div className="text-center mb-4">
              <div className="flex items-center justify-center gap-2">
                <span className="text-[#111] font-syne font-bold" style={{ fontSize: '36px' }}>$</span>
                <input 
                  type="number" 
                  placeholder="0"
                  min="1" 
                  max="500"
                  value={topUpAmount}
                  onChange={(e) => {
                    setTopUpAmount(e.target.value);
                    setSelectedTopUpChip(null);
                  }}
                  className="border-none bg-transparent font-syne font-bold text-[#111] outline-none text-center"
                  style={{ fontSize: '48px', maxWidth: '180px' }}
                />
              </div>
            </div>

            {/* Quick amounts */}
            <div className="flex gap-2 justify-center mb-5">
              {[10, 25, 50, 100].map((amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    setTopUpAmount(amount.toString());
                    setSelectedTopUpChip(amount);
                  }}
                  className={`h-9.5 px-4 rounded-xl text-xs font-bold cursor-pointer transition-all duration-180 ease-in-out border border-black/10 ${
                    selectedTopUpChip === amount
                      ? 'bg-[#F07B3A] text-white border-[#F07B3A]'
                      : 'bg-white text-[#111]'
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>

            {/* Payment method */}
            <p className="text-xs font-semibold text-[#111]/40 mb-2">Pay via</p>
            <div className="flex flex-col gap-2 mb-5">
              <label className="flex items-center gap-3 p-3 bg-[#F7F7F5] rounded-xl cursor-pointer hover:bg-[#EAF9F7] transition-colors">
                <input type="radio" name="pay-method" value="debit" defaultChecked className="accent-[#3DBDA8]" />
                <span className="material-icons" style={{ fontSize: '20px', color: '#3DBDA8', fill: 0 }}>credit_card</span>
                <span className="text-sm font-semibold text-[#111]">Debit / Credit Card</span>
              </label>
              <label className="flex items-center gap-3 p-3 bg-[#F7F7F5] rounded-xl cursor-pointer hover:bg-[#EAF9F7] transition-colors">
                <input type="radio" name="pay-method" value="bank" className="accent-[#3DBDA8]" />
                <span className="material-icons" style={{ fontSize: '20px', color: '#8B5CF6', fill: 0 }}>account_balance</span>
                <span className="text-sm font-semibold text-[#111]">Bank Transfer (ACH)</span>
              </label>
            </div>

            <button 
              onClick={handleTopUp}
              disabled={!topUpAmount || parseFloat(topUpAmount) <= 0 || processingTopUp}
              className="w-full h-12.5 rounded-[14px] font-bold text-sm flex items-center justify-center gap-2 transition-all duration-180 ease-in-out disabled:cursor-not-allowed"
              style={{
                background: topUpAmount && parseFloat(topUpAmount) > 0 && !processingTopUp ? '#F07B3A' : '#E2E8F0',
                color: topUpAmount && parseFloat(topUpAmount) > 0 && !processingTopUp ? '#fff' : '#94A3B8',
                boxShadow: topUpAmount && parseFloat(topUpAmount) > 0 && !processingTopUp ? '0 4px 16px rgba(240,123,58,.28)' : 'none'
              }}
            >
              {processingTopUp ? (
                <>
                  <div className="w-4.5 h-4.5 rounded-full border-2.5 border-white/30 border-t-white animate-spin"></div>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>{topUpAmount && parseFloat(topUpAmount) > 0 ? `Add $${topUpAmount} to wallet` : 'Enter an amount'}</span>
                </>
              )}
            </button>
          </div>
        </>
      )}

      {/* Send Drawer */}
      {showSend && (
        <>
          <div 
            className="fixed inset-0 z-40 bg-black/40 transition-opacity duration-250"
            style={{ opacity: showSend ? 1 : 0 }}
            onClick={() => setShowSend(false)}
          />
          <div 
            className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl p-5 pb-9 shadow-[0_-4px_32px_rgba(0,0,0,.12)] transition-transform duration-300 ease-in-out"
            style={{ transform: showSend ? 'translateY(0)' : 'translateY(100%)' }}
          >
            <div className="w-10 h-1 bg-black/10 rounded-full mx-auto mb-5"></div>
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg text-[#111]">Send Money</h3>
              <button 
                onClick={() => setShowSend(false)}
                className="w-8 h-8 rounded-xl bg-black/5 flex items-center justify-center"
              >
                <span className="material-icons" style={{ fontSize: '17px' }}>close</span>
              </button>
            </div>
            
            {/* Recent contacts */}
            <p className="text-xs font-semibold text-[#111]/40 mb-3">Recent</p>
            <div className="flex gap-4 mb-5 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
              {recentContacts.map((contact) => (
                <div 
                  key={contact.id}
                  onClick={() => selectContact(contact.name)}
                  className="flex flex-col items-center gap-1.5 shrink-0 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" 
                       style={{ backgroundColor: contact.color }}>
                    {contact.initial}
                  </div>
                  <span className="text-[10px] text-[#111]/50 font-medium">{contact.name}</span>
                </div>
              ))}
            </div>

            <div className="relative mb-3">
              <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-[#111]/28 pointer-events-none" 
                    style={{ fontSize: '17px' }}>person_search</span>
              <input 
                type="text" 
                placeholder="Search by name or @username"
                value={sendTo}
                onChange={(e) => setSendTo(e.target.value)}
                className="w-full h-12 rounded-[13px] border border-black/10 bg-white px-11 text-sm text-[#111] outline-none transition-all duration-160 focus:border-[#F07B3A] focus:shadow-[0_0_0_3px_rgba(240,123,58,.10)]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              />
            </div>
            
            <div className="relative mb-4">
              <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-[#111]/28 pointer-events-none" 
                    style={{ fontSize: '17px' }}>attach_money</span>
              <span className="absolute left-[42px] top-1/2 -translate-y-1/2 text-sm font-semibold text-[#111]/40 border-r border-black/10 pr-2 pointer-events-none">$</span>
              <input 
                type="number" 
                placeholder="0.00"
                value={sendAmount}
                onChange={(e) => setSendAmount(e.target.value)}
                className="w-full h-12 rounded-[13px] border border-black/10 bg-white px-18 text-sm text-[#111] outline-none transition-all duration-160 focus:border-[#F07B3A] focus:shadow-[0_0_0_3px_rgba(240,123,58,.10)]"
                style={{ fontFamily: "'DM Sans', sans-serif", paddingLeft: '72px' }}
                inputMode="decimal"
              />
            </div>
            
            <button 
              onClick={handleSend}
              className="w-full h-12.5 rounded-[14px] bg-[#3DBDA8] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all duration-180 ease-in-out hover:bg-[#2AA898] hover:translate-y-[-1px]"
              style={{ boxShadow: '0 4px 16px rgba(61,189,168,.25)' }}
            >
              <span className="material-icons" style={{ fontSize: '18px' }}>send</span>
              Send Money
            </button>
          </div>
        </>
      )}

      <BottomNavBar />
    </div>
  );
};

export default Wallet;
