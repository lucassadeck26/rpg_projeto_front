import "./App.css";
import Providers from "./components/contexts/index";
import ToastContainer from "./components/ToastContainer";

import Routes from "./pages/routes";
import Global from "./styles/global";

function App() {
  return (
    <Providers>
      <div className="App-header">
        <Routes />
      </div>
      <Global />
      <ToastContainer />
    </Providers>
  );
}

export default App;
