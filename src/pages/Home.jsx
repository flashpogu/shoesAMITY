import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Text } from '@react-three/drei'; // Import Text
import Header from '../components/Header';
import Product from '../components/Product';
import Product2 from '../components/Product2';
import ThemeSwitch from '../components/theme-switch';

const Model = () => {
    const { scene } = useGLTF("/shoe.glb");
    return <primitive object={scene} scale={[2, 2, 2]} />;
};

const Footer = () => (
  <footer className="absolute bottom-4 w-full text-center text-gray-500 text-sm">
    © {new Date().getFullYear()} Your Company. All rights reserved.
  </footer>
);

export default function Home() {
  return (
    <>
      <div className="relative w-screen h-screen">
        <Header />
        <Canvas className="absolute top-0 left-0 w-full h-full">
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />


          <Model />
          <OrbitControls enableZoom={false} />
        </Canvas>
        <div>
        
           <Product />
           <Product2 />
           
        </div>
      </div>
      <ThemeSwitch />
    </>
  );
}
