import React from "react";
import { IoBagHandle } from "react-icons/io5";

const DashboardStatusGrid = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex bg-slate-200 px-2 py-1 rounded-lg w-[250px] items-center">
          <i className="text-3xl text-[blue]">
            <IoBagHandle />
          </i>
          <div className="px-2">
            <div>
              <span className="text-[13px]">Total Sales</span>
            </div>
            <div>
              <strong className="text-[14px]">$67778</strong>
              <span className="text-[12px]">+234</span>
            </div>
          </div>
        </div>
        <div className="bg-slate-200 px-2 py-1 rounded-lg w-[250px] flex items-center">
          <i className="text-3xl text-[blue]">
            <IoBagHandle />
          </i>
          <div className="px-2">
            <div>
              <span className="text-[13px]">Total Expenses</span>
            </div>
            <div>
              <strong className="text-[14px]">$67778</strong>
              <span className="text-[12px]">+234</span>
            </div>
          </div>
        </div>
        <div className="bg-slate-200 px-2 py-1 rounded-lg w-[250px] flex items-center">
          <i className="text-3xl text-[blue]">
            <IoBagHandle />
          </i>
          <div className="px-2">
            <div>
              <span className="text-[13px]">Total Customers</span>
            </div>
            <div>
              <strong className="text-[14px]">$67778</strong>
              <span className="text-[12px]">+234</span>
            </div>
          </div>
        </div>
        <div className="bg-slate-200 px-2 py-1 rounded-lg w-[250px] flex items-center">
          <i className="text-3xl text-[blue]">
            <IoBagHandle />
          </i>
          <div className="px-2">
            <div>
              <span className="text-[13px]">Total Orders</span>
            </div>
            <div>
              <strong className="text-[14px]">$67778</strong>
              <span className="text-[12px]">+234</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardStatusGrid;
