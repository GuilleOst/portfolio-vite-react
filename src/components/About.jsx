import React from "react";
import { useFadeInOnScroll } from "./Fadeinscroll";
import { useTranslation } from 'react-i18next'; 

const About = () => {
    const [seccionRef, esVisible] = useFadeInOnScroll(0.2);
    const { t } = useTranslation(); 

    return (
        <section ref={seccionRef} className="max-w-6xl mx-auto p-4 flex flex-col items-center overflow-hidden">
            <h2 className={`text-4xl md:text-5xl font-bold text-white mb-10 text-center transform transition-all duration-1000 ease-out ${esVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                {t('about.titulo')}
            </h2>
            
            <div className={`w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl mb-12 z-10 transform transition-all duration-1000 delay-300 ease-out ${esVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <img src="/Foto/mifoto.jpg" alt="Yo" className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col items-center gap-12 w-full max-w-6xl">

                {/* TARJETA PRINCIPAL */}
                <div className={`w-full max-w-5xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-8 md:p-12 -mt-24 pt-28 flex flex-col items-center transform transition-all duration-1000 delay-500 ease-out ${esVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <h3 className="text-3xl font-bold text-white mb-6 text-center">{t('about.saludo')}</h3>
                    
                    <div className="flex flex-col items-center max-w-4xl">
                        <p className="text-gray-300 text-lg leading-relaxed mb-4 text-center">
                            {t('about.parrafo1')}
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed text-center">
                            {t('about.parrafo2')}
                        </p>
                    </div>
                </div>

                {/* CONTENEDOR DE TARJETAS INFERIORES */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-stretch">

                    {/* Lengua extranjera */}
                    <div className={`w-full flex flex-col items-center transform transition-all duration-1000 delay-1000 ease-out ${esVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <h2 className="text-2xl font-bold text-white mb-6 text-center">
                            {t('about.titulos_tarjetas.idioma')}
                        </h2>
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
                            <span className="text-xl text-white font-bold mb-4 text-center">{t('about.idioma')}</span>
                            <div className="w-full flex justify-center items-center">
                                <img
                                    src="/certificados/B2-Certified.png"
                                    alt="Certificado de ingles EF SET"
                                    className="w-full max-w-[200px] h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Habilidades blandas */}
                    <div className={`w-full flex flex-col items-center transform transition-all duration-1000 delay-1000 ease-out ${esVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <h2 className="text-2xl font-bold text-white mb-6 text-center">
                            {t('about.titulos_tarjetas.habilidades')}
                        </h2>
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
                            <ul className="text-lg text-gray-300 font-medium space-y-4 w-full ">
                                {t('about.habilidades_lista', { returnObjects: true }).map((habilidad, index) => (
                                    <li key={index}>{habilidad}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Gustos personales */}
                    <div className={`w-full flex flex-col items-center transform transition-all duration-1000 delay-1000 ease-out ${esVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <h2 className="text-2xl font-bold text-white mb-6 text-center">
                            {t('about.titulos_tarjetas.gustos')}
                        </h2>
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
                            <ul className="text-lg text-gray-300 font-medium space-y-4 w-full ">
                                {t('about.gustos_lista', { returnObjects: true }).map((gusto, index) => (
                                    <li key={index}>{gusto}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About;