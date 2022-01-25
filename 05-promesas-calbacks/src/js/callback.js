//es enviar una funcion como argumento


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



export const buscarHeroe = (id, callbackFuncionDeRetorno) => {
    const heroe = heroes[id];

    if (heroe) {
        callbackFuncionDeRetorno(null, heroe);
    } else {
        callbackFuncionDeRetorno(`No existe un  heroe con el Id ${id}`)
    }

}