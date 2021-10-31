const editiduser = document.getElementById('id-edit-user')
const editnomuser = document.getElementById('nom-edit-user')
const editpassuser = document.getElementById('pass-edit-user')
const editroluser = document.getElementById('rol-edit-user')
const btnEditarUser = document.getElementById('btn-edit-user')


btnEditarUser.addEventListener('click',function(){
    window.location.href= `editar/${editiduser.value}/${editnomuser.value}/${editpassuser.value}/${editroluser.value}`
})