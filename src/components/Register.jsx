import React, { useState } from 'react';

const Register = () => {
  const [Data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contacts: '',
  });

  const [Register, setRegister] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const Err = {};
    for (const i in Data) {
      if (!Data[i]) {
        Err[i] = `Please enter your ${i}!`;
      }
    }
    if (Object.keys(Err).length > 0) {
      setErrors(Err);
    } else {
      setRegister(true);
    }
  };

  return (
    <div className="container">
      {Register && (
        <p className="success">Registration successful!</p>
      )}
      <form onSubmit={handleSubmit}>
        <h2>Form</h2>
        {Object.keys(Data).map((i) => (
          <label key={i}>
            {i.charAt(0).toUpperCase() + i.slice(1)}:
            {i === 'contacts' ? (
              <div><input name={i} value={Data[i]} onChange={handleChange} /></div>
            ) : (
              <div><input type={i === 'email' ? 'email' : 'text'} name={i} value={Data[i]} onChange={handleChange} /></div>
            )}
            {errors[i] && <p className="error">{errors[i]}</p>}
          </label>
        ))}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;