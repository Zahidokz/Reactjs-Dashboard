import React from "react";
import { data } from "../lib/TransactionData/TransactionData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import BuyerProfileCharts from "./BuyerProfileCharts";



export default function TransactionChart() {
  return (
    <div className="h-[15rem] bg-white p-4 rounded-lg my-2 border border-gray-200 flex flex-col flex-1">
      <strong className="text-gray-700 font-medium">Transactions</strong>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: -10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Income" fill="black" />
            <Bar dataKey="Expense" fill="white" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
