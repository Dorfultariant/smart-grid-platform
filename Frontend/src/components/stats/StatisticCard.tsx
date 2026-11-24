type StatisticCardProps = {
  title: string;
  value: string | number;
  subtitle?: string;
};

export default function StatisticCard({
  title,
  value,
  subtitle,
}: StatisticCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:shadow-md">
      <p className="text-sm text-slate-500">{title}</p>

      <p className="mt-2 text-2xl font-bold text-slate-900">{value}</p>

      {subtitle && <p className="mt-1 text-sm text-slate-500">{subtitle}</p>}
    </div>
  );
}
