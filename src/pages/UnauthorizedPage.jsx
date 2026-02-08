import React from "react";
import TopBar from "../components/ui/Topbar";
import Footer from "../components/ui/Footer";
import Unauthorized from "../components/ui/Unauthorized/Unauthorized";

const UnauthorizedPage = () => {
  return (
    <div className="page">
      <TopBar />

      <main className="main-content">
        <Unauthorized />
      </main>

      <Footer />
    </div>
  );
};

export default UnauthorizedPage;
