import AlertCard from "./AlertCard";

export default function AlertList() {
  return (
    <div className="space-y-4">
      <AlertCard
        severity="Critical"
        title="Germany North"
        message="Predicted transmission overload within 3 hours."
      />

      <AlertCard
        severity="Warning"
        title="Denmark Wind Forecast"
        message="Wind forecast deviation exceeds threshold."
      />

      <AlertCard
        severity="Info"
        title="France Solar Production"
        message="Expected production increase tomorrow."
      />
    </div>
  );
}
