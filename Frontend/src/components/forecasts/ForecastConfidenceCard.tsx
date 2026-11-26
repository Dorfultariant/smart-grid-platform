type Props = {
  confidence: number;
};

export default function ForecastConfidenceCard({ confidence }: Props) {
  let color = "text-green-600";

  if (confidence < 90) {
    color = "text-yellow-600";
  }

  if (confidence < 80) {
    color = "text-red-600";
  }

  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <h3 className="mb-2 font-semibold">Prediction Confidence</h3>

      <p className={`text-3xl font-bold ${color}`}>{confidence}%</p>
    </div>
  );
}
