// /*
// Auto-generated by: https://github.com/pmndrs/gltfjsx
// */

import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";

// importing gsap
// import { gsap } from "gsap";

// importing logo
import newLogo from "../assets/3d/new.glb";

const Logo = (props) => {
  const { nodes, materials } = useGLTF(newLogo);

  // creating the reference of the Logo
  const logoRef = useRef(null);

  // To Rotate the cube we will use useFrame
  useFrame((state, delta) => {
    // to rotate the logo using the ref
    // logoRef.current.rotation.x += delta * 0.015;
    logoRef.current.rotation.y += 0.03;
    // logoRef.current.rotation.z += delta * 0.015;
  });

  return (
    <a.group {...props} scale={[15, 15, 15]} ref={logoRef}>
      <a.group position={[0, -0.05, 0]}>
        <mesh geometry={nodes["logo-Mat"].geometry} material={materials.Mat} />
        <mesh
          geometry={nodes["logo-Mat002"].geometry}
          material={materials["Mat.002"]}
        />
        <mesh
          geometry={nodes["logo-Mat003"].geometry}
          material={materials["Mat.003"]}
        />
        <mesh
          geometry={nodes["logo-Mat004"].geometry}
          material={materials["Mat.004"]}
        />
        <mesh
          geometry={nodes["logo-Mat005"].geometry}
          material={materials["Mat.005"]}
        />
        <mesh
          geometry={nodes["logo-Mat006"].geometry}
          material={materials["Mat.006"]}
        />
        <mesh
          geometry={nodes["logo-Mat007"].geometry}
          material={materials["Mat.007"]}
        />
        <mesh
          geometry={nodes["logo-Mat008"].geometry}
          material={materials["Mat.008"]}
        />
        <mesh
          geometry={nodes["logo-Mat009"].geometry}
          material={materials["Mat.009"]}
        />
        <mesh
          geometry={nodes["logo-Mat010"].geometry}
          material={materials["Mat.010"]}
        />
        <mesh
          geometry={nodes["logo-Mat011"].geometry}
          material={materials["Mat.011"]}
        />
        <mesh
          geometry={nodes["logo-Mat012"].geometry}
          material={materials["Mat.012"]}
        />
        <mesh
          geometry={nodes["logo-Mat013"].geometry}
          material={materials["Mat.013"]}
        />
        <mesh
          geometry={nodes["logo-Mat014"].geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes["logo-Mat1"].geometry}
          material={materials["Mat.1"]}
        />
      </a.group>
    </a.group>
  );
};

export default Logo;
