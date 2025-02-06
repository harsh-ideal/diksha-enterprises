import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const PowderSpray = () => {
    const pointsRef = useRef();
  const positions = useRef(new Float32Array(1000 * 3)).current;
  
  useEffect(() => {
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = (Math.random() - 0.5) * 4;
      positions[i + 1] = Math.random() * 2;
      positions[i + 2] = (Math.random() - 0.5) * 4;
    }
    if (pointsRef.current) {
      pointsRef.current.geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
    }
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array;
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] -= 0.2;
        if (positions[i] < -1) positions[i] = Math.random() * 2;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={pointsRef} positions={new Float32Array(positions)}>
      <PointMaterial color="#000" size={0.05} transparent opacity={0.8} />
    </Points>
  );
};

const PowderCoatingObject = () => {
  const meshRef = useRef();
  const [progress, setProgress] = useState(0);

  useFrame(() => {
    if (progress < 1) {
      setProgress((prev) => Math.min(prev + 0.005, 1));
    }
    meshRef.current.material.uniforms.uProgress.value = progress;
  });

  return (
    <mesh ref={meshRef} position={[0, -2, 0]}>
      <boxGeometry args={[6, 5, 4]} />
      <shaderMaterial
        attach="material"
        uniforms={{
          uProgress: { value: progress },
        }}
        vertexShader={`
          varying vec3 vNormal;
          void main() {
            vNormal = normal;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uProgress;
          varying vec3 vNormal;
          void main() {
            float coating = smoothstep(0.0, 1.0, uProgress * (1.0 - vNormal.y));
            vec3 color = mix(vec3(1.0, 0.5, 0.0), vec3(0.0, 0.0, 0.0), coating);
            gl_FragColor = vec4(color, 1.0);
          }
        `}
      />
    </mesh>
  );
};

const PowderCoatingEffect = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <PowderSpray />
      <PowderCoatingObject />
      <OrbitControls />
    </Canvas>
  );
};

export default PowderCoatingEffect;
