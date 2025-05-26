import Image from "next/image";

const Loader = () => {
  return (
    <div 
      className="bg-white dark:bg-neutral-800"
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        zIndex: 9999 
      }}
    >
      <div style={{ width: 150, height: 135, overflow: 'hidden', position: 'relative' }}>
        <Image
          src="/assets/cat-loader.gif"
          alt="Loading..."
          width={150}
          height={150}
          unoptimized
          style={{ position: 'absolute', top: '-15px', left: '0' }}
        />
      </div>
    </div>
  );
};

export default Loader; 