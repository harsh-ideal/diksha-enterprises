import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const ElectroplatingGlow = () => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (meshRef.current) {
      // Custom glow effect using MeshStandardMaterial
      meshRef.current.material = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xffd700), // Gold color
        emissive: new THREE.Color(0xffd700), // Emissive glow
        emissiveIntensity: 1,
        metalness: 1,
        roughness: 0.2,
      });

      // Animation loop for pulsing glow effect
      const animateGlow = () => {
        if (meshRef.current) {
          const intensity = 1 + Math.sin(Date.now() * 0.002) * 0.5; // Pulsing effect
          meshRef.current.material.emissiveIntensity = intensity;
        }
        requestAnimationFrame(animateGlow);
      };

      animateGlow();
    }
  }, []);

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={1}
    >
      <boxGeometry args={[10, 32, 32]} />
      <meshStandardMaterial 
        color={hovered ? "black" : "red"} 
        metalness={1}
        roughness={0.2}
      />
    </mesh>
  );
};

const BackgroundAnimation = () => {
  return (
    <Canvas style={{ height: "100vh" }} camera={{ position: [0, 0, 5], fov: 60 }}>
      <directionalLight position={[0, 10, 10]} intensity={0.1} castShadow color="white" />
      <ElectroplatingGlow />
      <OrbitControls />
    </Canvas>
  );
};

export default BackgroundAnimation;
