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

      <Text position={[-4.5, -2, 0]} fontSize={0.35} color="#B500FF" anchorX="center" anchorY="middle" onClick={() => window.open('https://linkedin.com/in/raiyanaliq')}>
        LinkedIn
      </Text>

      <Text position={[-1.5, -2, 0]} fontSize={0.35} color="#ffffff" anchorX="center" anchorY="middle" onClick={() => window.open('/cv.pdf')}>
        Download CV
      </Text>

      <Text position={[1.5, -2, 0]} fontSize={0.35} color="#00F0FF" anchorX="center" anchorY="middle" onClick={() => window.open('https://drive.google.com/drive/folders/1VcJrCGSZOCfRWTt0q_4nrZYKDB732rsk')}>
        Certificates
      </Text>

      <Text position={[4.5, -2, 0]} fontSize={0.35} color="#e5e1e4" anchorX="center" anchorY="middle" onClick={() => window.open('https://github.com/raiyanaliq')}>
        GitHub
      </Text>

      <Text position={[0, -4, 0]} fontSize={0.2} color="#9CA3AF" anchorX="center" anchorY="middle">
        © 2026 Raiyan Ali
      </Text>
    </group>
  );
};
