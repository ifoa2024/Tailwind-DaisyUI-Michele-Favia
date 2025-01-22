import React from 'react';
import RegisterForm from '../components/RegisterForm'; // Percorso corretto per il componente form

const FormPage = () => {
    return (
      <div className="container mx-auto py-16">
        <h1 className="text-2xl font-bold text-center mb-8">Pagina del Form</h1>
        <RegisterForm />
      </div>
    );
  };
  
  export default FormPage;