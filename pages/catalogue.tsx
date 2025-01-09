// pages/catalogue.tsx
import React, { useState } from "react";
import Link from "next/link";

const Catalogue = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    {
      name: "Urban Cities",
      description: "Explore the bustling streets and iconic landmarks of the world's most vibrant cities.",
      videos: ["Video 1", "Video 2", "Video 3"],
    },
    {
      name: "Historical Sites",
      description: "Step back in time and visit ancient monuments, temples, and other historical treasures.",
      videos: ["Video 1", "Video 2", "Video 3"],
    },
    {
      name: "Monuments",
      description: "Marvel at the engineering feats and architectural wonders that have stood the test of time.",
      videos: ["Video 1", "Video 2", "Video 3"],
    },
    {
      name: "Relaxation & Nature",
      description: "Unwind in serene landscapes, tranquil beaches, and peaceful natural settings.",
      videos: ["Video 1", "Video 2", "Video 3"],
    },
    {
      name: "Thrilling",
      description: "Get your adrenaline pumping with exciting, action-packed experiences in daring locations.",
      videos: ["Video 1", "Video 2", "Video 3"],
    },
    {
      name: "Adventure",
      description: "Embark on exciting adventures in remote and unexplored places, perfect for thrill-seekers.",
      videos: ["Video 1", "Video 2", "Video 3"],
    },
    {
      name: "Space",
      description: "Venture beyond the Earth and explore the wonders of outer space in awe-inspiring VR journeys.",
      videos: ["Video 1", "Video 2", "Video 3"],
    },
    {
      name: "Cultural",
      description: "Dive into the rich cultures and traditions of different regions, celebrating unique customs and rituals.",
      videos: ["Video 1", "Video 2", "Video 3"],
    },
    {
      name: "Underwater",
      description: "Dive deep into the ocean and discover the wonders of marine life and underwater ecosystems.",
      videos: ["Video 1", "Video 2", "Video 3"],
    },
  ];

  return (
    <div style={{ background: "#fff", color: "#333", padding: "40px", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", fontSize: "3rem", marginBottom: "30px" }}>Tourism Catalogue</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {categories.map((category) => (
          <div
            key={category.name}
            onClick={() => setSelectedCategory(selectedCategory === category.name ? null : category.name)}
            style={{
              background: "#f4f4f4",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
              cursor: "pointer",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>{category.name}</h2>
            {selectedCategory === category.name && (
              <div
                style={{
                  background: "#fff",
                  padding: "20px",
                  borderRadius: "8px",
                  marginTop: "20px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <p style={{ fontSize: "1rem", marginBottom: "20px" }}>
                  {category.description}
                </p>
                <div style={{ display: "flex", gap: "15px" }}>
                  {category.videos.map((video, index) => (
                    <button
                      key={index}
                      style={{
                        padding: "10px 20px",
                        backgroundColor: "#FF6F61",
                        color: "#fff",
                        borderRadius: "5px",
                      }}
                    >
                      {video}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Link href="/">
          <button style={{ padding: "10px 20px", backgroundColor: "#6A1B9A", color: "#fff", borderRadius: "5px" }}>
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Catalogue;
