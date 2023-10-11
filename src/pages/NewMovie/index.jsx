import { Container, Form, Marks } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { NewMark } from "../../components/NewMark";
import { Button } from "../../components/Button";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function NewMovie() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleBack() {
    navigate(-1);
  }

  function handleNewTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(remove) {
    const tagRemove = tags.filter((tag) => {
      return tag !== remove;
    });

    setTags(tagRemove);
  }

  async function handleCreateMovie() {
    try {
      console.log(title, description, tags, rating);

      if (!title || !description || tags.length === 0 || !rating) {
        return alert("preencha todos os campos ");
      }

      await api.post("/movies", {
        title,
        description,
        tags,
        rating,
      });

      alert("Filme cadastrado com sucesso! ");
      navigate(-1);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      }
    }
  }

  return (
    <Container>
      <Header />
      <Form>
        <Link to="/">
          <ButtonText icon={BiLeftArrowAlt} title="Voltar" />
        </Link>

        <h1>Novo Filme</h1>
        <div>
          <Input
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
          <Input
            placeholder="Sua nota (de 0 a 5)"
            onChange={(e) => setRating(e.target.value)}
            type="number"
            max="5"
          />
        </div>
        <textarea
          placeholder="Observações"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <h2>Marcadores</h2>

        <Marks>
          {tags.map((tag, index) => (
            <NewMark
              onClick={() => handleRemoveTag(tag)}
              key={String(index)}
              placeHolder={tag}
            />
          ))}
          <NewMark
            onClick={handleNewTag}
            newMark
            value={newTag}
            placeHolder="Adicionar marcador"
            onChange={(e) => setNewTag(e.target.value)}
          />
        </Marks>

        <div>
          <Button onClick={handleBack} title="Excluir filme " />
          <Button
            title="Salvar alterações "
            black
            onClick={handleCreateMovie}
          />
        </div>
      </Form>
    </Container>
  );
}
