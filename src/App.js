import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppContent } from "./routes";
import { Provider } from "react-redux";
import appStore from "./hooks/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
