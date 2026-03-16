import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MyOffer.css';

const MyOffer = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('active');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState('');
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [cancelling, setCancelling] = useState(false);

  const openDrawer = (key) => {
    let content = '';
    if (key === 'active1') {
      content = riderListHTML('IITB Gate 1 → Andheri Station', 'Today · 10:30 AM', [
        {name:'Riya S.', col:'#3DBDA8', status:'Confirmed', paid:true},
        {name:'Karan M.', col:'#8B5CF6', status:'Confirmed', paid:true},
      ], '₹40', true);
    } else if (key === 'full') {
      content = riderListHTML('Powai Lake → BKC Metro', 'Today · 2:00 PM', [
        {name:'Sneha R.', col:'#EF4444', status:'Confirmed', paid:true},
        {name:'Arjun T.', col:'#F59E0B', status:'Confirmed', paid:false},
      ], '₹55', true);
    } else if (key === 'upcoming') {
      content = riderListHTML('Hiranandani → Vikhroli', 'Tomorrow · 9:00 AM', [], '₹35', true);
    } else if (key === 'past1') {
      content = riderListHTML('IITB Gate 1 → Andheri Station', 'Yesterday · 9:15 AM', [
        {name:'Riya S.', col:'#3DBDA8', status:'Completed', paid:true},
        {name:'Mihir P.', col:'#10B981', status:'Completed', paid:true},
      ], '₹40', false);
    } else if (key === 'past2') {
      content = riderListHTML('Powai → BKC', '2 days ago · 11:00 AM', [
        {name:'Sneha R.', col:'#EF4444', status:'Completed', paid:true},
        {name:'Arjun T.', col:'#F59E0B', status:'Completed', paid:true},
      ], '₹55', false);
    } else if (key === 'cancelled') {
      content = <p className="text-center text-[#111]/40 py-8 text-sm">This ride was cancelled by you.</p>;
    } else if (key === 'edit') {
      content = (
        <>
          <p className="text-sm font-semibold text-[#111] mb-4">Edit ride redirects to offer form</p>
          <button onClick={() => {setDrawerOpen(false); navigate('/offer-ride');}} className="block w-full h-11 rounded-2xl bg-[#F07B3A] text-white font-bold text-sm flex items-center justify-center gap-2">
            <span className="icon" style={{fontSize:'17px'}}>edit</span>Edit in Offer Form
          </button>
        </>
      );
    }
    setDrawerContent(content);
    setDrawerOpen(true);
  };

  const riderListHTML = (route, time, riders, price, showActions) => {
    const riderRows = riders.length === 0
      ? <div className="text-center py-6"><span className="icon-o" style={{fontSize:'32px',opacity:.2}}>group</span><p className="text-xs text-[#111]/30 mt-2">No riders yet</p></div>
      : riders.map(r => (
        <div key={r.name} className="flex items-center gap-3 py-3 border-b border-black/6 last:border-0">
          <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style={{background:r.col}}>{r.name[0]}</div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-[#111]">{r.name}</p>
            <span className="text-[10px] font-bold" style={{color:r.status==='Completed'?'#15803D':'#2A9E8C'}}>{r.status}</span>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-[#111]">{price}</p>
            <p className="text-[10px]" style={{color:r.paid?'#3DBDA8':'#F07B3A', fontWeight:'bold'}}>{r.paid?'Paid':'Cash'}</p>
          </div>
        </div>
      ));

    return (
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base text-[#111]">Ride Details</h3>
          <button onClick={() => setDrawerOpen(false)} className="w-8 h-8 rounded-xl bg-black/5 flex items-center justify-center"><span className="icon-o" style={{fontSize:'18px'}}>close</span></button>
        </div>
        <div className="bg-[#F7F7F5] rounded-2xl p-4 mb-4">
          <p className="font-bold text-sm text-[#111] mb-0.5">{route}</p>
          <p className="text-xs text-[#111]/40">{time} · Honda Activa · {price}/seat</p>
        </div>
        <p className="text-xs font-bold text-[#111]/30 uppercase tracking-widest mb-2">Riders</p>
        <div className="bg-white border border-black/7 rounded-2xl px-4 mb-4">{riderRows}</div>
        {showActions ? (
          <div className="flex gap-3">
            <button onClick={() => {setDrawerOpen(false); navigate('/offer-ride');}} className="flex-1 h-11 rounded-2xl bg-[#F7F7F5] border border-black/8 text-[#111] font-bold text-sm flex items-center justify-center gap-2">
              <span className="icon-o" style={{fontSize:'17px'}}>edit</span>Edit
            </button>
            <button onClick={() => {setDrawerOpen(false); setCancelModalOpen(true);}} className="flex-1 h-11 rounded-2xl bg-[#FEF2F2] text-[#EF4444] font-bold text-sm flex items-center justify-center gap-2">
              <span className="icon-o" style={{fontSize:'17px'}}>cancel</span>Cancel
            </button>
          </div>
        ) : (
          <button onClick={() => {setDrawerOpen(false); navigate('/offer-ride');}} className="w-full h-11 rounded-2xl bg-[#F07B3A] text-white font-bold text-sm flex items-center justify-center gap-2">
            <span className="icon" style={{fontSize:'17px'}}>replay</span>Offer again
          </button>
        )}
      </div>
    );
  };

  const doCancel = () => {
    setCancelling(true);
    setTimeout(() => {
      setCancelModalOpen(false);
      setCancelling(false);
      setToastMessage('Ride cancelled · Riders refunded');
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 2500);
    }, 1200);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2500);
  };

  return (
    <div className="relative" style={{fontFamily:'DM Sans', background:'#F7F7F5', color:'#111', height:'100vh', display:'flex', flexDirection:'column', overflow:'hidden'}}>
      <div style={{content:'', position:'fixed', inset:0, zIndex:0, pointerEvents:'none', backgroundImage:'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.022\'/%3E%3C/svg%3E")'}}></div>

      <nav className="top-nav shrink-0 px-4 h-14 flex items-center gap-3 z-20 relative">
        <button onClick={() => navigate('/student-home')} className="w-9 h-9 rounded-xl bg-[#111]/5 flex items-center justify-center hover:bg-[#111]/10 shrink-0">
          <span className="icon-o" style={{fontSize:'20px'}}>arrow_back</span>
        </button>
        <h1 className="text-base text-[#111] flex-1">My Ride Offers</h1>
        <button onClick={() => navigate('/offer-ride')} className="flex items-center gap-1.5 bg-[#F07B3A] text-white text-xs font-bold px-3 h-8 rounded-xl hover:bg-[#E8662A] transition-colors">
          <span className="icon" style={{fontSize:'15px'}}>add</span>
          New offer
        </button>
      </nav>

      <div className="shrink-0 bg-white border-b border-black/7 px-4 py-2.5 z-10 relative">
        <div className="bg-[#111]/5 rounded-xl p-1 flex gap-1">
          <button className={`seg-tab ${activeTab === 'active' ? 'active' : ''}`} onClick={() => setActiveTab('active')}>
            <span className="icon-o" style={{fontSize:'15px'}}>bolt</span>Active
          </button>
          <button className={`seg-tab ${activeTab === 'past' ? 'active' : ''}`} onClick={() => setActiveTab('past')}>
            <span className="icon-o" style={{fontSize:'15px'}}>history</span>Past
          </button>
          <button className={`seg-tab ${activeTab === 'drafts' ? 'active' : ''}`} onClick={() => setActiveTab('drafts')}>
            <span className="icon-o" style={{fontSize:'15px'}}>draft</span>Drafts
          </button>
        </div>
      </div>

      <div id="scroll-area">
        <div className="max-w-xl mx-auto px-4 py-4 pb-28">

          <div className="flex gap-3 mb-5 u1">
            <div className="stat-card">
              <p style={{fontFamily:'Syne', fontWeight:800}} className="text-xl text-[#F07B3A]">12</p>
              <p className="text-[10px] text-[#111]/40 mt-0.5 font-semibold">Total rides</p>
            </div>
            <div className="stat-card">
              <p style={{fontFamily:'Syne', fontWeight:800}} className="text-xl text-[#3DBDA8]">₹2,340</p>
              <p className="text-[10px] text-[#111]/40 mt-0.5 font-semibold">Earned</p>
            </div>
            <div className="stat-card">
              <p style={{fontFamily:'Syne', fontWeight:800}} className="text-xl text-[#111]">4.9★</p>
              <p className="text-[10px] text-[#111]/40 mt-0.5 font-semibold">Rating</p>
            </div>
          </div>

          {activeTab === 'active' && (
            <div className="flex flex-col gap-3">

              <div className="offer-card u2" onClick={() => openDrawer('active1')}>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#FFF3EC] flex items-center justify-center shrink-0">
                    <span className="icon" style={{fontSize:'20px', color:'#F07B3A'}}>add_road</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                      <p className="font-bold text-sm text-[#111]">IITB → Andheri</p>
                      <span className="pill pill-active">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3DBDA8]" style={{animation:'pulse 1.5s infinite'}}></span>
                        Active
                      </span>
                    </div>
                    <p className="text-xs text-[#111]/40">Today · 10:30 AM · Honda Activa</p>
                  </div>
                  <span className="icon-o shrink-0 opacity-30" style={{fontSize:'18px'}}>chevron_right</span>
                </div>

                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-xs text-[#111]/45 font-medium">2 of 3 seats taken</p>
                    <p className="text-xs font-bold text-[#F07B3A]">₹40/seat · ₹80 earned</p>
                  </div>
                  <div className="h-2 bg-[#F7F7F5] rounded-full overflow-hidden">
                    <div className="h-full bg-[#F07B3A] rounded-full" style={{width:'66.6%', transition:'width .4s ease'}}></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="rider-stack">
                      <div className="rider-av bg-[#3DBDA8]">R</div>
                      <div className="rider-av bg-[#8B5CF6]">K</div>
                      <div className="rider-av bg-[#F7F7F5] border-[1.5px] border-dashed border-black/20 text-[#111] opacity-40 text-[8px]">+1</div>
                    </div>
                    <p className="text-xs text-[#111]/40">Riya, Karan + 1 open seat</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="btn-sm btn-edit" onClick={(e) => {e.stopPropagation(); openDrawer('edit');}}>
                      <span className="icon-o" style={{fontSize:'14px'}}>edit</span>Edit
                    </button>
                    <button className="btn-sm btn-cancel" onClick={(e) => {e.stopPropagation(); setCancelModalOpen(true);}}>
                      <span className="icon-o" style={{fontSize:'14px'}}>cancel</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="offer-card u3" onClick={() => openDrawer('full')}>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#FFF3EC] flex items-center justify-center shrink-0">
                    <span className="icon" style={{fontSize:'20px', color:'#F07B3A'}}>add_road</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                      <p className="font-bold text-sm text-[#111]">Powai → BKC Metro</p>
                      <span className="pill pill-full">
                        <span className="icon" style={{fontSize:'10px', color:'#E8662A'}}>event_seat</span>
                        Full
                      </span>
                    </div>
                    <p className="text-xs text-[#111]/40">Today · 2:00 PM · Honda Activa</p>
                  </div>
                  <span className="icon-o shrink-0 opacity-30" style={{fontSize:'18px'}}>chevron_right</span>
                </div>

                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-xs text-[#111]/45 font-medium">2 of 2 seats taken</p>
                    <p className="text-xs font-bold text-[#F07B3A]">₹55/seat · ₹110 earned</p>
                  </div>
                  <div className="h-2 bg-[#F7F7F5] rounded-full overflow-hidden">
                    <div className="h-full bg-[#3DBDA8] rounded-full" style={{width:'100%'}}></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="rider-stack">
                      <div className="rider-av bg-[#EF4444]">S</div>
                      <div className="rider-av bg-[#F59E0B]">A</div>
                    </div>
                    <p className="text-xs text-[#111]/40">Sneha, Arjun · All seats filled</p>
                  </div>
                  <button className="btn-sm btn-cancel" onClick={(e) => {e.stopPropagation(); setCancelModalOpen(true);}}>
                    <span className="icon-o" style={{fontSize:'14px'}}>cancel</span>
                    Cancel
                  </button>
                </div>
              </div>

              <div className="offer-card u4" onClick={() => openDrawer('upcoming')}>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#FFF3EC] flex items-center justify-center shrink-0">
                    <span className="icon" style={{fontSize:'20px', color:'#F07B3A'}}>add_road</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                      <p className="font-bold text-sm text-[#111]">Hiranandani → Vikhroli</p>
                      <span className="pill" style={{background:'#F7F7F5', color:'#6B7280'}}>
                        <span className="icon-o" style={{fontSize:'10px', color:'#6B7280'}}>schedule</span>
                        Tomorrow
                      </span>
                    </div>
                    <p className="text-xs text-[#111]/40">Tomorrow · 9:00 AM · Honda Activa</p>
                  </div>
                  <span className="icon-o shrink-0 opacity-30" style={{fontSize:'18px'}}>chevron_right</span>
                </div>

                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-xs text-[#111]/45 font-medium">0 of 3 seats taken</p>
                    <p className="text-xs font-bold text-[#111]/40">₹35/seat</p>
                  </div>
                  <div className="h-2 bg-[#F7F7F5] rounded-full overflow-hidden">
                    <div className="h-full bg-[#F07B3A] rounded-full" style={{width:'0%'}}></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xs text-[#111]/35 italic">No riders yet</p>
                  <div className="flex gap-2">
                    <button className="btn-sm btn-edit" onClick={(e) => {e.stopPropagation(); navigate('/offer-ride');}}>
                      <span className="icon-o" style={{fontSize:'14px'}}>edit</span>Edit
                    </button>
                    <button className="btn-sm btn-cancel" onClick={(e) => {e.stopPropagation(); setCancelModalOpen(true);}}>
                      <span className="icon-o" style={{fontSize:'14px'}}>cancel</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          )}

          {activeTab === 'past' && (
            <div className="flex-col gap-3">

              <div className="offer-card u1" onClick={() => openDrawer('past1')}>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#F0FDF4] flex items-center justify-center shrink-0">
                    <span className="icon" style={{fontSize:'20px', color:'#22C55E'}}>add_road</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                      <p className="font-bold text-sm text-[#111]">IITB → Andheri</p>
                      <span className="pill pill-past">
                        <span className="icon" style={{fontSize:'10px', color:'#15803D'}}>check_circle</span>Completed
                      </span>
                    </div>
                    <p className="text-xs text-[#111]/40">Yesterday · 9:15 AM · 2 riders</p>
                  </div>
                  <p className="text-sm font-bold text-[#3DBDA8] shrink-0">+₹80</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span style={{color:'#F5A54A', fontSize:'13px'}}>★★★★★</span>
                    <span className="text-xs font-bold text-[#111]">5.0</span>
                    <span className="text-xs text-[#111]/30">avg rating</span>
                  </div>
                  <button className="btn-sm btn-orange" onClick={(e) => {e.stopPropagation(); navigate('/offer-ride');}}>
                    <span className="icon" style={{fontSize:'14px'}}>replay</span>Offer again
                  </button>
                </div>
              </div>

              <div className="offer-card u2" onClick={() => openDrawer('past2')}>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#F0FDF4] flex items-center justify-center shrink-0">
                    <span className="icon" style={{fontSize:'20px', color:'#22C55E'}}>add_road</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                      <p className="font-bold text-sm text-[#111]">Powai → BKC</p>
                      <span className="pill pill-past">
                        <span className="icon" style={{fontSize:'10px', color:'#15803D'}}>check_circle</span>Completed
                      </span>
                    </div>
                    <p className="text-xs text-[#111]/40">2 days ago · 11:00 AM · 2 riders</p>
                  </div>
                  <p className="text-sm font-bold text-[#3DBDA8] shrink-0">+₹110</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span style={{color:'#F5A54A', fontSize:'13px'}}>★★★★★</span>
                    <span className="text-xs font-bold text-[#111]">4.8</span>
                    <span className="text-xs text-[#111]/30">avg rating</span>
                  </div>
                  <button className="btn-sm btn-orange" onClick={(e) => {e.stopPropagation(); navigate('/offer-ride');}}>
                    <span className="icon" style={{fontSize:'14px'}}>replay</span>Offer again
                  </button>
                </div>
              </div>

              <div className="offer-card u3" style={{opacity:.65}} onClick={() => openDrawer('cancelled')}>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#FEF2F2] flex items-center justify-center shrink-0">
                    <span className="icon" style={{fontSize:'20px', color:'#EF4444'}}>add_road</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                      <p className="font-bold text-sm text-[#111]">NMIMS → Vile Parle</p>
                      <span className="pill pill-cancelled">
                        <span className="icon" style={{fontSize:'10px', color:'#B91C1C'}}>cancel</span>Cancelled
                      </span>
                    </div>
                    <p className="text-xs text-[#111]/40">3 days ago · Cancelled by you</p>
                  </div>
                  <p className="text-xs text-[#111]/30 shrink-0">₹0</p>
                </div>
              </div>

            </div>
          )}

          {activeTab === 'drafts' && (
            <div className="flex-col gap-3">

              <div className="offer-card u1 border-dashed" style={{borderColor:'rgba(0,0,0,.12)'}} onClick={() => navigate('/offer-ride')}>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#F3F4F6] flex items-center justify-center shrink-0">
                    <span className="icon-o" style={{fontSize:'20px', color:'#9CA3AF'}}>draft</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="font-bold text-sm text-[#111]">IITB → Andheri</p>
                      <span className="pill pill-draft">Draft</span>
                    </div>
                    <p className="text-xs text-[#111]/40">Saved · Not yet published</p>
                  </div>
                  <button className="btn-sm btn-orange shrink-0" onClick={(e) => {e.stopPropagation(); navigate('/offer-ride');}}>
                    <span className="icon" style={{fontSize:'14px'}}>bolt</span>Publish
                  </button>
                </div>
              </div>

              <p className="text-center text-xs text-[#111]/25 mt-2">Tap a draft to edit and publish</p>

            </div>
          )}

        </div>
      </div>

      <nav className="bottom-nav shrink-0 flex z-20 relative">
        <button onClick={() => navigate('/student-home')} className="nav-item">
          <span className="icon-o nav-icon" style={{fontSize:'22px'}}>home</span>
          <span className="nav-label">Home</span>
        </button>
        <div className="nav-item active">
          <span className="icon nav-icon" style={{fontSize:'22px', color:'#F07B3A', opacity:1}}>add_road</span>
          <span className="nav-label">My Offers</span>
        </div>
        <div className="nav-item">
          <span className="icon-o nav-icon" style={{fontSize:'22px'}}>inbox</span>
          <span className="nav-label">Requests</span>
        </div>
        <div className="nav-item">
          <span className="icon-o nav-icon" style={{fontSize:'22px'}}>payments</span>
          <span className="nav-label">Earnings</span>
        </div>
        <div className="nav-item">
          <span className="icon-o nav-icon" style={{fontSize:'22px'}}>person</span>
          <span className="nav-label">Profile</span>
        </div>
      </nav>

      <div id="d-overlay" className={drawerOpen ? 'show' : ''} onClick={() => setDrawerOpen(false)}></div>
      <div id="drawer" className={drawerOpen ? 'open' : ''}>
        <div className="w-10 h-1 bg-black/10 rounded-full mx-auto mb-4"></div>
        <div id="drawer-body">{drawerContent}</div>
      </div>

      {cancelModalOpen && (
        <div style={{position:'fixed', inset:0, zIndex:60, display:'flex', alignItems:'flex-end', justifyContent:'center'}}>
          <div style={{position:'absolute', inset:0, background:'rgba(0,0,0,.45)'}} onClick={() => setCancelModalOpen(false)}></div>
          <div style={{position:'relative', zIndex:1, background:'#fff', borderRadius:'24px 24px 0 0', padding:'24px 20px 36px', width:'100%', maxWidth:'540px'}}>
            <div className="w-10 h-1 bg-black/10 rounded-full mx-auto mb-5"></div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-2xl bg-[#FEF2F2] flex items-center justify-center shrink-0">
                <span className="icon" style={{fontSize:'22px', color:'#EF4444'}}>cancel</span>
              </div>
              <div>
                <p className="font-bold text-base text-[#111]">Cancel this ride?</p>
                <p className="text-xs text-[#111]/45">Riders will be notified and refunded.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setCancelModalOpen(false)} className="flex-1 h-11 rounded-2xl bg-[#F7F7F5] text-[#111] font-bold text-sm border border-black/8">Keep ride</button>
              <button onClick={doCancel} className="flex-1 h-11 rounded-2xl bg-[#EF4444] text-white font-bold text-sm flex items-center justify-center gap-2">
                {!cancelling && <span>Yes, cancel</span>}
                {cancelling && <span className="spinner"></span>}
              </button>
            </div>
          </div>
        </div>
      )}

      {toastVisible && (
        <div id="toast" style={{position:'fixed', bottom:'90px', left:'50%', transform:'translateX(-50%) translateY(0)', background:'#111', color:'#fff', fontSize:'12px', fontWeight:600, padding:'10px 18px', borderRadius:'99px', opacity:1, transition:'all .28s ease', zIndex:70, pointerEvents:'none', whiteSpace:'nowrap', display:'flex', alignItems:'center', gap:'8px'}}>
          <span className="icon" style={{fontSize:'14px', color:'#3DBDA8'}}>check_circle</span>
          <span id="toast-msg">{toastMessage}</span>
        </div>
      )}

    </div>
  );
};

export default MyOffer;
