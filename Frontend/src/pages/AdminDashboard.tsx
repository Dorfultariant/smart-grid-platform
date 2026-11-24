import PageContainer from "../components/common/PageContainer";
import KPISection from "../components/stats/KPISection";
import EuropeGridMap from "../components/maps/EuropeGridMap";
import DemandForecastChart from "../components/charts/DemandForecastChart";
import RenewableForecastChart from "../components/charts/RenewableForecastChart";
import AlertList from "../components/alerts/AlertList";

export default function AdminDashboard() {
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
            <h2 className="mb-4 text-xl font-semibold">Active Incidents</h2>

            <AlertList />
          </div>

          <div className="rounded-xl border bg-blue-50 p-6">
            <h2 className="mb-3 font-semibold text-blue-900">
              Infrastructure Planning
            </h2>

            <ul className="space-y-2 text-sm">
              <li>Germany North congestion risk</li>

              <li>Netherlands transmission upgrade</li>

              <li>Finland battery expansion</li>
            </ul>
          </div>
        </div>

        <div className="xl:col-span-9">
          <EuropeGridMap />
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
              <th className="pb-3">Severity</th>
              <th className="pb-3">Region</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="py-3">24 Nov 2026</td>

              <td className="text-red-600">Critical</td>

              <td>Germany North</td>

              <td>Resolved</td>
            </tr>

            <tr className="border-b">
              <td className="py-3">22 Nov 2026</td>

              <td className="text-yellow-600">Warning</td>

              <td>Finland</td>

              <td>Resolved</td>
            </tr>

            <tr>
              <td className="py-3">20 Nov 2026</td>

              <td className="text-blue-600">Informational</td>

              <td>France</td>

              <td>Closed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </PageContainer>
  );
}
