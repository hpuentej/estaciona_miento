function onClickButtonElegir() {

  const inputLugar = document.querySelector(".inputLugar");
  const lugarValue = inputLugar.value;

  const inputTipo = document.querySelector(".inputTipo");
  const tipoValue = inputTipo.value;

  const lugar = document.querySelector(`.esta${lugarValue}`);  

  if (tipoValue != '') {
    lugar.className = `esta${lugarValue} ${tipoValue}`;      
  }

  const confirmar = document.querySelector(".confirmar");
  confirmar.innerText = `Ultimo lugar actualizado: Lugar ${lugarValue} tiene el estatus de ${tipoValue}`;
}

function cambiaDeColor(){
  return setInterval(conteoPlaces, 2000);  // cada 2 minutos
}

function conteoPlaces() {
  const listaLugares = ['A1', 'B1', 'C1', 'D1', 'E1',
                      'A2', 'B2', 'C2', 'D2', 'E2',
                      'A3', 'B3', 'C3', 'D3', 'E3',
                      'A4', 'B4', 'C4', 'D4', 'E4',
                      'A5', 'B5', 'C5', 'D5', 'E5'];

  let tipos = {disponibles: 0, reservados: 0, ocupados: 0, noDisponibles: 0};

  for(lugar of listaLugares) {    
    const esta1 = document.querySelector(`.esta${lugar}`);
    const [clase0, clase1] = esta1.classList;
    const clase = clase1;
    if (clase === 'estaDisponible') {
      tipos.disponibles += 1;
    } else if (clase === 'estaNoDisponible') {
      tipos.noDisponibles += 1;
    } else if (clase === 'estaReservado') {
      tipos.reservados += 1;
    } else {
      tipos.ocupados += 1;
    }
  }

  localStorage.setItem('tipos', JSON.stringify(tipos));

  const valor_1 = document.querySelector(".val1");
  const valor_2 = document.querySelector(".val2");
  const valor_3 = document.querySelector(".val3");
  const valor_4 = document.querySelector(".val4");

  valor_1.innerHTML = `<p>${tipos.disponibles}</p>`;
  valor_2.innerHTML = `<p>${tipos.reservados}</p>`;
  valor_3.innerHTML = `<p>${tipos.ocupados}</p>`;
  valor_4.innerHTML = `<p>${tipos.noDisponibles}</p>`;
}
  




