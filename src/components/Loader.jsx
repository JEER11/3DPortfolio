import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html center>
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
    </Html>
  );
};

export default Loader;
