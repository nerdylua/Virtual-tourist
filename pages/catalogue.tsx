import React, { useState } from "react";

const Catalogue = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const categories = [
    {
      name: "Urban Cities",
      description:
        "Explore the bustling streets and iconic landmarks of the world's most vibrant cities.",
      videos: [
        { name: "London", videoId: "KGerjHMa90s" },
        { name: "Paris", videoId: "Cnvi6oI3Eno" },
        { name: "New York", videoId: "TRnbMTjjNHQ" },
        { name: "Rajasthan", videoId: "QCCDqtepOLY" },
        { name: "Mumbai", videoId: "CZHFu2BSZPs" },
      ],
    },
    {
      name: "Historical Sites",
      description:
        "Step back in time and visit ancient monuments, temples, and other historical treasures.",
      videos: [
        { name: "Pyramids of Egypt", videoId: "mOuvAJRknXk" },
        { name: "The Taj Mahal", videoId: "Bx2S7JpdOp4" },
        { name: "Chichen Itza", videoId: "W7KTl4r00sI" },
        { name: "Angkor Wat", videoId: "B8UzsVY1IE8" },
        { name: "Tikal mayan ruins", videoId: "v3bDMldpaLs" },
      ],
    },
    {
      name: "Relaxation & Nature",
      description:
        "Unwind in serene landscapes, tranquil beaches, and peaceful natural settings.",
      videos: [
        { name: "Maldives", videoId: "jqq_ZdD5Zwg" },
        { name: "Nature", videoId: "7AkbUfZjS5k" },
        { name: "Night sky", videoId: "XucTpkjQQLc" },
        { name: "Forest", videoId: "7AkbUfZjS5k" },
        { name: "Ganges boating", videoId: "6gDBq8M_JOgc" },
      ],
    },
    {
      name: "Thrilling",
      description:
        "Get your adrenaline pumping with exciting, action-packed experiences in daring locations.",
      videos: [
        { name: "Roller coaster", videoId: "oAJLKDMihnU" },
        { name: "Snake Chase", videoId: "X_qfq_xGVwE" },
        { name: "Fear of Heights", videoId: "rNVpFXuAXIA" },
        { name: "Scuba diving", videoId: "2OzlksZBTiA" },
        { name: "Sky diving", videoId: "S5XXsRuMPIU" },
      ],
    },
    {
      name: "Safari",
      description:
        "Dive into the rich cultures and traditions of different regions, celebrating unique customs and rituals.",
      videos: [
        { name: "Lions", videoId: "sPyAQQklc1s" },
        { name: "Elephant Encounter", videoId: "HI7mTIxNotQ" },
        { name: "Antarctica", videoId: "XPhmpfiWEEw" },
        { name: "Tiger", videoId: "xal78egELos" },
      ],
    },
    {
      name: "Underwater",
      description:
        "Dive deep into the ocean and discover the wonders of marine life and underwater ecosystems.",
      videos: [
        { name: "Sharks", videoId: "c9YRl7Yu-p8" },
        { name: "Underwater National Park", videoId: "v64KOxKVLVg" },
        { name: "Underwater Life", videoId: "eKumVFvGHFA" },
        { name: "Hamilton island", videoId: "lJype_TafRk" },
        { name: "Isle of jaws", videoId: "sT0hVLEe5mU" },
      ],
    },
    {
      name: "Pilgrimages",
      description:
        "Embark on a spiritual journey and explore the ancient temples and holy shrines that connect humanity to the divine across cultures and religions.",
      videos: [
        { name: "Mount Everest", videoId: "PnfJDgS9VZc" },
        { name: "Kedarnath", videoId: "OYiHRowaw2U" },
        { name: "Golden Temple", videoId: "EBSh4nVtR9s" },
        { name: "Hamilton island", videoId: "lJype_TafRk" },
        { name: "Ganga aarti", videoId: "0wY9A5oji1E" },
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
        background: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)",
        color: "#2d3748",
        padding: "40px",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "5rem",
          marginBottom: "30px",
          color: "#1a365d",
          textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
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
                backgroundColor: "#4a5568",
                color: "#fff",
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
                background: "linear-gradient(145deg, #ffffff, #f0f4ff)",
                padding: "40px",
                borderRadius: "12px",
                textAlign: "center",
                cursor: "pointer",
                boxShadow: "0 6px 20px rgba(66, 153, 225, 0.15)",
                backdropFilter: "blur(5px)",
                transition: "transform 0.3s, box-shadow 0.3s",
                fontSize: "1.2rem",
                fontWeight: "bold",
                width: "100%",
                maxWidth: "400px",
                border: "1px solid rgba(99, 179, 237, 0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(66, 153, 225, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(66, 153, 225, 0.15)";
              }}
            >
              <h2
                style={{
                  fontSize: "1.8rem",
                  marginBottom: "15px",
                  color: "#2b6cb0",
                }}
              >
                {category.name}
              </h2>
              {selectedCategory === category.name && (
                <div
                  style={{
                    background: "rgba(235, 244, 255, 0.95)",
                    padding: "20px",
                    borderRadius: "8px",
                    marginTop: "20px",
                    boxShadow: "0 4px 6px rgba(66, 153, 225, 0.1)",
                    border: "1px solid rgba(99, 179, 237, 0.2)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1rem",
                      marginBottom: "20px",
                      color: "#2d4ed8",
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
                          background: "linear-gradient(145deg, #4299e1, #3182ce)",
                          color: "#fff",
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
            color: "#2b6cb0",
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
