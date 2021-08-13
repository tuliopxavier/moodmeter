let input = document.querySelector("#input");
let energy = document.querySelector("#energy");
let message = document.querySelector("#message");

function handleEnergy() {
  energy.value = input.value;

  if (energy.value >= 8) {
    message.textContent = "Wow, nice!";
  } else if (energy.value <= 2) {
    message.textContent = "Hey, wait! Take a time with your cat!";
  } else {
    message.textContent = "Hold on tight!";
  }
}

function handleInput() {
   input.value = energy.value;
  
  if (input.value >= 8) {
    message.textContent = "Wow, nice!";
  } else if (input.value <= 2) {
    message.textContent = "Hey, wait! Take a time with your cat!";
  } else {
    message.textContent = "Hold on tight!";
  }
}

input.addEventListener("change", handleEnergy);
energy.addEventListener("change", handleInput);
