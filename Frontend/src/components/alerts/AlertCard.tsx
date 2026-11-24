type AlertCardProps = {
  severity: "Critical" | "Warning" | "Info";
  title: string;
  message: string;
};

export default function AlertCard({
  severity,
  title,
  message,
}: AlertCardProps) {
  const colorMap = {
    Critical: "border-red-500",
    Warning: "border-yellow-500",
    Info: "border-blue-500",
  };

  return (
    <div className={`rounded-lg border-l-4 bg-white p-4 ${colorMap[severity]}`}>
      <h3 className="font-semibold">{title}</h3>

      <p className="text-sm text-gray-600">{message}</p>
    </div>
  );
}
