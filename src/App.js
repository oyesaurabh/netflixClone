import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppContent } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
