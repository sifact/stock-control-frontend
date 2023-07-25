import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <div className="mb-6">
      <h1 className="text-2xl text-gray-900 font-bold mb-2">{title}</h1>
      <h1 className="text-sm text-gray-600">{subtitle}</h1>
    </div>
  );
};

export default Header;
