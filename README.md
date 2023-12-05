# Piedra, Papel o Tijera - Juego en HTML/JavaScript

Este es un simple juego de Piedra, Papel o Tijera implementado en HTML y JavaScript. Permite al usuario elegir entre tres opciones (piedra, papel o tijera), generando luego una elección aleatoria para la máquina. El resultado del juego se determina comparando las elecciones del jugador y de la máquina.

## Cómo Jugar

1. Abre el archivo `index.html` en tu navegador.

2. Se te pedirá que ingreses un número para representar tu elección:
   - 1 para Piedra 🪨
   - 2 para Papel 📄
   - 3 para Tijera ✂️

3. El juego mostrará tus elecciones y las de la máquina.

4. El resultado del juego se mostrará en una alerta:
   - Empate si las elecciones son iguales.
   - Ganaste si vences a la elección de la máquina.
   - Perdiste si la máquina vence tu elección.

## Detalles Técnicos

### Función `aleatorio(min, max)`

Esta función genera un número aleatorio entre `min` y `max` (ambos inclusive).

### Variables

- `jugador`: Almacena la elección del jugador.
- `pc`: Almacena la elección aleatoria de la máquina.

### Elecciones del Jugador y de la Máquina

Las elecciones se muestran en alertas para informar al usuario sobre las opciones seleccionadas.

### Combate

Se evalúa el resultado del juego con las siguientes condiciones:
- Empate si las elecciones son iguales.
- Ganaste si vences a la elección de la máquina.
- Perdiste si la máquina vence tu elección.

### Mensajes de Alerta

Se utilizan alertas para comunicar de manera clara y sencilla el resultado del juego y las elecciones realizadas por el jugador y la máquina.

## Notas

- Si el jugador ingresa un número que no corresponde a ninguna de las opciones, se mostrará un mensaje indicando que no es válida.

¡Diviértete jugando piedra, papel o tijera! 🪨 📄 ✂️
