import { useNavigate, Link } from "react-router-dom";

const StudentIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
);

const DriverIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <path d="M2 10h20" />
        <circle cx="7" cy="15" r="1" /><circle cx="17" cy="15" r="1" />
    </svg>
);

const MapPinIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const roles = [
    {
        key: "student",
        Icon: StudentIcon,
        color: "from-[#3DBDA8] to-[#2A9E8C]",
        shadow: "rgba(61,189,168,0.28)",
        title: "Student",
        desc: "Find rides, share food, connect with campus community",
        cta: "Sign Up as Student",
        ctaCls: "bg-gradient-to-r from-[#3DBDA8] to-[#2A9E8C] text-white hover:opacity-90 shadow-[0_4px_14px_rgba(61,189,168,0.28)]",
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

export default function RoleSelectPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#F4F6F8] flex flex-col">

            {/* Header */}
            <header className="px-6 py-5 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#F5A54A] to-[#F07B3A] flex items-center justify-center">
                    <MapPinIcon />
                </div>
                <span className="font-display font-bold text-[#2D3748] text-lg">Sharezi</span>
            </header>

            {/* Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-4 py-10">
                <div className="text-center mb-10">
                    <h1 className="font-display font-bold text-3xl md:text-4xl text-[#2D3748] mb-3">
                        Join Campus Share-All
                    </h1>
                    <p className="text-[#8A95A3] text-sm">Choose your role to get started</p>
                </div>

                {/* Role cards */}
                <div className="grid sm:grid-cols-2 gap-4 w-full max-w-2xl mb-8">
                    {roles.map(({ key, Icon, color, shadow, title, desc, cta, ctaCls }) => (
                        <div key={key}
                            className="bg-white rounded-2xl border border-[#E2E8F0] p-7 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                            {/* Icon */}
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} text-white flex items-center justify-center mb-5`}
                                style={{ boxShadow: `0 8px 20px ${shadow}` }}>
                                <Icon />
                            </div>

                            <h2 className="font-display font-bold text-xl text-[#2D3748] mb-2">{title}</h2>
                            <p className="text-sm text-[#8A95A3] leading-relaxed mb-6">{desc}</p>

                            <button
                                onClick={() => navigate(`/signup/${key}`)}
                                className={`w-full h-11 rounded-xl font-bold text-sm transition-all ${ctaCls}`}>
                                {cta}
                            </button>
                        </div>
                    ))}
                </div>

                <p className="text-sm text-[#8A95A3]">
                    Already have an account?{" "}
                    <Link to="/login" className="text-[#F07B3A] font-semibold hover:underline">
                        Log In
                    </Link>
                </p>
            </div>
        </div>
    );
}
