import React from "react";
import TopBar from "../components/ui/Topbar";
import Footer from "../components/ui/Footer";
import Contact from "../components/ui/Contact/Contact";

const ContactPage = () => {
  return (
    <div className="page">
      <TopBar />

      <main className="main-content">
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
