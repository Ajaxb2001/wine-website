import React from 'react';
import '../styles/WineInfoPage.css';
import wineImage1 from '../images/red1.jpg'; // Replace with your image paths
import wineImage2 from '../images/red2.jpg';
import wineImage3 from '../images/red3.jpg';

const WineInfoPage = () => {
  return (
    <div className="wine-info-page">
      <h1>Our Beetroot Wine</h1>
      <p>
        Our beetroot wine is crafted with care, using the finest organic beets. It offers a unique
        flavor profile that is both earthy and refreshing, perfect for any occasion.
      </p>

      {/* Tasting Notes Section */}
      <div className="wine-details">
        <h2>Tasting Notes</h2>
        <ul>
          <li>Earthy undertones</li>
          <li>Hints of blackberry</li>
          <li>Smooth finish</li>
        </ul>
      </div>

      {/* Benefits Section */}
      <div className="benefits-section">
        <h2>Benefits of Beetroot Wine</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <img src={wineImage1} alt="Health Benefits" />
            <h3>Rich in Antioxidants</h3>
            <p>
              Beetroot wine is packed with antioxidants that help combat oxidative stress and promote
              overall health.
            </p>
          </div>
          <div className="benefit-card">
            <img src={wineImage2} alt="Heart Health" />
            <h3>Supports Heart Health</h3>
            <p>
              The natural nitrates in beetroot help improve blood flow and lower blood pressure.
            </p>
          </div>
          <div className="benefit-card">
            <img src={wineImage3} alt="Unique Flavor" />
            <h3>Unique Flavor Profile</h3>
            <p>
              Our wine offers a distinct earthy flavor with hints of sweetness, making it a standout
              choice for wine enthusiasts.
            </p>
          </div>
        </div>
      </div>

      {/* Motivation Section */}
      <div className="motivation-section">
        <h2>Motivation Behind the Product</h2>
        <p>
          At Golden Oak Winery, we believe in innovation and sustainability. Our beetroot wine was
          born out of a desire to create something unique and health-conscious. By using organic
          beets, we not only deliver a premium product but also support sustainable farming practices.
        </p>
        <p>
          Our mission is to redefine the wine industry by offering a product that is both delicious
          and beneficial for your health. We are committed to quality, sustainability, and
          customer satisfaction.
        </p>
      </div>
    </div>
  );
};

export default WineInfoPage;