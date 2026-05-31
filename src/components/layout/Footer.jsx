import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2026 AeroMart. All rights reserved.</p>
      <p>Founder: <b>Paras Sehrawat</b></p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "15px",
    background: "#061a40",
    color: "white",
    marginTop: "20px",
  },
};

export default Footer;