import { useState } from "react";

import EuropeGridMap from "../components/maps/EuropeGridMap";
import PageContainer from "../components/common/PageContainer";
import DemandForecastChart from "../components/charts/DemandForecastChart";
import RenewableForecastChart from "../components/charts/RenewableForecastChart";
import ForecastConfidenceCard from "../components/forecasts/ForecastConfidenceCard";
import KPISection from "../components/stats/KPISection";

import type { MapLayer } from "../types/MapLayer";

export default function PublicDashboard() {
  const [layer] = useState<MapLayer>("load");

  const [showAlerts] = useState(false);

  return (
    <PageContainer title="European Smart Grid Public Portal">
      <div className="grid gap-6 xl:grid-cols-12">
        <div className="space-y-6 xl:col-span-3">
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">Grid Overview</h2>

            <KPISection
              currentLoad={421}
              renewablePercentage={63}
              electricityPrice={74}
              carbonIntensity={121}
            />
          </div>

          <ForecastConfidenceCard confidence={92} />

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">Statistics View</h2>

            <select className="w-full rounded-lg border p-3">
              <option>Current Grid Load</option>

              <option>Historical Usage</option>

              <option>Energy Prices</option>

              <option>Renewable Production</option>

              <option>Carbon Emissions</option>

              <option>Water Consumption</option>

              <option>Peak Demand</option>
            </select>

            <p className="mt-3 text-sm text-gray-500">
              View different energy and sustainability indicators across Europe.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">Europe Status</h2>

            <div className="space-y-3">
              <StatusItem label="Countries Monitored" value="27" />

              <StatusItem label="Renewable Production" value="266 GW" />

              <StatusItem label="Active Congestions" value="3" />

              <StatusItem label="Estimated CO₂" value="121 g/kWh" />

              <StatusItem label="Forecast Confidence" value="92%" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-9">
          <EuropeGridMap
            role="public"
            selectedLayer={layer}
            showAlerts={showAlerts}
          />
        </div>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <DemandForecastChart />

        <RenewableForecastChart />
      </div>
    </PageContainer>
  );
}

type StatusItemProps = {
  label: string;
  value: string;
};

function StatusItem({ label, value }: StatusItemProps) {
  return (
    <div className="flex items-center justify-between border-b pb-2">
      <span className="text-gray-600">{label}</span>

      <span className="font-semibold">{value}</span>
    </div>
  );
}
