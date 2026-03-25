import React from 'react';
import './Card.css';

const Card = ({ title, description, image }) => {
  const handleAlert = () => {
    alert(title);
  };

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <button className="card-button" onClick={handleAlert}>
          Дізнатися більше
        </button>
      </div>
    </div>
  );
};

export default Card;