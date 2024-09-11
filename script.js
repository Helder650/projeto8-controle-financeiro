let money = parseFloat(prompt("Qual a quantidade inicial de dinheiro?"))
let options
let addmoney
let removeMoney

do {
  options = prompt(`Quantidade inicial de dinheiro: ${money}
Escolha uma das opções abaixo:
1. Adicionar Dinheiro
2. Retirar Dinheiro
3. Sair`)

  switch(options) {
    case "1": addmoney = parseFloat(prompt("Quanto você deseja adicionar?"))
      money += addmoney
      alert(`Você adicionou ${addmoney} reais. Seu saldo agora é de ${money} reais.`)
    break
    case "2": removemoney = parseFloat(prompt("Quanto você deseja retirar?"))
      money -= removemoney
      alert(`Você retirou ${removemoney} reais. Seu saldo agora é de ${money} reais.`)
    break
    case "3":
      alert("Saindo...")
    break
    default:
      alert('Opção inválida. Por favor, escolha uma opção válida.')
    break }

  } while (options !== "3")