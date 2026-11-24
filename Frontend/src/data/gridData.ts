export type CountryGridData = {
  loadPercentage: number;
  renewablePercentage: number;
  price: number;
  carbonIntensity: number;
  forecastLoad: number;
  congestionRisk: number;
  activeAlerts: number;
};

export const gridData: Record<string, CountryGridData> = {
  Finland: {
    loadPercentage: 42,
    renewablePercentage: 57,
    price: 72,
    carbonIntensity: 45,
    forecastLoad: 48,
    congestionRisk: 15,
    activeAlerts: 0,
  },

  Germany: {
    loadPercentage: 88,
    renewablePercentage: 52,
    price: 92,
    carbonIntensity: 182,
    forecastLoad: 94,
    congestionRisk: 84,
    activeAlerts: 3,
  },

  France: {
    loadPercentage: 63,
    renewablePercentage: 48,
    price: 71,
    carbonIntensity: 72,
    forecastLoad: 68,
    congestionRisk: 35,
    activeAlerts: 1,
  },
};
