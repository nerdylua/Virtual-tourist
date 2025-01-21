import React, { useState } from "react";

const Catalogue = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const categories = [
    {
      name: "Urban Cities",
      description:
        "Explore the bustling streets and iconic landmarks of the world's most vibrant cities.",
      image: "urban_cities.jpg",
      videos: [
        { name: "London", videoId: "KGerjHMa90s" },
        { name: "Paris", videoId: "Cnvi6oI3Eno" },
        { name: "New York", videoId: "TRnbMTjjNHQ" },
      ],
    },
    {
      name: "Historical Sites",
      description:
        "Step back in time and visit ancient monuments, temples, and other historical treasures.",
      image: "historical_sites.jpg",
      videos: [
        { name: "Pyramids of Egypt", videoId: "mOuvAJRknXk" },
        { name: "The Taj Mahal", videoId: "Bx2S7JpdOp4" },
        { name: "Chichen Itza", videoId: "W7KTl4r00sI" },
      ],
    },
    {
      name: "Relaxation & Nature",
      description:
        "Unwind in serene landscapes, tranquil beaches, and peaceful natural settings.",
      image: "relaxation_nature.jpg",
      videos: [
        { name: "Maldives", videoId: "jqq_ZdD5Zwg" },
        { name: "Nature", videoId: "7AkbUfZjS5k" },
        { name: "Night sky", videoId: "XucTpkjQQLc" },
      ],
    },
    {
      name: "Thrilling",
      description:
        "Get your adrenaline pumping with exciting, action-packed experiences in daring locations.",
      image: "thrilling.jpg",
      videos: [
        { name: "Roller coaster", videoId: "oAJLKDMihnU" },
        { name: "Snake Chase", videoId: "X_qfq_xGVwE" },
        { name: "FEAR OF HEIGHTS", videoId: "rNVpFXuAXIA" },
      ],
    },
    {
      name: "Safari",
      description:
        "Dive into the rich cultures and traditions of different regions, celebrating unique customs and rituals.",
      image: "safari.jpg",
      videos: [
        { name: "Lions", videoId: "sPyAQQklc1s" },
        { name: "Elephant Encounter", videoId: "HI7mTIxNotQ" },
        { name: "Antarctica", videoId: "XPhmpfiWEEw" },
      ],
    },
    {
      name: "Underwater",
      description:
        "Dive deep into the ocean and discover the wonders of marine life and underwater ecosystems.",
      image: "underwater.jpg",
      videos: [
        { name: "Sharks", videoId: "c9YRl7Yu-p8" },
        { name: "Underwater National Park", videoId: "v64KOxKVLVg" },
        { name: "Underwater Life", videoId: "eKumVFvGHFA" },
      ],
    },
  ];

  const handleFullScreen = (videoElement: HTMLElement | null) => {
    if (videoElement?.requestFullscreen) {
      videoElement.requestFullscreen();
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #000957 0%, #344CB7 100%)",
        color: "#FFEB00",
        padding: "40px",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "5rem",
          marginBottom: "30px",
          color: "#FFEB00",
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
        }}
      >
        Tourism Catalogue
      </h1>

      {selectedVideo ? (
        <div style={{ textAlign: "center" }}>
          <iframe
            id="videoPlayer"
            width="100%"
            height="600"
            src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&modestbranding=1&controls=0&rel=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => {
              const videoElement = document.getElementById("videoPlayer");
              handleFullScreen(videoElement);
            }}
          ></iframe>
          <div style={{ marginTop: "20px" }}>
            <button
              onClick={() => setSelectedVideo(null)}
              style={{
                padding: "10px 20px",
                backgroundColor: "#577BC1",
                color: "#000",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
            >
              Back to Catalogue
            </button>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
            padding: "20px",
            justifyItems: "center",
          }}
        >
          {categories.map((category) => (
            <div
              key={category.name}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === category.name ? null : category.name
                )
              }
              style={{
                background: "#344CB7",
                padding: "20px",
                borderRadius: "12px",
                textAlign: "center",
                cursor: "pointer",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
                backdropFilter: "blur(5px)",
                transition: "transform 0.3s, box-shadow 0.3s",
                fontSize: "1.2rem",
                fontWeight: "bold",
                width: "100%",
                maxWidth: "400px",
                border: "1px solid rgba(99, 179, 237, 0.2)",
                color: "#FFEB00",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(0, 0, 0, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(0, 0, 0, 0.15)";
              }}
            >
              <img
                src={category.image}
                alt={category.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "10px",
                }}
              />
              <h2
                style={{
                  fontSize: "1.8rem",
                  marginBottom: "15px",
                  color: "#FFEB00",
                }}
              >
                {category.name}
              </h2>
              {selectedCategory === category.name && (
                <div
                  style={{
                    background: "#000957",
                    padding: "20px",
                    borderRadius: "8px",
                    marginTop: "20px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    border: "1px solid rgba(99, 179, 237, 0.2)",
                    color: "#FFEB00",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1rem",
                      marginBottom: "20px",
                      color: "#FFEB00",
                    }}
                  >
                    {category.description}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "15px",
                      flexDirection: "column",
                    }}
                  >
                    {category.videos.map((video, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedVideo(video.videoId);
                        }}
                        style={{
                          padding: "10px 20px",
                          background: "#FFEB00",
                          color: "#000",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                          transition: "all 0.3s",
                        }}
                      >
                        {video.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <a
          href="https://chatbot-y69cjuqsxtjgkcice2n7vy.streamlit.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            fontSize: "1.6rem",
            color: "#FFEB00",
            fontWeight: "bold",
          }}
        >
          Click here to chat with our Virtual Tourist Assistant
        </a>
      </div>
    </div>
  );
};

export default Catalogue;
