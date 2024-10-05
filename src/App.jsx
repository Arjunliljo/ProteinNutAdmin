import { Outlet } from "react-router";
import Sidebar from "./Layout/Sidebar/Sidebar";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
