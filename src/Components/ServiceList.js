// src/components/ServiceList.js
import React from 'react';
import ServiceItem from './ServiceItem';

const ServiceList = ({ services, onDelete, onUpdate }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {services.map((service) => (
                    <ServiceItem 
                        key={service.id}
                        service={service}
                        onDelete={onDelete}
                        onUpdate={onUpdate}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default ServiceList;
