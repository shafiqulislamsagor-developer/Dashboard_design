"use client";

import React, { useState } from "react";
import { DatePicker } from "./DatePicker";
import { Button } from "../ui/button";
import { Album } from "lucide-react";

export default function InitialCard() {
  const [selected, setSelected] = useState("12 months");
  const filters = ["12 months", "30 days", "7 days", "24 hours"];
  const cardData = [
    {
      icon: <Album className="w-6 h-6" />,
      count: 15000,
      title: "Total Amount",
    },
    {
      icon: <Album className="w-6 h-6" />,
      count: 15000,
      title: "Total Amount",
    },
    {
      icon: <Album className="w-6 h-6" />,
      count: 15000,
      title: "Total Amount",
    },
    {
      icon: <Album className="w-6 h-6" />,
      count: 15000,
      title: "Total Amount",
    },
    {
      icon: <Album className="w-6 h-6" />,
      count: 15000,
      title: "Total Amount",
    },
    {
      icon: <Album className="w-6 h-6" />,
      count: 15000,
      title: "Total Amount",
    },
    {
      icon: <Album className="w-6 h-6" />,
      count: 15000,
      title: "Total Amount",
    },
    {
      icon: <Album className="w-6 h-6" />,
      count: 15000,
      title: "Total Amount",
    },
  ];
  return (
    <div className="my-5">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="flex  p-2 rounded-md">
          {filters.map((filter, id) => (
            <Button
              key={filter}
              variant={"outline"}
              onClick={() => setSelected(filter)}
              className={`px-4 py-2 rounded-none text-sm font-medium ${
                (id === 0 && "rounded-l-md") ||
                (id === filters.length - 1 && "rounded-r-lg")
              } 
               
            ${
              selected === filter ? "bg-gray-300" : "bg-white hover:bg-gray-200"
            } 
            `}
            >
              {filter}
            </Button>
          ))}
        </div>
        <DatePicker />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-8">
        {cardData.map((data, id) => (
          <div
            key={id}
            className="flex items-center p-4 bg-white rounded-lg shadow-md"
          >
            <div className="p-3 rounded-md bg-primary_defult text-white">
              {data.icon}{" "}
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                {data.count}
              </h3>
              <p className="text-sm text-gray-500">{data.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
