import React, { useEffect, useState } from "react";
import Cardproject from "./Cardproject/Cardproject";
import { useFadeInOnScroll } from "./Fadeinscroll";
import { useTranslation } from 'react-i18next'; 

const Skills = () => { 
    const [seccionRef, esVisible] = useFadeInOnScroll(0.2);
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
    const { t } = useTranslation(); 

    const cerrarModal = () => {
        setImagenSeleccionada(null);
    };

    useEffect (() => {
        const manejarTecla = (e) => {
            if(e.key === 'Escape'){
                cerrarModal();
            }
        };
        if(imagenSeleccionada){
            window.addEventListener('keydown', manejarTecla);
        }
        return() =>{
            window.removeEventListener('keydown', manejarTecla);
        };
    } ,[imagenSeleccionada]);

    const datosFijos = [
        { src: "/proyectos/callcenterPPAI.png", githubLink: "https://github.com/GuilleOst/TrabajosUTN/blob/main/Proyecto%20practico%20integrador%20-%20Dise%C3%B1o%20de%20sistemas.rar" },
        { src: "/proyectos/Cinelife.png", githubLink: "https://github.com/GuilleOst/TrabajosUTN/blob/main/TPI%20Programacion%20visual.rar" },
        { src: "/proyectos/Certificado cisco.jpg", githubLink: "" },
        { src: "/proyectos/Curso AyRPC.png", githubLink: "" },
        { src: "/proyectos/Introduccion al desarrollo web.jpg", githubLink: "" },
        { src: "/proyectos/Playbook.jpg", githubLink: "" }
    ];

    const tarjetasTraducidas = t('skills.tarjetas', { returnObjects: true });

    const experiencias = datosFijos.map((dato, index) => ({
        ...dato,
        titulo: tarjetasTraducidas[index].titulo,
        desc: tarjetasTraducidas[index].desc
    }));

    return (
        <section ref={seccionRef} className={`max-w-6xl mx-auto p-4 relative transform transition-all duration-1000 ease-out ${esVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 text-center">
                {t('skills.titulo')}
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                {experiencias.map((exp, index) => (
                    <div 
                        key={index}
                        className="cursor-pointer"
                        onClick={() => setImagenSeleccionada(exp.src)}
                    >
                        <Cardproject 
                            imgSrc={exp.src} 
                            title={exp.titulo}
                            description={exp.desc}
                            githubLink={exp.githubLink}
                        />
                    </div>
                ))}
            </div>

            {imagenSeleccionada && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-90 p-4"
                    onClick={cerrarModal} 
                >
                    <div className="relative max-w-5xl w-full flex justify-center items-center">
                        <button 
                            className="absolute -top-12 right-0 md:-right-10 text-white text-4xl hover:text-gray-300 transition-colors focus:outline-none outline-none shadow-none bg-transparent border-none"
                            onClick={cerrarModal}
                        >
                            &times;
                        </button>
                        <img 
                            src={imagenSeleccionada} 
                            alt="Proyecto en pantalla completa" 
                            className="max-w-full max-h-[85vh] object-contain rounded-md"
                            onClick={(e) => e.stopPropagation()} 
                        />
                    </div>
                </div>
            )}
        </section>
    );
}

export default Skills;