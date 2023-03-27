import { RouteProps } from "react-router-dom";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

export const RoutesPaths: Record<AppRoutes, string> = {
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.MAIN]: "/",
};

export const routesConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.ABOUT]: {
    path: AppRoutes.ABOUT,
    element: <AboutPage />,
  },
  [AppRoutes.MAIN]: {
    path: AppRoutes.MAIN,
    element: <MainPage />,
  },
};