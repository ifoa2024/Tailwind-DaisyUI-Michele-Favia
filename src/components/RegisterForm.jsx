// src/components/RegisterForm.jsx
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white p-4 shadow-md rounded">
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-sm font-medium">
          Nome
        </label>
        <input
          id="firstName"
          type="text"
          {...register('firstName', { required: 'Il nome è obbligatorio' })}
          className={`mt-1 block w-full p-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded`}
        />
        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="lastName" className="block text-sm font-medium">
          Cognome
        </label>
        <input
          id="lastName"
          type="text"
          {...register('lastName', { required: 'Il cognome è obbligatorio' })}
          className={`mt-1 block w-full p-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded`}
        />
        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="todo" className="block text-sm font-medium">
          To-Do
        </label>
        <input
          id="todo"
          type="text"
          {...register('todo', { minLength: { value: 10, message: 'La To-Do deve avere almeno 10 caratteri' } })}
          className={`mt-1 block w-full p-2 border ${errors.todo ? 'border-red-500' : 'border-gray-300'} rounded`}
        />
        {errors.todo && <p className="text-red-500 text-sm">{errors.todo.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
      >
        Invia
      </button>
    </form>
  );
};

export default RegisterForm;
