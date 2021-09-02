import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import CardContainer from "./components/CardContainer";
import "./sass/pages/home.scss";

const InicialState = [];
const App = () => {
  const [db, setDb] = useState(InicialState);
  const [tabledb, setTabledb] = useState(InicialState);
  const [dataToEdit, setDataToEdit] = useState(null);

  useEffect(() => {
    let dblocal = localStorage.getItem("todo list");
    if (db != null) {
      setDb(JSON.parse(dblocal));
      setTabledb(JSON.parse(dblocal));
    } else {
      setDb(
        {
          name: "Priscila nuevo",
          id: 2,
          lastName: "Espinoza",
          celNumber: 3794863561,
        },
        {
          name: "Gaston nuevo",
          id: 1,
          lastName: "Cabrera",
          celNumber: 3794562359,
        }
      );
      setTabledb([
        {
          name: "Priscila nuevo",
          id: 2,
          lastName: "Espinoza",
          celNumber: 3794863561,
        },
        {
          name: "Gaston nuevo",
          id: 1,
          lastName: "Cabrera",
          celNumber: 3794562359,
        },
      ]);
    }
  }, []);
  useEffect(() => {
    let dataLocal = JSON.stringify(db);
    localStorage.setItem("todo list", dataLocal);
  }, [db]);

  const Create = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
    setTabledb([...tabledb, data]);
  };
  const Update = (data) => {};
  const Delete = (id) => {
    let confirm = window.confirm("Desea eliminar este usuario");
    if (confirm) {
      let Date = db.filter((el) => el.id !== id);
      setDb(Date);
      setTabledb(Date);
    }
  };

  return (
    <div className="container__background">
      <h1 className="create__title">
        {dataToEdit !== null ? "Editar contacto" : "Crear contacto"}
      </h1>
      <Form
        Create={Create}
        Update={Update}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <h2 className="list__title">Lista de Contactos</h2>
      <CardContainer
        tabledb={tabledb}
        setTabledb={setTabledb}
        db={db}
        setDb={setDb}
        setDataToEdit={setDataToEdit}
        Delete={Delete}
      />
    </div>
  );
};

export default App;
