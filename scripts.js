var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Parabéns, você salvou o universo!!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML =
      "Qual é? Tá certo não, só vale número de 0 a 10";
  } else {
    elementoResultado.innerHTML =
      "Você vai sumir e metade do universo também. Limitado, tente de novo. O número era " +
      numeroSecreto;
  }
}
