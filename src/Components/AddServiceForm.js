// src/components/AddServiceForm.js
import React, { useState } from 'react';

const AddServiceForm = ({ onAddService }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && description && price) {
            onAddService({ name, description, price: parseFloat(price) });
            setName('');
            setDescription('');
            setPrice('');
        } else {
            alert('Please fill all fields');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Service Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="Service Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <input type="number" placeholder="Service Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
            <button type="submit">Add Service</button>
        </form>
    );
};

export default AddServiceForm;
