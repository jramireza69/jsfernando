import { subirImagen } from "./http-providers";

const body = document.body;

let inputFile, imgFoto;

const crearInputFileHtml = () => {

    const html = `
    <h1 class="mt-5">Subir Archivos</h1>
    <hr>
    <label for="">Selecciona una fotografia</label>
    <input type="file" accept="image/jpg , image/png"  />
   <br>
   <img class="img-thumbnail" src="" id="foto">
    
    `

    const div = document.createElement('div');
    div.innerHTML = html;
    body.append( div );
    inputFile = document.querySelector('input');
    imgFoto =   document.querySelector('#foto');
}

const eventos = () => {
    inputFile.addEventListener('change', (event)=>{
        const file = event.target.files[0];
        subirImagen(file).then( url => imgFoto.src = url );
    });
}



export const  init =  () => {

    crearInputFileHtml();
    eventos();
}