import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";

export function NeuralSphere() {
  const brainNodes = useMemo(
    () => [
      [0.8, 0.35, 0],
      [0.45, 0.8, 0.2],
      [-0.4, 0.85, -0.15],
      [-0.85, 0.4, 0],
      [-0.9, -0.4, 0.1],
      [-0.45, -0.8, -0.2],
      [0.4, -0.85, 0.15],
      [0.85, -0.35, 0],
      [0, 0.05, 1.1],
      [0, -0.05, -1.1],
    ],
    []
  );

  const connectionPaths = useMemo(
    () => brainNodes.map((node) => [[0, 0, 0], node]),
    [brainNodes]
  );

  const transmissionPoints = useRef(brainNodes.map(() => 0));
  useFrame((state, delta) => {
    transmissionPoints.current = transmissionPoints.current.map((progress, idx) => {
      const next = progress + delta * (0.12 + idx * 0.01);
      return next > 1 ? next - 1 : next;
    });
  });

  return (
    <group>
      <Float speed={3.5} rotationIntensity={1.6} floatIntensity={0.9}>
        <group>
          {brainNodes.map((node, index) => (
            <mesh key={index} position={node}>
              <sphereGeometry args={[0.08, 20, 20]} />
              <meshStandardMaterial
                color="#7ebc82"
                emissive="#7ebc82"
                emissiveIntensity={0.5}
                roughness={0.14}
                metalness={0.8}
              />
            </mesh>
          ))}
        </group>
      </Float>

      {connectionPaths.map((points, idx) => (
        <Line
          key={idx}
          points={points}
          color="#b8c39a"
          lineWidth={1}
          transparent
          opacity={0.25}
          dashed={false}
        />
      ))}

      {connectionPaths.map((points, idx) => {
        const [from, to] = points;
        const t = transmissionPoints.current[idx];
        const position = [
          from[0] + (to[0] - from[0]) * t,
          from[1] + (to[1] - from[1]) * t,
          from[2] + (to[2] - from[2]) * t,
        ];
        return (
          <mesh key={`pulse-${idx}`} position={position}>
            <sphereGeometry args={[0.045, 12, 12]} />
            <meshStandardMaterial
              color="#f1e7cd"
              emissive="#f1e7cd"
              emissiveIntensity={0.8}
              roughness={0.1}
              metalness={0.3}
              transparent
              opacity={0.95}
            />
          </mesh>
        );
      })}
    </group>
  );
}