
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import NotFound from "./Page/NotFound";
import "./App.css";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import Productpage from "./Page/Productpage";
import Checkout from "./Page/Checkout";

function App() {
  return (
    <>
    <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="product" element={<Productpage/>} />
        <Route path="checkout" element={<Checkout/>} />
      </Routes>
    </>
  );
}

export default App;
