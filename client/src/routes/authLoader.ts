import { redirect } from "react-router";
import { Urls } from "@/shared/constants/urls";

const ISAUTH = Boolean(localStorage.getItem("token"));

export async function routeGuard(type: "auth" | "dashboard") {
  switch (type) {
    case "auth":
      if (ISAUTH) {
        return redirect(Urls.DASHBOARD);
      }
      return null;

    case "dashboard":
      if (!ISAUTH) {
        return redirect(Urls.AUTH);
      }
      return null;

    default:
      return null;
  }
}

export function authLoader() {
  return routeGuard("auth");
}

export function dashboardLoader() {
  return routeGuard("dashboard");
}