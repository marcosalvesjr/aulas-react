import { useForm } from "react-hook-form";

interface IForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  console.log({ errors });

  const handleSubmitData = (data: IForm) => {
    alert(`${data.name}`);
  };

  return (
    <form>
      <h1>Cadastro</h1>
      <input
        {...register("name", { required: true })}
        type="text"
        placeholder="Digite seu nome"
      />
      {errors?.name?.type === "required" && <p>Name is required</p>}
      <input
        {...register("email", { required: true })}
        type="text"
        placeholder="Digite seu e-mail"
      />
      <input
        {...register("password", { minLength: 7, required: true })}
        type="password"
        placeholder="senha"
      />
      {errors?.password?.type === "required" && <p>Password is required</p>}
      {errors?.password?.type === "minLength" && (
        <p>Password must have 7 characters</p>
      )}
      <input
        {...register("confirmPassword")}
        type="password"
        placeholder="confirme a senha"
      />

      <button onClick={handleSubmit(handleSubmitData)}>Reset</button>
    </form>
  );
};

export default Formulario;
