const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const usuarioUrl = 'https://reqres.in/api/users?page=2';

//Claudynary

const cloudPreset = 'xbobbhxg';
const  cloudUrl = 'https://api.cloudinary.com/v1_1/jramireza69/upload';

const obtenerChiste = async () => {
    try {
        const resp = await fetch( jokeUrl );
        if(! resp.ok)  throw 'No se pudo realizar peticion';
        const {created_at,  id,   value} = await resp.json();
       
       
        return {created_at,  id,   value};
        
    } catch (error) {
        throw error;
    }
}
const obtenerUsuarios = async () => {
    const resp = await fetch( usuarioUrl );
    const { data:usuarios } = await resp.json();

    return usuarios;
}

 const subirImagen = async (archivoSubir) => {
     const formulario = new FormData();
     formulario.append('upload_preset', cloudPreset);
     formulario.append('file', archivoSubir);

     try {

        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formulario
        });
        if (resp.ok) {
            const cloudResp = await resp.json();
             return cloudResp.secure_url;
        }else{
            throw await resp.json();
        }
         
     } catch (error) {
         throw error; 
     }
 }


export {
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
}