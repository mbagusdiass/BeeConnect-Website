import React from "react";
import TopBar from "../components/ui/Topbar";
import Footer from "../components/ui/Footer";
import Home from "../components/ui/Home/Home";

const HomePage = () => {
  return (
    <div className="page">
      <TopBar />

      <main className="main-content">
        <Home />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
