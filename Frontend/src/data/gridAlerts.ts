import type { GridAlert } from "../types/GridAlert";

export const gridAlerts: GridAlert[] = [
  {
    id: "1",
    country: "Germany",
    lat: 51.2,
    lng: 10.4,
    status: "Congested",
    description: "North-South transmission congestion",
  },

  {
    id: "2",
    country: "Finland",
    lat: 61.9,
    lng: 25.7,
    status: "Maintenance",
    description: "Scheduled transformer maintenance",
  },

  {
    id: "3",
    country: "France",
    lat: 46.2,
    lng: 2.2,
    status: "Fault",
    description: "Substation outage detected",
  },

  {
    id: "4",
    country: "Spain",
    lat: 40.4,
    lng: -3.7,
    status: "Offline",
    description: "Communication loss from regional grid",
  },
];
