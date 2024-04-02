import React, { useRef } from "react";
import skyScene from "../assets/3d/sky.glb";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Sky = ({ isRotating }) => {
  const skyRef = useRef();
  const { scene } = useGLTF(skyScene);

  // useFrame ko use kreleinge hm apne pass take sky ko move krwaein every frame pe
  // agr rotate krrha hai to bs hm skyRef ki position ko update krdeinge all the way aur phr wo bhi move krega aur yh pori aik animation lgegi.
  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta;
    }
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Sky;
