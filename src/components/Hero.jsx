import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
        Guillermo Ostermann
      </h1>

      <div className="text-xl md:text-2xl text-gray-400 font-light mb-8 h-8">
        <TypeAnimation
          sequence={[
            'Desarrollador Front-End',
            2000, 
            'Estudiante de Ingeniería en Sistemas',
            2000,
            'Apasionado por la Ciberseguridad',
            2000,
            'Deportista activo y amante de la música',
            2000
          ]}
          wrapper="span"
          speed={50} 
          deletionSpeed={60} 
          repeat={Infinity} 
          className="inline-block" 
        />
      </div>

      <p className="mb-4 text-sm text-gray-400">Donde encontrarme</p>
      
    </div>
  );
};

export default Hero;