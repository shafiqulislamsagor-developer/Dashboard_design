"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EllipsisVertical } from "lucide-react";

const chartData = [
  { hour: "00hr", revenue: 50 },
  { hour: "02hr", revenue: 100 },
  { hour: "04hr", revenue: 150 },
  { hour: "06hr", revenue: 200 },
  { hour: "08hr", revenue: 250 },
  { hour: "10hr", revenue: 300 },
  { hour: "12hr", revenue: 400 },
  { hour: "14hr", revenue: 450 },
  { hour: "16hr", revenue: 500 },
  { hour: "18hr", revenue: 470 },
  { hour: "20hr", revenue: 520 },
  { hour: "22hr", revenue: 550 },
  { hour: "24hr", revenue: 600 },
];

export function RevenueChart() {
  return (
    <div className="order-1">
      <Card className="bg-white rounded-lg shadow-lg p-4 pl-1">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <h1>
              {" "}
              Revenue <span className="text-lg font-bold">600 AED</span>
            </h1>
            <button className="text-gray-500 hover:text-gray-700">
              <EllipsisVertical />
            </button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <AreaChart
            width={580}
            height={250}
            data={chartData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#A1045A" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#A1045A" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="hour"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: "#888" }}
            />
            <YAxis
              domain={[0, 600]}
              tickCount={6}
              tickFormatter={(value) => `AED${value}`}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#888" }}
            />
            <Tooltip
              formatter={(value) => `AED ${value}`}
              cursor={{ fill: "rgba(184, 50, 128, 0.1)" }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#A1045A"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorRevenue)"
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </CardContent>
      </Card>
    </div>
  );
}

export default RevenueChart;
