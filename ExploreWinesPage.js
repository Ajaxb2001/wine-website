import React from 'react';
import '../styles/ExploreWinesPage.css';

const ExploreWinesPage = () => {
  // Sample data for beetroot wines
  const wines = [
    {
      id: 1,
      name: 'Classic Beetroot Red',
      description: 'A rich and earthy red wine with hints of blackberry and a smooth finish.',
      image: 'https://images.pexels.com/photos/8472680/pexels-photo-8472680.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      name: 'Beetroot Rosé',
      description: 'A refreshing rosé with a delicate balance of sweetness and acidity.',
      image: 'https://images.pexels.com/photos/8472680/pexels-photo-8472680.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      name: 'Beetroot Reserve',
      description: 'Our premium reserve wine, aged to perfection with deep, complex flavors.',
      image: 'https://images.pexels.com/photos/8472682/pexels-photo-8472682.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 4,
      name: 'Sparkling Beetroot',
      description: 'A sparkling wine with vibrant beetroot notes, perfect for celebrations.',
      image: 'https://images.pexels.com/photos/8472683/pexels-photo-8472683.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <div className="explore-wines-page">
      <h1>Explore Our Beetroot Wines</h1>
      <p>Discover the unique flavors and aromas of our premium beetroot wine collection.</p>

      <div className="wine-grid">
        {wines.map((wine) => (
          <div key={wine.id} className="wine-card">
            <img src={wine.image} alt={wine.name} className="wine-image" />
            <h2>{wine.name}</h2>
            <p>{wine.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreWinesPage;