import Router from "./routes";
import ThemeConfig from "./theme";
// import GlobalStyles from "./theme/globalStyles";
import { BrowserRouter } from "react-router-dom";

// components
// import ScrollToTop from "./components/ScrollToTop"; /// import CssBaseline from "@mui/material/CssBaseline";
// import pages from "./pages";
// import { ROUTES } from "./routes";

function App() {
  return (
    <ThemeConfig>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeConfig>
  );
}

export default App;
