const canvas = document.getElementById("snake");
const context = canvas.getContext("2d");
const box = 32;

let background = () => {
  context.fillStyle = "lightgreen";
  context.fillRect(0, 0, 16 * box, 16 * box);
};

background();
