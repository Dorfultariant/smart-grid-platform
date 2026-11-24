import StatisticCard from "./StatisticCard";

type KPISectionProps = {
  currentLoad: number;
  renewablePercentage: number;
  electricityPrice: number;
  carbonIntensity: number;
};

export default function KPISection({
  currentLoad,
  renewablePercentage,
  electricityPrice,
  carbonIntensity,
}: KPISectionProps) {
  return (
    <div className="grid gap-3">
      <StatisticCard title="Current Load" value={`${currentLoad} GW`} />

      <StatisticCard
        title="Renewable Share"
        value={`${renewablePercentage}%`}
      />

      <StatisticCard title="Energy Price" value={`${electricityPrice} €/MWh`} />

      <StatisticCard
        title="Carbon Intensity"
        value={`${carbonIntensity} g/kWh`}
      />
    </div>
  );
}
