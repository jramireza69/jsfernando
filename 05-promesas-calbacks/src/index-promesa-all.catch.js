import { buscarHeroe as buscarHeroeCallback } from "./js/callback";
import { buscarHeroe } from "./js/promesa1";

const heroeId1 = 'spider'
const heroeId2 = 'airon'


//llamando normal
/* buscarHeroe(heroeId1).then(heroe => {

    console.log(`enviando a ${heroe.nombre} a la mision`);

})
console.log('fin de programa'); */


//llamando con promise.all

/* Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)]).then(heroes => {
    console.log(`enviando a ${heroes[0].nombre} y a ${heroes[1].nombre} a la mision`);
})
console.log('fin de la promesa all'); */

//desestructurando
/* Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)]).then(([heroe1, heroe2]) => {
    console.log(`enviando a ${heroe1.nombre} y a ${heroe2.nombre} a la mision`);
})
console.log('fin de la promesa all con desestructuracion de array'); */

//manejando el error con .cath
Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)]).then(([heroe1, heroe2]) => {
    console.log(`enviando a ${heroe1.nombre} y a ${heroe2.nombre} a la mision`);
}).catch(err => {
    alert(err)
})
console.log('fin de la promesa all con desestructuracion de array, manejando el error con cath');