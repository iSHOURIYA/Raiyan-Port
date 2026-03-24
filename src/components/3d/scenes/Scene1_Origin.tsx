import { Sparkles, Text, Float } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const Scene1Origin = ({ position }: { position: [number, number, number] }) => {
  return (
    <group position={position}>
      <Sparkles count={400} scale={15} size={2} speed={0.4} opacity={0.5} position={[0, 0, -5]} color="#00F0FF" />

      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <Text
          fontSize={0.8}
          letterSpacing={0.05}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          position={[0, 0.5, 0]}
        >
          Raiyan Ali
          <meshStandardMaterial color="#ffffff" emissive="#00F0FF" emissiveIntensity={0.3} roughness={0.2} metalness={0.8} />
        </Text>
      </Float>

      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <Text
          fontSize={0.25}
          color="#e5e1e4"
          maxWidth={6}
          textAlign="center"
          anchorX="center"
          anchorY="middle"
          position={[0, -0.6, 0]}
        >
          Engineer | Problem Solver | Event Coordinator
          <meshStandardMaterial color="#e5e1e4" emissive="#e5e1e4" emissiveIntensity={0.4} roughness={0.5} />
        </Text>
      </Float>

      {/* Floating abstract symbols could be added here as small geometric primitives */}
      <group position={[0, 0, -2]}>
        <Float speed={3} floatIntensity={2}>
          <mesh position={[-4, 2, 0]}>
            <octahedronGeometry args={[0.3]} />
            <meshStandardMaterial wireframe color="#B500FF" emissive="#B500FF" emissiveIntensity={1} />
          </mesh>
        </Float>
        <Float speed={2.5} floatIntensity={1.5}>
          <mesh position={[4, -2, 0]}>
            <icosahedronGeometry args={[0.4]} />
            <meshStandardMaterial wireframe color="#00F0FF" emissive="#00F0FF" emissiveIntensity={1} />
          </mesh>
        </Float>
      </group>
    </group>
  );
};
