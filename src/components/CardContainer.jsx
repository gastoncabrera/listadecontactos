import React from "react";
import Card from "./Card";
import CardSearch from "./CardSearch";

const CardContainer = ({
  db,
  setDataToEdit,
  Delete,
  setDb,
  tabledb,
  setTabledb,
}) => {
  return (
    <>
      <CardSearch
        setDb={setDb}
        db={db}
        tabledb={tabledb}
        setTabledb={setTabledb}
      />
      <div className="card__list">
        {db.length > 0 ? (
          db &&
          db.map((el) => (
            <Card
              el={el}
              key={el.id}
              setDataToEdit={setDataToEdit}
              Delete={Delete}
            />
          ))
        ) : (
          <div>
            <div colSpan="3"> Sin Datos</div>
          </div>
        )}
      </div>
    </>
  );
};

export default CardContainer;
