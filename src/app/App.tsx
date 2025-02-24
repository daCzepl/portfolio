import "./index.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Layout } from "../components/layouts/Layout";
import { Imprint } from "../pages/Imprint";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/imprint" element={<Imprint />} />
      </Route>
    </Routes>
  );
}

export default App;
