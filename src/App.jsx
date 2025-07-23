import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Settings from "./pages/Settings/Settings";
import NewPage from "./pages/NewPage/NewPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/newpage" element={<NewPage />} />
    </Routes>
  );
}
