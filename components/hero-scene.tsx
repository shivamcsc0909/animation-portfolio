'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  PerspectiveCamera,
  Stars,
  OrbitControls,
  Float,
  MeshDistortMaterial,
} from '@react-three/drei';
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

function RotatingSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
      meshRef.current.position.x = mouse.x * 0.2;
      meshRef.current.position.y = mouse.y * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[1.5, 5]} />
      <MeshDistortMaterial
        color="#7c5cff"
        speed={2}
        distort={0.4}
        emissive="#6c4ce0"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

function ParticleField() {
  const meshRef = useRef<THREE.Points>(null);

  useEffect(() => {
    if (!meshRef.current) return;

    const positions = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000 * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 10;
    }

    meshRef.current.geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.0001;
      meshRef.current.rotation.y += 0.0002;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry />
      <pointsMaterial size={0.05} color="#00d4ff" sizeAttenuation transparent />
    </points>
  );
}

export function HeroScene() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Canvas className="absolute inset-0">
      <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={75} />
      <Stars radius={100} depth={50} count={3000} factor={4} />

      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />

      <Float>
        <RotatingSphere />
      </Float>

      <ParticleField />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.5}
        autoRotate
        autoRotateSpeed={2}
      />
    </Canvas>
  );
}
