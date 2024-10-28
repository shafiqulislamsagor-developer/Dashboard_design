import React from "react";
import PandingTasks from "./PandingTasks";
import ActivityLog from "./ActivityLog";
import RevenueChart from "./RevenueChart";
import OrderSummaryDashboard from "./OrderSummaryDashboard";

export default function CardDetailsList() {
  return (
    <div className="grid grid-cols-2 gap-5">
      <RevenueChart />
      <PandingTasks />
      <OrderSummaryDashboard />
      <ActivityLog />
    </div>
  );
}
