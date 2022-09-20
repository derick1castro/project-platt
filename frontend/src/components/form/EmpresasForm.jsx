import React, { useState } from "react";
import Input from "./Input";

function EmpresasForm({ handleSubmit, companyData, btnText }) {
  const [company, setCompany] = useState(companyData || {});

  function handleChange(e) {
    setCompany({ ...company, [e.target.name]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();
    console.log(company);
    handleSubmit(company);
  }
  console.log(company);

  return (
    <section>
      <form onSubmit={submit}>
        <Input
          text="Identificação"
          type="text"
          name="empresa"
          placeholder="Adicionar Empresa"
          handleOnChange={handleChange}
          value={company.empresa || ""}
        />
        <input
          type="submit"
          value={btnText}
          className="text-white bg-[#009cc2] hover:bg-[#005469] duration-400 transition ease-in-out py-3 m-[30px] px-8 rounded-md text-md"
        />
      </form>
    </section>
  );
}

export default EmpresasForm;
