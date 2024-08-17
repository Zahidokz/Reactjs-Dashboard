import React from "react";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <div className="flex flex-row bg-neutral-100 w-screen h-screen">
        <div className="bg-black text-white rounded-r-2xl fixed top-0 bottom-0 left-0">
          <Sidebar />
        </div>
        <div className="w-full">
          <div className="bg-[#FDBF60] rounded-2xl mx-2 fixed right-0 top-0 left-[240px] z-10">
            <Header />
          </div>
          <div className="max-w-[1090px] ml-[250px] mx-auto mt-20 rounded-2xl">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
