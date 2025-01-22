import React from 'react';
import RegisterForm from '../components/RegisterForm';
import FormPage from './pages/FormPage';
const Home = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-4">Benvenuto nella Home</h1>
      <RegisterForm />
    </div>
  );
};

export default Home;
