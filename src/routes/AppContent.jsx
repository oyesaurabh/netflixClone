import { Routes, Route } from "react-router-dom";
import routeData from "./route";

export default function AppContent() {
  return (
    <Routes>
      {routeData.map((route, i) => (
        <Route key={i} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  );
}
