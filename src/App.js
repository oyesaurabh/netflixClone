import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { AppContent } from "./routes";
import appStore from "./hooks/appStore";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Provider store={appStore}>
        <AppContent />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
