alert('Bem vinde :)');
let numeroMaximo = 30; 
let numeroSecreto = parseInt(Math.random () * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número é menor que ${chute}`);
        } else {
            alert(`O número é maior que ${chute}`);
        }
        tentativas++
    }
}

let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa'
alert(`Boa garote! Você descobriu o número secrete ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

