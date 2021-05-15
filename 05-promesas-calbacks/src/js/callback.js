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



export const buscarHeroe = (id, callback) => {
    const heroe  = heroes[id];
    if (heroe) {
        callback(null, heroe);
    } else {
        callback( `No existe un  heroe con el Id ${id}` )    
    }
    
}