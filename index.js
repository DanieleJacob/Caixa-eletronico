
let quantiaInicial = parseFloat(prompt("Digite a quantidade inicial de dinheiro:"))
/* quantiaInicial = parseFloat(quantiaInicial) */
let opcao = ""

do {
  opcao = prompt("Você possui R$" + quantiaInicial + " reais\n" +
    "\n- Digite 1 para depositar" +
    "\n- Digite 2 para sacar" +
    "\n- Digite 3 para sair")

    switch (opcao) {
      case "1":
        quantiaInicial += parseFloat(prompt("Digite o valor que deseja depositar:"))
        break
      case "2":
        quantiaInicial -= parseFloat(prompt("Digite o valor que deseja sacar:"))
        break
      case "3":
        alert("Você escolheu sair")
        alert("Encerrando...")
        break
      default:
        alert("Opção inválida")

    }


} while (opcao !== "3")



