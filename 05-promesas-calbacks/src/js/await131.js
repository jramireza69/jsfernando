import { buscarHeroeAsyng } from "./promesas";


const heroesIds =  [  'capi', 'airon', 'spider'];


/* export const obtenerArray = async () => {

const heroesArr = [];

for (const id of heroesIds) {
   await  buscarHeroeAsyng(id).then(heroe => {
        heroesArr.push(heroe);
    });
}


return heroesArr;

}; */
//mejor forma para que el await no itere dentro del bucle
/* export const obtenerArray = async () => {

const heroesArr = [];

for (const id of heroesIds) {
    heroesArr.push( buscarHeroeAsyng(id) );
}


return await Promise.all(heroesArr);

}; */

export const obtenerArray = async () => {

 return await Promise.all(heroesIds.map(buscarHeroeAsyng))  ;

};