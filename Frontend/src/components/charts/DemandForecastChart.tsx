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

export default function DemandForecastChart() {
  const data = {
    labels: ["00", "04", "08", "12", "16", "20", "24"],
    datasets: [
      {
        label: "Predicted Demand",
        data: [410, 405, 430, 470, 485, 452, 425],
        borderColor: "#2563eb",
      },
    ],
  };

  return (
    <div className="rounded-lg border bg-white p-4">
      <h3 className="mb-4 text-lg font-semibold">Demand Forecast</h3>

      <Line data={data} />
    </div>
  );
}
