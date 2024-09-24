// src/components/ServiceItem.js
import React, { useState } from 'react';

const ServiceItem = ({ service, onDelete, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedService, setUpdatedService] = useState(service);

    const handleUpdate = () => {
        onUpdate(updatedService);
        setIsEditing(false);
    };

    return (
        <tr>
            {isEditing ? (
                <>
                    <td>{service.id}</td>
                    <td>
                        <input
                            type="text"
                            value={updatedService.name}
                            onChange={(e) => setUpdatedService({ ...updatedService, name: e.target.value })}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            value={updatedService.description}
                            onChange={(e) => setUpdatedService({ ...updatedService, description: e.target.value })}
                        />
                    </td>
                    <td>
                        <input
                            type="number"
                            value={updatedService.price}
                            onChange={(e) => setUpdatedService({ ...updatedService, price: parseFloat(e.target.value) })}
                        />
                    </td>
                    <td>
                        <button onClick={handleUpdate}>Update</button>
                    </td>
                </>
            ) : (
                <>
                    <td>{service.id}</td>
                    <td>{service.name}</td>
                    <td>{service.description}</td>
                    <td>${service.price}</td>
                    <td>
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                        <button onClick={() => onDelete(service)}>Delete</button>
                    </td>
                </>
            )}
        </tr>
    );
};

export default ServiceItem;
