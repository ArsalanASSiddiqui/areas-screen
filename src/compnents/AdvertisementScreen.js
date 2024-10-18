import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdvertisementScreen = () => {
  const [advertisements, setAdvertisements] = useState([]);
  const [selectedArea, setSelectedArea] = useState('Saddar');

  useEffect(() => {
    const fetchAdvertisements = async () => {
      const response = await fetch('http://localhost:5000/api/products'); // Adjust this to your API endpoint
      const data = await response.json();
      setAdvertisements(data);
    };

    fetchAdvertisements();
  }, []);

  const handleAreaChange = (area) => {
    setSelectedArea(area);
  };

  const filteredAds = advertisements.filter(ad => ad.area === selectedArea);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Advertisement Screen</h2>
      <div className="text-center mb-4">
        <button className="btn btn-primary mx-2" onClick={() => handleAreaChange('Saddar')}>Saddar</button>
        <button className="btn btn-secondary mx-2" onClick={() => handleAreaChange('Korangi')}>Korangi</button>
        <button className="btn btn-success mx-2" onClick={() => handleAreaChange('Defence')}>Defence</button>
      </div>

      <Carousel interval={3000} pause="hover" controls={true} wrap={true}>
        {filteredAds.length > 0 ? (
          filteredAds.map((ad, index) => (
            <Carousel.Item key={index} interval={3000}>
              <div className="d-flex justify-content-center">
                <img
                  src={`http://localhost:5000/${ad.image}`}
                  className="d-block w-100"
                  alt={ad.english}
                  style={{ objectFit: 'cover', height: '400px' }} // Adjust the height as needed
                />
              </div>
              {/* Text below the image */}
              <div className="text-center mt-3">
                <h3>{ad.english}</h3>
                <p>{ad.arabic}</p>
                {/* Feature section as shown in your example */}
                <div>
                  <ul className="list-unstyled">
                    <li>Autoplay</li>
                    <li>Next and Previous Buttons</li>
                    <li>Select a desired slide</li>
                  </ul>
                  <p className="font-italic">Made by {ad.maker}</p>
                </div>
              </div>
            </Carousel.Item>
          ))
        ) : (
          <div>
            <Carousel.Item>
              <div className="d-flex justify-content-center">
                <h5>No advertisements available for this area.</h5>
              </div>
            </Carousel.Item>
          </div>
        )}
      </Carousel>
    </div>
  );
};

export default AdvertisementScreen;
