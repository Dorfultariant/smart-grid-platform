export type AlertStatus = "Congested" | "Offline" | "Maintenance" | "Fault";

export type GridAlert = {
  id: string;
  country: string;
  lat: number;
  lng: number;
  status: AlertStatus;
  description: string;
};
