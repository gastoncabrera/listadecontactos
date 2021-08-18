import React from "react";

const Card = ({ el, setDataToEdit, Delete }) => {
  return (
    <div className="card__container">
      <div className="card__containerNameLastName">
        <div className="card__NameLastName">
          {el.name} {el.lastName}
        </div>
      </div>
      <div className="card__containerCelNumber">
        <div className="card__celNumber">{el.celNumber}</div>
      </div>
      <div className="card__buttonContainer">
        <button className="card__buttonEdit" onClick={() => setDataToEdit(el)}>
          Editar
        </button>
        <button className="card__buttonDelete" onClick={() => Delete(el.id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Card;
