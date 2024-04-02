import React, { useEffect, useRef } from "react";

import planeScene from "../assets/3d/plane.glb";
import { useAnimations, useGLTF } from "@react-three/drei";

// props send krrhe hain hm Home component se
// props mein hm planeScale,planePosition, rotation fixed krdi hai hmne aur isRotating jo state hai bydefault false hai wo bhj rhe hain
const Planee = ({ isRotating, ...props }) => {
  // ref krna zrori hai hm main mesh ko ref hi krte hain aur sari properties apply krdete hain
  const ref = useRef();

  // .dbl file ko call kra hai aur usmein se scene aur animations destructure krli hain
  // scenes ko hm primitive ke attribute object mein dedeinge aur animations ko hm useAnimations mein pass kreinge
  const { scene, animations } = useGLTF(planeScene);

  // useAnimations call krleinge hm react-three/drei se aur isse hm animations apply kreinge
  // actions hmein bydefault deta hai play aur stop ke functions
  const { actions } = useAnimations(animations, ref);

  // implementing the actions inside the useEffect
  useEffect(() => {
    // console.log({ isRotating });
    if (isRotating) {
      // Pankha chalhaega plane ka bs isse
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [isRotating, actions]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Planee;
