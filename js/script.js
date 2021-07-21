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

  //   using if ternary
  //   energy.value >= 8
  //     ? (message.textContent = "Wow, nice!")
  //     : energy.value <= 2
  //     ? (message.textContent = "Hey, wait! Take a time with your cat!")
  //     : (message.textContent = "Hold on tight!");
}

input.addEventListener("change", handleEnergy);
