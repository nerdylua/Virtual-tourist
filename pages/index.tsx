// pages/index.tsx
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)",
        color: "#1a365d",
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      <h1 style={{ 
        fontSize: "4rem", 
        marginBottom: "22px", 
        fontWeight: "bold", 
        letterSpacing: "1px",
        color: "#1a365d",
        textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
      }}>
        Welcome to Virtual Tourism
      </h1>
      <p style={{ 
        fontSize: "2rem", 
        marginBottom: "79px",
        color: "#2d4ed8"
      }}>
        Explore the world&apos;s top tourist destinations, travel through immersive VR videos and experience the wonders of the world, all from the comfort of your home!
      </p>

      <Link href="/catalogue">
        <button
          style={{
            padding: "20px 40px",
            fontSize: "1.5rem",
            background: "linear-gradient(145deg, #4299e1, #3182ce)",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            transition: "all 0.3s",
            boxShadow: "0 6px 20px rgba(66, 153, 225, 0.15)",
            "&:hover": {
              background: "linear-gradient(145deg, #3182ce, #2c5282)",
              transform: "translateY(-2px)",
              boxShadow: "0 8px 25px rgba(66, 153, 225, 0.25)",
            },
          }}
        >
          Enter the Tour
        </button>
      </Link>
    </div>
  );
}
