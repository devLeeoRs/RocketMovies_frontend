import { Container, Main, Section, View } from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Stars } from "../../components/Stars";
import { Tag } from "../../components/Tag";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState(" ");

  function handlePreview(id) {
    navigate(`/view/${id}`);
  }

  useEffect(() => {
    async function viewMovies() {
      const { data } = await api.get(`/movies?title=${searchTitle}`);

      setMovies(data);
    }

    viewMovies();
  }, [searchTitle]);

  return (
    <Container>
      <Header onChange={(e) => setSearchTitle(e.target.value)} />
      <Main>
        <header>
          <h1>Meus filmes </h1>
          <div>
            <Link to="/new">
              <Button type="button" title="Adicionar Filme" icon={FiPlus} />
            </Link>
          </div>
        </header>
        <Section>
          {movies.map((movie) => (
            <View onClick={() => handlePreview(movie.id)} key={movie.id}>
              <h3> {movie.title} </h3>
              <Stars rating={movie.rating} />
              <p>{movie.description}</p>
              <div>
                {movie.tags.map((tag) => (
                  <Tag key={tag.id} dark title={tag.name}></Tag>
                ))}
              </div>
            </View>
          ))}
        </Section>
      </Main>
    </Container>
  );
}
