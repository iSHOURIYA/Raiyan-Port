import { Text, Float, Icosahedron, Cylinder, Torus } from "@react-three/drei";

export const Scene5Projects = ({ position }: { position: [number, number, number] }) => {
  return (
    <group position={position}>
      <Text position={[0, 6, -5]} fontSize={1.5} color="#00F0FF" anchorX="center" anchorY="middle">
        PROJECTS LAB
      </Text>
      
      {/* Project 1: Complaint Clustering */}
      <Float speed={2} floatIntensity={1} position={[-5, 2, -2]}>
        <Icosahedron args={[1.5, 1]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#131315" emissive="#B500FF" emissiveIntensity={0.5} wireframe />
        </Icosahedron>
        <Text position={[0, -2.5, 0]} fontSize={0.4} color="#ffffff" anchorX="center" anchorY="top">
          Complaint Clustering
        </Text>
        <Text position={[0, -3.2, 0]} fontSize={0.25} color="#9CA3AF" maxWidth={4} textAlign="center" anchorX="center" anchorY="top">
          Unsupervised ML pipeline / Semantic embeddings grouping
        </Text>
      </Float>

      {/* Project 2: Deadlock Detection */}
      <Float speed={1.5} floatIntensity={1} position={[0, 0, 0]}>
        <Torus args={[1.2, 0.3, 16, 32]} rotation={[1, 0.5, 0]}>
          <meshStandardMaterial color="#131315" emissive="#00F0FF" emissiveIntensity={0.5} wireframe />
        </Torus>
        <Text position={[0, -2.5, 0]} fontSize={0.4} color="#ffffff" anchorX="center" anchorY="top">
          Deadlock Detection System
        </Text>
        <Text position={[0, -3.2, 0]} fontSize={0.25} color="#9CA3AF" maxWidth={4} textAlign="center" anchorX="center" anchorY="top">
          Graph-based OS resource allocation visualization
        </Text>
      </Float>

      {/* Project 3: Investimate */}
      <Float speed={2.5} floatIntensity={1} position={[5, 2, -1]}>
        <Cylinder args={[0.8, 0.8, 2, 12]} rotation={[0.4, 0.4, 0]}>
          <meshStandardMaterial color="#131315" emissive="#e5e1e4" emissiveIntensity={0.3} wireframe />
        </Cylinder>
        <Text position={[0, -2.5, 0]} fontSize={0.4} color="#ffffff" anchorX="center" anchorY="top">
          Investimate
        </Text>
        <Text position={[0, -3.2, 0]} fontSize={0.25} color="#9CA3AF" maxWidth={4} textAlign="center" anchorX="center" anchorY="top">
          Financial growth predictor & Interactive analysis
        </Text>
      </Float>
    </group>
  );
};
