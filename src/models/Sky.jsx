import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import cloudStationScene from "../assets/3d/cloud_station.glb";

export function Sky({ isRotating }) {
  const cloudStation = useGLTF(cloudStationScene);
  const { actions } = useAnimations(cloudStation.animations, cloudStation.scene);
  const cloudStationRef = useRef();

  // Play the animation when the component mounts
  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => action.play());
    }
  }, [actions]);

  // Rotate the model if isRotating is true
  useFrame((_, delta) => {
    if (isRotating && cloudStationRef.current) {
      cloudStationRef.current.rotation.y -= 0.30 * delta; // Negative for right rotation
    }
  });

  return (
    <mesh ref={cloudStationRef} position={[0, 0, 2]}>
      <primitive object={cloudStation.scene} />
    </mesh>
  );
}

useGLTF.preload(cloudStationScene);

export default Sky;
