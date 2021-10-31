const nombre = document.getElementById('nom-user')
const pass = document.getElementById('pass-user')
const rol = document.getElementById('rol-user')
const btnAgregarUser = document.getElementById('btn-nuevo-user')

btnAgregarUser.addEventListener('click',function(){
    window.location.href= `agregar/${nombre.value}/${pass.value}/${rol.value}`
})