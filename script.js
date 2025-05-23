function identificarBandeira() {
  const numero = document.getElementById("cardInput").value.replace(/\D/g, "");
  const resultado = document.getElementById("resultado");

  const bandeira = detectarBandeira(numero);

  if (bandeira) {
    resultado.innerHTML = `🏷️ Bandeira detectada: <strong>${bandeira}</strong>`;
  } else {
    resultado.innerHTML = "❌ Número inválido ou bandeira não reconhecida.";
  }
}

// Função pura que retorna a bandeira com base no prefixo (BIN)
function detectarBandeira(numero) {
  const bandeiras = [
    { nome: "Visa", regex: /^4[0-9]{12}(?:[0-9]{3})?$/ },
    { nome: "MasterCard", regex: /^5[1-5][0-9]{14}$/ },
    { nome: "American Express", regex: /^3[47][0-9]{13}$/ },
    { nome: "Elo", regex: /^((636368|438935|504175|451416|636297|5067|4576|4011)[0-9]*)$/ },
    { nome: "Hipercard", regex: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/ },
    { nome: "Diners Club", regex: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/ },
    { nome: "Discover", regex: /^6(?:011|5[0-9]{2})[0-9]{12}$/ },
    { nome: "JCB", regex: /^(?:2131|1800|35\d{3})\d{11}$/ },
  ];

  for (const bandeira of bandeiras) {
    if (bandeira.regex.test(numero)) {
      return bandeira.nome;
    }
  }

  return null;
}
