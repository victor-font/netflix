import React from "react";
import PropTypes from "prop-types";
import "./exampleCard.css";
import '../../node_modules/font-awesome/css/font-awesome.min.css';

/**
 * Primary UI component for user interaction
 */
export const Card = ({ title ,image, rating, text, darkMode, size, genre, actor, company}) => {
  const cardMode = darkMode ? "card--dark-mode" : "card--default-mode";
  return (
    <div className={`card card--${size} ${cardMode}`}>
      <div>
        <div className={`gradient--${cardMode}`}>
          <img src={image}/>
        </div>
        <h1 className={`title--${cardMode}`}>{title}</h1>
        <button type="button" className={`watch-now--${cardMode}`}><a href="" className={`button-text--${cardMode}`}>Ver ahora</a></button>
      </div>
      <div className="rating">
        <i className="fa fa-star"></i>
        {rating}
      </div>
      <div className="order">
      <div className="description-section">
        <p className="card-text">{text}</p>
      </div>
      <div className="tags-section">
        <p className="card-tag"><span className="card-tag-h">Género: </span>{genre}</p>
        <p className="card-tag"><span className="card-tag-h">Reparto: </span>{actor}</p>
        <p className="card-tag"><span className="card-tag-h">Compañías: </span>{company}</p> <br/>
      </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
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
  rating: PropTypes.string.isRequired,

  text: PropTypes.string.isRequired,

  genre: PropTypes.string.isRequired,

  actor: PropTypes.string.isRequired,

  company: PropTypes.string.isRequired,
};

Card.defaultProps = {
  darkMode: false,
  size: "medium",
};
