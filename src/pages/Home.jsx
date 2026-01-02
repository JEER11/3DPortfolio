import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { Html } from "@react-three/drei";
import { Link } from "react-router-dom";

import underwater from "../assets/underwater.mp3";
import { HomeInfo, Loader } from "../components";
import { soundoff, soundon, arrow } from "../assets/icons";
import { Sky } from "../models";

const Bubble = ({ position, content }) => (
  <Html position={position} distanceFactor={10}>
    {content}
  </Html>
);

const Home = () => {
  const audioRef = useRef(new Audio(underwater));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(true);
  const [visibleStage, setVisibleStage] = useState(currentStage);
  const [isLoading, setIsLoading] = useState(true);
  const [isHolding, setIsHolding] = useState(false);
  const holdTimerRef = useRef(null);
  const holdStartTimeRef = useRef(0);
  const accumulatedTimeRef = useRef(0);

  useEffect(() => {
    // Show loading animation when component mounts (including navigation)
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []); // Runs on mount and navigation to Home

  useEffect(() => {
    if (isHolding) {
      holdStartTimeRef.current = Date.now();
      
      holdTimerRef.current = setInterval(() => {
        const elapsed = Date.now() - holdStartTimeRef.current + accumulatedTimeRef.current;
        
        // Cycle through stages: 1 -> 3 (projects) -> 2 (about) -> 4 (contact) -> 3 -> 2 -> 4...
        if (elapsed >= 6000) {
          // Reset accumulated time and cycle back to stage 3
          accumulatedTimeRef.current = elapsed % 6000;
          holdStartTimeRef.current = Date.now();
        }
        
        const cycleTime = elapsed % 6000;
        
        if (cycleTime < 2000) {
          // 0-2 seconds: Stage 3 (Projects)
          setCurrentStage(3);
        } else if (cycleTime < 4000) {
          // 2-4 seconds: Stage 2 (About - skills and experience)
          setCurrentStage(2);
        } else {
          // 4-6 seconds: Stage 4 (Contact)
          setCurrentStage(4);
        }
      }, 100);
    } else {
      if (holdTimerRef.current) {
        clearInterval(holdTimerRef.current);
        // Save accumulated time when released
        if (holdStartTimeRef.current > 0) {
          accumulatedTimeRef.current += Date.now() - holdStartTimeRef.current;
        }
      }
    }

    return () => {
      if (holdTimerRef.current) {
        clearInterval(holdTimerRef.current);
      }
    };
  }, [isHolding]);

  useEffect(() => {
    let timeout;

    if (currentStage !== visibleStage) {
      timeout = setTimeout(() => {
        setVisibleStage(currentStage);
      }, 300); // Stabilize transitions with a delay
    }

    return () => clearTimeout(timeout);
  }, [currentStage, visibleStage]);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  // Add handlers for mouse/touch events to control stage cycling
  const handlePointerDown = () => {
    setIsRotating(true);
    setIsHolding(true);
  };
  
  const handlePointerUp = () => {
    setIsRotating(false);
    setIsHolding(false);
  };

  return (
    <section className='w-full h-screen relative'>
      {isLoading && (
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-12 z-50 pointer-events-none'>
          <div className='relative w-[200px] h-[10px] rounded-full bg-gray-200 shadow-lg overflow-hidden border-2 border-white'>
            <div 
              className='absolute top-1/2 left-0 w-4 h-4 rounded-full -translate-y-1/2 bg-white shadow-2xl'
              style={{
                boxShadow: '0 0 0 3px rgba(255,255,255,1), 0 0 20px rgba(255, 255, 255, 1), 0 0 30px rgba(200, 200, 255, 0.8)',
                animation: 'slideLoader 1.1s ease-in-out 0s infinite alternate'
              }}
            ></div>
          </div>
          <style>{`
            @keyframes slideLoader {
              0% { transform: translate(0, -50%); }
              100% { transform: translate(184px, -50%); }
            }
          `}</style>
        </div>
      )}
      
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ position: [0, 2, 3.5], near: 0.1, far: 1000 }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerOut={handlePointerUp}
        onTouchStart={handlePointerDown}
        onTouchEnd={handlePointerUp}
      >
        <Suspense fallback={null}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />

          <Sky isRotating={isRotating} />
          {/* <Bird /> */}
          {/* <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          /> */}
          {/* <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          /> */}
        </Suspense>
      </Canvas>

      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </section>
  );
};

export default Home;
