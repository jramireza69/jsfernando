import { buscarHeroe as buscarHeroeCallback } from "./js/callback";
import { buscarHeroe } from "./js/promesa1";

const heroeId1 = 'capi'
const heroeId2 = 'airon'
    //callback normal
    /* buscarHeroeCallback(heroeId, (err, heroe) => {
        if (err) {
            console.log(`no hay error mira el heroe ${ err }`);
        } else {
            console.log('este es el heroe ', heroe);
        }


    }) */

// callback infierno  por mucho tiempo esta era la unica forma de hacerlo
buscarHeroeCallback(heroeId1, (err, heroe1) => {

    //otra manera corta de hacerlo
    if (err) {
        return console.error('fin del programa', err);
    }

    //vuelvo a llamar buscarHeroe
    buscarHeroeCallback(heroeId2, (err, heroe2) => {
        if (err) {
            return console.error('fin del programa', err);
        }
        console.log(`Enviando a  ${heroe1.nombre} y a ${heroe2.nombre} a la mision `);
    })


})
console.log('end program');