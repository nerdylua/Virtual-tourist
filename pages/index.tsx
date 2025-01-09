import dynamic from "next/dynamic";
import { useState } from "react";

const VRScene = dynamic(() => import("../components/VRscene"), { ssr: false });

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState("/videos/sample.mp4");

  return (
    <>
      <div className="text-center p-4">
        <h1 className="text-3xl mb-6">VR Tourism Catalog</h1>
        <button
          onClick={() => setSelectedVideo("/videos/sample.mp4")}
          className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
        >
          Video 1
        </button>
        <button
          onClick={() => setSelectedVideo("/videos/another.mp4")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Video 2
        </button>
      </div>
      <VRScene videoSrc={selectedVideo} />
    </>
  );
}
