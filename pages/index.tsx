// pages/index.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #6A1B9A, #9C27B0)", // Softer gradient colors
        color: "#fff",
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      {/* Welcome Message Section */}
      <h1 style={{ fontSize: "4rem", marginBottom: "20px", fontWeight: "bold", letterSpacing: "1px" }}>
        Welcome to Virtual Tourism
      </h1>
      <p style={{ fontSize: "1.5rem", marginBottom: "30px" }}>
        Explore the world’s top tourist destinations, travel through immersive VR videos and
        experience the wonders of the world, all from the comfort of your home!
      </p>

      {/* Enter the Tour Button */}
      <Link href="/catalogue">
        <button
          style={{
            padding: "20px 40px",
            fontSize: "1.5rem",
            backgroundColor: "#FF6F61", // Softer, more pleasant button color
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            transition: "background-color 0.3s, transform 0.3s",
          }}
        >
          Enter the Tour
        </button>
      </Link>

      {/* Contributors Section */}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          textAlign: "right",
          fontSize: "2rem", // Increased font size
        }}
      >
        <p>Made by:</p>
        <p style={{ fontWeight: "bold" }}>Nihaal SP</p>
        <p style={{ fontWeight: "bold" }}>Puneeth Kumar</p>
        <p style={{ fontWeight: "bold" }}>Vinay Sinnur</p>
        <p style={{ fontWeight: "bold" }}>Vinayak Singh</p>
      </div>
    </div>
  );
}
