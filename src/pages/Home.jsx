import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import LoaderCom from "../components/LoaderCom";
// import LoaderScreen from "../components/Loader/LoaderScreen";

// Importing 3D models
import Logo from "../models/Logo";

// Import the image
import backgroundImage from "../assets/background_image/changedbg.jpg";
// import backgroundImage from "../assets/background_image/background.jpeg";

// TO actually move the cube with the mouse
import { Environment, Loader, OrbitControls } from "@react-three/drei";
import transition from "../transition";
import Navigation from "../components/Navigation";

const Home = () => {
  // State to manage when the screen opens and it closes
  const [start, setStart] = useState(false);

  // this useEffect will run when the audio state changes and we are performing the operations inside it
  useEffect(() => {}, [start]);

  // background image added
  // className="w-full h-screen relative bg-blue-950 "

  const [isFirstTime, setIsFirstTime] = useState(true);

  // handle start for loading
  const handleStart = () => {
    setStart(true);
    setIsFirstTime(false);
  };
  console.log("start", start);

  return (
    <section
      className="flex justify-center items-center min-h-screen  "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        left: 0,
        zIndex: -1,
        // opacity:0.5,
        // top: 0,
      }}
    >
      {/* Background Image that has animation */}
      {/* <img
        src={backgroundImage}
        alt="background Image"
        className="w-full h-full object-cover object-center opacity-100 fixed  left-0 z-1"
      /> */}
      {/* popup on home screen  */}
      {/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div> */}
      {/* Navigation */}
      <Navigation />
      {/* 3D Screen Animation*/}
      <Canvas className={` bg-transparent cursor-pointer `} camera={[0, 0, 0]}>
        <Suspense fallback={<LoaderCom />}>
          {/* Orbit Controls ke through hm camera ki position ko maintain krskte hain according to our requirement */}
          {/* <OrbitControls
            // minAzimuthAngle={-Math.PI / 4}
            // maxAzimuthAngle={Math.PI / 4}
            // minPolarAngle={0}
            // maxPolarAngle={Math.PI / 2}
            // minDistance={2}
            // maxDistance={15}
            enableZoom={true}
            enablePan={true}
          /> */}
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={1} />
          <hemisphereLight
            skycolor="b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Logo />
        </Suspense>
        <Environment preset="night" />
      </Canvas>
      <Loader />
      {/* {isFirstTime && !start && (
        <LoaderScreen start={start} setStart={handleStart} />
      )} */}
    </section>
  );
};

export default transition(Home);
