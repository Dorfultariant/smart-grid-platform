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
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Renewable Forecast</h3>

        <span className="text-sm text-green-600">Confidence: 89%</span>
      </div>

      <Line
        data={{
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
        }}
      />
    </div>
  );
}
