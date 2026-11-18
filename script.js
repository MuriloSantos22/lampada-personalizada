const powerButton = document.querySelector("#powerButton");
const buttonText = document.querySelector("#buttonText");
const statusText = document.querySelector("#status");

let lightIsOn = false;

function toggleLight() {
  lightIsOn = !lightIsOn;

  document.body.classList.toggle("light-on", lightIsOn);
  powerButton.setAttribute("aria-pressed", String(lightIsOn));

  if (lightIsOn) {
    buttonText.textContent = "Apagar lâmpada";
    statusText.innerHTML = "A lâmpada está <strong>acesa</strong>";
  } else {
    buttonText.textContent = "Acender lâmpada";
    statusText.innerHTML = "A lâmpada está <strong>apagada</strong>";
  }
}

powerButton.addEventListener("click", toggleLight);
