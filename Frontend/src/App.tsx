import { useState } from "react";

import Header from "./components/layout/Header";

import RoleSelector from "./components/common/RoleSelector";
import type { UserRole } from "./components/common/RoleSelector";
import PublicDashboard from "./pages/PublicDashboard";
import OperatorDashboard from "./pages/OperatorDashboard";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  const [role, setRole] = useState<UserRole>("public");

  const renderDashboard = () => {
    switch (role) {
      case "operator":
        return <OperatorDashboard />;

      case "admin":
        return <AdminDashboard />;

      case "public":
      default:
        return <PublicDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50">
      {" "}
      <Header />
      <main className="mx-auto max-w-screen-2xl p-6">
        <div className="mb-6 rounded-lg bg-white p-4 shadow-sm">
          <h2 className="mb-3 text-lg font-semibold">User Role</h2>

          <RoleSelector role={role} onChange={setRole} />
        </div>

        {renderDashboard()}
      </main>
    </div>
  );
}
