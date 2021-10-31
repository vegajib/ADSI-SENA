import mysql from 'mysql'
let datos
let datosUsuario
let respuesta
let respuestaUsuarios
// const mysql = require('mysql')

const conexion = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '12345678',
    database: 'alejandra_db'
})

const conectar = () =>{
    conexion.connect((err)=>{
        if(err) throw err
        console.log('la conexion funciona')
    })
}

const agregarProveedor = (nombre,vendedor,direccion,telefono,informacion)=>{
    const sql = `INSERT INTO proveedor (idproveedor, nombre, direccion, telefono, vendedor, info_pago) VALUES (${null}, "${nombre}", "${direccion}", ${telefono}, "${vendedor}", "${informacion}")`
    conexion.query(sql,function(err, result, filed){
        if(err) throw err
        // console.log(result)
    })
}

const agregarUsuario = (nombre,pass,rol)=>{
    const sql = `INSERT INTO usuario (idusuario, nombre, password, rol, rol_idrol) VALUES (${null}, "${nombre}", "${pass}", ${rol}, ${rol})`
    conexion.query(sql,function(err, result, filed){
        if(err) throw err
        // console.log(result)
    })
}

const borrarProveedor = (id)=>{
    const sql = `DELETE FROM proveedor WHERE idproveedor=${id}`
    conexion.query(sql,function(err, result, filed){
        if(err) throw err
        // console.log(result)
    })
}

const actualizarProveedor = (id,nombre,vendedor,direccion,telefono,informacion)=>{
    const sql = `UPDATE proveedor SET nombre="${nombre}", direccion="${direccion}", telefono="${direccion}", telefono="${telefono}", vendedor="${vendedor}", info_pago="${informacion}" WHERE idproveedor=${id}`
    conexion.query(sql,function(err, result, filed){
        if(err) throw err
        // console.log(result)
    })
}

const actualizarUsuario = (id,nombre,pass,rol)=>{
    const sql = `UPDATE usuario SET nombre="${nombre}", password="${pass}", rol=${rol}, rol_idrol=${rol} WHERE idusuario=${id}`
    conexion.query(sql,function(err, result, filed){
        if(err) throw err
        // console.log(result)
    })
}

const obtenerProveedores = ()=> {
    const sql = `SELECT * FROM proveedor`
    conexion.query(sql,function(err, result, filed){
        if(err) throw err
        // console.log(result)
        respuesta = result
    })
    return respuesta
}

const obtenerUsuarios = ()=> {
    const sql = `SELECT * FROM usuario`
    conexion.query(sql,function(err, result, filed){
        if(err) throw err
        // console.log(result)
        respuestaUsuarios = result
    })
    return respuestaUsuarios
}

const editarProveedor = (id)=> {
    // console.log(id)
    const sql = `SELECT * FROM alejandra_db.proveedor WHERE idproveedor=${id}`
    // console.log(sql)
    conexion.query(sql,function(err, result, filed){
        if(err) throw err
        // console.log(result)
        datos = result
        // console.log(datos)
    })
    // console.log(datos)
    return datos
}

const editarUsuario = (id)=> {
    // console.log(id)
    const sql = `SELECT * FROM alejandra_db.usuario WHERE idusuario=${id}`
    // console.log(sql)
    conexion.query(sql,function(err, result, filed){
        if(err) throw err
        // console.log(result)
        datosUsuario = result
        // console.log(datos)
    })
    // console.log(datos)
    return datosUsuario
}

export {conectar, agregarProveedor, obtenerProveedores, editarProveedor, actualizarProveedor,borrarProveedor,obtenerUsuarios, agregarUsuario, editarUsuario, actualizarUsuario} 

