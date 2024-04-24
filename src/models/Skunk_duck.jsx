import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { a } from "@react-spring/three";

// importing 3D character
import skunk from "../assets/3d/Duck_Skunk_BarBQ_12.glb";

const Skunk_duck = (props) => {
  const { nodes, materials } = useGLTF(skunk);
  const SkunkRef = useRef(null);

  return (
    <a.group {...props} scale={[1, 1, 1]} ref={SkunkRef}>
      <a.group>
        <mesh
          geometry={nodes.Duck_Skunk_BarBQ_07Box001.geometry}
          material={materials["Material.016"]}
        />
        <mesh
          geometry={nodes.Duck_Skunk_BarBQ_07body.geometry}
          material={nodes.Duck_Skunk_BarBQ_07body.material}
        />
        <mesh
          geometry={nodes.Duck_Skunk_BarBQ_07Cap.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          geometry={nodes.Duck_Skunk_BarBQ_07Coat.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          geometry={nodes.Duck_Skunk_BarBQ_07Face.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          geometry={nodes.Duck_Skunk_BarBQ_07Kurta.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          geometry={nodes.Duck_Skunk_BarBQ_07L_Foot.geometry}
          material={nodes.Duck_Skunk_BarBQ_07L_Foot.material}
        />
        <mesh
          geometry={nodes.Duck_Skunk_BarBQ_07L_Hand.geometry}
          material={nodes.Duck_Skunk_BarBQ_07L_Hand.material}
        />
        <a.group rotation={[0, 0, 0]} scale={-1}>
          <mesh
            geometry={nodes.Duck_Skunk_BarBQ_07R_InnerShell.geometry}
            material={materials["Material.004"]}
          />
        </a.group>
        <mesh
          geometry={nodes.Duck_Skunk_BarBQ_07R_Foot.geometry}
          material={nodes.Duck_Skunk_BarBQ_07R_Foot.material}
        />
        <mesh
          geometry={nodes.Duck_Skunk_BarBQ_07R_Hand.geometry}
          material={materials["Material.011"]}
        />
        <mesh
          geometry={nodes.Duck_Skunk_BarBQ_07Shalwar.geometry}
          material={materials["Material.012"]}
        />
        <mesh
          geometry={nodes.Duck_Skunk_BarBQ_07tongue.geometry}
          material={nodes.Duck_Skunk_BarBQ_07tongue.material}
        />
        <mesh
          geometry={nodes.Duck_Skunk_BarBQ_07Button_1.geometry}
          material={nodes.Duck_Skunk_BarBQ_07Button_1.material}
        />
        <mesh
          geometry={nodes.Duck_Skunk_BarBQ_07Button_2.geometry}
          material={nodes.Duck_Skunk_BarBQ_07Button_2.material}
        />
        <mesh
          geometry={nodes.Duck_Skunk_BarBQ_07Button_3.geometry}
          material={nodes.Duck_Skunk_BarBQ_07Button_3.material}
        />
        <mesh
          geometry={nodes.Duck_Skunk_BarBQ_07Button_4.geometry}
          material={nodes.Duck_Skunk_BarBQ_07Button_4.material}
        />
        <mesh
          geometry={nodes.Duck_Skunk_BarBQ_07Button_5.geometry}
          material={nodes.Duck_Skunk_BarBQ_07Button_5.material}
        />
        <mesh
          geometry={nodes.Duck_Skunk_BarBQ_07L_InnerShell.geometry}
          material={materials["Material.004"]}
          position={[0, 0, 0]}
        />
        <mesh
          geometry={nodes.Duck_Skunk_BarBQ_07Body.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Duck_Skunk_BarBQ_07brows.geometry}
          material={nodes.Duck_Skunk_BarBQ_07brows.material}
        />
        <mesh
          geometry={nodes.Duck_Skunk_BarBQ_07Head.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Duck_Skunk_BarBQ_07polySurface1.geometry}
          material={nodes.Duck_Skunk_BarBQ_07polySurface1.material}
        />
        <mesh
          geometry={nodes.Duck_Skunk_BarBQ_07polySurface2.geometry}
          material={nodes.Duck_Skunk_BarBQ_07polySurface2.material}
        />
        <mesh
          geometry={nodes.Duck_Skunk_BarBQ_07polySurface3.geometry}
          material={nodes.Duck_Skunk_BarBQ_07polySurface3.material}
        />
        <mesh
          geometry={nodes.Duck_Skunk_BarBQ_07polySurface4.geometry}
          material={nodes.Duck_Skunk_BarBQ_07polySurface4.material}
        />
        <mesh
          geometry={nodes.Duck_Skunk_BarBQ_07polySurface5.geometry}
          material={nodes.Duck_Skunk_BarBQ_07polySurface5.material}
        />
        <mesh
          geometry={nodes.Duck_Skunk_BarBQ_07Shalwar001.geometry}
          material={materials["Material.015"]}
        />
        <mesh
          geometry={nodes.Duck_Skunk_BarBQ_07Shirt.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          geometry={nodes.Duck_Skunk_BarBQ_07Tail.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Duck_Skunk_BarBQ_07Tongue.geometry}
          material={nodes.Duck_Skunk_BarBQ_07Tongue.material}
        />
        <mesh
          geometry={nodes.Duck_Skunk_BarBQ_07L_InnerEye.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes.Duck_Skunk_BarBQ_07R_InnerShell001.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes.Duck_Skunk_BarBQ_07Lower_Teeth.geometry}
          material={nodes.Duck_Skunk_BarBQ_07Lower_Teeth.material}
        />
        <mesh
          geometry={nodes.Duck_Skunk_BarBQ_07Upper_Teeth.geometry}
          material={nodes.Duck_Skunk_BarBQ_07Upper_Teeth.material}
        />
      </a.group>
    </a.group>
  );
};

export default Skunk_duck;
