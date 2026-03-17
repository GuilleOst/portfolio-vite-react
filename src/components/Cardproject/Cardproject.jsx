import React from 'react';
import styled from 'styled-components';

const Cardproject = ({ imgSrc, title, description, githubLink }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <img src={imgSrc} alt={title} className="card__image" />
        
        <div className="card__content">
          <p className="card__title">{title}</p>
          <p className="card__description">{description}</p>
          
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-icon"
              onClick={(e) => e.stopPropagation()} 
            >
              <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;

  .card {
    position: relative;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); 
    
    /* MÓVIL POR DEFECTO: Diseño de tarjeta estándar (apilado vertical) */
    display: flex;
    flex-direction: column;
    background-color: #1f2937; /* El contenedor base ahora tiene el color oscuro */
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card__image {
    display: block;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card__content {
    /* MÓVIL POR DEFECTO: Sin posiciones absolutas, se acomoda abajo de la imagen naturalmente */
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  /* MEDIA QUERY PARA PC (Solo aplica si el dispositivo tiene un mouse/puntero preciso) */
  @media (hover: hover) and (pointer: fine) {
    
    .card {
      display: block;
      background-color: transparent; /* Quitamos el color de fondo base en PC */
    }

    .card__content {
      /* En PC vuelve a ser absoluto, tapando la imagen, y se esconde rotado */
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #1f2937;
      transform: rotateX(-90deg);
      transform-origin: bottom;
      z-index: 2;
    }

    /* Activamos las animaciones de PC al pasar el mouse */
    .card:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
    }

    .card:hover .card__image {
      transform: scale(0);
      opacity: 0;
    }

    .card:hover .card__content {
      transform: rotateX(0deg);
    }
  }

  /* Textos e íconos (comunes a ambos) */
  .card__title {
    margin: 0;
    font-size: 22px;
    color: #ffffff; 
    font-weight: 700;
  }

  .card__description {
    margin: 10px 0 0;
    font-size: 14px;
    color: #cbd5e1;
    line-height: 1.4;
  }

  .github-icon {
    margin-top: 15px;
    color: #ffffff;
    font-size: 28px;
    display: inline-block;
    transition: all 0.3s ease;
  }

  .github-icon:hover {
    color: #9ca3af;
  }
`;

export default Cardproject;