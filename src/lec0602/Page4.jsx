import React from 'react';

const Page4 = ({ formData, prevStep, handleSubmit }) => {
  const displaySummary = () => {
    return Object.entries(formData).map(([key, value]) => (
      <tr key={key}>
        <td style={{ border: '3px solid #ddd', padding: '8px' }}>
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </td>
        <td style={{ border: '3px solid #ddd', padding: '8px' }}>
          {Array.isArray(value) ? value.join(', ') : value}
        </td>
      </tr>
    ));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>Show All Details</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', border: '3px solid #ddd' }}>
        <thead>
          <tr>
            <th style={{ border: '3px solid #ddd', padding: '8px' }}>Field</th>
            <th style={{ border: '3px solid #ddd', padding: '8px' }}>Value</th>
          </tr>
        </thead>
        <tbody>
          {displaySummary()}
        </tbody>
      </table>
      <div style={{ marginTop: '20px' }}>
        <button type="button" onClick={prevStep} style={{ marginRight: '10px' }}>
          Previous
        </button>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Page4;