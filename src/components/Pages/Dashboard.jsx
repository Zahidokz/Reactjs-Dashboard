import React from "react";
import { Link } from "react-router-dom";
import DashboardStatusGrid from "../../DashboardStatusGrid";
import TransactionChart from "../TransactionChart";
import BuyerProfileCharts from "../BuyerProfileCharts";
import RecentOrders from "../RecentOrders";
import PopularProducts from "../PopularProducts";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col">
        <div>
          <DashboardStatusGrid />
        </div>
        <div className="flex flex-row gap-2">
          <TransactionChart />
          <BuyerProfileCharts />
        </div>
        <div className="flex flex-row gap-2">
          <RecentOrders />
          <PopularProducts />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
