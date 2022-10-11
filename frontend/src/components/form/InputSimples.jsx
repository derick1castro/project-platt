function InputSimples({ type, text, name, placeholder, handleOnChange, value }) {
  return (
    <div className="flex flex-col">
      <label
        className="mb-2 font-bold text-sm text-[#68787b]"
        htmlFor={name}
      ></label>
      <input
        className="py-1 px-2 border rounded"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder} //deixar com um tom mais claro
        onChange={handleOnChange}
        value={value}
        multiple={true}
      />
    </div>
  );
}

export default InputSimples;
