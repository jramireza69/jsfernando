

let deck = [];
const tipos = ['C', 'D', 'H','S'];
const especiales = ['A', 'J', 'Q','K'];
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computador-cartas');

let puntosJugador = 0;
    puntosComputadora = 0;
    const puntosHTML = document.querySelectorAll('small');


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

const  pedirCarta = () => {

  if (deck.length === 0 ) {
    throw 'No hay cartas disponibles';    
  }
  const carta = deck.pop();
  return carta;

} 
pedirCarta();

const valorCarta = ( carta ) => {
const valor = carta.substring(0, carta.length -1 );
return (isNaN(valor)) ?
        (valor === 'A') ? 10: 11
        : valor * 1;
}

//turno computadora
const turnoComputadora = ( puntosMinimos ) => {
  do {
    const carta = pedirCarta();
      puntosComputadora = puntosComputadora + valorCarta( carta );
      puntosHTML[1].innerText = puntosComputadora;

      const imgCarta = document.createElement('img');
      imgCarta.src = `assets/cartas/${ carta }.png`;
      divCartasComputadora.append(imgCarta);
      imgCarta.classList.add('carta');
      if (puntosMinimos < 21) {
        break;
      }
  } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21)  );
        setTimeout(() => {
          if (puntosComputadora === puntosMinimos) {
            alert('Nadie Gana : ');
          }else if (puntosMinimos > 21 ) {
            alert('Gana Computadora')
          } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
          }else{
            alert('pc gana')
          }
        }, 500);

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
       btnDetener.disabled = true ;
       turnoComputadora(puntosJugador);
   }else if( puntosJugador === 21 ) {
     console.warn('gano gano gano');
     btnPedir.disabled = true ;
     btnDetener.disabled = true ;
     turnoComputadora(puntosJugador);
   }

  
  });
  btnDetener.addEventListener('click', () => {
    turnoComputadora(puntosJugador);
    btnPedir.disabled = true ;
    btnDetener.disabled = true ;

  });
  btnNuevo.addEventListener('click', () => {
    console.clear();
    deck = [];
    puntosComputadora = 0;
    puntosJugador     = 0;

    puntosHTML[0].innerText =  0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled = false ;
    btnDetener.disabled = false ;
    crearDeck();

  });


