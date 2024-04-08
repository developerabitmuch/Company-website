import React, { useEffect, useRef } from "react";
import skunk from "../assets/3d/skunk01.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Skunk = ({ isRotating }) => {
  const skunkRef = useRef();
  const { scene, animations } = useGLTF(skunk);
  const { actions } = useAnimations(animations, skunkRef);

  useEffect(() => {
    // actions[""].play();
  }, []);

  useFrame((state, delta) => {
    // Update the position of the skunkRef on each frame
    if (skunkRef.current) {
      // Move the skunkRef along the x-axis
      skunkRef.current.position.x += 0.01 * delta; // Adjust speed as needed
      // Check if skunkRef has reached a certain position to reset its position
      if (skunkRef.current.position.x > 10) {
        skunkRef.current.position.x = -10; // Reset position
      }
    }
  });
  return (
    <mesh ref={skunkRef} position={[9, -3, -2]} rotation={[0, -0.5, 0]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Skunk;
