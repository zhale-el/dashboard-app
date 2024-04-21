import "./App.css";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import SideBar from "./components/sidebar/SideBar";

function App() {
  let router = useRoutes(routes);

  return (
    <>
      <TopBar />
      <div className="container">
        <SideBar />
        {router}
      </div>
    </>
  );
}

export default App;
