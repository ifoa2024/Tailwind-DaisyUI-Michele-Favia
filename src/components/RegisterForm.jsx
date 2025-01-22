import React from "react";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data: ", data);
    alert("Form inviato con successo!");
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

        {/* Cognome */}
        <div>
          <label className="block text-lg font-medium mb-1" htmlFor="cognome">
            Cognome:
          </label>
          <input
            type="text"
            id="cognome"
            {...register("cognome", { required: "Il cognome è obbligatorio" })}
            className="input input-bordered w-full"
          />
          {errors.cognome && <p className="text-red-500 mt-1">{errors.cognome.message}</p>}
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
    </div>
  );
};

export default RegisterForm;
