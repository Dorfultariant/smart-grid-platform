import { useEffect, useState } from "react";
import L from "leaflet";
import { GeoJSON, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { gridData } from "../../data/gridData";
import { gridAlerts } from "../../data/gridAlerts";
import type { MapLayer } from "../../types/MapLayer";

type EuropeGridMapProps = {
  role: "public" | "operator" | "admin";
  selectedLayer: MapLayer;
  showAlerts?: boolean;
};

type GeoJsonData = GeoJSON.GeoJsonObject;

function getHeatMapColor(value: number) {
  if (value > 90) {
    return "#991b1b";
  }

  if (value > 75) {
    return "#dc2626";
  }

  if (value > 60) {
    return "#f97316";
  }

  if (value > 40) {
    return "#eab308";
  }

  return "#22c55e";
}

function getMetricValue(country: string, layer: MapLayer): number {
  const data = gridData[country];

  if (!data) {
    return 0;
  }

  switch (layer) {
    case "load":
      return data.loadPercentage;

    case "renewable":
      return data.renewablePercentage;

    case "price":
      return data.price;

    case "carbon":
      return data.carbonIntensity;

    case "forecast":
      return data.forecastLoad;

    case "congestion":
      return data.congestionRisk;

    case "alerts":
      return data.activeAlerts * 25;

    default:
      return 0;
  }
}

function createStatusIcon(symbol: string, color: string) {
  return new L.DivIcon({
    className: "",

    html: `
      <div
        style="
          width:36px;
          height:36px;
          border-radius:9999px;
          background:${color};
          display:flex;
          justify-content:center;
          align-items:center;
          color:white;
          font-weight:bold;
          font-size:16px;
          border:2px solid white;
          box-shadow:0 0 8px rgba(0,0,0,.35);
        "
      >
        ${symbol}
      </div>
    `,

    iconSize: [36, 36],
  });
}

const statusIcons = {
  Congested: createStatusIcon("!", "#f97316"),
  Maintenance: createStatusIcon("M", "#eab308"),
  Fault: createStatusIcon("X", "#dc2626"),
  Offline: createStatusIcon("O", "#171717"),
};

export default function EuropeGridMap({
  role,
  selectedLayer,
  showAlerts = false,
}: EuropeGridMapProps) {
  const [geoData, setGeoData] = useState<GeoJsonData | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}/custom.geo.json`)
      .then((response) => response.json())
      .then((data) => {
        setGeoData(data);
      })
      .catch((error) => {
        console.error("Failed loading GeoJSON", error);
      });
  }, []);

  if (!geoData) {
    return (
      <div className="flex h-[850px] items-center justify-center rounded-xl border bg-white shadow-sm">
        Loading map...
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
      <div className="border-b bg-slate-50 p-4">
        <h2 className="text-xl font-semibold">European Smart Grid Map</h2>

        <p className="mt-1 text-sm text-gray-500">
          Active Layer: {selectedLayer}
        </p>

        <div className="mt-3 flex flex-wrap gap-4 text-xs">
          <Legend color="#22c55e" text="Low" />

          <Legend color="#eab308" text="Moderate" />

          <Legend color="#f97316" text="Elevated" />

          <Legend color="#dc2626" text="High" />

          <Legend color="#991b1b" text="Critical" />
        </div>
      </div>

      <MapContainer
        center={[54.5, 15]}
        zoom={4}
        scrollWheelZoom
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

            const metric = getMetricValue(country, selectedLayer);

            return {
              fillColor: getHeatMapColor(metric),
              fillOpacity: 0.7,
              color: "#475569",
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
                <hr/>
                Load:
                ${data.loadPercentage}%<br/>
                Renewable:
                ${data.renewablePercentage}%<br/>
                Price:
                €${data.price}/MWh<br/>
                Carbon:
                ${data.carbonIntensity}
                gCO₂/kWh<br/>
                Forecast:
                ${data.forecastLoad}%<br/>
                Congestion:
                ${data.congestionRisk}%<br/>
                Alerts:
                ${data.activeAlerts}
              </div>
            `);
          }}
        />

        {role === "admin" &&
          showAlerts &&
          gridAlerts.map((alert) => (
            <Marker
              key={alert.id}
              position={[alert.lat, alert.lng]}
              icon={statusIcons[alert.status]}
            >
              <Popup>
                <div>
                  <h3 className="font-bold">{alert.country}</h3>

                  <p>Status: {alert.status}</p>

                  <p>{alert.description}</p>
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
}

type LegendProps = {
  color: string;
  text: string;
};

function Legend({ color, text }: LegendProps) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="h-4 w-4 rounded"
        style={{
          backgroundColor: color,
        }}
      />

      <span>{text}</span>
    </div>
  );
}
