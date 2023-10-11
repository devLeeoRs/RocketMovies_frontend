import { Container, Profile, Input, Logout } from "./styles";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import avatarPlaceHolder from "../../assets/neoexp.png";
import { api } from "../../services/api";

export function Header({ ...rest }) {
  const { singUp, user } = useAuth();
  const navigate = useNavigate();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/uploads/${user.avatar}`
    : avatarPlaceHolder;

  function handleSignOut() {
    console.log("saiu");
    navigate("/");
    singUp();
  }

  return (
    <Container>
      <h1>RockeatMovies</h1>
      <Input>
        <input {...rest} type="text" placeholder="Pesquisar" />
      </Input>
      <Profile>
        <div>
          <span>{user.name}</span>
          <Logout onClick={handleSignOut}>sair</Logout>
        </div>
        <Link to="/profile">
          <img src={avatarUrl} alt={user.name} />
        </Link>
      </Profile>
    </Container>
  );
}
