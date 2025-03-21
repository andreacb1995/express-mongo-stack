db = db.getSiblingDB('proyectofinal1'); // Cambia esto si tu base de datos tiene otro nombre

// Verificar si la colección 'users' ya existe
if (db.users.countDocuments() === 0) {
    // Crear la colección y agregar un usuario de prueba
    db.users.insertOne({
        name: "admin",
        password: "1234" // Dato de prueba
    });
    print("Usuario de prueba agregado");
} else {
    print("La colección ya tiene usuarios.");
} 