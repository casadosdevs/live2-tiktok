"use client";
import { useForm } from "react-hook-form";
import ValidacaoFormularioLogin from "@/validations/LoginValidation";
import { zodResolver } from "@hookform/resolvers/zod";

const cssMain = {
  backgroundColor: "#333",
  height: "100vh",
  display: "flex",
  alignItems: "center",
};

const cssForm = {
  width: 100 + "%",
  maxWidth: 250 + "px",
  margin: "0 auto",
  backgroundColor: "#fff",
  padding: 16 + "px",
  borderRadius: "16px",
  boxShadow: "1px 1px 10px rgba(0,0,0,1)",
};
const cssLabel = {
  display: "block",
  width: "100%",
  fontWeight: "bold",
  marginBottom: 4,
};
const cssInput = {
  width: "100%",
  marginBottom: 2,
  height: 27 + "px",
  fontSize: "16px",
};
const cssButton = {
  backgroundColor: "#0052cc",
  width: "100%",
  margin: "8px 0 0 0",
  color: "#fff",
  fontWeight: "bold",
  appearance: "none",
  borderRadius: 3 + "px",
  border: "none",
  height: "32px",
};
const cssError = {
  color: "rgba(253, 43, 54, .8)",
  fontWeight: "bold",
  fontSize: 10 + "px",
};

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ValidacaoFormularioLogin),
  });

  const enviaFormulario = (camposDoFormulario) => {
    console.log(camposDoFormulario);
  };

  return (
    <main style={cssMain}>
      <form style={cssForm} onSubmit={handleSubmit(enviaFormulario)}>
        <label style={cssLabel} htmlFor="nome">
          Nome:
        </label>
        <input
          style={cssInput}
          placeholder="Digite seu nome"
          {...register("nome")}
          type="text"
        />
        {errors.nome && <p style={cssError}>{errors.nome.message}</p>}
        <label style={cssLabel} htmlFor="email">
          E- mail:
        </label>
        <input
          style={cssInput}
          {...register("email")}
          placeholder="Digite seu e-mail"
          type="text"
        />
        {errors.email && <p style={cssError}>{errors.email.message}</p>}
        <label style={cssLabel} htmlFor="cpf">
          CPF:
        </label>
        <input
          style={cssInput}
          {...register("cpf")}
          type="tel"
          placeholder="000.000.000-00"
        />
        {errors.cpf && <p style={cssError}>{errors.cpf.message}</p>}
        <button style={cssButton} type="submit">
          Enviar
        </button>
      </form>
    </main>
  );
}
