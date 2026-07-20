function calcularRank(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Exemplo de teste
// const resultado = calcularRank(85, 10);
// console.log(resultado);

//teste interativo com entrada do usuário

const prompt = require("prompt-sync")();

const vitorias = parseInt(prompt("Digite o número de vitórias: "));
const derrotas = parseInt(prompt("Digite o número de derrotas: "));

console.log(calcularRank(vitorias, derrotas));
