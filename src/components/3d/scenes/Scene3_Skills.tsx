import { Text, Sphere, Line } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

export const Scene3Skills = ({ position }: { position: [number, number, number] }) => {
  const techSkills = [
    "Python",
    "NumPy",
    "Pandas",
    "scikit-learn",
    "TensorFlow",
    "Machine Learning",
    "Deep Learning",
    "NLP Basics",
    "Java",
    "C++",
    "TypeScript",
    "JavaScript",
    "HTML/CSS",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "REST APIs",
    "MySQL",
    "MongoDB",
    "Git/GitHub",
    "Docker",
    "AWS Basics",
    "Cisco Packet Tracer",
  ];
  const eventSkills = ["Team Coordination", "Vendor Liaison", "Logistics Management", "Public Speaking", "Adaptability"];
  const langSkills = ["English (Fluent)", "Hindi", "Urdu"];
  
  // Deterministic random positions within a sphere shape for each cluster
  const generateNodes = (items: string[], center: [number, number, number], radius: number, color: string) => {
    return items.map((label, i) => {
      const phi = Math.acos(-1 + (2 * i) / items.length);
      const theta = Math.sqrt(items.length * Math.PI) * phi;
      const x = center[0] + radius * Math.cos(theta) * Math.sin(phi);
      const y = center[1] + radius * Math.sin(theta) * Math.sin(phi);
      const z = center[2] + radius * Math.cos(phi);
      return { label, pos: new THREE.Vector3(x, y, z), color };
    });
  };

  const techNodes = useMemo(() => generateNodes(techSkills, [-4, 0, 0], 3, "#00F0FF"), []);
  const eventNodes = useMemo(() => generateNodes(eventSkills, [4, 1, -1], 2.5, "#B500FF"), []);
  const langNodes = useMemo(() => generateNodes(langSkills, [0, -3.5, 1], 1.5, "#e5e1e4"), []);
  
  const allNodes = [...techNodes, ...eventNodes, ...langNodes];

  return (
    <group position={position}>
      <Text position={[0, 6, -5]} fontSize={1.5} color="#ffffff" anchorX="center" anchorY="middle">
        SKILL CONSTELLATION
      </Text>
      
      {/* Node Spheres and Labels */}
      {allNodes.map((node, i) => (
        <group key={i} position={node.pos}>
          <Sphere args={[0.15, 16, 16]}>
            <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={0.5} />
          </Sphere>
          <Text position={[0, -0.3, 0.1]} fontSize={0.2} color="#e5e1e4" anchorX="center" anchorY="top">
            {node.label}
          </Text>
        </group>
      ))}

      {/* Edges connecting nodes */}
      {techNodes.map((node, i) => {
        if (i === techNodes.length - 1) return null;
        return (
          <Line key={`tech-${i}`} points={[node.pos, techNodes[i+1].pos]} color="#00F0FF" opacity={0.2} transparent lineWidth={1} />
        );
      })}
      
      {eventNodes.map((node, i) => {
        if (i === eventNodes.length - 1) return null;
        return (
          <Line key={`event-${i}`} points={[node.pos, eventNodes[i+1].pos]} color="#B500FF" opacity={0.3} transparent lineWidth={1} />
        );
      })}

      {/* Cross-cluster connections (Bridging Technical and Coordination) */}
      <Line points={[techNodes[0].pos, eventNodes[0].pos]} color="#ffffff" opacity={0.4} transparent lineWidth={2} dashed />
      <Line points={[techNodes[5].pos, eventNodes[2].pos]} color="#ffffff" opacity={0.2} transparent lineWidth={1} dashed />
      <Line points={[techNodes[2].pos, langNodes[0].pos]} color="#ffffff" opacity={0.2} transparent lineWidth={1} dashed />
    </group>
  );
};
