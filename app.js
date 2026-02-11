const $ = (selector) => document.querySelector(selector);
const form = $("#form");
const input = $("#name");
const resetBtn = $("#resetBtn");

input.addEventListener("input", clearMessage);
resetBtn.addEventListener("click", () => {
    form.reset();
    clearMessage();
  });

$("#group").textContent = "Ingenieria Web - Quiz 1";
$("#code").textContent = "C.C 1036451596";
function clearMessage() {
  const result = $("#result");
  result.textContent = "";
  result.className = "";
}

document.addEventListener("DOMContentLoaded", init);
