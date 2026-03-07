import { useNavigate } from "react-router-dom";
import RoleSelect from "../components/RoleSelect";
import { MapPinIcon } from "../../model/roles";

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
      <RoleSelect onSelect={() => navigate('/signup')} />
    </div>
  );
}