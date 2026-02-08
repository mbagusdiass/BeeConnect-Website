import React from "react";
import TopBar from "../components/ui/Topbar";
import Footer from "../components/ui/Footer";
import SuccessPaying from "../components/ui/Success-Paying/SuccessPaying";

const SuccessPayingPage = () => {
  return (
    <div className="page">
      <TopBar />

      <main className="main-content">
        <SuccessPaying />
      </main>

      <Footer />
    </div>
  );
};

export default SuccessPayingPage;
