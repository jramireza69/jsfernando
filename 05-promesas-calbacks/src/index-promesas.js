//import { buscarHeroe as buscarHeroeCallback} from "./js/callback";
import { buscarHeroe  } from "./js/promesas";
import './styles.css';

const  heroeId1 = 'capi';
const  heroeId2 = 'spider';



//mandar una funcion como argumento
// estandar en callbacks lo primero es un error
/* buscarHeroe( heroeId1 , (err, heroe1) => {
    if (err) { return console.error(err); }
    
    buscarHeroe( heroeId2 , (err, heroe2) => {
        if (err) { return console.error(err); }
        
        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
    });
});
console.log('Fin del programa'); */

/* buscarHeroe(heroeId1).then( heroe => {
    console.log(`Enviando ${heroe.nombre}  a la mision`);
});
console.log('Fin del programa'); */

//forma que similar a hell
/* buscarHeroe(heroeId1).then( heroe1 => {
   // console.log(`Enviando ${heroe.nombre}  a la mision`);
   buscarHeroe(heroeId2).then( heroe2 => {
    console.log(`Enviando ${heroe1.nombre} y ${heroe2.nombre}  a la mision`);
});
}); */

/* Promise.all([true, 'hola', 123]).then(arr => {
console.log('promise.all', arr);
}); */

//sin desestructuracion
/* Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)]).then(heroes => {
  console.log(heroes);
//console.log(`Enviando ${heroes[0].nombre} y ${heroes[1].nombre}  a la mision`);
}); */

Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
.then(([heroe1, heroe2]) => {

console.log(`Enviando ${heroe1.nombre} y ${heroe2.nombre}  a la mision`);
}).catch(err => {
    alert(err)

});

