import HeaderBar from "./components/HeaderBar";
import "./App.css";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Outlet />
    </div>
  );
}

export default App;
