import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loaderVideo from "../portfolio_assets/loader_video/abitmuch_loader.mp4";

const VideoSplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 9000); // Adjust time to the length of your video or desired timeout

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="fixed inset-0 bg-black">
      <video
        autoPlay
        muted
        loop={false}
        className="w-full h-full object-cover"
        onEnded={() => navigate("/")} //yh onEnded pe navigate krdega hmein
      >
        <source src={loaderVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSplashScreen;
