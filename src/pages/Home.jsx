{
  /* popup on home screen  */
}
{
  /* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
Popup
</div> */
}

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";
const Home = () => {
  // 3D model ko adjust krdeinge hm according to the screen size
  // abhi model show horha hai lekin adjust nhi hoa wa hai hmare pass yh model so we will going to
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

  // yh horha hai asal kaam jo hm yh use krke apni model ki file mein yhn se attribute send krdeinge
  // yh extract krrhe hain hm
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative ">
      {/* 3D Screen */}
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />
          {/* 3D Model jo bnaya hai hmne wo import krlia hai hmne yhn pe */}
          <Island
            scale={islandScale}
            position={islandPosition}
            rotation={islandRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
