import React from 'react';

const DesignerCard = ({ designer, onSave, isSaved }) => {
  return (
    <div className="designer-card">
      <img src={designer.image} alt={designer.name} className="designer-img" />
      <div className="designer-details">
        <h3>{designer.name}</h3>
        <p><strong>Skills:</strong> {designer.skills.join(', ')}</p>
        <p><strong>Rating:</strong> ⭐ {designer.rating}</p>
        {!isSaved ? (
          <button onClick={() => onSave(designer)}>Save Designer</button>
        ) : (
          <p>This designer is saved!</p>
        )}
      </div>
    </div>
  );
};

export default DesignerCard;
