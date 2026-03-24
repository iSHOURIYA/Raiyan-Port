import { Text, Float, RoundedBox } from "@react-three/drei";

export const Scene7Education = ({ position }: { position: [number, number, number] }) => {
  const certs = [
    "University of Michigan: Negotiation",
    "IIT Kharagpur: Cloud Computing",
    "CsePathshala: DSA",
    "Coursera: Networking",
    "Udemy: C++"
  ];

  return (
    <group position={position}>
      <Text position={[0, 7, -2]} fontSize={1.5} color="#00F0FF" anchorX="center" anchorY="middle">
        EDUCATION & CERTIFICATIONS
      </Text>

      {/* Main Education Panel */}
      <Float speed={1.5} floatIntensity={0.5} position={[-4, 2, 0]}>
        <group>
          <RoundedBox args={[8, 3, 0.2]} radius={0.2} smoothness={4} position={[0, 0, -0.2]}>
            <meshStandardMaterial color="#1c1b1e" opacity={0.6} transparent />
          </RoundedBox>
          <Text position={[0, 0.5, 0]} fontSize={0.45} color="#ffffff" anchorX="center">
            B.Tech, Computer Science
          </Text>
          <Text position={[0, -0.5, 0]} fontSize={0.35} color="#B500FF" anchorX="center">
            Lovely Professional University
          </Text>
        </group>
      </Float>

      {/* Floating Certifications */}
      {certs.map((cert, i) => (
        <Float key={i} speed={2 + i * 0.2} floatIntensity={0.8} position={[4, 4 - i * 1.5, Math.sin(i) * 2]}>
          <group>
            <RoundedBox args={[7, 1.2, 0.1]} radius={0.1} smoothness={4} position={[0, 0, -0.1]}>
              <meshStandardMaterial color="#131315" emissive="#00F0FF" emissiveIntensity={0.1} wireframe />
            </RoundedBox>
            <Text position={[0, 0, 0]} fontSize={0.3} color="#e5e1e4" anchorX="center" anchorY="middle">
              {cert}
            </Text>
          </group>
        </Float>
      ))}

      {/* Drive Link Button */}
      <Float speed={2} floatIntensity={0.8} position={[4, -4.5, 0]}>
        <group onClick={() => window.open('https://drive.google.com/drive/folders/1VcJrCGSZOCfRWTt0q_4nrZYKDB732rsk')}>
          <RoundedBox args={[7, 1.2, 0.1]} radius={0.1} smoothness={4} position={[0, 0, -0.1]}>
            <meshStandardMaterial color="#00F0FF" emissive="#00F0FF" emissiveIntensity={0.2} metalness={0.8} />
          </RoundedBox>
          <Text position={[0, 0, 0]} fontSize={0.35} color="#131315" anchorX="center" anchorY="middle">
            View Credentials in Drive
          </Text>
        </group>
      </Float>
    </group>
  );
};
