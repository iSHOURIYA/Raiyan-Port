import { Text, Float, Icosahedron, Cylinder, Torus, Octahedron } from "@react-three/drei";

export const Scene5Projects = ({ position }: { position: [number, number, number] }) => {
  const setCursor = (cursor: string) => document.body.style.cursor = cursor;

  return (
    <group position={position}>
      <Text position={[0, 7, -5]} fontSize={1.5} color="#00F0FF" anchorX="center" anchorY="middle">
        PROJECTS LAB
      </Text>
      
      {/* Project 1: Complaint Clustering */}
      <Float speed={2} floatIntensity={1} position={[-4, 3, -2]}>
        <group 
          onClick={() => window.open('https://github.com/raiyanalig/Complaint_clustering')} 
          onPointerOver={() => setCursor('pointer')} 
          onPointerOut={() => setCursor('default')}
        >
          <Icosahedron args={[1.2, 1]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#131315" emissive="#B500FF" emissiveIntensity={0.5} wireframe />
          </Icosahedron>
          <Text position={[0, -2, 0]} fontSize={0.35} color="#ffffff" anchorX="center" anchorY="top">
            Complaint Clustering
          </Text>
          <Text position={[0, -2.6, 0]} fontSize={0.25} color="#9CA3AF" maxWidth={4} textAlign="center" anchorX="center" anchorY="top">
            Unsupervised ML pipeline / Semantic embeddings grouping
          </Text>
          <Text position={[0, -3.3, 0]} fontSize={0.2} color="#00F0FF" anchorX="center" anchorY="top">
            [ View on GitHub ]
          </Text>
        </group>
      </Float>

      {/* Project 2: Deadlock Detection */}
      <Float speed={1.5} floatIntensity={1} position={[4, 3, -1]}>
        <group 
          onClick={() => window.open('https://github.com/raiyanalig/Deadlock_Detection_System')} 
          onPointerOver={() => setCursor('pointer')} 
          onPointerOut={() => setCursor('default')}
        >
          <Torus args={[1, 0.25, 16, 32]} rotation={[1, 0.5, 0]}>
            <meshStandardMaterial color="#131315" emissive="#00F0FF" emissiveIntensity={0.5} wireframe />
          </Torus>
          <Text position={[0, -2, 0]} fontSize={0.35} color="#ffffff" anchorX="center" anchorY="top">
            Deadlock Detection System
          </Text>
          <Text position={[0, -2.6, 0]} fontSize={0.25} color="#9CA3AF" maxWidth={4} textAlign="center" anchorX="center" anchorY="top">
            Graph-based OS resource allocation visualization
          </Text>
          <Text position={[0, -3.3, 0]} fontSize={0.2} color="#00F0FF" anchorX="center" anchorY="top">
            [ View on GitHub ]
          </Text>
        </group>
      </Float>

      {/* Project 3: Investimate */}
      <Float speed={2.5} floatIntensity={1} position={[-4, -3, -1]}>
        <group 
          onClick={() => window.open('https://github.com/raiyanalig/Investimate')} 
          onPointerOver={() => setCursor('pointer')} 
          onPointerOut={() => setCursor('default')}
        >
          <Cylinder args={[0.7, 0.7, 1.5, 12]} rotation={[0.4, 0.4, 0]}>
            <meshStandardMaterial color="#131315" emissive="#e5e1e4" emissiveIntensity={0.3} wireframe />
          </Cylinder>
          <Text position={[0, -2, 0]} fontSize={0.35} color="#ffffff" anchorX="center" anchorY="top">
            Investimate
          </Text>
          <Text position={[0, -2.6, 0]} fontSize={0.25} color="#9CA3AF" maxWidth={4} textAlign="center" anchorX="center" anchorY="top">
            Financial growth predictor & Interactive analysis
          </Text>
          <Text position={[0, -3.3, 0]} fontSize={0.2} color="#00F0FF" anchorX="center" anchorY="top">
            [ View on GitHub ]
          </Text>
        </group>
      </Float>

      {/* Project 4: RebalancedPro */}
      <Float speed={1.8} floatIntensity={1.2} position={[4, -3, 0]}>
        <group 
          onClick={() => window.open('https://github.com/raiyanalig/fund_mgmt_portfolio_web_app/tree/main/portfolio-rebalancer')} 
          onPointerOver={() => setCursor('pointer')} 
          onPointerOut={() => setCursor('default')}
        >
          <Octahedron args={[1.2, 0]} rotation={[0.5, 0.5, 0]}>
            <meshStandardMaterial color="#131315" emissive="#B500FF" emissiveIntensity={0.4} wireframe />
          </Octahedron>
          <Text position={[0, -2, 0]} fontSize={0.35} color="#ffffff" anchorX="center" anchorY="top">
            RebalancedPro
          </Text>
          <Text position={[0, -2.6, 0]} fontSize={0.25} color="#9CA3AF" maxWidth={4} textAlign="center" anchorX="center" anchorY="top">
            Smart Portfolio Rebalancing & Asset Allocation Engine
          </Text>
          <Text position={[0, -3.3, 0]} fontSize={0.2} color="#00F0FF" anchorX="center" anchorY="top">
            [ View on GitHub ]
          </Text>
        </group>
      </Float>
    </group>
  );
};
