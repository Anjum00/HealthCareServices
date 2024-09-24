// src/App.js
import React, { useState, useEffect } from 'react';
import ServiceList from './Components/ServiceList';
import AddServiceForm from './Components/AddServiceForm';
import './App.css';

const App = () => {
    const defaultServices = [
        { id: 1, name: 'General Checkup', description: 'Complete health checkup.', price: 50 },
        { id: 2, name: 'Dental Checkup', description: 'Checkup of teeth and gums.', price: 30 },
        { id: 3, name: 'Blood Test', description: 'Complete blood examination.', price: 20 },
        { id: 4, name: 'X-Ray', description: 'X-Ray for bones and joints.', price: 100 },
        { id: 5, name: 'Physiotherapy', description: 'Therapeutic exercise and treatment.', price: 70 },
        { id: 6, name: 'Vaccination', description: 'Vaccines for various diseases.', price: 40 },
        { id: 7, name: 'Nutritional Consultation', description: 'Consultation for dietary advice.', price: 60 },
        { id: 8, name: 'Mental Health Counseling', description: 'Support for mental health issues.', price: 80 },
        { id: 9, name: 'Eye Checkup', description: 'Comprehensive eye examination.', price: 90 },
        { id: 10, name: 'Skin Consultation', description: 'Consultation for skin-related issues.', price: 50 },
    ];

    const [services, setServices] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false);

    // Load services from localStorage or set default services if none exist
    useEffect(() => {
        const storedServices = JSON.parse(localStorage.getItem('services'));
        if (storedServices && storedServices.length > 0) {
            setServices(storedServices);
        } else {
            setServices(defaultServices);
            localStorage.setItem('services', JSON.stringify(defaultServices)); // Store defaults in local storage
        }
    }, []);

    // Save services to localStorage whenever services change
    useEffect(() => {
        localStorage.setItem('services', JSON.stringify(services));
    }, [services]);

    const addService = (newService) => {
        setServices([...services, { ...newService, id: services.length + 1 }]);
        setIsFormVisible(false); // Hide form after adding a service
    };

    const updateService = (updatedService) => {
        setServices(services.map(service => (service.id === updatedService.id ? updatedService : service)));
    };

    const deleteService = (serviceToDelete) => {
        setServices(services.filter(service => service.id !== serviceToDelete.id));
    };

    return (
        <div className="App">
            <h1>Healthcare Services</h1>
            <button onClick={() => setIsFormVisible(!isFormVisible)}>
                {isFormVisible ? 'Hide Form' : 'Add Service'}
            </button>
            {isFormVisible && <AddServiceForm onAddService={addService} />}
            <ServiceList services={services} onDelete={deleteService} onUpdate={updateService} />
        </div>
    );
};

export default App;
