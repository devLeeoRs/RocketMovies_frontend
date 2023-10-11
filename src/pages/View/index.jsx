import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";
import { Stars } from "../../components/Stars";
import { BiLeftArrowAlt } from "react-icons/bi";
import { LuTimer } from "react-icons/lu";
import { Container, Section } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import avatarPlaceHolder from "../../assets/neoexp.png";

export function View() {
  const navigate = useNavigate();
  const params = useParams();
  const { user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/uploads/${user.avatar}`
    : avatarPlaceHolder;

  const [data, setData] = useState([]);
  const [time, setTime] = useState([]);

  function back() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies/${params.id}`);
      setData(response.data);
      setTime(response.data.createdAt.split(" "));
    }
    fetchMovies();
  }, []);

  return (
    <Container>
      <Header />

      {data && data.movie_tag && (
        <Section>
          <ButtonText onClick={back} icon={BiLeftArrowAlt} title="Voltar" />
          <div className="title">
            <h1>{data.title}</h1>
            <Stars rating={data.rating}></Stars>
          </div>
          <div className="infos">
            <div>
              <img src={avatarUrl} width={20} />
              <p> {user.name} </p>
            </div>
            <div>
              <LuTimer />
              <p>{`${time[0]} ás ${time[1]}`}</p>
            </div>
          </div>
          <div className="tags">
            {data.movie_tag.map((tag) => (
              <Tag key={String(tag.id)} title={tag.name} />
            ))}
          </div>

          <p>{data.description}</p>
        </Section>
      )}
    </Container>
  );
}
