import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { NewMovie } from "../pages/NewMovie";
import { View } from "../pages/View";
import { Perfil } from "../pages/Perfil";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewMovie />} />
      <Route path="/view/:id" element={<View />} />
      <Route path="/profile" element={<Perfil />} />
    </Routes>
  );
}
