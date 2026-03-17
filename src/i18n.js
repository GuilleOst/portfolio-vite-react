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
        "animacion1": "Desarrollador Front-End",
        "animacion2": "Estudiante de Ingeniería en Sistemas",
        "animacion3": "Entusiasta de la Ciberseguridad",
        "animacion4": "Deportista y amante de la música",
        "dondeEncontrarme": "Donde encontrarme"
      },
      "about": {
        "titulo": "Sobre mí",
        "saludo": "Hola, soy Guille",
        "parrafo1": "Un estudiante de cuarto año de la carrera Ingeniería de Sistemas de Información en la UTN, aspiro a obtener el título de analista universitario de sistemas de información.",
        "parrafo2": "Me apasiona aprender, me considero curioso por eso siempre busco nuevo conocimiento, puedo hacerlo de forma autodidacta o tambien asistir a charlas sobre temas en tendencia que me interesen.",
        "titulos_tarjetas": {
          "idioma": "Lengua extranjera",
          "habilidades": "Habilidades blandas",
          "gustos": "Gustos personales"
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
          "Amor por la música"
        ]
      },
      "skills": {
        "titulo": "Experiencias",
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
            "titulo": "Proyecto Blockchain",
            "desc": "Asistí de manera autodidacta a la conferencia brindada por el departamento de Ing. en Sistemas de Información de la UTN-FRC."
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
        "titulo": "Habilidades"
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
        "animacion1": "Front-End Developer",
        "animacion2": "Information Systems Engineering Student",
        "animacion3": "Cybersecurity Enthusiast",
        "animacion4": "Active athlete & music lover",
        "dondeEncontrarme": "Where to find me"
      },
      "about": {
        "titulo": "About me",
        "saludo": "Hi, I'm Guille",
        "parrafo1": "A fourth-year student of Information Systems Engineering at UTN, I aspire to obtain the degree of University Analyst of Information Systems.",
        "parrafo2": "I am passionate about learning and consider myself curious, which is why I am always looking for new knowledge. I can do this self-taught or by attending talks on trending topics that interest me.",
        "titulos_tarjetas": {
          "idioma": "Foreign Language",
          "habilidades": "Soft Skills",
          "gustos": "Personal Interests"
        },
        "idioma": "English",
        "habilidades_lista": [
          "Good communication",
          "Teamwork",
          "Problem-solving",
          "Perseverance and flexibility",
          "Agility with results"
        ],
        "gustos_lista": [
          "Passion for video games",
          "Active athlete",
          "Love for music"
        ]
      },
      "skills": {
        "titulo": "Experiences",
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
            "desc": "Successfully completed a Java programming course at the Cisco Academy."
          },
          {
            "titulo": "Blockchain Project",
            "desc": "Self-taught attendance at the conference given by the Information Systems Engineering department of UTN-FRC."
          },
          {
            "titulo": "Web Development",
            "desc": "Successfully completed a web development programming course dictated by the Desafío Latam academy."
          },
          {
            "titulo": "Playbook",
            "desc": "Self-taught attendance at the cybersecurity conference given by the Information Systems Engineering department of UTN-FRC and Bancor."
          }
        ]
      },
      "skills_logos": {
        "titulo": "Skills"
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