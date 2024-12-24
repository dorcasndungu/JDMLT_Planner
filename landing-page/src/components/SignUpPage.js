import React, { useState } from 'react';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    club: '',
    customClub: '',
    role: '',
    customRole: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const clubOptions = [
    'IT Club',
    'IEEE',
    'GDG on Campus',
    'Math Club',
    'Finance Club',
    'Music Club',
    'Club not listed',
  ];

  const roleOptions = [
    'President',
    'Vice President',
    'Secretary',
    'Treasurer',
    'Marketing',
    'Logistics',
    'Role not listed',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    const { email, firstName, lastName, club, role, customClub, customRole } = formData;

    if (!email || !firstName || !lastName) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    const selectedClub = club === 'Club not listed' ? customClub : club;
    const selectedRole = role === 'Role not listed' ? customRole : role;

    if (!selectedClub) {
      setErrorMessage('Please specify your club.');
      return;
    }

    if (!selectedRole) {
      setErrorMessage('Please specify your role.');
      return;
    }

    console.log('Form Submitted:', { email, firstName, lastName, selectedClub, selectedRole });
    alert('Sign-up successful!');
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
      <h1>Club Sign-Up</h1>
      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* First Name */}
        <div>
          <label>First Name: </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Last Name */}
        <div>
          <label>Last Name: </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Club */}
        <div>
          <label>Club: </label>
          <select
            name="club"
            value={formData.club}
            onChange={handleChange}
            required
          >
            <option value="">Select a club</option>
            {clubOptions.map((club, index) => (
              <option key={index} value={club}>
                {club}
              </option>
            ))}
          </select>
          {formData.club === 'Club not listed' && (
            <input
              type="text"
              name="customClub"
              placeholder="Enter club name"
              value={formData.customClub}
              onChange={handleChange}
              required
            />
          )}
        </div>

        {/* Role */}
        <div>
          <label>Role: </label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Select a role</option>
            {roleOptions.map((role, index) => (
              <option key={index} value={role}>
                {role}
              </option>
            ))}
          </select>
          {formData.role === 'Role not listed' && (
            <input
              type="text"
              name="customRole"
              placeholder="Enter role name"
              value={formData.customRole}
              onChange={handleChange}
              required
            />
          )}
        </div>

        {/* Error Message */}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

        {/* Submit */}
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
