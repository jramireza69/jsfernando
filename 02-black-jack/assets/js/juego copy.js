



let deck = [];
const tipos = ['C', 'D', 'H','S'];
const especiales = ['A', 'J', 'Q','K'];

let puntosJugador     = 0;
    puntosComputadora = 0;
    const puntosHTML = document.querySelectorAll('small');
//referencias html
const btnPedir = document.querySelector('#btnPedir');
const divCartasJugador = document.querySelector('#jugador-cartas');
console.log(btnPedir);
//Crea una nueva baraja
const crearDeck = () => {
 for (let i = 2; i <= 10; i++) {

    for (let  tipo of tipos ) {
      deck.push( i + tipo);  
    }   
     
 }
 for (let tipo of tipos) {
    for (let esp of especiales) {
        deck.push( esp + tipo); 
    }
}
 
 deck = _.shuffle(deck);
 console.log(deck);

}

crearDeck();

//permite tomar una carta

const  pedirCarta = () => {

  if (deck.length === 0 ) {
    throw 'No hay cartas disponibles';    
  }

  const carta = deck.pop();

  return carta;

} 
pedirCarta();

//extrae el primer valor 
//todo string puede ser trabajado como si fuera un arreglo
//isNaN returna un boleano

const valorCarta = ( carta ) => {
const valor = carta.substring(0, carta.length -1 );
return (isNaN(valor)) ?
        (valor === 'A') ? 10: 11
        : valor * 1;
}

//Eventos

  btnPedir.addEventListener('click' , () => {
    const carta = pedirCarta();
   puntosJugador = puntosJugador + valorCarta( carta );
   puntosHTML[0].innerText = puntosJugador;

   const imgCarta = document.createElement('img');
   imgCarta.src = `assets/cartas/${ carta }.png`;
   divCartasJugador.append(imgCarta);
   imgCarta.classList.add('carta');

   if ( puntosJugador > 21 ) {
       console.warn('perdio');
       btnPedir.disabled = true ;
   }else if( puntosJugador === 21 ) {
     console.warn('gano gano gano');
     btnPedir.disabled = true ;
   }

  
  })

