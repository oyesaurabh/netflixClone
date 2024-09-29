import { Routes, Route } from "react-router-dom";
import routeData from "./route";

export default function AppContent() {
  return (
    <Routes>
      {routeData.map((route) => (
        <Route key={route.id} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  );
}
