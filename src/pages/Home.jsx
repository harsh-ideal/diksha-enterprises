import { useRef } from 'react';
import PowderBackground from '../components/AnimationTrial';
import BackgroundAnimation from '../components/ElectroplatingBackground';
import PowderCoatingEffect from '../components/PowderCoatingEffect';


const Home = () => {
  const mousePos = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  };

  return (
    <div
      style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}
      onMouseMove={handleMouseMove}
    >
      <PowderCoatingEffect/>
      {/* <BackgroundAnimation mousePos={mousePos} /> */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1 style={{textAlign: 'center' }}>Welcome to Home</h1>
      </div>
    </div>
  );
};

export default Home;
