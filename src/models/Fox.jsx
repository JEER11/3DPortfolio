/**
 * IMPORTANT: Loading glTF models into a Three.js scene is a lot of work.
 * Before we can configure or animate our model’s meshes, we need to iterate through
 * each part of our model’s meshes and save them separately.
 *
 * But luckily there is an app that turns gltf or glb files into jsx components
 * For this model, visit https://gltf.pmnd.rs/
 * And get the code. And then add the rest of the things.
 * YOU DON'T HAVE TO WRITE EVERYTHING FROM SCRATCH
 */

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import sleepingCatScene from '../assets/3d/sleeping_cat.glb';

// 3D Model from: https://sketchfab.com/3d-models/fox-f372c04de44640fbb6a4f9e4e5845c78
export function Fox(props) {
  const { isRotating, ...rest } = props;
  const groupRef = useRef();
  const { nodes, materials } = useGLTF(sleepingCatScene);

  useFrame(() => {
    if (isRotating && groupRef.current) {
      groupRef.current.rotation.y += 0.03;
    }
  });

  return (
    <group ref={groupRef} {...rest} scale={[2, 2, 2]} rotation={[Math.PI / 8, -Math.PI / 6, 0]} position={[0, 0.3, 0.5]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials['Material.001']}
        />
      </group>
    </group>
  );
}

useGLTF.preload(sleepingCatScene);

export default Fox;
