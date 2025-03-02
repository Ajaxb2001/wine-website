import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/HomePage.css';

const HomePage = () => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Prafulla Winery</h1>
          <p>Discover the rich flavors of our premium beetroot wine.</p>
          {/* Add Link to the Explore Wines page */}
          <Link to="/explore-wines">
            <button className="cta-button">Explore Our Wines</button>
          </Link>
        </div>
      </div>

      {/* Feature Section */}
      <div className="feature-section">
        <div className="feature-card" onClick={() => openModal('wine-tasting')}>
          <h2>Wine Tasting Events</h2>
          <p>Join us for exclusive wine tasting events and experience the finest beetroot wines.</p>
        </div>
        <div className="feature-card" onClick={() => openModal('vineyard-tour')}>
          <h2>Vineyard Tours</h2>
          <p>Explore our lush vineyards and learn about our sustainable winemaking process.</p>
        </div>
        <div className="feature-card" onClick={() => openModal('award-winning')}>
          <h2>Award-Winning Wines</h2>
          <p>Our beetroot wines have been recognized globally for their exceptional quality.</p>
        </div>
      </div>

      {/* Modal */}
      {modalContent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            {modalContent === 'wine-tasting' && (
              <div>
                <h2>Wine Tasting Events</h2>
                <p>
                  Join us for exclusive wine tasting events where you can savor the rich flavors of our
                  premium beetroot wines. Our expert sommeliers will guide you through a journey of taste
                  and aroma.
                </p>
                <img src="https://images.pexels.com/photos/5490196/pexels-photo-5490196.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Vineyard Tour" />
              </div>
            )}
            {modalContent === 'vineyard-tour' && (
              <div>
                <h2>Vineyard Tours</h2>
                <p>
                  Explore our lush vineyards and learn about our sustainable winemaking process. Walk
                  through the rows of beetroot plants and see how we transform them into award-winning wines.
                </p>
                <img src="https://images.pexels.com/photos/30832872/pexels-photo-30832872/free-photo-of-french-wine-cellar-in-margaux-with-oak-barrels.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Vineyard Tour" />
              </div>
            )}
            {modalContent === 'award-winning' && (
              <div>
                <h2>Award-Winning Wines</h2>
                <p>
                  Our beetroot wines have been recognized globally for their exceptional quality. Discover
                  the secrets behind our award-winning blends and the passion that goes into every bottle.
                </p>
                <img src="https://images.pexels.com/photos/6412253/pexels-photo-6412253.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Award Winning" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;