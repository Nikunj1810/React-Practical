import React from 'react';

const Page2 = ({ formData, handleChange, nextStep, prevStep }) => {
  return (
    <div>
      <h2>Education Details</h2>
      <label>10th Standard Percentage: <input type="text" name="percentage" value={formData.percentage} onChange={handleChange} /></label><br/>
      <label>Board: 
        <input type="radio" name="board" value="State" checked={formData.board === 'State'} onChange={handleChange} /> State
        <input type="radio" name="board" value="National" checked={formData.board === 'National'} onChange={handleChange} /> National (CBSE)
        <input type="radio" name="board" value="International" checked={formData.board === 'International'} onChange={handleChange} /> International
      </label><br/>
      <label>Hobbies: 
        <input type="checkbox" name="hobbies" value="Painting" checked={formData.hobbies.includes('Painting')} onChange={handleChange} /> Painting
        <input type="checkbox" name="hobbies" value="Singing" checked={formData.hobbies.includes('Singing')} onChange={handleChange} /> Singing
        <input type="checkbox" name="hobbies" value="Dancing" checked={formData.hobbies.includes('Dancing')} onChange={handleChange} /> Dancing
        <input type="checkbox" name="hobbies" value="Reading" checked={formData.hobbies.includes('Reading')} onChange={handleChange} /> Reading
        <input type="checkbox" name="hobbies" value="Playing" checked={formData.hobbies.includes('Playing')} onChange={handleChange} /> Playing
      </label><br/>
      <button type="button" onClick={prevStep}>Previous</button>
      <button type="button" onClick={nextStep}>Next</button>
    </div>
  );
};

export default Page2;
