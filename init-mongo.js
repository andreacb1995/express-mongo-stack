db = db.getSiblingDB('dockerhub'); 

db.usuarios.insertOne({
    name: "admin",
    password: "1234" 
});
