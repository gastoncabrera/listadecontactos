import React, { useState } from "react";

const CardSearch = ({ db, setDb, tabledb, setTabledb }) => {
  const [search, setSearch] = useState("");
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
      <input
        type="text"
        className="card__search"
        placeholder="Buscar por nombre o apellido..."
        onChange={handleChange}
        value={search}
      />
    </>
  );
};

export default CardSearch;
