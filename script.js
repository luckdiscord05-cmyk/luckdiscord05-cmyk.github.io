function checkPassword() {
  const password = document.getElementById("password").value.toLowerCase();
  const error = document.getElementById("error");

  if (password === "emocional") {
    window.location.href = "acesso.html";
  } else {
    error.textContent = "Acesso negado.";
  }
}

function showHint() {
  document.getElementById("hint").textContent = "vigenere";
}
