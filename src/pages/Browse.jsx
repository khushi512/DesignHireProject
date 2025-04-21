import React, { useState } from 'react';
import { useDesigners } from '../context/DesignersContext';
import DesignerCard from '../components/DesignerCard';
import SearchBar from '../components/SearchBar';
import dummyDesigners from '../assets/dummyDesigners';

const Browse = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { savedDesigners, saveDesigner } = useDesigners(); // Access context

  const filteredDesigners = dummyDesigners.filter(designer =>
    designer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    designer.skills.join(',').toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSaveDesigner = (designer) => {
    saveDesigner(designer); // Save designer to context
  };

  return (
    <div>
      <h2>Browse Designers</h2>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <div className="designer-grid">
        {filteredDesigners.length > 0 ? (
          filteredDesigners.map((designer, index) => (
            <DesignerCard
              key={index}
              designer={designer}
              onSave={handleSaveDesigner}
              isSaved={savedDesigners.some(d => d.name === designer.name)} // Check if designer is saved
            />
          ))
        ) : (
          <p>No designers match your search.</p>
        )}
      </div>
    </div>
  );
};

export default Browse;
// // This code defines a Browse component that allows users to search for designers by name or skill. It uses the useDesigners context to access saved designers and the saveDesigner function. The component filters the list of dummy designers based on the search term and displays the filtered results using the DesignerCard component. If no designers match the search, it shows a message indicating that no designers were found. The SearchBar component is used to manage the search input and trigger the filtering action.
// // The component is designed to be user-friendly and responsive, allowing users to easily find and save designers they are interested in. It is part of a larger application that helps users discover and manage designers for their projects.