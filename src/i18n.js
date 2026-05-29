import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  es: {
    translation: {
      "navbar": {
        "titulo": "Mi Portafolio",
        "inicio": "Inicio",
        "sobre_mi": "Sobre mí",
        "proyectos": "Proyectos",
        "habilidades": "Habilidades"
      },
      "home": {
        "animacion1": "Desarrollador Full-stack",
        "animacion2": "Estudiante de Ingeniería en Sistemas",
        "animacion3": "Gamer tiempo completo",
        "animacion4": "Deportista y amante de la música",
        "animacion5": "Analista universitario de sistemas de informacion"
      },
      "about": {
        "titulo": "Sobre mí",
        "saludo": "Hola, soy Guille",
        "parrafo1": "Soy estudiante de cuarto año de la carrera Ingeniería de Sistemas de Información en la UTN, pronto a recibir el título de Analista Universitario de Sistemas de Información.",
        "parrafo2": "Me apasiona aprender. Me considero curioso por eso siempre busco incorporar nuevos conocimientos. Suelo hacerlo de forma autodidacta o también asistiendo a charlas sobre temas en tendencia que me interesen.",
        "titulos_tarjetas": {
          "idioma": "Lengua extranjera",
          "habilidades": "Habilidades blandas",
          "gustos": "Un poco más sobre mi"
        },
        "idioma": "Inglés",
        "habilidades_lista": [
          "Buena comunicación",
          "Trabajo en equipo",
          "Resolución de problemas",
          "Perseverancia y flexibilidad",
          "Agilidad con los resultados"
        ],
        "gustos_lista": [
          "Pasión por los videojuegos",
          "Deportista activo",
          "Amor por la música en vivo",
          "Apasionado del cine"
        ]
      },
      "skills": {
        "titulo": "Experiencia",
        "tarjetas": [
          {
            "titulo": "Callcenter PPAI",
            "desc": "Trabajo práctico integrador de la materia Diseño de sistemas de información realizado en C# con integración en base de datos SQL siguiendo casos de uso, cumplimentando la documentación con cuadros de interacción."
          },
          {
            "titulo": "Cinelife",
            "desc": "Trabajo práctico integrador de la materia Programación visual realizado en C# con integración en base de datos SQL, métodos de búsqueda, carrito de compras, entre otros."
          },
          {
            "titulo": "Certificación Cisco",
            "desc": "Completé con éxito un curso de programación en Java realizado en la academia Cisco."
          },
          {
            "titulo": "Curso Armado y reparación de PC",
            "desc": "Curso dictado por la UTN - Buenos Aires, donde aprendí a diagnosticar problemas técnicos, además del armado y reparación de PCs."
          },
          {
            "titulo": "Desarrollo Web",
            "desc": "Completé con éxito un curso de programación para desarrollo web dictado por la academia Desafío Latam."
          },
          {
            "titulo": "Playbook",
            "desc": "Asistí de manera autodidacta a la conferencia sobre ciberseguridad brindada por el departamento de Ing. en Sistemas de Información de la UTN-FRC y Bancor."
          }
        ]
      },
      "skills_logos": {
        "titulo": "Herramientas"
      },
      "footer": {
        "derechos": "Todos los derechos reservados."
      },
      "boton_cv": {
        "descargar": "Descargar mi CV",
        "gracias": "¡Gracias por el interés!"
      }
    }
  },
  en: {
    translation: {
      "navbar": {
        "titulo": "My Portfolio",
        "inicio": "Home",
        "sobre_mi": "About me",
        "proyectos": "Projects",
        "habilidades": "Skills"
      },
      "home": {
        "animacion1": "Full-stack developer",
        "animacion2": "Information Systems Engineering Student",
        "animacion3": "Full-Time Gamer",
        "animacion4": "Active athlete & music lover",
        "animacion5": "Information Systems Analyst"
      },
      "about": {
        "titulo": "About me",
        "saludo": "Hi, I'm Guille",
        "parrafo1": "I'm a fourth-year student of Information Systems Engineering at UTN. I'm on track to obtain the degree of Analyst of Information Systems.",
        "parrafo2": "I am passionate about learning and I'm very curious. I am always chasing knowledge. I usually learn by myself or by attending talks on trending topics that I find interesting.",
        "titulos_tarjetas": {
          "idioma": "Foreign Language",
          "habilidades": "Soft Skills",
          "gustos": "Personal Interests"
        },
        "idioma": "Native Spanish",
        "habilidades_lista": [
          "Great communication skills",
          "Comfortable working in a team",
          "Problem-solving mindset",
          "Perseverent",
          "Proactive"
        ],
        "gustos_lista": [
          "Passion for video games",
          "Active athlete",
          "Live music lover",
          "Movie enthusiast"
        ]
      },
      "skills": {
        "titulo": "Experience",
        "tarjetas": [
          {
            "titulo": "Callcenter PPAI",
            "desc": "Integrative practical work for the Information Systems Design subject, made in C# with SQL database integration following use cases, completing the documentation with interaction diagrams."
          },
          {
            "titulo": "Cinelife",
            "desc": "Integrative practical work for the Visual Programming subject, made in C# with SQL database integration, search methods, shopping cart, among others."
          },
          {
            "titulo": "Cisco Certification",
            "desc": "Java programming course at the Cisco Academy."
          },
          {
            "titulo": "PC assembly and repair course",
            "desc": "course offered by UTN-Buenos Aires, where I learned to diagnose technical issues, as well as PC assembly and repair."
          },
          {
            "titulo": "Web Development",
            "desc": "Web development programming course dictated by the Desafío Latam academy."
          },
          {
            "titulo": "Playbook",
            "desc": "Cybersecurity talk given by the Information Systems Engineering department of UTN-FRC and Bancor."
          }
        ]
      },
      "skills_logos": {
        "titulo": "Tools"
      },
      "footer": {
        "derechos": "All rights reserved."
      },
      "boton_cv": {
        "descargar": "Download my CV",
        "gracias": "Thanks for your interest!"
      }
    }
  }
};

i18n
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en", 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;