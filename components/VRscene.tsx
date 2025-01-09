import { useEffect, useRef } from "react";
import * as THREE from "three";

const VRScene = ({ videoSrc }: { videoSrc: string }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Create video element
    const video = document.createElement("video");
    video.src = videoSrc; // `videoSrc` will point to the local video (e.g., /videos/sample.mp4)
    video.crossOrigin = "anonymous";
    video.loop = true;
    video.muted = true; // Mute for autoplay to work on some browsers
    video.autoplay = true;
    video.playsInline = true; // For mobile compatibility
    video.play();

    // Create VideoTexture
    const texture = new THREE.VideoTexture(video);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBFormat;

    // Create geometry and material
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1); // Invert the sphere to view from inside
    const material = new THREE.MeshBasicMaterial({ map: texture });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.set(0, 0, 0);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      video.pause();
    };
  }, [videoSrc]);

  return <div ref={mountRef} />;
};

export default VRScene;
