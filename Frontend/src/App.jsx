// import './App.css'
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/footer/Footer";
import ShopContextProvider from "./Context/ShopContext";
function App() {
  return (
    <ShopContextProvider>
      <Navbar />
      <hr />
      <Outlet />
      <Footer />
    </ShopContextProvider>
  );
}

export default App;
