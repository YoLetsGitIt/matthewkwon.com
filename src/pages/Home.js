
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from "@react-three/drei";
import '../styles/Home.css';

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry"/>
      <meshLambertMaterial attach="material" color="hotpink"/>
    </mesh>
  )
}
  
const Home = () => {
  return (
    <div>
      <Canvas>
        <Stars />
        <ambientLight intensity={0.5}/>
        <spotLight position={[10,15,10]} angle={0.3}/>
        <Box/>
      </Canvas>
      <section className="Home">
        <div className="section-description">
          <h2>Hi I'm Matthew</h2>
          <h1>I'm a problem solver that loves making things</h1>
          <p>Full stack app and web developer but...</p>
          <p>software is just a means to get what I think out into the world</p>  
        </div>

      </section>
    </div>
  );
};
  
export default Home;