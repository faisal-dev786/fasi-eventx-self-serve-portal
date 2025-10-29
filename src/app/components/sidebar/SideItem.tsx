"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link"; // Use Next.js Link component

interface SideItemProps {
  to: string;
  icon: string;
  text: string;
  onClick?: () => void;
}

const SideItem: React.FC<SideItemProps> = ({ to, icon, text, onClick }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Set mounted to true when client-side rendering happens
  }, []);

  // Don't render anything until the component is mounted client-side
  if (!mounted) return null;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="mb-4">
      <div>
        <Link href={to}>
          <span
            className={`w-full rounded-md penta-para ${
              window.location.pathname === to ? "rounded-md bg-[#E6E9F0]" : ""
            }`}
            onClick={handleClick}
          >
            <div>
              <div>
                <span
                  style={{ fontSize: "1.2rem" }}
                  className={`flex justify-center ${
                    window.location.pathname === to ? "rounded-full p-4 bg-[#6931F7]" : ""
                  }`}
                >
                  <img className="w-8" src={icon} alt={text} />
                </span>
              </div>
              <div className="flex justify-center penta-para">
                <span className={`penta-para ${window.location.pathname === to ? "penta-para" : ""}`}>
                  {text}
                </span>
              </div>
            </div>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SideItem;
