import React from "react";

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
    <div className="bg-white order-4 rounded-lg shadow-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Activity Log</h2>
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
    </div>
  );
}
