import express from 'express';
const app = express()
import {agregarProveedor, obtenerProveedores, editarProveedor, actualizarProveedor, borrarProveedor, obtenerUsuarios, agregarUsuario, editarUsuario, actualizarUsuario, borrarUsuario} from './src/mysql.js'
import path from 'path';
let datos



app.listen('8000',function(){
    console.log('servidor en puerto 8000')
})

//configuracion ejs gestos de plantillas
app.set('view engine', 'ejs');
app.set('views', './vistas')



//configuaracion archivos estaticos
app.use(express.static('./vistas'))
app.use(express.static('./src'))
app.use(express.static('./css'))
app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('principal')  
});
//obtener proveedores para mostrar en tabla
app.get('/frm_proveedores', function(req, res){
    datos= obtenerProveedores()
    res.render('frm_proveedores',{proveedores: datos})
    
});
//obtener usuarios para mostrar en tabla
app.get('/frm_gestionUsuarios', function(req, res){
    datos= obtenerUsuarios()
    res.render('frm_gestionUsuarios',{usuarios: datos})   
});

app.get('/frm_productos', function(req, res){
    res.render('frm_productos')    
});

app.get('/frm_ventas', function(req, res){
    res.render('frm_ventas')    
});
//obtener proveedor para editar
app.get('/editprov/:idproveedor', function(req, res){
    let id= req.params.idproveedor
    datos=editarProveedor(id)
    console.log(datos)
    res.render('editprov',{proveedor:datos[0]})
});

//obtener usuario para editar
app.get('/editusuarios/:idusuario', function(req, res){
    let id= req.params.idusuario
    datos=editarUsuario(id)
    // console.log(datos)
    res.render('edituser',{user:datos[0]})
});

//borrar
app.get('/borrarprov/:idproveedor', function(req, res){
    let id= req.params.idproveedor
    borrarProveedor(id)
    res.redirect('/frm_proveedores')   
});

app.get('/borrarusuario/:idusuario', function(req, res){
    let id= req.params.idusuario
    borrarUsuario(id)
    res.redirect('/frm_gestionUsuarios')   
});

//redireccion cancelar edicion
app.get('/editprovcancelar', function(req, res){
    res.redirect('/frm_proveedores')    
});

app.get('/editusercancelar', function(req, res){
    res.redirect('/frm_gestionUsuarios')    
});

//agregar nuevo proveedor
app.get('/agregar/:nombre/:vendedor/:direccion/:telefono/:informacion', function(req, res){
    let nombre= req.params.nombre
    let vendedor= req.params.vendedor
    let direccion= req.params.direccion
    let telefono= req.params.telefono
    let informacion= req.params.informacion
    agregarProveedor(nombre,vendedor,direccion,telefono,informacion)
    res.redirect('/frm_proveedores')
});

//agregar nuevo usuario
app.get('/agregar/:nombre/:pass/:rol', function(req, res){
    let nombre= req.params.nombre
    let pass= req.params.pass
    let rol= req.params.rol
    agregarUsuario(nombre,pass,rol)
    res.redirect('/frm_gestionUsuarios')
});

//editar proveedor
app.get('/editprov/editar/:id/:nombre/:vendedor/:direccion/:telefono/:informacion', function(req, res){
    let id= req.params.id
    let nombre= req.params.nombre
    let vendedor= req.params.vendedor
    let direccion= req.params.direccion
    let telefono= req.params.telefono
    let informacion= req.params.informacion
    actualizarProveedor(id,nombre,vendedor,direccion,telefono,informacion)
    res.redirect('/frm_proveedores')
});

//editar usuario
app.get('/editusuarios/editar/:id/:nombre/:pass/:rol', function(req, res){
    let id= req.params.id
    let nombre= req.params.nombre
    let pass= req.params.pass
    let rol= req.params.rol
    actualizarUsuario(id,nombre,pass,rol)
    res.redirect('/frm_gestionUsuarios')
});
