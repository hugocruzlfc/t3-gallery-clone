import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>
      <div>Sign In</div>
    </nav>
  );
};
