import React from "react";
import { useFadeInOnScroll } from "./Fadeinscroll";
import { useTranslation } from 'react-i18next'; 

const TechSkills = () => {
    const [seccionRef, esVisible] = useFadeInOnScroll(0.2);
    const { t } = useTranslation();


    const tecnologias = [
        { nombre: "JavaScript", logo: "/logos/javascript.png", alt: "Logo de JavaScript" },
        { nombre: "Java", logo: "/logos/java.png", alt: "Logo de Java" },
        { nombre: "C#", logo: "/logos/c-sharp.png", alt: "Logo de C#" },
        { nombre: "HTML", logo: "/logos/html.png", alt: "Logo de HTML" },
        { nombre: "CSS", logo: "/logos/css-3.png", alt: "Logo de CSS" },
        { nombre: "React", logo: "/logos/React.png", alt: "Logo de React" },
        { nombre: "SQL Server", logo: "/logos/microsoft-sql-server-logo-png-transparent.png", alt: "Logo de SQL Server" },
        { nombre: "Python", logo: "/logos/python.png", alt: "Logo de Python" }
    ];

    return (
        <section 
            ref={seccionRef} 
            className={`flex flex-col items-center py-20 transform transition-all duration-1000 ease-out ${esVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        > 
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"> 
                {t('skills_logos.titulo')} 
            </h1>

            <div className="flex flex-wrap justify-center items-center gap-6 max-w-4xl px-4">
                
                {tecnologias.map((tech, index) => (
                    <div 
                        key={index} 
                        className={`w-32 h-24 bg-white/5 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center rounded-2xl shadow-lg p-4 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-purple-500/20 hover:shadow-2xl`}
                    >
                        <img 
                            src={tech.logo} 
                            alt={tech.alt} 
                            className="w-10 h-10 object-contain drop-shadow-md" 
                        /> 
                        <span className="mt-3 text-xs font-bold tracking-wider text-gray-300 uppercase text-center">
                            {tech.nombre} 
                        </span>  
                    </div>
                ))}

            </div>
        </section>
    );
}

export default TechSkills;