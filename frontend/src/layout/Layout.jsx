import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  return (
    <div className="">
      <Sidebar />
      <main className="p-4 md:px-5 flex-1 bg-gray-100 min-h-screen min-w-screen">
        <Outlet />
      </main>
    </div>
  );
}
