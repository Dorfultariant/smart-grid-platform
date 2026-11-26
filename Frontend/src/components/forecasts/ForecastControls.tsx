import type { ForecastHorizon } from "../../types/ForecastHorizon";

type Props = {
  horizon: ForecastHorizon;
  setHorizon: (horizon: ForecastHorizon) => void;
};

export default function ForecastControls({ horizon, setHorizon }: Props) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <h3 className="mb-4 font-semibold">Forecast Horizon</h3>

      <select
        className="w-full rounded border p-2"
        value={horizon}
        onChange={(e) => setHorizon(e.target.value as ForecastHorizon)}
      >
        <option value="day">Day Ahead</option>

        <option value="week">Week Ahead</option>

        <option value="month">Month Ahead</option>

        <option value="year">Year Ahead</option>
      </select>
    </div>
  );
}
