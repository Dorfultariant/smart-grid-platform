import type { UserRole } from "../components/common/RoleSelector";

import type { MapLayer } from "../types/MapLayer";

export const layerPermissions: Record<UserRole, MapLayer[]> = {
  public: ["load", "renewable", "price", "carbon"],

  operator: ["load", "renewable", "price", "carbon", "forecast"],

  admin: [
    "load",
    "renewable",
    "price",
    "carbon",
    "forecast",
    "congestion",
    "alerts",
  ],
};
