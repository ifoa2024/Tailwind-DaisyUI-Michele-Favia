import React, { useState } from "react";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Per resettare il modulo dopo l'invio
  } = useForm();

  const [tasks, setTasks] = useState([]); // Stato per la lista delle attività

  const onSubmit = (data) => {
    setTasks([...tasks, data.todo]); // Aggiungi il testo della To-Do List
    alert("Form inviato con successo!");
    reset(); // Resetta il modulo dopo l'invio
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Registrazione e To-Do List</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Nome */}
        <div>
          <label className="block text-lg font-medium mb-1" htmlFor="nome">
            Nome:
          </label>
          <input
            type="text"
            id="nome"
            {...register("nome", { required: "Il nome è obbligatorio" })}
            className="input input-bordered w-full"
          />
          {errors.nome && <p className="text-red-500 mt-1">{errors.nome.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-lg font-medium mb-1" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "L'email è obbligatoria",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Inserisci un'email valida",
              },
            })}
            className="input input-bordered w-full"
          />
          {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
        </div>

        {/* To-Do List */}
        <div>
          <label className="block text-lg font-medium mb-1" htmlFor="todo">
            To-Do List:
          </label>
          <textarea
            id="todo"
            {...register("todo", {
              required: "La To-Do List è obbligatoria",
              minLength: {
                value: 10,
                message: "La To-Do List deve contenere almeno 10 caratteri",
              },
            })}
            className="textarea textarea-bordered w-full"
          />
          {errors.todo && <p className="text-red-500 mt-1">{errors.todo.message}</p>}
        </div>

        {/* Pulsante di invio */}
        <button type="submit" className="btn btn-primary">
          Invia
        </button>
      </form>

      {/* Elenco delle attività */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Lista delle attività:</h2>
        <ul className="list-disc pl-6">
          {tasks.map((task, index) => (
            <li key={index} className="mb-2">
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RegisterForm;
