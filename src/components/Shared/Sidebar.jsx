import React from "react";
import { FcBullish } from "react-icons/fc";
import {
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "../../lib/constants";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const {pathname} = useLocation()
  return (
    <>
      <div className="flex h-screen w-60 flex-col p-4">
        <div className="flex items-center gap-2">
          <i className="text-4xl">
            <FcBullish />
          </i>
          <h1 className=" font-bold mt-4">ZAM ZAM MOBILE</h1>
        </div>

        {/* TOP LINKS */}
        <div className="flex-1 py-4">
          {DASHBOARD_SIDEBAR_LINKS.map((items) => {
            return (
              <Link to={items.path}>
                <div
                  key={items.key} 
                  className={`font-semibold py-1 flex gap-2 items-center hover:bg-neutral-700 active:bg-neutral-600 rounded-sm duration-300  ${pathname == items.path ? "text-white" : "text-[#FDBF60]"}`}
                  
                >
                  <i className="text-xl subpixel-antialiased">{items.icon}</i>
                  <h1 className="subpixel-antialiased">{items.label}</h1>
                </div>
              </Link>
            );
          })}
        </div>
        {/* BOTTOM LINKS */}
        <hr />
        <div className="py-5">
          {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((itemss) => {
            return (
              <Link to={itemss.path}>
                <div
                  key={itemss.key}
                  className={`font-semibold py-1 flex gap-2 items-center hover:bg-neutral-700 active:bg-neutral-600 rounded-sm duration-100  ${pathname == itemss.path ? "text-white" : "text-[#FDBF60]"}`}
                >
                  <i className="text-xl">{itemss.icon}</i>
                  <h1>{itemss.label}</h1>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
