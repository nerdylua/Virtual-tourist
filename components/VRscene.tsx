// components/VRScene.tsx
import { useEffect, useRef } from "react";

const VRScene = ({ videoSrc }: { videoSrc: string }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure any additional setup is done
  }, []);

  return (
    <div ref={mountRef}>
      <iframe
        width="100%"
        height="600"
        src={`https://www.youtube.com/embed/${videoSrc}?autoplay=1&rel=0&fs=1&vq=hd1080&enablejsapi=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VRScene;
