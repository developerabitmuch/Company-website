import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";

// Importing 3D models
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Planee from "../models/Planee";
import Logo from "../models/Logo";
import HomeInfo from "../components/HomeInfo";
import Skunk from "../models/Skunk";

// Import the image
import backgroundImage from "../assets/bg_image/bg.jpg";

// TO actually move the cube with the mouse
import { OrbitControls } from "@react-three/drei";

const Home = () => {
  // Rotation apply krne ke liye hmein posotion change krni hogi object ki
  // state bnali hai hmne rotating ke liye
  const [isRotating, setIsRotating] = useState(false);

  // current stage ki aik state bnaeinge aur pass kreinge Island mein isko
  const [currentStage, setCurrentStage] = useState(1);

  // 3D model ko adjust krdeinge hm according to the screen size
  // abhi model show horha hai lekin adjust nhi hoa wa hai hmare pass yh model so we will going to
  // Adjusting Island according to the screen size
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    // looking for the position of the screen
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  // Adjusting Plane according to the screen size
  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    // looking for the position of the screen
    // 768 - screen size is the size of the phone & tablet
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      // yh large screen pe apply hogi position aur scale tbhi coordinates us hisab se die hain yhn pe
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  // yh horha hai asal kaam jo hm yh use krke apni model ki file mein yhn se attribute send krdeinge
  // yh extract krrhe hain hm
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  // Plane Position ke function ko hm call krleinge apne pass
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  // background image added
  // className="w-full h-screen relative bg-blue-950 "
  return (
    <section
      className="flex justify-center items-center h-screen bg-cover bg-center bg-gradient-to-tr from-blue-800 via-blue-200 to-blue-800"
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* popup on home screen  */}
      {/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div> */}

      {/* 3D Screen Animation*/}
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls enableZoom={false} enablePan={false} />
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={1} />
          <hemisphereLight
            skycolor="b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          {/* <Skunk isRotating={isRotating} /> */}
          {/* Abit Much Logo */}
          <Logo />
          {/* 3D Models importing here*/}
          {/* bird that will move */}
          {/* <Bird /> */}
          {/* sky 3D image */}
          {/* moving the sky as well when isRotating is true */}
          {/* <Sky isRotating={isRotating} /> */}
          {/* island .dlb 3D image rendered*/}
          {/* island mein rotating ki state aur function pass krdeinge agr island ko rotate krna hai hmne aur destructure kreleinge component mein */}
          {/* <Island
            scale={islandScale}
            position={islandPosition}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          /> */}

          {/* plane that will fly
          {/*  plane scale & plane position as well as state isRotating derhe hain aur rotation fixed parameters derhe hain inko destructure krleinge hm component mein aur hm mesh mein inko use krleinge  */}
          {/* <Planee
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
          /> */}
        </Suspense>
      </Canvas>
      {/* <div className="bg-red-500 absolute w-full bottom-0">
        <video
          width="320"
          height="340"
          controls
          className="max-h-[300px] w-full"
        >
          <source src={""} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
    </section>
  );
};

export default Home;
