const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

// URL de conexión a MongoDB (usando la variable de entorno definida en docker-compose)
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/proyectofinal1";

// Conectar a MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ Conectado a MongoDB"))
.catch(err => console.error("❌ Error de conexión a MongoDB:", err));

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("¡Hola desde Express en Docker con MongoDB!");
});

// Iniciar servidor
app.listen(port, "0.0.0.0", () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});
