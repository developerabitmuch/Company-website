import React from "react";

import planeScene from "../assets/3d/plane.glb";
import { useGLTF } from "@react-three/drei";

// props send krrhe hain hm Home component se
// props mein hm planeScale,planePosition, rotation fixed krdi hai hmne aur isRotating jo state hai bydefault false hai wo bhj rhe hain
const Planee = ({ isRotating, ...props }) => {
  const { scene, animations } = useGLTF(planeScene);
  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Planee;
