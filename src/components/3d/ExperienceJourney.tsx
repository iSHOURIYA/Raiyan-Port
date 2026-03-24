"use client";

import { ScrollControls, Scroll, useScroll, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import { Scene1Origin } from "./scenes/Scene1_Origin";
import { Scene2Profile } from "./scenes/Scene2_Profile";
import { Scene3Skills } from "./scenes/Scene3_Skills";
import { Scene4Experience } from "./scenes/Scene4_Experience";
import { Scene5Projects } from "./scenes/Scene5_Projects";
import { Scene6Peak } from "./scenes/Scene6_Peak";
import { Scene7Education } from "./scenes/Scene7_Education";
import { Scene8Outro } from "./scenes/Scene8_Outro";

const SCENE_DEPTH = 30; // Distance between scenes
const TOTAL_SCENES = 8;
const OUTRO_CAMERA_PADDING = 6;
const MAX_SCROLL_DEPTH = (TOTAL_SCENES - 1) * SCENE_DEPTH - OUTRO_CAMERA_PADDING;

function CameraOrchestrator() {
  const scroll = useScroll();
  const cameraGroup = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!cameraGroup.current) return;
    const isNearOutro = scroll.offset > 0.9;
    
    // Map scroll to the last scene only to avoid extra travel beyond the outro.
    const targetZ = -(scroll.offset * MAX_SCROLL_DEPTH);
    
    // Smooth damp the camera's Z position
    cameraGroup.current.position.z = THREE.MathUtils.damp(
      cameraGroup.current.position.z,
      targetZ,
      4, // lambda
      delta
    );
    
    // Add a slight look-around based on mouse position
    const parallaxAmount = isNearOutro ? 0.6 : 2;
    const targetX = state.pointer.x * parallaxAmount;
    const targetY = state.pointer.y * parallaxAmount;
    
    cameraGroup.current.position.x = THREE.MathUtils.damp(cameraGroup.current.position.x, targetX, 2, delta);
    cameraGroup.current.position.y = THREE.MathUtils.damp(cameraGroup.current.position.y, targetY, 2, delta);
    
    // Slight banking/rotation based on mouse interaction for cinematic feel
    const rotationAmount = isNearOutro ? 0.03 : 0.1;
    cameraGroup.current.rotation.y = THREE.MathUtils.damp(cameraGroup.current.rotation.y, -state.pointer.x * rotationAmount, 2, delta);
    cameraGroup.current.rotation.x = THREE.MathUtils.damp(cameraGroup.current.rotation.x, state.pointer.y * rotationAmount, 2, delta);
  });

  return (
    <group ref={cameraGroup}>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} near={0.1} far={100} />
      <pointLight position={[0, 0, 0]} intensity={2} color="#00F0FF" />
    </group>
  );
}

export default function ExperienceJourney() {
  return (
    <>
      <ambientLight intensity={0.5} color="#131315" />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#B500FF" />
      
      {/* One scroll page per scene, ending exactly at Scene 8 (Outro). */}
      <ScrollControls pages={TOTAL_SCENES} damping={0.2}>
        <CameraOrchestrator />
        
        {/* Continuous 3D World */}
        <group>
          <Scene1Origin position={[0, 0, 0]} />
          <Scene2Profile position={[0, 0, -SCENE_DEPTH]} />
          <Scene3Skills position={[0, 0, -SCENE_DEPTH * 2]} />
          <Scene4Experience position={[0, 0, -SCENE_DEPTH * 3]} />
          <Scene5Projects position={[0, 0, -SCENE_DEPTH * 4]} />
          <Scene6Peak position={[0, -5, -SCENE_DEPTH * 5]} />
          <Scene7Education position={[0, 0, -SCENE_DEPTH * 6]} />
          <Scene8Outro position={[0, 0, -SCENE_DEPTH * 7]} />
        </group>

      </ScrollControls>
    </>
  );
}
