// components/VRScene.jsx
const VRScene = ({ videoSrc }) => {
  useEffect(() => {
    require("aframe");
  }, []);

  return (
    <a-scene>
      <a-assets>
        <video id="vr-video" src={videoSrc} autoplay loop="true"></video>
      </a-assets>
      <a-videosphere src="#vr-video"></a-videosphere>
    </a-scene>
  );
};

export default VRScene;
