const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());


app.use(cors());


let contactos = [];


app.get("/contactos", (req, res) => {
    res.json(contactos);
});


app.post("/contactos", (req, res) => {
    contactos.push(req.body);
    res.json({mensaje:"Contacto agregado"});
});
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});