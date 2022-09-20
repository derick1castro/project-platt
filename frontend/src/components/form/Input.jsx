function Input({ type, text, name, placeholder, handleOnChange, value }) {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-2 font-bold text-sm text-[#68787b]" htmlFor={name}>
        {text}:
      </label>
      <input
        className="p-3 border rounded"
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

export default Input;
