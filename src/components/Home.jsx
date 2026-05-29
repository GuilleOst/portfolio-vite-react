import React, { useRef } from "react";
import { useTranslation } from 'react-i18next';
import DownloadButton from "./DownloadButton/DownloadButton";
import Tooltip from "./Tooltip/Tooltip";
import { useFadeInOnScroll } from "./Fadeinscroll";
import { TypeAnimation } from 'react-type-animation';
import Lottie from "lottie-react"; 
import animacionHero from "../../src/Foto/3D-Gaming.json"; 

const Home = () => {
    const [seccionRef, esVisible] = useFadeInOnScroll(0.2);
    const lottieRef = useRef(null);
    const { t, i18n } = useTranslation();

    return (
    <div 
        ref={seccionRef} 
        className={`flex flex-col justify-center py-20 lg:py-32 transform transition-all duration-1000 ease-out ${esVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    > 
        <div className='w-full max-w-7xl mx-auto px-4 min-h-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8'>
            
            {/* COLUMNA IZQUIERDA */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <div className="w-72 md:w-96 flex justify-center items-center">
                    <Lottie 
                        lottieRef={lottieRef}
                        animationData={animacionHero} 
                        loop={true} 
                        autoplay={true}
                        onDOMLoaded={() => {
                            lottieRef.current.setSpeed(0.5);
                            lottieRef.current.playSegments([10, 60], true);
                        }}
                    />
                </div>
            </div>

           {/* COLUMNA DERECHA*/}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-5">
                
                <h1 className="w-full text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center md:text-left">
                    Guillermo Ostermann
                </h1>

                <div className="w-full h-8 md:h-10 text-center md:text-left">
                    <TypeAnimation
                        key={i18n.language} 
                        sequence={[
                            t('home.animacion1'), 
                            2000, 
                            t('home.animacion2'),
                            2000,
                            t('home.animacion3'),
                            2000,
                            t('home.animacion4'),
                            2000,
                            t('home.animacion5'),
                            2000
                        ]}
                        wrapper="span"
                        speed={50}
                        deletionSpeed={60}
                        repeat={Infinity}
                        className="text-xl md:text-2xl text-gray-400 font-light"
                    />
                </div>

                <div className="w-full flex flex-col items-center gap-4 mt-6">
                 
                    <DownloadButton/>
                </div>
                
                <div className="w-full flex justify-center mt-2">
                    <Tooltip/>
                </div>
                
            </div>
            
        </div>
    </div>
    )
}

export default Home;