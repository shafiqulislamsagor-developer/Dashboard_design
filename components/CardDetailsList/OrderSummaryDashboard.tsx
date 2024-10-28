"use client";

import { PieChart, Pie, Cell } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const chartData = [
  { name: "Active", value: 389, color: "#34d399" },
  { name: "Pending", value: 125, color: "#60a5fa" },
  { name: "Refunded", value: 234, color: "#fbbf24" },
  { name: "Cancelled", value: 234, color: "#f87171" },
];

export default function OrderSummaryDashboard() {
  return (
    <Card className="flex order-3 flex-col w-full mx-auto p-4">
      <CardHeader className=" pb-2">
        <CardTitle>Current Order Summary</CardTitle>
      </CardHeader>

      <div className="bg-pink-100 text-pink-700 flex items-center justify-between px-4 rounded-md py-2 mb-4">
        <strong>125 new orders!</strong>
        <button className="ml-4 px-3 py-1 bg-pink-500 text-white rounded-md">
          Manage Order
        </button>
      </div>
      <div className="flex items-center">
        <CardContent className="flex justify-center items-center mb-4">
          <PieChart width={180} height={180}>
            <Pie
              data={chartData}
              innerRadius={60}
              outerRadius={80}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </CardContent>

        <div className="space-y-2 flex-1">
          {chartData.map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-between">
                <span>
                  {item.name} ({((item.value / 902) * 100).toFixed(0)}%)
                </span>
                <span>{item.value}</span>
              </div>
              <Progress
                value={(item.value / 902) * 100}
                className="w-[100%]"
                color={item.color}
              />
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
