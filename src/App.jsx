import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Settings from "./pages/Settings/Settings";
import NewPage from "./pages/NewPage/NewPage";
import EditPage from "./pages/EditPage/EditPage";
import { useState } from "react";

export default function App() {
  const [urls, setUrls] = useState([
    {
      id: "1",
      urlPage: "/produto/camiseta-branca",
    },
    {
      id: "2",
      urlPage: "/produto/tenis-nike",
    },
    {
      id: "3",
      urlPage: "/produto/jeans-skinny",
    },
  ]);
  return (
    <Routes>
      <Route path="/" element={<Home urls={urls} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/newpage" element={<NewPage />} />s
      <Route path="/editpage/:id" element={<EditPage urls={urls} />} />
    </Routes>
  );
}
