import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Sphere, Float, MeshDistortMaterial, Line } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

export function ParticleBackground() {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#38BDF8" size={0.002} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
}

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
          <Sphere args={[1.12, 120, 120]} scale={1.6}>
            <MeshDistortMaterial
              color="#8b5cf6"
              attach="material"
              distort={0.6}
              speed={1.7}
              roughness={0.12}
              metalness={0.88}
              emissive="#7c3aed"
              emissiveIntensity={0.18}
            />
          </Sphere>

          {brainNodes.map((node, index) => (
            <mesh key={index} position={node}>
              <sphereGeometry args={[0.08, 20, 20]} />
              <meshStandardMaterial
                color="#38BDF8"
                emissive="#38BDF8"
                emissiveIntensity={0.35}
                roughness={0.16}
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
          color="#60a5fa"
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
              color="#f472b6"
              emissive="#f472b6"
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