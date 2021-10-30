const nombre = document.getElementById('nom-prov')
const vendedor = document.getElementById('vend-prov')
const direccion = document.getElementById('dir-prov')
const telefono = document.getElementById('tel-prov')
const informacion = document.getElementById('info-prov')
const btnAgregarProv = document.getElementById('btn-nuevo-prov')

btnAgregarProv.addEventListener('click',function(){
    window.location.href= `agregar/${nombre.value}/${vendedor.value}/${direccion.value}/${telefono.value}/${informacion.value}`
})
