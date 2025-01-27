import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Benefits } from "./pages/Benefits";
import { Products } from "./pages/Products";
import { About } from "./pages/About";
import { Sustainability } from "./pages/Sustainability";
import { StoreLocator } from "./pages/Stores";
import { Recipes } from "./pages/Recipes";
import { Contacts } from "./pages/Contact";

function App() {
  return ( 
    <BrowserRouter>
      <ThemeProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Benefits" element={<Benefits />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/Sustainability" element={<Sustainability />} />
            <Route path="/stores" element={<StoreLocator />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contacts />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;