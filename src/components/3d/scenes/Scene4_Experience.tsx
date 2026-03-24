import { Text, Box, Line } from "@react-three/drei";

export const Scene4Experience = ({ position }: { position: [number, number, number] }) => {
  return (
    <group position={position}>
      <Text position={[0, 6, -10]} fontSize={1.5} color="#00F0FF" anchorX="center" anchorY="middle">
        NETWORK OPERATIONS
      </Text>
      
      {/* Tunnel structure representing the data center */}
      {Array.from({ length: 15 }).map((_, i) => (
        <group key={i} position={[0, -3, -i * 3]}>
          <Line points={[[-6, 0, 0], [6, 0, 0]]} color="#00F0FF" opacity={0.15} transparent lineWidth={2} />
          <Line points={[[-6, 6, 0], [-6, 0, 0]]} color="#B500FF" opacity={0.15} transparent lineWidth={2} />
          <Line points={[[6, 6, 0], [6, 0, 0]]} color="#B500FF" opacity={0.15} transparent lineWidth={2} />
        </group>
      ))}

      {/* Interactive/Narrative Stations */}
      <group position={[-3, 0, -8]}>
        <Box args={[1.5, 3, 1.5]}>
          <meshStandardMaterial color="#131315" emissive="#00F0FF" emissiveIntensity={0.2} wireframe />
        </Box>
        <Text position={[2, 1.5, 0]} fontSize={0.5} color="#ffffff" anchorX="left">
          Network Support Engineer (Trainee)
        </Text>
        <Text position={[2, 0.5, 0]} fontSize={0.3} color="#9CA3AF" anchorX="left" maxWidth={10}>
          - Managing live network operations across 20+ hostel blocks
        </Text>
        <Text position={[2, -0.2, 0]} fontSize={0.3} color="#9CA3AF" anchorX="left" maxWidth={10}>
          - VLAN planning & IP allocation
        </Text>
        <Text position={[2, -0.9, 0]} fontSize={0.3} color="#9CA3AF" anchorX="left" maxWidth={10}>
          - Incident documentation & senior engineer coordination
        </Text>
      </group>
    </group>
  );
};
