import { useEffect } from "react";
import { useState } from "react";
import { GeoJSON, MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { gridData } from "../../data/gridData";

type GeoJsonData = GeoJSON.GeoJsonObject;

function getLoadColor(load: number) {
  if (load > 90) {
    return "#991b1b";
  }

  if (load > 75) {
    return "#dc2626";
  }

  if (load > 60) {
    return "#f97316";
  }

  if (load > 40) {
    return "#eab308";
  }

  return "#22c55e";
}

export default function EuropeGridMap() {
  const [geoData, setGeoData] = useState<GeoJsonData | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}/custom.geo.json`)
      .then((res) => res.json())
      .then(setGeoData);
  }, []);

  if (!geoData) {
    return (
      <div className="flex h-[850px] items-center justify-center rounded-xl border bg-white">
        Loading map...
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
      <div className="border-b p-4">
        <h2 className="text-xl font-semibold">European Smart Grid Heatmap</h2>

        <p className="text-sm text-gray-500">
          Country load utilization visualization
        </p>
      </div>

      <MapContainer
        center={[54.5, 15]}
        zoom={4}
        style={{
          height: "850px",
          width: "100%",
        }}
      >
        <TileLayer
          attribution="© OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <GeoJSON
          data={geoData}
          style={(feature) => {
            const country = feature?.properties?.name;

            const data = gridData[country];

            const load = data?.loadPercentage ?? 0;

            return {
              fillColor: getLoadColor(load),
              fillOpacity: 0.75,
              color: "#334155",
              weight: 1,
            };
          }}
          onEachFeature={(feature, layer) => {
            const country = feature.properties?.name;

            const data = gridData[country];

            if (!data) {
              return;
            }

            layer.bindPopup(`
              <div>
                <strong>${country}</strong>
                <br/>
                Grid Load:
                ${data.loadPercentage}%
                <br/>
                Renewable:
                ${data.renewablePercentage}%
                <br/>
                Price:
                €${data.price}/MWh
              </div>
            `);
          }}
        />
      </MapContainer>
    </div>
  );
}
