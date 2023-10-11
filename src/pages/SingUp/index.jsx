import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { ButtonText } from "../../components/ButtonText";
import { Background, Container, Form } from "./styles";
import { Button } from "../../components/Button";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Input } from "../../components/Input";
import { FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function SingUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSingUp(e) {
    e.preventDefault();

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = regexEmail.test(email);

    if (!isValidEmail || !name || !password) {
      alert("Preencha todos os campos corretamente");
    }

    api
      .post("/users", {
        name,
        email,
        password,
      })
      .then(() => {
        alert("usuario cadastrado com sucesso ");
        navigate("/");
      });
  }

  return (
    <Container>
      <Form>
        <h1>RockeatMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>
        <Input
          placeholder="Nome"
          icon={AiOutlineUser}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></Input>
        <Input
          placeholder="email"
          icon={AiOutlineMail}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          placeholder="senha"
          type="password"
          icon={FiLock}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button title="Cadastrar" onClick={handleSingUp} />
        <Link to="/">
          <ButtonText icon={BiLeftArrowAlt} title="Voltar para login" />
        </Link>
      </Form>
      <Background />
    </Container>
  );
}
