"use client";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex items-start justify-between">
        <img className="w-16" src="/logo.svg" alt="" />
        <div className="flex items-center gap-4">
          <p style={{fontSize:"1.1rem"}} className="quaternary-heading">my account</p>
          <img className="w-12" src="/admin.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
