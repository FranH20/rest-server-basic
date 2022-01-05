const { request, response } = require('express');

const usuariosGet = (req = request, res = response) => {
    
    const { q, nombre, apikey} = req.query;

    res.json({
        msg: 'get API Controlador',
        q, nombre, apikey
    });
}

const usuariosPut = (req, res) => {
    
    const id = req.params.id;

    res.json({
        msg: 'put API',
        id
    });
}

const usuariosPost = (req, res) => {
    
    const body = req.body;

    res.json({
        msg: 'post API',
        body
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API'
    });
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}