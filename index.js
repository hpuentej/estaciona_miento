let tipos = {disponible: 0, reservado: 0, ocupado: 0, noDisponible: 0};

let listaLugares = ['A1', 'B1', 'C1', 'D1', 'E1',
                    'A2', 'B2', 'C2', 'D2', 'E2',
                    'A3', 'B3', 'C3', 'D3', 'E3',
                    'A4', 'B4', 'C4', 'D4', 'E4',
                    'A5', 'B5', 'C5', 'D5', 'E5'];

// Primer conteo de tipos de estacionamiento 

function cantidadLugares(tipos, listaLugares) {
  for(lugar of listaLugares) {    
    const esta1 = document.querySelector(`.esta${lugar}`);
    const [clase0, clase1] = esta1.classList;
    if (clase1 === 'disponible') {
      tipos.disponible += 1;
    } else if (clase1 === 'noDisponible') {
      tipos.noDisponible += 1;
    } else if (clase1 === 'reservado') {
      tipos.reservado += 1;
    } else if (clase1 === 'ocupado') {
      tipos.ocupado += 1;
    }
  }                    
}

// Ver cantidad de cada tipo de estacionamiento

function setCantidadTipos(tipos, listaLugares) {
  const valor_1 = document.querySelector(".val1");
  const valor_2 = document.querySelector(".val2");
  const valor_3 = document.querySelector(".val3");
  const valor_4 = document.querySelector(".val4");

  if (JSON.parse(localStorage.getItem('tipos')) != undefined){
    const tiposX = JSON.parse(localStorage.getItem('tipos'));
    valor_1.innerText = `${tiposX.disponible}` 
    valor_2.innerText = `${tiposX.reservado}`
    valor_3.innerText = `${tiposX.ocupado}` 
    valor_4.innerText = `${tiposX.noDisponible}`

    // const listaX_lugar = JSON.parse(localStorage.getItem('lista_Lugares'));
    fijarColores();      

    // localStorage.setItem('lista_Lugares', JSON.stringify(listaX_lugar));
          
  } else if (JSON.parse(localStorage.getItem('tipos')) == undefined) {
    cantidadLugares(tipos, listaLugares);
    localStorage.setItem('tipos', JSON.stringify(tipos));

    valor_1.innerText = `${tipos.disponible}` 
    valor_2.innerText = `${tipos.reservado}`
    valor_3.innerText = `${tipos.ocupado}` 
    valor_4.innerText = `${tipos.noDisponible}` 
  } else {
    valor_1.innerText = `${0}` 
    valor_2.innerText = `${0}`
    valor_3.innerText = `${0}` 
    valor_4.innerText = `${0}`
  }
}

// Funcion para fijar los colores de los estacionamientos

function fijarColores(){
  const lugarLista = JSON.parse(localStorage.getItem('lista_Lugares'));
  for(let lugar of lugarLista) {
    const estacion = document.querySelector(`.esta${lugar.lugar}`);
    // const [clase0, clase1] = estacion.classList;
    if (lugar.tipo === 'disponible') {
      estacion.classList.remove('noDisponible');
      estacion.classList.remove('reservado');
      estacion.classList.remove('ocupado');
      estacion.classList.add('disponible');
    } else if (lugar.tipo === 'noDisponible') {
      estacion.classList.remove('disponible');
      estacion.classList.remove('reservado');
      estacion.classList.remove('ocupado');
      estacion.classList.add('noDisponible');
    } else if (lugar.tipo === 'reservado') {
      estacion.classList.remove('disponible');
      estacion.classList.remove('noDisponible');
      estacion.classList.remove('ocupado');
      estacion.classList.add('reservado');
    } else if (lugar.tipo === 'ocupado') {
      estacion.classList.remove('disponible');
      estacion.classList.remove('noDisponible');
      estacion.classList.remove('reservado');
      estacion.classList.add('ocupado');
    }
  }
}

// Fijar lista de objetos con los lugares y sus tipos

function fijarLugares(listaLugares){
  const lugarLista = [];

  for(let lugar of listaLugares) {
    const estacion = document.querySelector(`.esta${lugar}`);
    const [clase0, clase1] = estacion.classList;    
    
    if (clase1 === 'disponible') {
      const lugarObjeto = {};
      lugarObjeto.lugar = lugar;
      lugarObjeto.tipo = 'disponible';
      lugarLista.push(lugarObjeto);
    } else if (clase1 === 'noDisponible') {
      const lugarObjeto = {};
      lugarObjeto.lugar = lugar;
      lugarObjeto.tipo = 'noDisponible';
      lugarLista.push(lugarObjeto);
    } else if (clase1 === 'reservado') {
      const lugarObjeto = {};
      lugarObjeto.lugar = lugar;
      lugarObjeto.tipo = 'reservado';
      lugarLista.push(lugarObjeto);
    } else if (clase1 === 'ocupado') {
      const lugarObjeto = {};
      lugarObjeto.lugar = lugar;
      lugarObjeto.tipo = 'ocupado';
      lugarLista.push(lugarObjeto);
    }
  }  
  localStorage.setItem(`lista_Lugares`, JSON.stringify(lugarLista));
}

// Cambiar color de estacionamiento

function onClickButtonElegir(tipos, listaLugares){
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
    // localStorage.setItem(`${lugarValue}`, tipoValue);
    const lugar = document.querySelector(`.esta${lugarValue}`);
    const [clase0, clase1] = lugar.classList;

    const tiposD = JSON.parse(localStorage.getItem('tipos'));
    
    tiposD[clase1] -= 1;
    tiposD[tipoValue] += 1;
    localStorage.setItem('tipos', JSON.stringify(tiposD));
    
    registrarTipos(tipos,listaLugares); // modificar tipos

    const listaX_lugar = JSON.parse(localStorage.getItem('lista_Lugares'));
    
    for (let lugarX of listaX_lugar) {
      if(lugarX.lugar === lugarValue) {
        lugarX.tipo = tipoValue;
      }
    }

    localStorage.setItem('lista_Lugares', JSON.stringify(listaX_lugar));
       
    fijarColores();

    // lugar.className = `esta${lugarValue} ${tipoValue}`; // Cambiar clase y pintar el lugar   

    const confirmar = document.querySelector(".confirmar"); 
    confirmar.innerText = `Ultimo lugar actualizado: El lugar ${lugarValue} tiene el estado ${tipoValue}`;
  } else {
    const confirmar = document.querySelector(".confirmar");
    confirmar.innerText = `El lugar ${lugarValue} no existe o no selecciono un tipo de estacionamiento adecuado`;
  }
}

// Registrar tipo de estacionamiento

function registrarTipos(tipos,listaLugares){
  // localStorage.
  if (JSON.parse(localStorage.getItem('tipos')) != null){
    return setInterval(setCantidadTipos(tipos, listaLugares), 1000);  // cada 1 segundos
  } else {
    console.log('No habia datos en el localStorage');
    fijarLugares(listaLugares);
    fijarColores();  
    return setInterval(setCantidadTipos(tipos, listaLugares), 1000);  // cada 1 segundos    
  }
}

// Activar con click en boton

const elegirColorEstacionamiento = document.querySelector(".elegirColor_button");
elegirColorEstacionamiento.addEventListener('click', function(){onClickButtonElegir(tipos, listaLugares)}, false);





