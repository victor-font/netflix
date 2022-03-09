import React from "react";
import PropTypes from "prop-types";
import "./exampleCard.css";

/**
 * Primary UI component for user interaction
 */
export const Card = ({ image, text, darkMode, size, genre, actor, company }) => {
  const cardMode = darkMode ? "card--dark-mode" : "card--default-mode";
  return (
    <div className={`card card--${size} ${cardMode}`}>
      <div>
        <div className={`gradient--${cardMode}`}>
          <img src={image}/>
        </div>
        <button type="button" className={`watch-now--${cardMode}`}><a href="https:\\www.google.com" className={`button-text--${cardMode}`}>Ver ahora</a></button>
      </div>
      <li>
      <span class="font-awesome-icons star"></span> No se cual es el código de la estrella ni si hay una estrella sin meter el fontawesome el cual no puedo meter
      </li>
      <div className="order">
      <div className="description-section">
        <p className="card-text">{text}</p>
      </div>
      <div className="tags-section">
        <p className="card-genre"><span className="card-genre-h">Género: </span>{genre}</p>
        <p className="card-actor"><span className="card-actor-h">Reparto: </span>{actor}</p>
        <p className="card-company"><span className="card-company-h">Compañías: </span>{company}</p> <br/>
      </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  /**
   * El modo de colores de la tarjeta
   */
  darkMode: PropTypes.bool,
  /**
   * El tamaño de la tarjeta
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * El contenido de la tarjeta
   */
  text: PropTypes.string.isRequired,

  genre: PropTypes.string.isRequired,

  actor: PropTypes.string.isRequired,

  company: PropTypes.string.isRequired,
};

Card.defaultProps = {
  darkMode: false,
  size: "medium",
};
