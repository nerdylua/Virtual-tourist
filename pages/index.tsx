// pages/index.tsx
import dynamic from "next/dynamic";
import { useState } from "react";

const VRScene = dynamic(() => import("../components/VRScene"), { ssr: false });

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState("/videos/sample.mp4");

  return (
    <>
      <div>
        <h1>VR Tourism Catalog</h1>
        <button onClick={() => setSelectedVideo("/videos/sample.mp4")}>
          Video 1
        </button>
        <button onClick={() => setSelectedVideo("/videos/another.mp4")}>
          Video 2
        </button>
      </div>
      <VRScene videoSrc={selectedVideo} />
    </>
  );
}
