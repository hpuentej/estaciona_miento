let tipos = {disponible: 0, reservado: 0, ocupado: 0, noDisponible: 0};

let listaLugares = ['A1', 'B1', 'C1', 'D1', 'E1',
                    'A2', 'B2', 'C2', 'D2', 'E2',
                    'A3', 'B3', 'C3', 'D3', 'E3',
                    'A4', 'B4', 'C4', 'D4', 'E4',
                    'A5', 'B5', 'C5', 'D5', 'E5'];

// Registrar tipo de estacionamiento

function registrarTipos(tipos,listaLugares){
  // localStorage.
  if (JSON.parse(localStorage.getItem('tipos')) != null){
    const tiposX = JSON.parse(localStorage.getItem('tipos'));
    return setInterval(setCantidadTipos(tiposX), 1000);  // cada 1 segundos
  } else {
    console.log('No habia datos en el localStorage');
    cantidadLugares(tipos, listaLugares);
    localStorage.setItem('tipos', JSON.stringify(tipos));
    return setInterval(setCantidadTipos(tipos), 1000);  // cada 1 segundos    
  }
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

function setCantidadTipos(tipos) {
  const valor_1 = document.querySelector(".val1");
  const valor_2 = document.querySelector(".val2");
  const valor_3 = document.querySelector(".val3");
  const valor_4 = document.querySelector(".val4");
  
  valor_1.innerText = `${tipos.disponible}` 
  valor_2.innerText = `${tipos.reservado}`
  valor_3.innerText = `${tipos.ocupado}` 
  valor_4.innerText = `${tipos.noDisponible}` 
}

// Fijar color de estacionamiento

function onClickButtonElegir(tipos, listaLugares) {
  const inputLugar = document.querySelector(".inputLugar");
  const lugarValue = inputLugar.value;

  const inputTipo = document.querySelector(".inputTipo");
  const tipoValue = inputTipo.value;

  const tiposX = Object.keys(tipos);
  list = [];

  for (let tipo of tiposX){
    for (let lugarX of listaLugares) {
      if (tipoValue === tipo  && lugarValue === lugarX) {
        list.push(true);        
      } else {
        list.push(false);
      }
    }
  };
  
  if (list.includes(true)) {
    const lugar = document.querySelector(`.esta${lugarValue}`); 
    // localStorage.setItem('lugar', JSON.stringify(lugar));
    // const lugarY = JSON.parse(localStorage.getItem('lugar'));     
    lugar.className = `esta${lugarValue} ${tipoValue}`; // Cambiar clase y pintar el lugar
    const lugarY = lugar.className;
    localStorage.setItem('lugar', JSON.stringify(lugarY));
    const lugarZ = JSON.parse(localStorage.getItem('lugar'));
    lugarZ.className = `esta${lugarValue} ${tipoValue}`;
    
    const confirmar = document.querySelector(".confirmar"); 
    confirmar.innerText = `Ultimo lugar actualizado: El lugar ${lugarValue} tiene el estado ${tipoValue}`;
  } else {
    const confirmar = document.querySelector(".confirmar");
    confirmar.innerText = `El lugar ${lugarValue} no existe o no selecciono un tipo de estacionamiento adecuado`;
  }
}






