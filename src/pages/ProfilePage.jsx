import React from "react";
import TopBar from "../components/ui/Topbar";
import Footer from "../components/ui/Footer";
import Profile from "../components/ui/Profile/Profile";

const ProfilePage = () => {
  return (
    <div className="page">
      <TopBar />

      <main className="main-content">
        <Profile />
      </main>

      <Footer />
    </div>
  );
};

export default ProfilePage;
