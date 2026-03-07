export const StudentIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
);

export const DriverIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <path d="M2 10h20" />
        <circle cx="7" cy="15" r="1" /><circle cx="17" cy="15" r="1" />
    </svg>
);

export const MapPinIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

export const roles = [
    {
        key: "student",
        Icon: StudentIcon,
        color: "from-[#3DBDA8] to-[#2AA898]",
        shadow: "rgba(61,189,168,0.28)",
        title: "Student",
        desc: "Find rides, split food costs, save money",
        cta: "Sign Up as Student",
        ctaCls: "bg-white border border-[#E2E8F0] text-[#2D3748] hover:border-[#3DBDA8] hover:text-[#3DBDA8]",
    },
    {
        key: "driver",
        Icon: DriverIcon,
        color: "from-[#F5A54A] to-[#F07B3A]",
        shadow: "rgba(240,123,58,0.28)",
        title: "Driver",
        desc: "Offer rides, earn money, flexible schedule",
        cta: "Sign Up as Driver",
        ctaCls: "bg-white border border-[#E2E8F0] text-[#2D3748] hover:border-[#F07B3A] hover:text-[#F07B3A]",
    },
];
