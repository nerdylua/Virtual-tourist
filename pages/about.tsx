// pages/about.tsx

import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div style={{ padding: "20px", color: "#fff", textAlign: "center" }}>
      <h1>About the VR Tourism App</h1>
      <p>
        Welcome to our virtual tourism experience! Explore various tourist
        destinations from around the world in virtual reality (VR). Our catalog
        offers VR videos differentiated by demographics and age groups, providing
        an immersive and personalized travel experience.
      </p>
      <p>
        Select a destination, view the VR content, and enjoy the journey from
        the comfort of your home!
      </p>
      <Link href="/" passHref>
        <button style={{ padding: "10px 20px", backgroundColor: "#ff6600", color: "#fff", border: "none", borderRadius: "5px" }}>
          Back to Catalog
        </button>
      </Link>
    </div>
  );
};

export default About;
