import "./Style.css";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import Summary from "./pages/Summary";

function App() {
  return (
    <div>
      <Sidenav />
      <main>
        <Header />
        <Summary />
      </main>
    </div>
  );
}

export default App;
