import mysql from 'mysql'
let datos
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

const obtenerProveedores = ()=> {
    const sql = `SELECT * FROM proveedor`
    conexion.query(sql,function(err, result, filed){
        if(err) throw err
        // console.log(result)
        datos = result
    })
    return datos
}

export {conectar, agregarProveedor, obtenerProveedores} 

