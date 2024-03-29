import { Outlet } from "react-router-dom";
import { Navbar } from "./components";

const App = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
