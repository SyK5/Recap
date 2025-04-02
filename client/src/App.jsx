import { useState } from "react";
import { Routes, Route } from "react-router";

import "./styles/app.css";

import Home from "./pages/Home";
import Layout from "./components/Layout";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/register" element={<Register />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
