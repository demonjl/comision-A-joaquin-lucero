const header = document.querySelector('.header');
const btnNuevaPublicacion = document.querySelector('#nueva-publicacion');
const btnEditarPublicacion = document.querySelector('#editar-publicacion');
const btnEliminarPublicacion = document.querySelector('#eliminar-publicacion');
const modalPublicacion = new bootstrap.Modal(document.querySelector('#modalPublicacion'));
const modalPublicacionTitulo = document.querySelector('#modalPublicacionTitulo');
const modalFormulario = document.querySelector('#modalFormulario');
const btnFormulario = document.querySelector('#btnGuardar');

let metodoFormulario = '';

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 10);
})

$('#nueva-publicacion').click(()=>{
    modalPublicacionTitulo.innerHTML = 'Nueva publicacion';
    metodoFormulario = 'Crear';
    btnFormulario.innerHTML = metodoFormulario;
    modalFormulario.reset();
})

document.addEventListener('click', (e)=>{
    if (e.target.matches('#editar-publicacion')) {
        modalPublicacionTitulo.innerHTML = 'Editar publicacion';
        metodoFormulario = 'Editar';
        btnFormulario.innerHTML = metodoFormulario;

        const id = e.target.closest('#publicacion').getAttribute('data-id');
        modalFormulario.setAttribute('data-formid', id);

        fetch(`/api/publicaciones/${id}`)
        .then(res => res.json())
        .then(data => {
            const {titulo, descripcion, img} = data.data;
            modalFormulario['titulo'].value = titulo;
            modalFormulario['descripcion'].value = descripcion;
            modalFormulario['img'].value = img;
        })
    }


    if (e.target.matches('#eliminar-publicacion')) {
        const id = e.target.closest('#publicacion').getAttribute('data-id');

        fetch(`/api/publicaciones/${id}`, {
            method: 'DELETE'
        })
        .then(res => {
            if (res.ok) {
                location.reload();
            }
        })
        .catch(err => console.error(err));
    }
})

modalFormulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    if (metodoFormulario === 'Crear') {
        const newPublicacion = {
            titulo: modalFormulario['titulo'].value,
            descripcion: modalFormulario['descripcion'].value,
            img: modalFormulario['img'].value
        };

        fetch('/api/publicaciones', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPublicacion)
        })
        .then(res => {
            if (res.ok) {
                modalPublicacion.hide();
                location.reload();
            }
        })
        .catch(err => console.error(err));
    }

    if (metodoFormulario === 'Editar') {
        const publicacionEditada = {
            titulo: modalFormulario['titulo'].value,
            descripcion: modalFormulario['descripcion'].value,
            img: modalFormulario['img'].value
        }

        const id = modalFormulario.getAttribute('data-formid');

        fetch(`/api/publicaciones/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(publicacionEditada)
        })
        .then(res => {
            if (res.ok) {
                modalPublicacion.hide();
                location.reload();
            }
        })
        .catch(err => console.error(err));
    }
})