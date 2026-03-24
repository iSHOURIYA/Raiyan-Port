import { Text } from "@react-three/drei";

export const Scene8Outro = ({ position }: { position: [number, number, number] }) => {
  return (
    <group position={position}>
      <Text position={[0, 2, 0]} fontSize={1.5} color="#ffffff" anchorX="center" anchorY="middle">
        Let's build something impactful.
      </Text>

      <Text position={[0, -0.5, 0]} fontSize={0.5} color="#00F0FF" anchorX="center" anchorY="middle" onClick={() => window.location.href = 'mailto:raiyanaliofficial@gmail.com'}>
        raiyanaliofficial@gmail.com
      </Text>

      <Text position={[-4, -2, 0]} fontSize={0.4} color="#B500FF" anchorX="center" anchorY="middle" onClick={() => window.open('https://linkedin.com/in/raiyanalig')}>
        LinkedIn
      </Text>

      <Text position={[0, -2, 0]} fontSize={0.4} color="#ffffff" anchorX="center" anchorY="middle" onClick={() => window.open('/cv.pdf')}>
        Download CV
      </Text>

      <Text position={[4, -2, 0]} fontSize={0.4} color="#e5e1e4" anchorX="center" anchorY="middle" onClick={() => window.open('https://github.com/raiyanalig')}>
        GitHub
      </Text>

      <Text position={[0, -4, 0]} fontSize={0.2} color="#9CA3AF" anchorX="center" anchorY="middle">
        © 2026 Raiyan Ali
      </Text>
    </group>
  );
};
