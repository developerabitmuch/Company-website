// ModelLoader.js
import React from "react";
import { useProgress } from "@react-three/drei";

const LoaderScreen = ({ start, setStart }) => {
  const { progress } = useProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-slate-800 bg-opacity-100 flex justify-center items-center z-50">
      <div className="w-64 h-8 bg-gray-300 rounded-full overflow-hidden">
        <button
          className="h-full bg-blue-500 flex items-center justify-center"
          style={{ width: `${progress}%` }}
          disabled={progress < 100}
          onClick={setStart}
        >
          Start
        </button>
      </div>
    </div>
  );
};
export default LoaderScreen;
