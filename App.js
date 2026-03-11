import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [contactos, setContactos] = useState([]);

  const cargarContactos = async () => {
    const res = await axios.get("http://localhost:3000/contactos");
    setContactos(res.data);
  };

  const agregarContacto = async () => {
   await axios.post("http://localhost:3000/contactos", {
  nombre,
  telefono
});

    setNombre("");
    setTelefono("");

    cargarContactos();
  };

  useEffect(() => {
    cargarContactos();
  }, []);

  return (
    <div style={{padding:"20px"}}>
      <h1>Agenda de Contactos</h1>

      <input
        placeholder="Nombre"
        value={nombre}
        onChange={(e)=>setNombre(e.target.value)}
      />

      <input
        placeholder="Teléfono"
        value={telefono}
        onChange={(e)=>setTelefono(e.target.value)}
      />

      <button onClick={agregarContacto}>
        Guardar
      </button>

      <h2>Lista de contactos</h2>

      <ul>
        {contactos.map((c,i)=>(
          <li key={i}>
            {c.nombre} - {c.telefono}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;