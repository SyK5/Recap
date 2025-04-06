import { useState } from "react";
import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import Layout from "./components/Layout";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import User from "./pages/subUserPages/UserProfile";
import UserDashboard from "./pages/subUserPages/UserDashboard";
import UserStatistics from "./pages/subUserPages/UserStatistics";
import UserTournaments from "./pages/subUserPages/UserTournaments";
import UserFriends from "./pages/subUserPages/UserFriends";
import UserManageProfile from "./pages/subUserPages/UserManageProfile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="" element={<User />} />
            <Route path="dashboard" element={<UserDashboard />} />
            <Route path="statistics" element={<UserStatistics />} />
            <Route path="tournaments" element={<UserTournaments />} />
            <Route path="friends" element={<UserFriends />} />
            <Route path="manage-profile" element={<UserManageProfile />} />
          </Route>
          <Route path="/profile/register" element={<Register />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
