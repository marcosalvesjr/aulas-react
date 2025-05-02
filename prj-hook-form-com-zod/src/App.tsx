"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z
  .object({
    password: z.string().min(6, "A senha precisa ter pelo menos 6 caracteres"),
    confirmPassword: z.string(),
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas precisam ser iguais",
  });

type FormProps = z.infer<typeof schema>;

function App() {
  const [value, setValue] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  console.log(errors);

  const handleForm = (data: FormProps) => {
    console.log(data);
    setValue(JSON.stringify(data));
  };

  return (
    <>
      <div className="shadow-zinc-900 shadow-md flex flex-col justify-center items-center bg-zinc-950  rounded-md w-120 h-120 mx-auto mt-10">
        <h1 className="font-bold text-emerald-500 text-4xl mb-4">ZOD</h1>
        <form
          onSubmit={handleSubmit(handleForm)}
          className="flex flex-col justify-center items-center"
        >
          <input
            {...register("password")}
            type="password"
            className="placeholder-zinc-100 bg-gray-600  rounded-md p-2 m-2"
            placeholder="Senha"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password?.message}</p>
          )}
          <input
            {...register("confirmPassword")}
            type="password"
            className="placeholder-zinc-100 bg-gray-600  rounded-md p-2 m-2"
            placeholder="Confirmar senha"
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword?.message}</p>
          )}
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-md px-2 py-1.5 ">
            Enviar
          </button>
        </form>
        {value != "" && <p className="text-white">{value}</p>}
      </div>
    </>
  );
}

export default App;
