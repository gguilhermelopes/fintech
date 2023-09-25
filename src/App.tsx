import "./Style.css";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import { DataContextProvider } from "./context/DataContext";
import Summary from "./pages/Summary";

function App() {
  return (
    <DataContextProvider>
      <div>
        <Sidenav />
        <main>
          <Header />
          <Summary />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
