import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";

import ForYou from "./pages/ForYou";
import Mobiles from "./pages/Mobiles";
import Electronics from "./pages/Electronics";
import Beauty from "./pages/Beauty";
import Home from "./pages/Home";
import Appliances from "./pages/Appliances";
import ToysBaby from "./pages/ToysBaby";
import SportsFitness from "./pages/SportsFitness";
import Furniture from "./pages/Furniture";
import Books from "./pages/Books";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<ForYou />} />

        <Route path="/for-you" element={<ForYou />} />

        <Route path="/mobiles" element={<Mobiles />} />

        <Route path="/electronics" element={<Electronics />} />

        <Route path="/beauty" element={<Beauty />} />

        <Route path="/home" element={<Home />} />

        <Route path="/appliances" element={<Appliances />} />

        <Route path="/toys-baby" element={<ToysBaby />} />

        <Route path="/sports-fitness" element={<SportsFitness />} />

        <Route path="/furniture" element={<Furniture />} />

        <Route path="/books" element={<Books />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;