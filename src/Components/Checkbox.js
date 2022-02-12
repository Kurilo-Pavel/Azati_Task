const Checkbox = ({label, onChange}) => {

  return (
    <div className="mb-2 inline relative">
      <label className="p-4 w-5 ">{label}</label>
      <input
        type="checkbox"
        onChange={onChange}
      />
    </div>
  );
}

export default Checkbox;