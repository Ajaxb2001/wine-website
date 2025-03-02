import React from 'react';
import '../styles/AboutPage.css';
import videoFile from '../images/wine_video.mp4'; // Adjust the path to your video file

const AboutPage = () => {
  // List of Board of Directors
  const boardOfDirectors = [
    'Mahesh Deshmukh',
    'Manjula Deshmukh',
    'Amol Sinhasane',
    'Dr. Nikhilchandra Mahajan',
    'Akshay Shinde',
    'Nitin Rasate',
    'Prashant Satpute',
    'Prashant Mariguddi',
  ];

  return (
    <div className="about-page">
      <h1>About Golden Oak Winery</h1>
      <p>
        Golden Oak Winery is a family-owned vineyard dedicated to crafting the finest beetroot wines.
        Our passion for winemaking and sustainable practices ensures every bottle is a masterpiece.
      </p>

      {/* Video Section */}
      <div className="video-section">
        <h2>Our Story</h2>
        <p>
          Watch this video to learn more about our journey, our values, and what makes our beetroot wines truly special.
        </p>
        <div className="video-container">
          <video controls width="100%">
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Why Invest Section */}
      <div className="invest-section">
        <h2>Why Should You Invest in Us?</h2>
        <p>
          At Golden Oak Winery, we are not just producing wine; we are creating a legacy. Here’s why investing in us is a decision you won’t regret:
        </p>
        <ul className="invest-list">
          <li>
            <strong>Unique Product:</strong> Our beetroot wine is a one-of-a-kind offering in the market, combining health benefits with exceptional taste.
          </li>
          <li>
            <strong>Sustainable Practices:</strong> We are committed to eco-friendly winemaking, ensuring long-term sustainability and environmental responsibility.
          </li>
          <li>
            <strong>Growing Demand:</strong> The global demand for innovative and health-conscious beverages is on the rise, and we are at the forefront of this trend.
          </li>
          <li>
            <strong>Experienced Leadership:</strong> Our board of directors brings decades of expertise in winemaking, business, and innovation.
          </li>
          <li>
            <strong>Proven Success:</strong> Our wines have already gained recognition and accolades, showcasing our potential for growth and excellence.
          </li>
        </ul>
        <p>
          Join us in revolutionizing the wine industry. Your investment will not only yield financial returns but also contribute to a sustainable and innovative future.
        </p>
      </div>

      {/* Board of Directors Section */}
      <div className="board-section">
        <h2>Board of Directors</h2>
        <ul className="board-list">
          {boardOfDirectors.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;