"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ExperienceJourney from "@/components/3d/ExperienceJourney";
import { Loader } from "@react-three/drei";

export default function Home() {
  return (
    <main className="w-full h-screen bg-[#08080a] overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]} // Support high-DPI displays while capping at 2x for performance
      >
        <color attach="background" args={["#08080a"]} />
        <fog attach="fog" args={["#08080a", 10, 50]} />
        <Suspense fallback={null}>
          <ExperienceJourney />
        </Suspense>
      </Canvas>
      <Loader 
        containerStyles={{ backgroundColor: "#08080a" }}
        innerStyles={{ backgroundColor: "#1c1b1e", width: "300px" }}
        barStyles={{ backgroundColor: "#00F0FF" }}
        dataStyles={{ color: "#e5e1e4", fontFamily: "monospace" }}
      />
    </main>
  );
}
