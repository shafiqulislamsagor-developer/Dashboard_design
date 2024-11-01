"use client";

import { PieChart, Pie, Cell } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { EllipsisVertical, Sailboat } from "lucide-react";

const chartData = [
  { name: "Active", value: 389, color: "#00997E" },
  { name: "Pending", value: 125, color: "#41A3FF" },
  { name: "Refunded", value: 234, color: "#FFA133" },
  { name: "Cancelled", value: 234, color: "#FF1717" },
];

export default function OrderSummaryDashboard() {
  return (
    <Card className="flex order-3 flex-col w-full mx-auto p-4 pt-0">
      <CardHeader className="flex flex-row items-center justify-between pb-5">
        <CardTitle>Current Order Summary</CardTitle>
        <button className="text-gray-500 hover:text-gray-700">
          <EllipsisVertical />
        </button>
      </CardHeader>

      <div className="bg-pink-100 text-primary_defult flex text-sm lg:text-base items-center justify-between px-4 rounded-md py-2 mb-4">
        <strong className="flex items-center gap-1">
          <Sailboat /> 125 new orders!
        </strong>
        <button className="ml-4 px-3 py-1 text-primary_defult bg-white rounded-md">
          Manage Order
        </button>
      </div>
      <div className="flex flex-col lg:flex-row items-center">
        <CardContent className="mb-4 pt-6">
          <PieChart width={180} height={200}>
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

        <div className="space-y-4 w-full lg:flex-1">
          {chartData.map((item, index) => (
            <div key={index}>
              <div className="flex mb-1 items-center justify-between">
                <span>
                  {item.name} ({((item.value / 902) * 100).toFixed(0)}%)
                </span>
                <span className="text-gray-500">{item.value}</span>
              </div>
              <Progress
                value={(item.value / 902) * 100}
                className="w-[100%] h-3"
                color={item.color}
              />
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
