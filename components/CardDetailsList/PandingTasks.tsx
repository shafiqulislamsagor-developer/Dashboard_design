import React from "react";
import { Card } from "../ui/card";
import { EllipsisVertical } from "lucide-react";

export default function PandingTasks() {
  const tasks = [
    { name: "Restaurant Account", count: 10 },
    { name: "Restaurant Onboarding", count: 10 },
    { name: "Rider Partners", count: 10 },
    { name: "Rider Onboarding", count: 10 },
    { name: "Support Tickets", count: 10 },
  ];
  return (
    <Card className="p-4 order-2 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Pending Tasks</h2>
        <button className="text-gray-500 hover:text-gray-700">
          <EllipsisVertical />
        </button>
      </div>
      <div className="space-y-2">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-3 bg-gray-50 rounded-md"
          >
            <span className="text-gray-700 font-medium">{task.name}</span>
            <span className="px-3 py-1 text-sm font-semibold text-primary_defult bg-pink-100 rounded-sm">
              {task.count}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
