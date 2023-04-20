import { useGlobalContext } from "./context";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SubMenu from "./SubMenu";

const App = () => {
  const { isSidebarOpen } = useGlobalContext();
  console.log(isSidebarOpen);
  return (
    <main>
      <Navbar />
      <Hero />
      <Sidebar />
      <SubMenu />
    </main>
  );
};
export default App;
