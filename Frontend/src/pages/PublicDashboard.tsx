import EuropeGridMap from "../components/maps/EuropeGridMap";
import KPISection from "../components/stats/KPISection";
import PageContainer from "../components/common/PageContainer";
import type { MapLayer } from "../types/MapLayer";
import { useState } from "react";

export default function PublicDashboard() {
  const [layer] = useState<MapLayer>("load");
  const [showAlerts] = useState(false);

  return (
    <PageContainer title="European Smart Grid Public (Digital Twin integration)">
      {/* <div className="grid gap-6 lg:grid-cols-4"> */}
      <div className="grid gap-6 xl:grid-cols-12">
        {/* <div className="space-y-6 xl:col-span-3"> */}
        <div className="space-y-6 xl:col-span-3">
          {/*          <div className="rounded-xl border bg-white p-6 shadow-sm xl:col-span-9">*/}
          <div className="xl:col-span-9">
            <h2 className="mb-4 text-xl font-semibold">Grid Overview</h2>

            <KPISection
              currentLoad={421}
              renewablePercentage={63}
              electricityPrice={74}
              carbonIntensity={121}
            />
          </div>

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
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">Europe Status</h2>

            <div className="space-y-3">
              <StatusItem label="Countries Monitored" value="27" />
              <StatusItem label="Renewable Production" value="266 GW" />
              <StatusItem label="Active Congestions" value="3" />
              <StatusItem label="Estimated CO₂" value="121 g/kWh" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <EuropeGridMap
            role="public"
            selectedLayer={layer}
            showAlerts={showAlerts}
          />
        </div>
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
