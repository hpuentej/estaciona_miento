// const listaLugares = ['A1', 'B1', 'C1', 'D1', 'E1',
//                       'A2', 'B2', 'C2', 'D2', 'E2',
//                       'A3', 'B3', 'C3', 'D3', 'E3',
//                       'A4', 'B4', 'C4', 'D4', 'E4',
//                       'A5', 'B5', 'C5', 'D5', 'E5'];

// const tipos = ['disponible', 'reservado', 'ocupado', 'no disponible']

// function definirEstacionamiento(tipo, lugar) {
//   if (tipo === 'disponible') {
//     const valor = [tipoDisponible, lugar]
//     return valor;
//   }

//   return tipoEstacionamiento;
// }

function onClickButtonElegir() {
  const inputLugar = document.querySelector(".inputLugar");
  const lugarValue = inputLugar.value;

  const inputTipo = document.querySelector(".inputTipo");
  const tipoValue = inputTipo.value;

  const lugar = document.querySelector(".estaDisponible");
 
  lugar.classList.replace("estaDisponible", "estaNoDisponible");  

  const confirmar = document.querySelector(".Confirmar");
  confirmar.innerText = `El lugar ${lugarValue} tiene el estatus de ${tipoValue}`;
}



