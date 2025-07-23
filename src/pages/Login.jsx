import { useState } from "react";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, senha); // espera o login finalizar
      navigate("/"); // navega para home depois do login
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="p-4" style={{ width: "100%", maxWidth: 425 }}>
        <h1 className="text-center mb-5">
          <b className="text-danger">Shop</b>Story
        </h1>
        <h3 className="mb-4 text-center">Login</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="form-label fs-5 mb-2">
              E-mail
            </label>
            <input
              type="email"
              className="form-control ps-3 py-2"
              id="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="senha" className="form-label fs-5 mb-2">
              Senha
            </label>
            <input
              type="password"
              className="form-control ps-3 py-2"
              id="senha"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <div className="d-grid">
            <button
              type="submit"
              className="fs-5 btn btn-primary bg-danger border-danger py-2"
            >
              Entrar
            </button>
          </div>
        </form>

        <div className="mt-3 text-center">
          <a href="#">Esqueci minha senha</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
