import { Container, ProfileInfo } from "./styles";
import { BiLeftArrowAlt } from "react-icons/bi";
import { AiOutlineCamera, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import { api } from "../../services/api";
import avatarPlaceHolder from "../../assets/neoexp.png";

export function Perfil() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew, setPasswordNew] = useState("");

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/uploads/${user.avatar}`
    : avatarPlaceHolder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdateProfile() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    };
    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user: userUpdated, avatarFile });
  }

  function handleChangeAvatar(e) {
    const file = event.target.files[0];

    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <ButtonText icon={BiLeftArrowAlt} title="Voltar" />
        </Link>
      </header>
      <ProfileInfo>
        <div className="profile">
          <img src={avatar} alt={avatar} />
          <label htmlFor="photoUser">
            <input type="file" onChange={handleChangeAvatar} id="photoUser" />
            <AiOutlineCamera />
          </label>
        </div>

        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          icon={AiOutlineUser}
        ></Input>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={AiOutlineMail}
        ></Input>

        <Input
          placeholder="Senha atual"
          onChange={(e) => setPasswordOld(e.target.value)}
          type="password"
          icon={FiLock}
        ></Input>
        <Input
          placeholder="Nova senha"
          onChange={(e) => setPasswordNew(e.target.value)}
          type="password"
          icon={FiLock}
        ></Input>

        <Button type="button" title="Salvar" onClick={handleUpdateProfile} />
      </ProfileInfo>
    </Container>
  );
}
