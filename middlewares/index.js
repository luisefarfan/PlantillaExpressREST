//Cada una de estas constantes tiene todo lo que se exporta de cada archivo
const validarCampos = require('../middlewares/validar-campos')
const validarJWT = require('../middlewares/validar-jwt')
const validarRoles = require('../middlewares/validar-roles')
const validarArchivo = require('../middlewares/validar-archivo')

module.exports = {
    ...validarCampos,
    ...validarJWT,
    ...validarRoles,
    ...validarArchivo
}