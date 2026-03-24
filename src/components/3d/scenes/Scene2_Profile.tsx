import { Text, Float, RoundedBox } from "@react-three/drei";

export const Scene2Profile = ({ position }: { position: [number, number, number] }) => {
  const points = [
    "Strong problem-solving mindset",
    "Event coordination & logistics",
    "Performs under pressure",
    "Hackathon-proven execution"
  ];

  return (
    <group position={position}>
      <Text position={[0, 5, -2]} fontSize={1.5} color="#00F0FF" anchorX="center" anchorY="middle" letterSpacing={0.1}>
        IDENTITY
      </Text>
      
      {points.map((point, i) => {
        const xOffset = i % 2 === 0 ? -3 : 3;
        const yOffset = 2 - i * 1.5;
        const zOffset = (i % 2 === 0 ? 1 : -1) * 0.5;

        return (
          <Float key={i} speed={1.5 + i * 0.1} rotationIntensity={0.1} floatIntensity={0.4} position={[xOffset, yOffset, zOffset]}>
            <group>
              <RoundedBox args={[6, 1.2, 0.2]} radius={0.1} smoothness={4} position={[0, 0, -0.2]}>
                <meshStandardMaterial color="#131315" emissive="#00F0FF" emissiveIntensity={0.05} metalness={0.5} roughness={0.2} />
              </RoundedBox>
              <Text fontSize={0.35} color="#e5e1e4" anchorX="center" anchorY="middle" maxWidth={5} textAlign="center">
                {point}
              </Text>
            </group>
          </Float>
        );
      })}
    </group>
  );
};
