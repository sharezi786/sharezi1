import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* App Header or Nav can be added here */}
      <main>
        <Outlet />
      </main>
      {/* Bottom Nav can be added here */}
    </div>
  );
};

export default AppLayout;