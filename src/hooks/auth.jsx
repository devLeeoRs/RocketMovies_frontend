import { useState } from "react";
import { createContext, useContext } from "react";
import { api } from "../services/api";
import { useEffect } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function singIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@rockeatnotes:user", JSON.stringify(user));
      localStorage.setItem("@rockeatnotes:token", token);

      setData({ user, token });
      api.defaults.headers.common["authorization"] = `Bearer ${token}`;
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Nao foi possivel entrar ");
      }
    }
  }

  function singUp() {
    localStorage.removeItem("@rockeatnotes:user");
    localStorage.removeItem("@rockeatnotes:token");

    setData({});
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);

        user.avatar = response.data.avatar;
      }

      await api.put("/users", user);
      setData({ user, token: data.token });
      localStorage.setItem("@rockeatnotes:user", JSON.stringify(user));

      alert("perfil atualizado ");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Nao foi possivel atualizar o usuario ");
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@rockeatnotes:token");
    const user = localStorage.getItem("@rockeatnotes:user");

    if (token && user) {
      api.defaults.headers.common["authorization"] = `Bearer ${token}`;
    }

    setData({
      token,
      user: JSON.parse(user),
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ singIn, singUp, updateProfile, user: data.user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
