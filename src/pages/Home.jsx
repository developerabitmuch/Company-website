import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";

// Importing 3D models
import Logo from "../models/Logo";
// import HomeInfo from "../components/HomeInfo";
// import Skunk from "../models/Skunk";

// Importing Sound
import sakura from "../assets/sakura.mp3";

// Import the image
// import backgroundImage from "../assets/bg_image/bg.jpg";

// TO actually move the cube with the mouse
import { OrbitControls } from "@react-three/drei";
import transition from "../transition";
import { soundoff, soundon } from "../assets/icons";

const Home = () => {
  // Rotation apply krne ke liye hmein posotion change krni hogi object ki
  // state bnali hai hmne rotating ke liye
  const [isRotating, setIsRotating] = useState(false);

  // current stage ki aik state bnaeinge aur pass kreinge Island mein isko
  const [currentStage, setCurrentStage] = useState(1);

  // Creating Audio Ref to implement the audio
  const audioRef = useRef(new Audio(sakura));
  // Setting Volume of the Audio
  audioRef.current.volume = 0.5;
  // creating loop take chalti rhe audio hmari
  audioRef.current.loop = true;

  // Creating State for the music
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  // this useEffect will run when the audio state changes and we are performing the operations inside it
  useEffect(() => {
    // Agr isPlayingMusic ki state true hai to phr hm kaheinge ke music run hojae
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    // agr isPlayingMusic true nhi hai to pause krdeinge hm bs music ko
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

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
      className="flex justify-center items-center h-screen bg-cover bg-center "
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
          <OrbitControls
          // enableZoom={false}
          // enablePan={false}
          />
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

      {/* Sound ko manage krrhe hain hm toggle pe*/}
      {/* <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundon : soundoff}
          alt="sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div> */}
    </section>
  );
};

export default transition(Home);
