import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useRef, useState } from 'react';

const PowderParticles = ({ mousePos }) => {
  const ref = useRef();

  useFrame(({ camera }) => {
    if (ref.current) {
      ref.current.rotation.y = mousePos.current.x * 0.2;
      ref.current.rotation.x = -mousePos.current.y * 0.2;
      camera.position.z = 5 + mousePos.current.y * 2;
    }
  });

  return (
    <group ref={ref}>
      <Points positions={generateParticles()} stride={3} frustumCulled={false}>
        <PointMaterial color="red" size={0.05} sizeAttenuation={true} depthWrite={false} transparent={true} opacity={0.8} />
      </Points>
    </group>
  );
};

// Generate Random Particles
const generateParticles = () => {
  const particles = new Float32Array(5000 * 3);
  for (let i = 0; i < 5000; i++) {
    const i3 = i * 3;
    particles[i3] = (Math.random() - 0.5) * 10;
    particles[i3 + 1] = (Math.random() - 0.5) * 10;
    particles[i3 + 2] = (Math.random() - 0.5) * 10;
  }
  return particles;
};

const PowderBackground = ({ mousePos }) => {
  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
      camera={{ position: [0, 0, 5], fov: 35 }}
    >
      <ambientLight intensity={0.5} />
      <PowderParticles mousePos={mousePos} />
    </Canvas>
  );
};

export default PowderBackground;
