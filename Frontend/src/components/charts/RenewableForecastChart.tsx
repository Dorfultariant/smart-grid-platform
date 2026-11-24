import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
);

export default function RenewableForecastChart() {
  const data = {
    labels: ["00", "04", "08", "12", "16", "20", "24"],
    datasets: [
      {
        label: "Wind",
        data: [120, 125, 130, 128, 118, 115, 110],
        borderColor: "#10b981",
      },
      {
        label: "Solar",
        data: [0, 0, 45, 90, 80, 20, 0],
        borderColor: "#f59e0b",
      },
    ],
  };

  return (
    <div className="rounded-lg border bg-white p-4">
      <h3 className="mb-4 text-lg font-semibold">Renewable Forecast</h3>

      <Line data={data} />
    </div>
  );
}
