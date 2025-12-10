import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";
import { Bar } from "react-chartjs-2";
import type { ChartProps } from "../types";
import { Pie } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export function BarChart({ labels, values }: ChartProps) {
  if (!labels?.length || !values?.length) return null;

  const data = {
    labels,
    datasets: [
      {
        label: "Tasks",
        data: values,
        backgroundColor: ["#f87171", "#facc15", "#34d399"] // red, yellow, green
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true
      },
      title: {
        display: true,
        text: "Tasks Status"
      }
    }
  };

  return <Bar data={data} options={options} />;
}

export function Piechart({ labels, values }: ChartProps) {
  if (!labels?.length || !values?.length) return null;

  const data = {
    labels,
    datasets: [
      {
        label: "Tasks",
        data: values,
        backgroundColor: ["red", "blue", "green","purple","yellow","grey"]
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const
      },
      title: {
        display: true,
        text: "Tasks Status Pie"
      }
    }
  };

  return <Pie data={data} options={options} />;
}