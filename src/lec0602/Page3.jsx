import React from 'react';

const Page3 = ({ formData, handleChange, nextStep, prevStep }) => {
  return (
    <div>
      <h2>Cricket Details</h2>
      <label>Cricket Level: 
        <select name="cricketLevel" value={formData.cricketLevel} onChange={handleChange}>
          <option value="Domestic">Domestic</option>
          <option value="International">International</option>
          <option value="State Level">State Level</option>
        </select>
      </label><br/>
      <label>Runs: <input type="text" name="runs" value={formData.runs} onChange={handleChange} /></label><br/>
      <button type="button" onClick={prevStep}>Previous</button>
      <button type="button" onClick={nextStep}>Next</button>
    </div>
  );
};

export default Page3;
