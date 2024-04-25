import React from "react";
import { useGLTF } from "@react-three/drei";

import duckImg from "../assets/3d/Duck-skunk_update.glb";

const Duck = (props) => {
  // importing a 3d model to run as a scene inside a primitive tag
  const duck = useGLTF(duckImg);

  return (
    <mesh {...props}>
      <primitive object={duck.scene} />
    </mesh>
  );
};

export default Duck;
