import React, { useState } from 'react';

function Form() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission 
    console.log('Form submitted:', formState);
  };

  const validateForm = () => {
    const { name, email, phone } = formState;
    if (!name || !email || !phone) {
      return false;
    }
    return true;
  };

  return (
    <>
    <div className='text-center'>
    <form onSubmit={handleFormSubmit}>
      <label className='mt-2 h6'>
        Name:
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label className='mt-2 h6'>
        Email : 
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label className='mt-2 h6'>
        Phone Number:
        <input
          type="tel"
          name="phone"
          value={formState.phone}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit"  className='btn btn-primary mt-3' disabled={!validateForm()}>
        Submit
      </button>
    </form>
    </div>
    <hr />
    </>
  );
}

export default Form;