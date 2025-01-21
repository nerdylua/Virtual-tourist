/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        background: radial-gradient(circle, #0766AD, #29ADB2), repeating-linear-gradient(45deg, #C5E898, #F3F3F3),
        color: "#0766AD",
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      <h1
        style={{
          fontSize: "3.5rem",
          marginBottom: "20px",
          fontWeight: "700",
          letterSpacing: "2px",
          color: "#0766AD",
          textShadow: "3px 3px 5px rgba(0,0,0,0.1)",
        }}
      >
        Welcome to Virtual Tourism
      </h1>
      <p
        style={{
          fontSize: "1.6rem",
          marginBottom: "60px",
          color: "#29ADB2",
        }}
      >
        Explore the world&apos;s top tourist destinations, travel through
        immersive VR videos and experience the wonders of the world, all from
        the comfort of your home!
      </p>

      <Link href="/catalogue">
        <button
          style={{
            padding: "18px 36px",
            fontSize: "1.4rem",
            background: "linear-gradient(145deg, #29ADB2, #0766AD)",
            color: "#fff",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 8px 25px rgba(41, 173, 178, 0.2)",
            transform: "scale(1)",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          Enter the Tour
        </button>
      </Link>
    </div>
  );
}
