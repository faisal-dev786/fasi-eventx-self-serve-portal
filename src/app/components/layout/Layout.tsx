import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-[#E0EBF6] p-3 lg:px-12 lg:py-8 h-full">
      <div className="bg-white p-3 lg:p-5 h-full rounded-2xl border border-[grey]">
        <Navbar />
        <Sidebar />
        <div className="lg:mt-5 lg:ml-[3rem]">
          <main className="container-main">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
