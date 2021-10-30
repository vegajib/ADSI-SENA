const editid = document.getElementById('id-edit-prov')
const editnombre = document.getElementById('nom-edit-prov')
const editvendedor = document.getElementById('vend-edit-prov')
const editdireccion = document.getElementById('dir-edit-prov')
const edittelefono = document.getElementById('tel-edit-prov')
const editinformacion = document.getElementById('info-edit-prov')
const btnEditarProv = document.getElementById('btn-edit-prov')

btnEditarProv.addEventListener('click',function(){
    window.location.href= `editar/${editid.value}/${editnombre.value}/${editvendedor.value}/${editdireccion.value}/${edittelefono.value}/${editinformacion.value}`
})