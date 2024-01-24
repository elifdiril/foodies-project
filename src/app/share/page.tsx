import Footer from "@/components/header/Footer";
import Header from "@/components/header/Header";
import React from "react";

const Share = () => {
  return (
    <div className="flex flex-col justify-between bg-[#ffdec5]">
      <Header />
      <div className="flex items-center justify-center p-10 min-h-[calc(100vh-80px)] font-bold font-mono text-[#A73121]">
        Coming Soon
      </div>
      <Footer />
    </div>
  );
};

export default Share;
