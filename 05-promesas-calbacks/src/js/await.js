import { buscarHeroeAsyng } from "./asyng";



const heroesIds =  [  'capi', 'airon', 'spider'];
//const heroesPromesas = heroesIds.map(buscarHeroe); //es lo mismo
/* const heroesPromesas = heroesIds.map(id => buscarHeroe(id)); */

//esta funcion sin usar el await genera un falso positivo a menos que se apoye con el setTimeout el cual no es eficiente
/* export const obtenerHeroesArr =  () => {
    const heroesArr = [];

     

        for (const id of heroesIds  ) {
         buscarHeroeAsyng(id).then(heroe => {
             heroesArr.push( heroe)
         })
          
        }
        setTimeout(() => {
            console.table(heroesArr);
        }, 1000);      

    return heroesArr;
}; */

//*usando el await
export const obtenerHeroesArr = async  () => {
    const heroesArr = [];

     

        for (const id of heroesIds  ) {
      const heroe =  await  buscarHeroeAsyng(id)
      heroesArr.push(heroe)
          
        }    

    return heroesArr;
};
/* export const obtenerHeroesArr = async () => {
    const heroesArr = [];

        for (const id of heroesIds  ) {
         // const heroe = await buscarHeroe(id);
           heroesArr.push(buscarHeroe(id));
        }      

    return await Promise.all(heroesArr);
}; */

//formaelegante
/* export const obtenerHeroesArr = async () => {
    return await Promise.all(heroesIds.map(buscarHeroe));
}; */

//convertido a una sola linea
/* export const obtenerHeroesArr = async () => await Promise.all(heroesIds.map(buscarHeroe)); */

//manejo error del await

/* export const obtenerHeroeAwait  = async (id) => {
    try {
       const heroe = await buscarHeroeAsyng(id)
    return heroe;  
    } catch (e) {
        console.log('CATCH!!!!!!!');
        return {
            nombre: 'sin nombre',
            poder: 'sin poder'
        }
    }
   
} */

/* export const herosCiclo = async () => {
    console.time('Heroes ciclo');
    
    const heroes = await Promise.all( heroesPromesas );
    heroes.forEach( heroe => console.log(heroe));
    console.log(heroes);
    
    console.timeEnd('Heroes ciclo find');
}; */


