import Input from "../../form/Input";
import Container from "../../../components/layout/Container";
import Message from "../../layout/Message";

import React, { useState, useEffect } from "react";
import api from "../../../utils/api";

import useFlashMessage from "../../../hooks/useFlashMessage";

const EditUser = () => {
  const [user, setUser] = useState({});
  const [token] = useState(localStorage.getItem("token") || "");
  const { setFlashMessage } = useFlashMessage();

  useEffect(() => {
    api
      .get("/users/checkuser", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      });
  }, [token]);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let msgType = "success";

    const formData = new FormData();

    // await Object.keys(user).forEach((key) => formData.append(key, user[key]))

    const data = await api
      .patch(`/users/edit/${user._id}`, formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          // 'Content-type': 'multipart/form-data'
        },
      })
      .then((response) => {
        setUser(response.data.user);
        // return response.data
      })
      .catch((err) => {
        msgType = "error";
        return err.response.data;
      });

    setFlashMessage(data.message, msgType);
  }

  return (
    <>
      <Container>
        <Message />
        <section className="max-w-[350px] mx-auto">
          <h1 className="text-[#009CC2] text-3xl font-bold my-10">
            Editar Usuário
          </h1>
          <form onSubmit={handleSubmit}>
            <Input
              text="Nome Completo"
              type="text"
              name="name"
              placeholder="Ex: Derick Castro Domingos"
              handleOnChange={handleChange}
              value={user.name || ""}
            />
            <Input
              text="E-mail"
              type="text"
              name="email"
              placeholder="Ex: derick.domingos@timenow.com.br"
              handleOnChange={handleChange}
              value={user.email || ""}
            />
            <Input
              text="Digite o telefone"
              type="text"
              name="phone"
              placeholder="Ex: 3333-3333"
              handleOnChange={handleChange}
              value={user.phone || ""}
            />
            <Input
              text="Senha"
              type="password"
              name="password"
              placeholder="Digite a senha"
              handleOnChange={handleChange}
            />
            <Input
              text="Confirmação da senha"
              type="password"
              name="confirmpassword"
              placeholder="Confirme a senha"
              handleOnChange={handleChange}
            />
            <button
              className="bg-[#009CC2] p-3 text-white px-5 rounded mt-4"
              type="submit"
            >
              Salvar Alterações
            </button>
          </form>
        </section>
      </Container>
    </>
  );
};

export default EditUser;
