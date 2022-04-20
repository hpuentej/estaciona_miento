let tipos = {disponible: 0, reservado: 0, ocupado: 0, noDisponible: 0};

let listaLugares = ['A1', 'B1', 'C1', 'D1', 'E1',
                    'A2', 'B2', 'C2', 'D2', 'E2',
                    'A3', 'B3', 'C3', 'D3', 'E3',
                    'A4', 'B4', 'C4', 'D4', 'E4',
                    'A5', 'B5', 'C5', 'D5', 'E5'];




// Registrar tipo de estacionamiento

function registrarTipos(tipos,listaLugares){
  return setInterval(setCantidadTipos(tipos,listaLugares), 1000);  // cada 1 segundos
}

function conteo_Fijar_Places(tipos, listaLugares) {
  const tiposX = cantidadLugares(tipos, listaLugares);
  localStorage.setItem('tipos', JSON.stringify(tiposX));
}
 
function cantidadLugares(tipos, listaLugares) {
  for(lugar of listaLugares) {    
    const esta1 = document.querySelector(`.esta${lugar}`);
    const [clase0, clase1] = esta1.classList;
    const clase = clase1;
    if (clase === 'disponible') {
      tipos.disponible += 1;
    } else if (clase === 'noDisponible') {
      tipos.noDisponible += 1;
    } else if (clase === 'reservado') {
      tipos.reservado += 1;
    } else if (clase === 'ocupado') {
      tipos.ocupado += 1;
    }
  }
  return tipos;                      
}

function setCantidadTipos(tipos, listaLugares) {
  const valor_1 = document.querySelector(".val1");
  const valor_2 = document.querySelector(".val2");
  const valor_3 = document.querySelector(".val3");
  const valor_4 = document.querySelector(".val4");

  // if(localStorage.getItem('tipos') != null) {
  //   const tipos = JSON.parse(localStorage.getItem('tipos'));
  //   conteo_Fijar_Places(tipos, listaLugares);   

  //   valor_1.innerText = `${tipos.disponible}` 
  //   valor_2.innerText = `${tipos.reservado}`
  //   valor_3.innerText = `${tipos.ocupado}` 
  //   valor_4.innerText = `${tipos.noDisponible}` 
  // } else {
  //   conteo_Fijar_Places(tipos, listaLugares);   
  //   const tiposZ = JSON.parse(localStorage.getItem('tipos'));
  //   valor_1.innerText = `${tiposZ.disponible}` 
  //   valor_2.innerText = `${tiposZ.reservado}`
  //   valor_3.innerText = `${tiposZ.ocupado}` 
  //   valor_4.innerText = `${tiposZ.noDisponible}` 
  //   }

  conteo_Fijar_Places(tipos, listaLugares);   
  const tiposZ = JSON.parse(localStorage.getItem('tipos'));
  valor_1.innerText = `${tiposZ.disponible}` 
  valor_2.innerText = `${tiposZ.reservado}`
  valor_3.innerText = `${tiposZ.ocupado}` 
  valor_4.innerText = `${tiposZ.noDisponible}` 
}

// Fijar color de estacionamiento

function onClickButtonElegir(tipos, listaLugares) {

  const inputLugar = document.querySelector(".inputLugar");
  const lugarValue = inputLugar.value;

  const inputTipo = document.querySelector(".inputTipo");
  const tipoValue = inputTipo.value;

  const lugar = document.querySelector(`.esta${lugarValue}`);  

  // if (tipoValue != '') {
  //   lugar.className = `esta${lugarValue} ${tipoValue}`;      
  // }

  // const confirmar = document.querySelector(".confirmar"); 
  // confirmar.innerText = `Ultimo lugar actualizado: Lugar ${lugarValue} tiene el estatus de ${tipoValue}`;
  const tiposX = Object.keys(tipos);
  list = [];

  tiposX.forEach(tipo => {
    if (tipoValue === tipo  && tipoValue != '') {
      list.push(true);
    } else {
      list.push(false);
    }
  });

  if (list.includes(true)) { 
    lugar.className = `esta${lugarValue} ${tipoValue}`; // Cambiar clase y pintar el lugar     
    const confirmar = document.querySelector(".confirmar"); 
    confirmar.innerText = `Ultimo lugar actualizado: El lugar ${lugarValue} tiene el estado ${tipoValue}`;
  } else {
    const confirmar = document.querySelector(".confirmar");
    confirmar.innerText = `El lugar ${lugarValue} no existe o no selecciono un tipo de estacionamiento adecuado`;
  }
}




