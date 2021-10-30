import express from 'express';
const app = express()
import {agregarProveedor, obtenerProveedores, editarProveedor, actualizarProveedor} from './src/mysql.js'
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

app.get('/frm_proveedores', function(req, res){
    datos= obtenerProveedores()
    // console.log(datos[0].nombre)
    res.render('frm_proveedores',{proveedores: datos})
    
});

app.get('/frm_gestionUsuarios', function(req, res){
    res.render('frm_gestionUsuarios')    
});

app.get('/frm_productos', function(req, res){
    res.render('frm_productos')    
});

app.get('/frm_ventas', function(req, res){
    res.render('frm_ventas')    
});

app.get('/editprov/:idproveedor', function(req, res){
    let id= req.params.idproveedor
    datos=editarProveedor(id)
    console.log(datos)
    res.render('editprov',{proveedor:datos[id-1]})    
});

app.get('/editprovcancelar', function(req, res){
    res.redirect('/frm_proveedores')    
});

app.get('/agregar/:nombre/:vendedor/:direccion/:telefono/:informacion', function(req, res){
    let nombre= req.params.nombre
    let vendedor= req.params.vendedor
    let direccion= req.params.direccion
    let telefono= req.params.telefono
    let informacion= req.params.informacion
    agregarProveedor(nombre,vendedor,direccion,telefono,informacion)
    res.redirect('/frm_proveedores')
});

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
