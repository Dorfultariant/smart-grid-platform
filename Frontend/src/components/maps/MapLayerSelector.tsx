import type { MapLayer } from "../../types/MapLayer";

type Props = {
  value: MapLayer;
  options: MapLayer[];
  onChange: (layer: MapLayer) => void;
};

export default function MapLayerSelector({ value, options, onChange }: Props) {
  return (
    <select
      className="rounded-lg border p-2"
      value={value}
      onChange={(e) => onChange(e.target.value as MapLayer)}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
