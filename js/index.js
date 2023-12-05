// Función para generar un número aleatorio en un rango dado
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // Función para convertir el número de la jugada a su representación en texto
  function eleccion(jugada) {
    let resultado = "";
    if (jugada == 1) {
      resultado = "Piedra ✊";
    } else if (jugada == 2) {
      resultado = "Papel ✋";
    } else if (jugada == 3) {
      resultado = "Tijera ✌";
    } else {
      resultado = "NO ES NINGUNA DE LAS OPCIONES ❌";
    }
    return resultado;
  }

  // Variables para llevar el seguimiento de las estadísticas del juego
  let jugador = 0;
  let pc = 0;
  let victorias = 0;
  let derrotas = 0;
  let empates = 0;

  // Bucle principal del juego, se juega hasta que alguien alcanza 3 victorias o derrotas
  while (victorias < 3 && derrotas < 3) {
    // La computadora elige una jugada aleatoria
    pc = aleatorio(1, 3);

    // El jugador ingresa su elección
    jugador = prompt(
      "🖖¡Hola! ingresa el número de tu elección:\n🪨 PIEDRA es 1, 📄 PAPEL es 2 y ✂️ TIJERA es 3"
    );

    // Muestra las elecciones de la computadora y el jugador
    alert("PC elige: " + eleccion(pc));
    alert("Tu eliges: " + eleccion(jugador));

    // Determina el resultado de la partida
    if (pc == jugador) {
      alert("Empate");
      empates = empates + 1;
    } else if (
      (jugador == 1 && pc == 3) ||
      (jugador == 2 && pc == 1) ||
      (jugador == 3 && pc == 2)
    ) {
      alert("GANASTE🏆");
      victorias = victorias + 1;
    } else {
      alert("Perdiste");
      derrotas = derrotas + 1;
    }
  }

  // Muestra el resumen de estadísticas al final del juego
  alert(
    "Ganaste: " + victorias + " veces.\nPerdiste: " + derrotas + " veces.\nEmpataste: " + empates + " veces."
  );