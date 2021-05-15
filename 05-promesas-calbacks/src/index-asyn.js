//import './styles.css';
//import { promesaLenta, promesaMedia, promesaRapida } from "./js/promesas";
import { buscarHeroe, buscarHeroeAsyng } from "./js/promesas";


/* promesaLenta.then(console.log);
promesaMedia.then(mensaje => console.log(mensaje));
promesaRapida.then(console.log); */

/* Promise.race([promesaLenta, promesaMedia, promesaRapida]).then(console.log); */

buscarHeroe('capi').then(console.log);
buscarHeroeAsyng('airon')
.then(console.log).catch(console.warn);