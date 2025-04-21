import React from 'react';
import { useDesigners } from '../context/DesignersContext'; // Import context hook
import DesignerCard from '../components/DesignerCard';

const Saved = () => {
  const { savedDesigners } = useDesigners(); // Access saved designers from context

  return (
    <div>
      <h2>Saved Designers</h2>
      {savedDesigners.length === 0 ? (
        <p>No saved designers yet.</p> // Display message if no designers are saved
      ) : (
        <div className="designer-grid">
          {savedDesigners.map((designer, index) => (
            <DesignerCard
              key={index}
              designer={designer}
              isSaved={true} // All saved designers are considered "saved"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Saved;
