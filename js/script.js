function filtraDivisibili(numero, array) {
    return array.filter((x) => x % numero === 0);
}

const numeroIntero = 3;
const arrayDiNumeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const risultato = filtraDivisibili(numeroIntero, arrayDiNumeri);

console.log(risultato); 
