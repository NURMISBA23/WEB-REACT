'use client';

import { useState } from 'react';

export default function AddProperty() {
  const [form, setForm] = useState({
    name: '',
    type: '',
    price: '',
    address: '',
    bedrooms: '',
    bathrooms: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/page', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        alert('Property added successfully!');
      } else {
        alert('Failed to add property');
      }
    } catch (error) {
      alert('Failed to add property');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input type="text" name="type" placeholder="Type" value={form.type} onChange={handleChange} />
      <input type="number" name="price" placeholder="Price" value={form.price} onChange={handleChange} />
      <input type="text" name="address" placeholder="Address" value={form.address} onChange={handleChange} />
      <input type="number" name="bedrooms" placeholder="Bedrooms" value={form.bedrooms} onChange={handleChange} />
      <input type="number" name="bathrooms" placeholder="Bathrooms" value={form.bathrooms} onChange={handleChange} />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange}></textarea>
      <button type="submit">Add Property</button>
    </form>
  );
}
