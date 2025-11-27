"use client";

import { FilterOptions } from "@/types/cafe";

interface FilterProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

export default function Filter({ filters, onFilterChange }: FilterProps) {
  const handleToggle = (key: keyof FilterOptions) => {
    onFilterChange({
      ...filters,
      [key]: filters[key] === undefined ? true : filters[key] ? false : undefined,
    });
  };

  const filterOptions = [
    { key: "quiet" as const, label: "조용해요", color: "green" },
    { key: "outlets" as const, label: "콘센트 많아요", color: "blue" },
    { key: "parking" as const, label: "주차 가능", color: "purple" },
    { key: "wifi" as const, label: "Wi-Fi", color: "yellow" },
    { key: "spacious" as const, label: "넓어요", color: "pink" },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {filterOptions.map((option) => {
        const isActive = filters[option.key] === true;
        const colorClasses = {
          green: isActive
            ? "bg-green-500 text-white"
            : "bg-green-100 text-green-800 hover:bg-green-200",
          blue: isActive
            ? "bg-blue-500 text-white"
            : "bg-blue-100 text-blue-800 hover:bg-blue-200",
          purple: isActive
            ? "bg-purple-500 text-white"
            : "bg-purple-100 text-purple-800 hover:bg-purple-200",
          yellow: isActive
            ? "bg-yellow-500 text-white"
            : "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
          pink: isActive
            ? "bg-pink-500 text-white"
            : "bg-pink-100 text-pink-800 hover:bg-pink-200",
        };

        return (
          <button
            key={option.key}
            onClick={() => handleToggle(option.key)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              colorClasses[option.color as keyof typeof colorClasses]
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

