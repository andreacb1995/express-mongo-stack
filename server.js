const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3001;

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

// Definición del esquema y modelo de usuario
const userSchema = new mongoose.Schema({
    _id: String,
    usuario: String
});

const Usuarios = mongoose.model('usuarios', userSchema);

// Middleware para parsear JSON
app.use(express.json());

// Ruta para obtener usuarios
app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuarios.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener usuarios', error });
    }
});

// Iniciar servidor
app.listen(port, "0.0.0.0", () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});
