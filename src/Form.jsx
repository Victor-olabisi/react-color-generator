import { useState } from "react";

const Form = ({addColor}) => {
  const [color, setColor] = useState("");
  // function when the form input is change
  const handleChange = (e) => {
    setColor(e.target.value);
  };
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <section className="container ">
      <form className="color-form" onSubmit={handleSubmit}>
        <input type="color" onChange={handleChange} value={color} />
        <input
          type="text"
          value={color}
          onChange={handleChange}
          placeholder="#fff"
        />
        <button type="submit" className="btn" style={{background:color}}>
          submit
        </button>
      </form>
    </section>
  );
};
export default Form;
