import React from "react";
import { Card } from "../ui/card";
import { EllipsisVertical } from "lucide-react";

export default function ActivityLog() {
  const activities = [
    {
      date: "12-04-2024 10:14 PM",
      action: "Modified new item",
      user: "Jakit Sarker",
    },
    {
      date: "12-04-2024 10:14 PM",
      action: "Modified new item",
      user: "Jakit Sarker",
    },
    {
      date: "12-04-2024 10:14 PM",
      action: "Modified new item",
      user: "Jakit Sarker",
    },
    {
      date: "12-04-2024 10:14 PM",
      action: "Modified new item",
      user: "Jakit Sarker",
    },
    {
      date: "12-04-2024 10:14 PM",
      action: "New items approved",
      user: "Jakit Sarker",
    },
  ];
  return (
    <Card className="bg-white order-4 rounded-lg shadow-lg p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold mb-4">Activity Log</h2>
        <button className="text-gray-500 hover:text-gray-700">
          <EllipsisVertical />
        </button>
      </div>
      <div>
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-2 border-b border-gray-200 first:border-t"
          >
            <div>
              <div className="text-gray-500 text-sm">{activity.date}</div>
              <div className="text-black text-sm font-medium">
                {activity.action}
              </div>
            </div>
            <div className="text-gray-500 text-sm">{activity.user}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
