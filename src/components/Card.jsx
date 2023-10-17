import React from 'react';
import '../styles/Card.css';

const Card = ({ character }) => {
  const getStatusColor = () => {
    switch (character.status.toLowerCase()) {
      case 'alive':
        return 'green';
      case 'dead':
        return 'red';
      default:
        return 'gray';
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className='character-card'>
      <img
        className='character-img'
        src={character.image}
        alt={character.name}
      />
      <div className='character-info-container'>
        <div className='character-info-section'>
          <h2 className='character-name'>{character.name}</h2>
          <p className='character-status'>
            <span className={`bullet-${getStatusColor()}`}></span>
            {capitalizeFirstLetter(character.status)} -{' '}
            {capitalizeFirstLetter(character.species)}
          </p>
        </div>
        <div className='character-info-section'>
          <p className='sub-heading'>Last known location: </p>
          <p className='character-info'>
            {capitalizeFirstLetter(character.location.name)}
          </p>
        </div>
        <div className='character-info-section'>
          <p className='sub-heading'>First seen in: </p>
          <p className='character-info'>
            {capitalizeFirstLetter(character.origin.name)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
