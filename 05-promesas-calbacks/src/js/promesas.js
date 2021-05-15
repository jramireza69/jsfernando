

const heroes = {


    capi: {
        nombre: 'Capitan America',
        poder: 'Escudo'
    },
    airon: {
        nombre: 'Iron man',
        poder: 'Dinero mucho'
    },
    spider: {
        nombre: 'Spider',
        poder: 'Arañas super fuerte'
    }

}

//funcion basica de promesa
/* export const buscarHeroe = (id) => {
    const heroe  = heroes[id];
   // const promesa = new Promise();  //no se crea mejor se retorna de una vez
 
   //dentro de la promesa se recibe el callbakc o lo que se quiere ejecutar
    return new Promise( (resolve, reject) => {
     
    });

} */
//promesa con dos argumentos resolve y rejec
export const buscarHeroe = (id) => {
    const heroe  = heroes[id];

    return new Promise( (resolve, reject) => {
     if (heroe) {
         setTimeout(() => resolve(heroe), 1000 );
             
         
         
     }  else{
        reject(`No existe un  heroe con el Id ${id}`)
     } 
    });

}

//forma con asyng
export const buscarHeroeAsyng = async (id) => {
    const heroe  = heroes[id];
    if (heroe) {
        return heroe;
    }  else{
      // throw `No existe un  heroe con el Id ${id}`;
       //muestra la linea del error
       throw Error(`No existe un  heroe con el Id ${id}`);
    } 
    

}


const promesaLenta = new Promise( (resolve, reject)=> {
    setTimeout(() => resolve('Promesa Lenta'), 2000);
});
const promesaMedia = new Promise( (resolve, reject)=> {
    setTimeout(() => resolve('Promesa Media'), 1500);
});
const promesaRapida = new Promise( (resolve, reject)=> {
    setTimeout(() => resolve('Promesa Rapida'), 1000);
});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}