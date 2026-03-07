import { useState, useEffect } from "react";
import TopNav from '../components/bannerComponents/layout/TopNav';
import PromoBanner from '../components/bannerComponents/home/PromoBanner';
import StatsRow from '../components/bannerComponents/home/StatsRow';
import QuickTile from '../components/bannerComponents/home/QuickTile';
import ActivityCard from '../components/bannerComponents/home/ActivityCard';
import BottomNav from '../components/bannerComponents/layout/BottomNav';
import './Home.css';

const Home = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hr = new Date().getHours();
    const greet = hr < 12 ? "Good morning" : hr < 17 ? "Good afternoon" : "Good evening";
    setGreeting(greet);
  }, []);

  const setTab = (tab) => {
    setActiveTab(tab);
  };

  const quickActions = [
    {
      title: "Find Ride",
      desc: "Search for available rides",
      icon: "directions_car",
      bg: "#EAF9F7",
      color: "#3DBDA8",
      href: "/find-ride"
    },
    {
      title: "Offer Ride",
      desc: "Share your ride with others",
      icon: "hail",
      bg: "#FFF3EC",
      color: "#F07B3A",
      href: "/offer-ride"
    },
    {
      title: "Find Food",
      desc: "Browse available meals",
      icon: "restaurant",
      bg: "#FFF3EC",
      color: "#F07B3A",
      href: "#"
    },
    {
      title: "Post Food",
      desc: "Share extra food",
      icon: "lunch_dining",
      bg: "#FFF3EC",
      color: "#F07B3A",
      href: "#"
    },
    {
      title: "Wallet & Rewards",
      desc: "Manage your balance",
      icon: "account_balance_wallet",
      bg: "#EAF9F7",
      color: "#3DBDA8",
      href: "#"
    },
    {
      title: "Chat & Forum",
      desc: "Connect with community",
      icon: "forum",
      bg: "#F3EFFE",
      color: "#8B5CF6",
      href: "#"
    }
  ];

  const activities = [
    {
      title: "Ride with Riya S.",
      subtitle: "IITB → Andheri Stn · Yesterday",
      amount: "₹40",
      icon: "directions_car",
      status: "Completed"
    },
    {
      title: "Domino's group order",
      subtitle: "Split with 3 others · 2 days ago",
      amount: "₹180",
      icon: "lunch_dining",
      status: "Delivered"
    },
    {
      title: "Ride with Mihir P.",
      subtitle: "Powai → BKC · 3 days ago",
      amount: "₹60",
      icon: "directions_car",
      status: "Completed"
    }
  ];

  return (
    <div className="flex flex-col h-screen bg-[#F7F7F5] relative">
      <TopNav greeting={greeting} />

      <div id="main-scroll" className="relative z-10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-6 pb-28">

          <PromoBanner />
          <StatsRow />

          <p className="text-xs font-bold text-[#111]/35 tracking-widest uppercase mb-3 u3">Quick actions</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 u3">
            {quickActions.map((item, index) => (
              <QuickTile key={index} {...item} />
            ))}
          </div>

          <div className="u5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-bold text-[#111]/35 tracking-widest uppercase">Recent Activity</p>
              <button className="text-xs text-[#3DBDA8] font-semibold hover:underline">See all</button>
            </div>

            <div className="flex flex-col gap-2.5">
              {activities.map((activity, index) => (
                <ActivityCard key={index} {...activity} />
              ))}
            </div>
          </div>

        </div>
      </div>

      <BottomNav activeTab={activeTab} setTab={setTab} />
    </div>
  );
};

export default Home;
