const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

// 🔥 AQUÍ ACTIVAMOS CORS
app.use(cors({
    origin: "http://localhost:5500"
}));

let contactos = [];

// GET - Obtener contactos
app.get("/contactos", (req, res) => {
    res.json(contactos);
});

// POST - Agregar contacto
app.post("/contactos", (req, res) => {
    const nuevo = req.body;
    contactos.push(nuevo);

    console.log("Contactos actuales:");
    console.log(contactos); // 👈 Agrega esto

    res.json({ mensaje: "Contacto agregado" });
});
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});