import { Routes, Route } from "react-router-dom";
import { Layout } from "./common/components/Layout/Layout";
import { Products } from "./pages/Products/Products";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { Delivery } from "./pages/Delivery/Delivery";
import { Basket } from "./pages/Basket/Basket";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Products />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/basket" element={<Basket />} />
      </Route>
    </Routes>
  );
}

export default App;
