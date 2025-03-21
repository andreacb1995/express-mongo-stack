db = db.getSiblingDB('proyectofinal1'); 

// Verificar si la colección 'users' ya existe
if (db.usuarios.countDocuments() === 0) {
    // Crear la colección y agregar un usuario de prueba
    db.usuarios.insertOne({
        name: "admin",
        password: "1234" 
    });
    print("Usuario de prueba agregado");
} else {
    print("La colección ya tiene usuarios.");
} 