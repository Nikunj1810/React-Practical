// create 3 stage form with following element
// Page 1. Stores all basic details in text form field
//           Name, Surname, Address (Textbox)
//           Gender (Radio button), City (Dropdown)


// Page 2. Education details
//           10th Standard Percentage
//           Board -> State ,National(CBSC), International(Radio)
//           Hobbies -> Painting , Singing, Dancing , Reading , Playing (Checkbox)
// Page 3. Cricket Dropdown
//          Domestic, International, State Lavel
//          Textbox for getting run
// Page 4. Display all inforamtion  in formatted table
//

import React from "react";

const Page1 = ({ formData, handleChange, nextStep }) => {
  return (
    <div>
      <h2>Basic Details</h2>
      <label>
        Name:{" "}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Surname:{" "}
        <input
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Address:{" "}
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Gender:
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender === "Male"}
          onChange={handleChange}
        />{" "}
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={formData.gender === "Female"}
          onChange={handleChange}
        />{" "}
        Female
        <input
          type="radio"
          name="gender"
          value="Other"
          checked={formData.gender === "Other"}
          onChange={handleChange}
        />{" "}
        Other
      </label>
      <br />
      <label>
        City:
        <select name="city" value={formData.city} onChange={handleChange}>
          <option value="Rajkot">Rajkot</option>
          <option value="Surat">Surat</option>
          <option value="Ahmedabad">Ahmedabad</option>
        </select>
      </label>
      <br />
      <button type="button" onClick={nextStep}>
        Next
      </button>
    </div>
  );
};

export default Page1;
