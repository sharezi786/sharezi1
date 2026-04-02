import React, { useState, useEffect, useRef } from 'react';
import BottomNavBar from '../bannerComponents/layout/BottomNavBar';
import './chatBox.css';

const ChatBox = () => {
  const [currentChat, setCurrentChat] = useState(null);
  const [activeSegment, setActiveSegment] = useState('direct');
  const [searchQuery, setSearchQuery] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [showTyping, setShowTyping] = useState(false);
  const [messages, setMessages] = useState({});
  const [toast, setToast] = useState({ show: false, message: '' });
  
  const msgScrollRef = useRef(null);
  const composeInputRef = useRef(null);

  const chatsData = {
    riya: {
      name: 'Riya S.',
      letter: 'R',
      color: '#3DBDA8',
      online: true,
      status: 'Online',
      messages: [
        { from: 'them', text: "Hey! I saw you booked a seat for my ride to Downtown 🙌", time: '10:15 AM' },
        { from: 'me', text: "Yes! Super glad I caught it in time.", time: '10:16 AM' },
        { from: 'them', text: "I'm leaving North Campus Gate at 10:30, will that work?", time: '10:16 AM' },
        { from: 'me', text: "Perfect, I'll be there at 10:28.", time: '10:17 AM' },
        { from: 'them', text: "Great! I drive a white Toyota Camry, CA02 AZ 1234.", time: '10:18 AM' },
        { from: 'system', text: "🚗 Ride confirmed · North Campus → Downtown · Today 10:30 AM", time: '10:18 AM' },
        { from: 'me', text: "Sounds good. See you there!", time: '10:20 AM' },
        { from: 'them', text: "I'm about 4 minutes away, see you at North Campus Gate!", time: '10:26 AM', unread: true },
        { from: 'them', text: "Look out for the white Camry 👋", time: '10:27 AM', unread: true },
      ]
    },
    karan: {
      name: 'Karan Mehta',
      letter: 'K',
      color: '#8B5CF6',
      online: false,
      status: 'Last seen 1h ago',
      messages: [
        { from: 'them', text: "Hey, are you still looking for a ride to Central Station tomorrow?", time: '9:00 AM' },
        { from: 'me', text: "Yes! What time are you heading out?", time: '9:05 AM' },
        { from: 'them', text: "Planning around 11 AM. I have a Honda Civic.", time: '9:06 AM' },
        { from: 'me', text: "That works perfectly for me. How much per seat?", time: '9:08 AM' },
        { from: 'them', text: "$55, is that okay?", time: '9:10 AM' },
        { from: 'me', text: "Sure, see you there 👍", time: '9:12 AM' },
      ]
    },
    priya: {
      name: 'Priya Nair',
      letter: 'P',
      color: '#EC4899',
      online: true,
      status: 'Online',
      messages: [
        { from: 'them', text: "Hi! Your Lentil Rice Combo order came through 🍱", time: '11:30 AM' },
        { from: 'me', text: "Awesome! When will it be ready?", time: '11:32 AM' },
        { from: 'them', text: "It'll be ready in about 10 minutes. I'm in East Dorm, Room 204.", time: '11:33 AM' },
        { from: 'me', text: "Perfect, heading over now!", time: '11:40 AM' },
        { from: 'them', text: "The lentil rice is ready! Come pick up whenever 🍱", time: '11:50 AM', unread: true },
      ]
    },
    mihir: {
      name: 'Mihir Patel',
      letter: 'M',
      color: '#10B981',
      online: false,
      status: 'Last seen yesterday',
      messages: [
        { from: 'system', text: "🚗 Ride completed · Campus Lake → Westside Metro", time: '2:00 PM' },
        { from: 'them', text: "Hope the ride was comfortable! Let me know if you need anything.", time: '2:05 PM' },
        { from: 'me', text: "It was great, very smooth! Will definitely book again.", time: '2:10 PM' },
        { from: 'them', text: "Thank you! Leave a review if you get a chance 😊", time: '2:11 PM' },
        { from: 'me', text: "Thanks for the ride! Smooth journey 🙌", time: '2:15 PM' },
      ]
    },
    sneha: {
      name: 'Sneha Roy',
      letter: 'S',
      color: '#EF4444',
      online: false,
      status: 'Last seen 2 days ago',
      messages: [
        { from: 'them', text: "Hey John! We're organizing a campus pizza group order tonight.", time: '7:00 PM' },
        { from: 'them', text: "6 people needed to split the cost. You in?", time: '7:01 PM' },
        { from: 'me', text: "How much per person?", time: '7:15 PM' },
        { from: 'them', text: "The campus pizza group order is at 8 PM, you in?", time: '7:20 PM' },
      ]
    }
  };

  const rideChats = {
    ride1: {
      name: 'Ride · North Campus → Downtown',
      letter: '🚗',
      color: '#3DBDA8',
      online: true,
      status: 'Active ride · 3 participants',
      isGroup: true,
      messages: [
        { from: 'system', text: "🚗 Ride group chat created · North Campus Gate → Downtown Station", time: '10:00 AM' },
        { from: 'other', text: "Hi everyone! I'm Riya, your driver. White Toyota Camry.", time: '10:05 AM', name: 'Riya (Driver)' },
        { from: 'other2', text: "Hey Riya! I'm Jake, I'll be at the gate.", time: '10:10 AM', name: 'Jake' },
        { from: 'me', text: "Hi! John here. See everyone at 10:30!", time: '10:12 AM' },
        { from: 'other', text: "I'm about 4 minutes away, see you at North Campus Gate!", time: '10:26 AM', name: 'Riya (Driver)' },
        { from: 'other2', text: "I can see the white Camry coming!", time: '10:29 AM', name: 'Jake' },
      ]
    },
    ride2: {
      name: 'Ride · Campus Lake → Central Station',
      letter: '🚗',
      color: '#22C55E',
      online: false,
      status: 'Completed 2 days ago',
      messages: [
        { from: 'system', text: "🚗 Ride completed · Campus Lake → Central Station", time: '11:00 AM' },
        { from: 'other', text: "Thanks for riding with me! Hope it was comfortable.", time: '11:05 AM', name: 'Karan (Driver)' },
        { from: 'me', text: "Thanks, great ride!", time: '11:10 AM' },
      ]
    }
  };

  const forumPosts = {
    forum1: {
      name: 'Best pickup spots near library?',
      letter: '💬',
      color: '#3DBDA8',
      online: false,
      status: 'Community · 8 replies',
      isForum: true,
      messages: [
        { from: 'other', text: "The main entrance gets super crowded. Anyone know a quieter spot nearby?", time: '1h ago', name: 'Riya S.' },
        { from: 'other2', text: "The side parking lot on 2nd Ave is usually empty and easy to spot drivers.", time: '58m ago', name: 'Jake M.' },
        { from: 'other3', text: "I always use the library loading bay on the north side. Never crowded!", time: '55m ago', name: 'Sara L.' },
        { from: 'other', text: "Oh nice, I didn't know about the loading bay. Is it always accessible?", time: '50m ago', name: 'Riya S.' },
        { from: 'other3', text: "Yes, it's open 6 AM to 11 PM. Perfect for pickups.", time: '48m ago', name: 'Sara L.' },
        { from: 'other4', text: "The back of the student center also works great, lots of space.", time: '40m ago', name: 'Dev K.' },
        { from: 'me', text: "These are all great tips! I usually wait near the bike racks, works okay too.", time: '30m ago' },
        { from: 'other2', text: "Good one! Bike racks are easy to describe to drivers.", time: '28m ago', name: 'Jake M.' },
      ]
    }
  };

  const allChats = { ...chatsData, ...rideChats, ...forumPosts };

  useEffect(() => {
    setMessages(allChats);
  }, []);

  useEffect(() => {
    if (msgScrollRef.current) {
      msgScrollRef.current.scrollTop = msgScrollRef.current.scrollHeight;
    }
  }, [messages, currentChat, showTyping]);

  const showToastMessage = (message) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 2500);
  };

  const openChat = (chatId) => {
    setCurrentChat(chatId);
    const chat = allChats[chatId];
    
    if (chat?.online && !chat.isForum && !chat.isGroup) {
      setTimeout(() => setShowTyping(true), 2000);
      setTimeout(() => setShowTyping(false), 4000);
    }
  };

  const closeChat = () => {
    setCurrentChat(null);
    setShowTyping(false);
    setMessageInput('');
  };

  const sendMessage = () => {
    const text = messageInput.trim();
    if (!text || !currentChat) return;

    const newMessage = { from: 'me', text, time: 'Now' };
    
    setMessages(prev => ({
      ...prev,
      [currentChat]: {
        ...prev[currentChat],
        messages: [...prev[currentChat].messages, newMessage]
      }
    }));

    setMessageInput('');
    
    const chat = allChats[currentChat];
    if (chat?.online && !chat.isForum) {
      setTimeout(() => setShowTyping(true), 800);
      setTimeout(() => {
        setShowTyping(false);
        const replies = [
          "Got it, thanks!",
          "Perfect 👍",
          "On my way!",
          "Sounds good!",
          "Sure thing!",
        ];
        const reply = replies[Math.floor(Math.random() * replies.length)];
        const replyMessage = { from: 'them', text: reply, time: 'Now' };
        
        setMessages(prev => ({
          ...prev,
          [currentChat]: {
            ...prev[currentChat],
            messages: [...prev[currentChat].messages, replyMessage]
          }
        }));
      }, 2000);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const autoResize = (el) => {
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 120) + 'px';
  };

  const searchChats = (query) => {
    setSearchQuery(query);
  };

  const isChatVisible = (chatText) => {
    if (!searchQuery) return true;
    return chatText.toLowerCase().includes(searchQuery.toLowerCase());
  };

  const renderMessage = (msg, index, chat) => {
    if (msg.from === 'system') {
      return (
        <div key={index} className="flex justify-center my-1">
          <div className="bubble-system">{msg.text}</div>
        </div>
      );
    }

    if (msg.from === 'me') {
      return (
        <div key={index} className="flex justify-end items-end gap-2">
          <div className="flex flex-col items-end gap-1">
            <div className="bubble-me">{msg.text}</div>
            <span className="text-[10px] text-[#111]/30 flex items-center gap-1">
              {msg.time} <span className="icon" style={{ fontSize: '12px', color: '#3DBDA8' }}>done_all</span>
            </span>
          </div>
        </div>
      );
    }

    const colors = { them: chat.color, other: chat.color, other2: '#8B5CF6', other3: '#F59E0B', other4: '#EF4444' };
    const color = colors[msg.from] || chat.color;
    const initial = msg.name ? msg.name[0] : chat.letter;
    const showAvatar = !chat.messages[index + 1] || chat.messages[index + 1].from !== msg.from;

    return (
      <div key={index} className="flex items-end gap-2">
        {showAvatar ? (
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[11px] font-bold shrink-0" style={{ background: color }}>
            {initial}
          </div>
        ) : (
          <div className="w-7 shrink-0"></div>
        )}
        <div className="flex flex-col gap-0.5">
          {msg.name && (index === 0 || chat.messages[index - 1]?.name !== msg.name || chat.messages[index - 1]?.from !== msg.from) && (
            <span className="text-[10px] font-bold text-[#111]/45 ml-1">{msg.name}</span>
          )}
          <div className="bubble-them">{msg.text}</div>
          <span className="text-[10px] text-[#111]/30 ml-1">{msg.time}</span>
        </div>
      </div>
    );
  };

  const currentChatData = currentChat ? messages[currentChat] : null;

  return (
    <div className="chat-box-container">
      {/* LIST VIEW */}
      <div id="list-view" style={{ display: currentChat ? 'none' : 'flex' }}>
        <nav className="top-nav shrink-0 px-4 h-14 flex items-center gap-3 z-20 relative">
          <a href="/student-home" className="w-9 h-9 rounded-xl bg-[#111]/5 flex items-center justify-center hover:bg-[#111]/10 shrink-0">
            <span className="icon-o" style={{ fontSize: '20px' }}>arrow_back</span>
          </a>
          <h1 className="text-base text-[#111] flex-1">Messages</h1>
          <button onClick={() => showToastMessage('New group chat coming soon')} className="w-9 h-9 rounded-xl bg-[#111]/5 flex items-center justify-center hover:bg-[#111]/10">
            <span className="icon-o" style={{ fontSize: '20px' }}>edit_square</span>
          </button>
        </nav>

        {/* Search */}
        <div className="shrink-0 px-4 py-3 bg-white border-b border-black/7 relative z-10">
          <div className="relative">
            <span className="icon-o absolute left-3 top-1/2 -translate-y-1/2 text-[#111]/28 pointer-events-none" style={{ fontSize: '18px' }}>search</span>
            <input 
              className="search-bar" 
              type="text" 
              placeholder="Search messages…" 
              value={searchQuery}
              onChange={(e) => searchChats(e.target.value)}
            />
          </div>
        </div>

        {/* Seg tabs */}
        <div className="shrink-0 bg-white border-b border-black/7 px-4 py-2">
          <div className="bg-[#111]/5 rounded-xl p-1 flex gap-1">
            <button 
              className={`seg-tab ${activeSegment === 'direct' ? 'active' : ''}`} 
              onClick={() => setActiveSegment('direct')}
            >
              <span className="icon-o" style={{ fontSize: '14px' }}>chat</span>Direct
            </button>
            <button 
              className={`seg-tab ${activeSegment === 'rides' ? 'active' : ''}`} 
              onClick={() => setActiveSegment('rides')}
            >
              <span className="icon-o" style={{ fontSize: '14px' }}>directions_car</span>Ride chats
            </button>
            <button 
              className={`seg-tab ${activeSegment === 'forum' ? 'active' : ''}`} 
              onClick={() => setActiveSegment('forum')}
            >
              <span className="icon-o" style={{ fontSize: '14px' }}>forum</span>Forum
            </button>
          </div>
        </div>

        {/* List scroll */}
        <div id="list-scroll">
          {/* DIRECT CHATS */}
          <div id="panel-direct" style={{ display: activeSegment === 'direct' ? 'block' : 'none' }}>
            {Object.entries(chatsData).map(([key, chat]) => (
              <div 
                key={key} 
                className="chat-item gap-3 flex" 
                onClick={() => openChat(key)}
                style={{ display: isChatVisible(`${chat.name} ${chat.messages[chat.messages.length - 1]?.text}`) ? 'flex' : 'none' }}
              >
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{ background: chat.color }}>
                    {chat.letter}
                  </div>
                  {chat.online && <div className="online-dot"></div>}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <p className="font-bold text-sm text-[#111]">{chat.name}</p>
                    <span className="text-[10px] text-[#111]/35">2m ago</span>
                  </div>
                  <p className="text-xs text-[#111]/50 truncate">{chat.messages[chat.messages.length - 1]?.text}</p>
                </div>
                <div className="flex flex-col items-end gap-1 shrink-0 ml-2">
                  {chat.messages.some(m => m.unread) && (
                    <div className="unread-count">{chat.messages.filter(m => m.unread).length}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* RIDE CHATS */}
          <div id="panel-rides" style={{ display: activeSegment === 'rides' ? 'block' : 'none' }}>
            {Object.entries(rideChats).map(([key, chat]) => (
              <div 
                key={key} 
                className="chat-item gap-3 flex" 
                onClick={() => openChat(key)}
                style={{ display: isChatVisible(chat.name) ? 'flex' : 'none' }}
              >
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: chat.online ? '#EAF9F7' : '#F0FDF4' }}>
                    <span className="icon" style={{ fontSize: '22px', color: chat.color }}>directions_car</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <p className="font-bold text-sm text-[#111]">{chat.name}</p>
                    <span className="text-[10px] text-[#111]/35">Now</span>
                  </div>
                  <p className="text-xs text-[#111]/50 truncate">{chat.messages[chat.messages.length - 1]?.text}</p>
                </div>
                <div className="flex flex-col items-end gap-1 shrink-0 ml-2">
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: chat.online ? '#F3EFFE' : '#F0FDF4', color: chat.online ? '#8B5CF6' : '#15803D' }}>
                    {chat.online ? 'Active' : 'Done'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* FORUM */}
          <div id="panel-forum" className="hidden px-4 py-4 flex flex-col gap-3" style={{ display: activeSegment === 'forum' ? 'flex' : 'none' }}>
            <button onClick={() => showToastMessage('New post coming soon')} className="w-full h-11 rounded-2xl border-2 border-dashed border-black/15 bg-white text-sm font-semibold text-[#111]/50 flex items-center justify-center gap-2 hover:border-[#F07B3A] hover:text-[#F07B3A] transition-colors">
              <span className="icon-o" style={{ fontSize: '18px' }}>add</span>Start a discussion
            </button>
            
            {Object.entries(forumPosts).map(([key, post], index) => (
              <div key={key} className={`forum-card u${index + 1}`} onClick={() => openChat(key)}>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style={{ background: post.color }}>
                    {post.letter}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-xs font-bold text-[#111]">Riya S.</p>
                      <span className="text-[10px] font-semibold text-[#111]/35">· 1h ago</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#EAF9F7] text-[#2A9E8C]">Rides</span>
                    </div>
                  </div>
                </div>
                <p className="font-bold text-sm text-[#111] mb-1">{post.name}</p>
                <p className="text-xs text-[#111]/50 mb-3 leading-relaxed">The main entrance gets super crowded. Anyone know a quieter spot nearby for rideshare pickups?</p>
                <div className="flex items-center gap-4 text-xs text-[#111]/35">
                  <span className="flex items-center gap-1"><span className="icon-o" style={{ fontSize: '13px' }}>thumb_up</span>12</span>
                  <span className="flex items-center gap-1"><span className="icon-o" style={{ fontSize: '13px' }}>chat_bubble</span>8 replies</span>
                  <span className="flex items-center gap-1 ml-auto"><span className="icon-o" style={{ fontSize: '13px' }}>bookmark</span>Save</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom nav */}
        <BottomNavBar />
      </div>

      {/* CHAT DETAIL VIEW */}
      <div id="chat-view" className={currentChat ? 'show' : ''}>
        {currentChatData && (
          <>
            {/* Chat top nav */}
            <nav className="top-nav shrink-0 px-4 h-16 flex items-center gap-3 z-20 relative">
              <button onClick={closeChat} className="w-9 h-9 rounded-xl bg-[#111]/5 flex items-center justify-center hover:bg-[#111]/10 shrink-0">
                <span className="icon-o" style={{ fontSize: '20px' }}>arrow_back</span>
              </button>
              
              <div className="flex items-center gap-3 flex-1 min-w-0 cursor-pointer" onClick={() => showToastMessage('Profile view coming soon')}>
                <div className="relative shrink-0">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ background: currentChatData.color }}>
                    <span style={{ fontSize: '18px', fontWeight: '700' }}>{currentChatData.letter}</span>
                  </div>
                  {currentChatData.online && <div className="online-dot"></div>}
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-sm text-[#111] truncate">{currentChatData.name}</p>
                  <p className="text-[11px] font-semibold" style={{ color: currentChatData.online ? '#22C55E' : 'rgba(17,17,17,.4)' }}>
                    {currentChatData.status}
                  </p>
                </div>
              </div>
              
              <button onClick={() => showToastMessage('Call feature coming soon')} className="w-9 h-9 rounded-xl bg-[#111]/5 flex items-center justify-center hover:bg-[#111]/10">
                <span className="icon-o" style={{ fontSize: '20px' }}>call</span>
              </button>
              <button onClick={() => showToastMessage('More options coming soon')} className="w-9 h-9 rounded-xl bg-[#111]/5 flex items-center justify-center hover:bg-[#111]/10">
                <span className="icon-o" style={{ fontSize: '20px' }}>more_vert</span>
              </button>
            </nav>

            {/* Messages */}
            <div id="msg-scroll" ref={msgScrollRef}>
              <div className="flex flex-col gap-3 max-w-xl mx-auto pb-4">
                <div className="flex justify-center my-2">
                  <span className="text-[10px] font-semibold text-[#111]/30 bg-black/5 px-3 py-1 rounded-full">Today</span>
                </div>
                
                {currentChatData.messages.map((msg, index) => renderMessage(msg, index, currentChatData))}
                
                {showTyping && (
                  <div className="flex items-end gap-2">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[11px] font-bold shrink-0" style={{ background: currentChatData.color }}>
                      {currentChatData.letter}
                    </div>
                    <div className="bubble-them flex items-center gap-1 py-3">
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Compose bar */}
            <div id="compose-bar">
              <button onClick={() => showToastMessage('Attachment coming soon')} className="w-9 h-9 rounded-xl bg-[#111]/5 flex items-center justify-center hover:bg-[#111]/10 shrink-0">
                <span className="icon-o" style={{ fontSize: '20px' }}>attach_file</span>
              </button>
              <textarea 
                className="compose-inp" 
                id="compose-inp" 
                placeholder="Message…" 
                rows="1"
                ref={composeInputRef}
                value={messageInput}
                onChange={(e) => {
                  setMessageInput(e.target.value);
                  if (composeInputRef.current) autoResize(composeInputRef.current);
                }}
                onKeyDown={handleKeyDown}
              />
              <button className="send-btn" onClick={sendMessage}>
                <span className="icon text-white" style={{ fontSize: '20px' }}>send</span>
              </button>
            </div>
          </>
        )}
      </div>

      {/* Toast */}
      <div id="toast" className={toast.show ? 'show' : ''}>
        <span className="icon" style={{ fontSize: '14px', color: '#3DBDA8' }}>check_circle</span>
        <span>{toast.message}</span>
      </div>
    </div>
  );
};

export default ChatBox;
