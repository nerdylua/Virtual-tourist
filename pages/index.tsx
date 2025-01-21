import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const video = document.querySelector('video');
    if (video) {
      video.onloadeddata = () => {
        console.log('Video loaded successfully');
      };
      video.onerror = () => {
        console.error('Error loading video');
      };
    }
  }, []);

  return (
    <div
      style={{
        color: "#e6e6fa",
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          opacity: 0.6, 
        }}
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h1
        style={{
          fontSize: "5.1rem",
          marginBottom: "22px",
          fontWeight: "800",
          letterSpacing: "1px",
          color: "#fde7bb",
          textShadow: "7px 7px 7px rgb(0,0,0)",
          fontFamily: "'Pacifico', straight",
        }}
      >
        Welcome to Virtual Tourism
      </h1>
      <p
        style={{
          fontSize: "1.91rem",
          marginBottom: "79px",
          color: "#889E73",
          fontFamily: "'Dancing Script', cursive",
          lineHeight: "1.6",
          textShadow: "5px 5px 5px rgb(0,0,0)",
        }}
      >
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
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Enter the Tour
        </button>
      </Link>
    </div>
  );
}
