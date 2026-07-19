"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

const data = {
  labels: ["CSE", "ISE", "ECE", "EEE", "ME"],
  datasets: [
    {
      label: "Placed",
      data: [120, 95, 80, 55, 40],
      backgroundColor: [
        "#3B82F6",
        "#8B5CF6",
        "#06B6D4",
        "#22C55E",
        "#F97316",
      ],
      borderRadius: 12,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function PlacementChart() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Placement Analytics
          </h2>

          <p className="text-gray-400">
            Department-wise placements
          </p>

        </div>

        <span className="rounded-full bg-green-600 px-3 py-1 text-sm">
          +12%
        </span>

      </div>

      <div className="h-[360px]">
        <Bar data={data} options={options} />
      </div>

    </div>
  );
}