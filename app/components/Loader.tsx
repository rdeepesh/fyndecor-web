import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center h-screen backdrop-blur-xl bg-white/30">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-[var(--primary)] animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;
