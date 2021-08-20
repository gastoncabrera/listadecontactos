import React, { useState } from "react";
const inicialSearch = [];

const CardSearch = ({ db, setDb, tabledb, setTabledb }) => {
  const [search, setSearch] = useState(inicialSearch);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
    searchFilter(e.target.value);
  };
  const searchFilter = (text) => {
    let resultSearch = tabledb.filter((el) => {
      if (
        el.name.toString().toLowerCase().includes(text.toLowerCase()) ||
        el.lastName.toString().toLowerCase().includes(text.toLowerCase())
      ) {
        return el;
      }
    });
    setDb(resultSearch);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input__search">
          <input
            type="text"
            className="card__search"
            placeholder="Buscar por nombre o apellido..."
            onChange={handleChange}
            value={search}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="btn__search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
      </form>
    </>
  );
};

export default CardSearch;
