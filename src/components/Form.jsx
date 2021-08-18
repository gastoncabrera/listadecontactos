import React, { useState, useEffect } from "react";
const inicialForm = {
  name: "",
  lastName: "",
  celNumber: "",
  id: null,
};
const Form = ({ Create, Update, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(inicialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(inicialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Manejo de datos del formulario
    if (!form.name || !form.lastName || !form.celNumber) {
      alert("Debes rellenar los datos");
      return;
    }
    if (form.id === null) {
      Create(form);
    } else {
      Update(form);
    }
    handleReset();
  };
  const handleReset = (e) => {
    setForm(inicialForm);
    setDataToEdit(null);
  };
  return (
    <div className="create__container">
      <div className="container__form">
        <form onSubmit={handleSubmit} className="create__form">
          <div className="form__firstName formTitle">
            <label htmlFor="firstName">
              Nombre:
              <input
                id="firstName"
                type="text"
                value={form.name}
                name="name"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form__lastName formTitle">
            <label htmlFor="lastName">
              Apellido:
              <input
                id="lastName"
                type="text"
                value={form.lastName}
                name="lastName"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form__celNumber formTitle">
            <label htmlFor="celNumber">
              Telefono:
              <input
                id="celNumber"
                type="text"
                value={form.celNumber}
                name="celNumber"
                onChange={handleChange}
              />
            </label>
          </div>
          <input
            className="form__btn"
            type="submit"
            value={dataToEdit !== null ? "Editar" : "Crear"}
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
