import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
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
  Filler,
);

export default function DemandForecastChart() {
  const labels = ["00", "04", "08", "12", "16", "20", "24"];

  const forecast = [410, 405, 430, 470, 485, 452, 425];

  const upper = [430, 425, 455, 495, 510, 472, 445];

  const lower = [390, 385, 405, 445, 460, 432, 405];

  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Demand Forecast</h3>

        <span className="text-sm text-green-600">Confidence: 92%</span>
      </div>

      <Line
        data={{
          labels,
          datasets: [
            {
              label: "Upper Confidence",
              data: upper,
              borderColor: "rgba(59,130,246,0.2)",
              pointRadius: 0,
            },
            {
              label: "Predicted Demand",
              data: forecast,
              borderColor: "#2563eb",
              pointRadius: 3,
            },
            {
              label: "Lower Confidence",
              data: lower,
              borderColor: "rgba(59,130,246,0.2)",
              pointRadius: 0,
            },
          ],
        }}
      />
    </div>
  );
}
