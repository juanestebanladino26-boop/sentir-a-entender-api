const express = require('express');

// Crear aplicación Express
const app = express();

// Puerto del servidor
const PORT = 3000;

// Permitir recibir datos JSON
app.use(express.json());

// Arreglos temporales
let usuarios = [];
let emociones = [];

/* =========================
   REGISTRO DE USUARIOS
========================= */
app.post('/registro', (req, res) => {

    const { usuario, password } = req.body;

    usuarios.push({
        usuario,
        password
    });

    res.json({
        mensaje: 'Usuario registrado correctamente'
    });

});

/* =========================
   INICIO DE SESIÓN
========================= */
app.post('/login', (req, res) => {

    const { usuario, password } = req.body;

    const usuarioEncontrado = usuarios.find(
        u => u.usuario === usuario && u.password === password
    );

    if (usuarioEncontrado) {

        res.json({
            mensaje: 'Autenticación satisfactoria'
        });

    } else {

        res.status(401).json({
            error: 'Error en la autenticación'
        });

    }

});

/* =========================
   REGISTRAR EMOCIÓN
========================= */
app.post('/emocion', (req, res) => {

    const { usuario, emocion } = req.body;

    emociones.push({
        usuario,
        emocion
    });

    res.json({
        mensaje: 'Emoción registrada correctamente'
    });

});

/* =========================
   CONSULTAR HISTORIAL
========================= */
app.get('/historial', (req, res) => {

    res.json(emociones);

});

/* =========================
   SERVIDOR
========================= */
app.listen(PORT, () => {

   console.log(Servidor ejecutándose en http://localhost:${PORT});
});
