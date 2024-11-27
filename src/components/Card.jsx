import React from 'react';
import pinIcon from '../images/pin.png';

const Card = ({ imageUrl, location, googleMapsUrl, title, startDate, endDate, description }) => {
  // Format the start and end dates
  const start = new Date(startDate);
  const end = new Date(endDate);

  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  const formattedStartDate = start.toLocaleDateString('en-GB', options);
  const formattedEndDate = end.toLocaleDateString('en-GB', options);
  
  const timeFrame = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <div className="card-content">
        <div className="card-location">
          <img src={pinIcon} alt="Location Pin" className="pin-icon" />
          <span className="location-text">{location}</span> {/* Added class here */}
          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
            View on Google Maps
          </a>
        </div>
        <h2 className="card-title">{title}</h2>
        <p className="card-timeframe">{timeFrame}</p> {/* Timeframe here */}
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
