// flashmessage
// import Message from '../../layout/Message'

// layout
import Navbar from "../../layout/Navbar";

// axios
import api from "../../../utils/api";

// hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFlashMessage from "../../../hooks/useFlashMessage";

// componets
import SolucoesForm from "../../form/SolucoesForm";
import Message from "../../layout/Message";

const AddSolucao = () => {
  const [token] = useState(localStorage.getItem("token") || "");
  const { setFlashMessage } = useFlashMessage();
  const navigate = useNavigate();

  async function registerSolucoes(solucoes) {
    let msgType = "success";

    const formData = new FormData();

    await Object.keys(solucoes).forEach((key) => {
      if (key === "images") {
        for (let i = 0; i < solucoes[key].length; i++) {
          formData.append("images", solucoes[key][i]);
        }
      } else {
        formData.append(key, solucoes[key]);
      }
    });

    const data = await api
      .post("solucoes/create", formData, {
        Authorization: `Bearer ${JSON.parse(token)}`,
        "Content-Type": "multipart/form-data",
      })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        msgType = "error";
        return err.response.data;
      });

    setFlashMessage(data.message, msgType);

    if (msgType !== "error") {
      navigate("/solucoes/minhassolucoes");
    }
  }

  return (
    <>
      <Navbar />
      <Message />
      <section className="mt-[80px]">
        <SolucoesForm
          handleSubmit={registerSolucoes}
          btnText="Cadastrar Solução"
        />
      </section>
    </>
  );
};

export default AddSolucao;
