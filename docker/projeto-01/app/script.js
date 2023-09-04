$(document).ready(function () {
  const habilidades = document.querySelectorAll(".habilidade");
  const habilidadeAnteriorButton = document.getElementById(
    "habilidade-anterior"
  );
  const habilidadeSeguinteButton = document.getElementById(
    "habilidade-seguinte"
  );

  let habilidadeAtual = 0;

  function mostrarHabilidade(habilidadeIndex) {
    habilidades.forEach((habilidade, index) => {
      if (index === habilidadeIndex) {
        habilidade.classList.add("visible");
      } else {
        habilidade.classList.remove("visible");
      }
    });
  }

  function mostrarProximaHabilidade() {
    habilidadeAtual = (habilidadeAtual + 1) % habilidades.length;
    mostrarHabilidade(habilidadeAtual);
  }

  function mostrarHabilidadeAnterior() {
    habilidadeAtual =
      (habilidadeAtual - 1 + habilidades.length) % habilidades.length;
    mostrarHabilidade(habilidadeAtual);
  }

  const headerText = document.getElementById("header-text");
  const textoOriginal = ["Olá, eu sou a Nicole!", "Engenheira de Software Jr."];
  let fraseAtual = 0;
  let index = 0;
  let isTyping = true;

  function animarTexto() {
    if (fraseAtual < textoOriginal.length) {
      headerText.textContent = textoOriginal[fraseAtual].substring(0, index);

      if (isTyping) {
        index++;

        if (index > textoOriginal[fraseAtual].length) {
          isTyping = false;
          setTimeout(function () {
            isTyping = true;
            index = 0;
            if (fraseAtual === 0) {
              fraseAtual = 1;
            } else {
              fraseAtual = 0;
            }
          }, 2000);
        }
      } else {
        index--;
        if (index === 0) {
          isTyping = true;
        }
      }
      setTimeout(animarTexto, 200);
    }
  }

  animarTexto();

  habilidadeSeguinteButton.addEventListener("click", mostrarProximaHabilidade);
  habilidadeAnteriorButton.addEventListener("click", mostrarHabilidadeAnterior);

  mostrarHabilidade(habilidadeAtual);
});
