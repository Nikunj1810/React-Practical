import React, { useState } from 'react';
import Page1 from '../lec0602/Page1';
import Page2 from '../lec0602/Page2';
import Page3 from '../lec0602/Page3';
import Page4 from '../lec0602/Page4';

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    address: '',
    gender: '',
    city: '',
    percentage: '',
    board: '',
    hobbies: [],
    cricketLevel: '',
    runs: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const newHobbies = checked
        ? [...formData.hobbies, value]
        : formData.hobbies.filter((hobby) => hobby !== value);
      setFormData({ ...formData, hobbies: newHobbies });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  return (
    <div>
      {step === 1 && <Page1 formData={formData} handleChange={handleChange} nextStep={nextStep} />}
      {step === 2 && <Page2 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <Page3 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />}
      {step === 4 && <Page4 formData={formData} prevStep={prevStep} />}
    </div>
  );
};

export default Form;
