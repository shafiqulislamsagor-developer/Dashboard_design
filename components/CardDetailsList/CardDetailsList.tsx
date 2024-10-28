import React from "react";
import PandingTasks from "./PandingTasks";
import ActivityLog from "./ActivityLog";

export default function CardDetailsList() {
  return (
    <div className="grid grid-cols-2 gap-5">
      <PandingTasks />
      <ActivityLog />
    </div>
  );
}
