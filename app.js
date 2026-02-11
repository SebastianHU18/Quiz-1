const $ = (selector) => document.querySelector(selector);
const form = $("#form");
const input = $("#name");
const resetBtn = $("#resetBtn");
$("#group").textContent = "Ingenieria Web - Quiz 1 - 8-10am";
$("#code").textContent = "C.C 1036451596";

function init() { // ejecutamos los metodos
  form.addEventListener("submit", handleSubmit);
  input.addEventListener("input", clearMessage);
  resetBtn.addEventListener("click", () => {
    form.reset();
    clearMessage();
  }); 


}

function handleSubmit(event) {
  event.preventDefault();
  const isValid = form.checkValidity();
  if (!isValid) { // con esta parte de la logica me ayudo un compañero, pero fue lo unico, 
                  // de resto lo hice con los conocimientos y los trabajos anteriores
    form.reportValidity();
    return;
  }
  const name = $("#name").value.trim();
  const mood = $("#mood").value;
  const message = buildMessage(name, mood);
  renderMessage(message);
}

function buildMessage(name, mood) {
  if (mood === "feliz") {
    return `Hola ${name}, estas feliz`;
  }
  if (mood === "serio") {
    return `Hola ${name}, estás serio`;
  }
  if (mood === "cansado") {
    return `Hola ${name}, estás cansado`;
  }
  return `Hola ${name}`;
}

function renderMessage(text) {
  const result = $("#result");
  result.textContent = text;
  result.className = "success";
}

function clearMessage() {
  const result = $("#result");
  result.textContent = "";
  result.className = "";
}

init();