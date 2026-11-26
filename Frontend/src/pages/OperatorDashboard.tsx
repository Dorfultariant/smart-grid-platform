import PageContainer from "../components/common/PageContainer";
import KPISection from "../components/stats/KPISection";
import EuropeGridMap from "../components/maps/EuropeGridMap";
import DemandForecastChart from "../components/charts/DemandForecastChart";
import RenewableForecastChart from "../components/charts/RenewableForecastChart";
import type { MapLayer } from "../types/MapLayer";
import { useState } from "react";
import ForecastControls from "../components/forecasts/ForecastControls";

import ForecastConfidenceCard from "../components/forecasts/ForecastConfidenceCard";

import type { ForecastHorizon } from "../types/ForecastHorizon";
export default function OperatorDashboard() {
  const [layer] = useState<MapLayer>("load");
  const [showAlerts] = useState(false);
  const [horizon, setHorizon] = useState<ForecastHorizon>("day");
  return (
    <PageContainer title="Industrial Energy Consumer">
      <div className="grid gap-6 xl:grid-cols-12">
        <div className="space-y-6 xl:col-span-3">
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">Grid Statistics</h2>

            <KPISection
              currentLoad={421}
              renewablePercentage={63}
              electricityPrice={74}
              carbonIntensity={121}
            />
          </div>
          <ForecastControls horizon={horizon} setHorizon={setHorizon} />

          <ForecastConfidenceCard confidence={92} />
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">Organization</h2>

            <div className="space-y-3">
              <InfoRow label="Current Usage" value="124 MW" />

              <InfoRow label="Peak Forecast" value="142 MW" />

              <InfoRow label="Daily Cost" value="€53,000" />

              <InfoRow label="Renewable Share" value="72%" />
            </div>
          </div>

          <div className="rounded-xl border bg-green-50 p-6">
            <h2 className="mb-3 font-semibold text-green-800">
              AI Recommendation
            </h2>

            <p className="text-sm text-green-700">
              Shift non-critical workloads between 13:00 and 16:00 to maximize
              renewable generation and reduce energy costs.
            </p>
          </div>
        </div>

        <div className="xl:col-span-9">
          <EuropeGridMap
            role="operator"
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

type InfoRowProps = {
  label: string;
  value: string;
};

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="flex justify-between border-b pb-2">
      <span className="text-gray-500">{label}</span>

      <span className="font-semibold">{value}</span>
    </div>
  );
}
