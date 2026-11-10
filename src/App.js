import Menu from "./navigation/Menu";
import Routing from "./navigation/Routing";
import Footer from "./navigation/Footer";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./navigation/ScrolltToTop";

function App() {
  return (
      <div className="pageFrame">
        <BrowserRouter>
          <div className="contentFrame">
            <Menu />
            <ScrollToTop>
            <Routing />
            </ScrollToTop>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
  );
}

export default App;
