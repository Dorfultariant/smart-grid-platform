import { useState } from "react";
import AlertList from "../components/alerts/AlertList";
import DemandForecastChart from "../components/charts/DemandForecastChart";
import RenewableForecastChart from "../components/charts/RenewableForecastChart";
import PageContainer from "../components/common/PageContainer";
import EuropeGridMap from "../components/maps/EuropeGridMap";
import MapLayerSelector from "../components/maps/MapLayerSelector";
import KPISection from "../components/stats/KPISection";

import type { MapLayer } from "../types/MapLayer";

export default function AdminDashboard() {
  const [layer, setLayer] = useState<MapLayer>("load");

  const [showAlerts, setShowAlerts] = useState(true);

  return (
    <PageContainer title="Grid Operations Center">
      <div className="grid gap-6 xl:grid-cols-12">
        <div className="space-y-6 xl:col-span-3">
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">Grid Status</h2>

            <KPISection
              currentLoad={421}
              renewablePercentage={63}
              electricityPrice={74}
              carbonIntensity={121}
            />
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">Map Controls</h2>

            <MapLayerSelector
              value={layer}
              onChange={setLayer}
              options={[
                "load",
                "renewable",
                "price",
                "carbon",
                "forecast",
                "congestion",
                "alerts",
              ]}
            />

            <div className="mt-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={showAlerts}
                  onChange={(e) => setShowAlerts(e.target.checked)}
                />
                Show Alert Markers
              </label>
            </div>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">Active Alerts</h2>

            <AlertList />
          </div>

          <div className="rounded-xl border bg-blue-50 p-6">
            <h2 className="mb-4 font-semibold text-blue-900">
              Infrastructure Planning
            </h2>

            <ul className="space-y-2 text-sm">
              <li>Germany North upgrade</li>

              <li>Netherlands congestion mitigation</li>

              <li>Finland storage expansion</li>
            </ul>
          </div>
        </div>

        <div className="xl:col-span-9">
          <EuropeGridMap
            role="admin"
            selectedLayer={layer}
            showAlerts={showAlerts}
          />
        </div>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <DemandForecastChart />
        <RenewableForecastChart />
      </div>

      <div className="mt-6 rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">Historical Alert Log</h2>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="pb-3">Date</th>

              <th className="pb-3">Status</th>

              <th className="pb-3">Region</th>

              <th className="pb-3">Resolution</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="py-3">24 Nov 2026</td>

              <td className="text-red-600">Fault</td>

              <td>Germany</td>

              <td>Resolved</td>
            </tr>

            <tr className="border-b">
              <td className="py-3">22 Nov 2026</td>

              <td className="text-yellow-600">Maintenance</td>

              <td>Finland</td>

              <td>Completed</td>
            </tr>

            <tr>
              <td className="py-3">20 Nov 2026</td>

              <td className="text-orange-600">Congested</td>

              <td>Netherlands</td>

              <td>Mitigated</td>
            </tr>
          </tbody>
        </table>
      </div>
    </PageContainer>
  );
}
