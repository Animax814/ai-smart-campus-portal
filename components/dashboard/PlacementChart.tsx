"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["CSE", "ISE", "ECE", "EEE", "ME"],
  datasets: [
    {
      label: "Placed Students",
      data: [120, 95, 80, 55, 40],
      backgroundColor: "#3B82F6",
      borderRadius: 8,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function PlacementChart() {
  return (
    <div className="h-[420px] rounded-xl bg-white p-6 shadow-md">
      <h2 className="mb-6 text-xl font-semibold">
        Department-wise Placements
      </h2>

      <div className="h-[320px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}