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
  const githubStats = [
    { label: "Repos", value: "40+" },
    { label: "Contributions", value: "850+" },
    { label: "Stars", value: "120+" },
    { label: "Longest Streak", value: "27 days" },
  ];
  const featuredSkills = [
    { label: "Full-Stack", level: 0.9, color: "#00F0FF" },
    { label: "ML Engineering", level: 0.86, color: "#5EEAD4" },
    { label: "Backend APIs", level: 0.84, color: "#7DD3FC" },
    { label: "Cloud & DevOps", level: 0.72, color: "#C4B5FD" },
  ];
  
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

  const techNodes = useMemo(() => generateNodes(techSkills, [-5, 0, 0], 3, "#00F0FF"), []);
  const eventNodes = useMemo(() => generateNodes(eventSkills, [2.8, 1, -1], 2.5, "#B500FF"), []);
  const langNodes = useMemo(() => generateNodes(langSkills, [-0.5, -3.5, 1], 1.5, "#e5e1e4"), []);
  const githubPanelAnchor = useMemo(() => new THREE.Vector3(8.9, 1.8, 1.1), []);
  
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

      {/* GitHub snapshot + skill level board */}
      <group position={[9.6, 1.9, 1.2]}>
        <mesh position={[0, -1.5, -0.1]}>
          <planeGeometry args={[5.2, 5.4]} />
          <meshStandardMaterial color="#0b1020" transparent opacity={0.48} />
        </mesh>

        <Text position={[0, 1.75, 0.05]} fontSize={0.32} color="#ffffff" anchorX="center" anchorY="middle">
          GITHUB SNAPSHOT
        </Text>

        {githubStats.map((stat, i) => {
          const y = 1.15 - i * 0.62;
          return (
            <group key={stat.label} position={[0, y, 0]}>
              <mesh position={[0, -0.06, -0.02]}>
                <planeGeometry args={[4.35, 0.5]} />
                <meshStandardMaterial color="#111827" transparent opacity={0.72} />
              </mesh>
              <Text position={[-1.9, 0.03, 0.02]} fontSize={0.2} color="#93c5fd" anchorX="left" anchorY="middle">
                {stat.label}
              </Text>
              <Text position={[1.9, 0.03, 0.02]} fontSize={0.22} color="#e2e8f0" anchorX="right" anchorY="middle">
                {stat.value}
              </Text>
            </group>
          );
        })}

        <Text position={[0, -1.52, 0.02]} fontSize={0.22} color="#ffffff" anchorX="center" anchorY="middle">
          TOP SKILL INTENSITY
        </Text>

        {featuredSkills.map((skill, i) => {
          const y = -1.94 - i * 0.38;
          const maxWidth = 2.8;
          const width = maxWidth * skill.level;
          const barX = -1.4 + width / 2;

          return (
            <group key={skill.label} position={[0, y, 0]}>
              <Text position={[-2.05, 0.06, 0.03]} fontSize={0.16} color="#cbd5e1" anchorX="left" anchorY="middle">
                {skill.label}
              </Text>

              <mesh position={[0, -0.08, 0]}>
                <planeGeometry args={[maxWidth, 0.12]} />
                <meshStandardMaterial color="#1f2937" transparent opacity={0.95} />
              </mesh>

              <mesh position={[barX, -0.08, 0.01]}>
                <planeGeometry args={[width, 0.12]} />
                <meshStandardMaterial color={skill.color} emissive={skill.color} emissiveIntensity={0.2} />
              </mesh>

              <Text position={[1.65, 0.06, 0.03]} fontSize={0.14} color="#94a3b8" anchorX="right" anchorY="middle">
                {Math.round(skill.level * 100)}%
              </Text>
            </group>
          );
        })}
      </group>

      <Line points={[techNodes[20].pos, githubPanelAnchor]} color="#7dd3fc" opacity={0.35} transparent lineWidth={1.2} dashed />
    </group>
  );
};
