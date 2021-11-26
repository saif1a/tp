import React, { useState } from 'react';

function Formular(props) {
  const { formData, handleSubmit, handleChange } = props.data;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Select a gender:</p>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={handleChange}
            required
          />
          <label htmlFor="male">Male</label>
        </div>
        <div>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            onChange={handleChange}
            required
          />
          <label htmlFor="female">Female</label>
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="countries">Date:</label>
          <input
            name="date"
            id="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="country">Choose a country:</label>
          <select name="country" id="country" onChange={handleChange} required>
            <option disabled selected value>
              {' '}
              -- select an option --{' '}
            </option>

            <option value="france">France</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="tunisia">Tunisia</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Formular;
