const express = require('express');

// Crear aplicación Express
const app = express();

// Puerto donde se ejecutará el servidor
const PORT = 3000;

// Permite recibir información en formato JSON
app.use(express.json());

// Arreglo temporal para almacenar usuarios
let usuarios = [];

// Ruta para registrar usuarios
app.post('/registro', (req, res) => {

    // Obtener usuario y contraseña enviados
    const { usuario, password } = req.body;

    // Guardar usuario en el arreglo
    usuarios.push({
        usuario,
        password
    });

    // Respuesta exitosa
    res.json({
        mensaje: 'Usuario registrado correctamente'
    });
});

// Ruta para iniciar sesión
app.post('/login', (req, res) => {

    // Obtener datos enviados
    const { usuario, password } = req.body;

    // Buscar usuario registrado
    const usuarioEncontrado = usuarios.find(
        u => u.usuario === usuario && u.password === password
    );

    // Validar credenciales
    if (usuarioEncontrado) {

        // Acceso correcto
        res.json({
            mensaje: 'Autenticación satisfactoria'
        });

    } else {

        // Acceso incorrecto
        res.status(401).json({
            error: 'Error en la autenticación'
        });

    }
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(Servidor ejecutándose en http://localhost:${PORT});
});
