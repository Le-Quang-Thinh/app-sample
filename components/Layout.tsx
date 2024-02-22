import React from "react";
import Link from "next/link";
import Header from '@layouts/header'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-hero w-screen h-screen px-10 pt-5">
      <Header />
      {children}
    </div>
  );
}

export default Layout;