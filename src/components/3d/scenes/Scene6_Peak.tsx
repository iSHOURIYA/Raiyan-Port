import { Text, Cylinder, SpotLight } from "@react-three/drei";

export const Scene6Peak = ({ position }: { position: [number, number, number] }) => {
  return (
    <group position={position}>
      {/* Elevated Platform */}
      <Cylinder args={[5, 6, 2, 32]} position={[0, -2, 0]}>
        <meshStandardMaterial color="#131315" roughness={0.1} metalness={0.8} />
      </Cylinder>
      
      {/* Light beam / Spotlight effect */}
      <SpotLight position={[0, 15, 0]} angle={0.4} penumbra={0.8} intensity={200} color="#00F0FF" castShadow />

      <Text position={[0, 4, 0]} fontSize={1.5} color="#ffffff" anchorX="center" anchorY="middle">
        ACHIEVEMENT PEAK
      </Text>

      <Text position={[0, 1.5, 1]} fontSize={0.8} color="#00F0FF" anchorX="center" anchorY="middle">
        3rd Rank
      </Text>

      <Text position={[0, 0, 1]} fontSize={0.4} color="#e5e1e4" maxWidth={8} textAlign="center" anchorX="center" anchorY="middle">
        Among 700+ participants (Inter-University Hackathon)
      </Text>
    </group>
  );
};
