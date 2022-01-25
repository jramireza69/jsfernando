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
export const buscarHeroe = (id) => {
        const heroe = heroes[id];
        // const promesa = new Promise();  //no se crea mejor se retorna de una vez

        //dentro de la promesa se recibe el callbakc o lo que se quiere ejecutar
        return new Promise((resolve, reject) => {
            if (heroe) {
                resolve(heroe)
            } else {
                reject(`no existe un heroe con el id ${id}`)
            }
        });

    }
    //promesa con dos argumentos resolve y rejec