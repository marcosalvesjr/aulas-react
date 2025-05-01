"use client";

import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

interface IForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required("Campo obrigatório"),
  email: Yup.string().required("Campo obrigatório"),
  password: Yup.string()
    .min(6, "Precisa ter no mínimo 6 caracteres")
    .required("Campo obrigatório"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "As senhas precisam ser iguais")
    .required("Campo obrigatório"),
});

const Formulario = () => {
  const [value, setValue] = useState<string | undefined>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all", resolver: yupResolver(schema) });

  console.log({ errors });

  const handleSubmitData = (data: IForm) => {
    console.log(data);
    setValue(JSON.stringify(data));
  };

  return (
    <form
      className="flex flex-col justify-center items-center gap-2 mt-4"
      onSubmit={handleSubmit(handleSubmitData)}
    >
      <h1 className="font-bold text-3xl">Cadastro</h1>
      <input
        className="border-1 rounded-md p-1"
        {...register("name")}
        type="text"
        placeholder="Digite seu nome"
      />
      {errors.name && <p>{errors.name.message}</p>}
      <input
        className="border-1 rounded-md p-1"
        {...register("email")}
        type="email"
        placeholder="Digite seu e-mail"
      />
      <input
        className="border-1 rounded-md p-1"
        {...register("password")}
        type="password"
        placeholder="senha"
      />

      <input
        className="border-1 rounded-md p-1"
        {...register("confirmPassword")}
        type="password"
        placeholder="confirme a senha"
      />
      {errors.confirmPassword?.type === "oneOf" && (<p>{errors.confirmPassword.message}</p>)}

      <button className="font-bold rounded-md p-2 bg-emerald-500 hover:bg-emerald-600 text-white">
        Reset
      </button>
      <p className="w-">{value}</p>
    </form>
  );
};

export default Formulario;
