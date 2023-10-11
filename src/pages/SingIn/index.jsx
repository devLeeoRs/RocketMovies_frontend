import { Background, Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { AiOutlineMail } from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SingIn() {
  const { singIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    singIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>RockeatMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>
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
        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">
          <ButtonText type="button" title="Criar conta" />
        </Link>
      </Form>
      <Background />
    </Container>
  );
}
