import { useRef, useMemo, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, Line, Text, Sparkles } from "@react-three/drei";
import * as THREE from "three";

export function NeuralSphere() {
  const brainNodes = useMemo(
    () => [
      [1.1, 0.4, 0.2],
      [0.6, 1.0, 0.3],
      [-0.5, 1.1, -0.2],
      [-1.1, 0.5, 0.1],
      [-1.2, -0.5, 0.2],
      [-0.6, -1.0, -0.3],
      [0.5, -1.1, 0.2],
      [1.1, -0.4, -0.1],
      [0.1, 0.2, 1.3],
      [-0.1, -0.2, -1.3],
      [0.8, 0.8, -0.6],
      [-0.8, -0.7, 0.7],
    ],
    []
  );

  const connectionPaths = useMemo(
    () => [
      [brainNodes[0], brainNodes[1]],
      [brainNodes[1], brainNodes[2]],
      [brainNodes[2], brainNodes[3]],
      [brainNodes[3], brainNodes[4]],
      [brainNodes[4], brainNodes[5]],
      [brainNodes[5], brainNodes[6]],
      [brainNodes[6], brainNodes[7]],
      [brainNodes[7], brainNodes[0]],
      [brainNodes[8], brainNodes[0]],
      [brainNodes[8], brainNodes[1]],
      [brainNodes[8], brainNodes[6]],
      [brainNodes[8], brainNodes[7]],
      [brainNodes[9], brainNodes[2]],
      [brainNodes[9], brainNodes[3]],
      [brainNodes[9], brainNodes[4]],
      [brainNodes[10], brainNodes[1]],
      [brainNodes[10], brainNodes[2]],
      [brainNodes[11], brainNodes[4]],
      [brainNodes[11], brainNodes[5]],
    ],
    [brainNodes]
  );

  const transmissionPoints = useRef(connectionPaths.map(() => Math.random()));
  
  useFrame((state, delta) => {
    transmissionPoints.current = transmissionPoints.current.map((progress, idx) => {
      const next = progress + delta * (0.16 + (idx % 4) * 0.04);
      return next > 1 ? 0 : next;
    });
  });

  return (
    <group>
      <Float speed={2.0} rotationIntensity={1.3} floatIntensity={0.6}>
        <group>
          {brainNodes.map((node, index) => (
            <mesh key={index} position={node}>
              <sphereGeometry args={[0.07, 16, 16]} />
              <meshStandardMaterial
                color={index % 2 === 0 ? "#ff2d87" : "#0f172a"}
                emissive={index % 2 === 0 ? "#ff2d87" : "#8b5cf6"}
                emissiveIntensity={0.6}
                roughness={0.3}
                metalness={0.2}
              />
            </mesh>
          ))}
        </group>
      </Float>

      {connectionPaths.map((points, idx) => (
        <Line
          key={`line-${idx}`}
          points={points}
          color={idx % 2 === 0 ? "#0f172a" : "#ff2d87"}
          lineWidth={1.2}
          transparent
          opacity={0.18}
        />
      ))}

      {connectionPaths.map((points, idx) => {
        const [from, to] = points;
        const t = transmissionPoints.current[idx] || 0;
        const position = [
          from[0] + (to[0] - from[0]) * t,
          from[1] + (to[1] - from[1]) * t,
          from[2] + (to[2] - from[2]) * t,
        ];
        return (
          <mesh key={`pulse-${idx}`} position={position}>
            <sphereGeometry args={[0.045, 10, 10]} />
            <meshStandardMaterial
              color="#0284c7"
              emissive="#0284c7"
              emissiveIntensity={0.8}
              roughness={0.2}
              metalness={0.4}
              transparent
              opacity={0.8}
            />
          </mesh>
        );
      })}
    </group>
  );
}

// 3D Camera Flight & 3D Text Dive-In Scene
export function CameraFlightText() {
  const textGroupRef = useRef();
  const subTextRef = useRef();
  const { camera } = useThree();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state, delta) => {
    // Calculate normalized scroll dive progress (0 to 1 over first 400px of scroll)
    const progress = Math.min(Math.max(scrollY / 400, 0), 1);
    
    // Smooth camera flight from z = 4.2 down to z = 0.5 (flying through text)
    const targetCamZ = 4.2 - progress * 4.8;
    const targetCamY = 0.0 - progress * 0.3;
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetCamZ, 0.1);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetCamY, 0.1);

    // Fade out and expand 3D text as camera flies through it
    if (textGroupRef.current) {
      const textOpacity = Math.max(1 - progress * 1.5, 0);
      const textScale = 1 + progress * 0.8;
      textGroupRef.current.scale.set(textScale, textScale, textScale);
      
      // Slight floating motion
      textGroupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.04;
    }
  });

  return (
    <group>
      {/* 3D Space Particles */}
      <Sparkles count={45} scale={8} size={2} speed={0.4} opacity={0.35} color="#ff2d87" />

      {/* Floating 3D "Muhammad Maawaz" Text in 3D Space */}
      <group ref={textGroupRef} position={[0, 0.1, 1.2]}>
        <Text
          position={[0, 0.35, 0]}
          fontSize={0.48}
          color="#0f172a"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.02}
          fontWeight="900"
        >
          MUHAMMAD
        </Text>
        <Text
          position={[0, -0.15, 0]}
          fontSize={0.52}
          color="#ff2d87"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.04}
          fontWeight="900"
        >
          MAAWAZ
        </Text>
        <Text
          ref={subTextRef}
          position={[0, -0.55, 0]}
          fontSize={0.14}
          color="#64748b"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.08}
        >
          APPLIED AI & MACHINE LEARNING ENGINEER
        </Text>
      </group>

      {/* Neural Sphere suspended behind the text */}
      <group position={[0, 0, -0.6]}>
        <NeuralSphere />
      </group>
    </group>
  );
}