function comparaNumeros(num1, num2) {
    num1 = Number(process.argv[2]);
    num2 = Number(process.argv[3]);

    const numerosIguais = num1 === num2 ? `Os números ${num1} e ${num2} são iguais` : `Os números ${num1} e ${num2} não são iguais`;
    const somaNumeros = num1 + num2;
    const somaMaiorMenorQueDez = somaNumeros > 10 ? `maior que 10` : `menor que 10`
    const somaMaiorMenorQueVinte = somaNumeros < 20 ? `menor que 20` : `maior que 20`

    const somaIgualDez = somaNumeros === 10 ? `igual a 10` : somaMaiorMenorQueDez
    const somaIgualVinte = somaNumeros === 20 ? `igual a 10` : somaMaiorMenorQueVinte

    console.log (`${numerosIguais}. Sua soma é ${somaNumeros}, que é ${somaIgualDez} e ${somaIgualVinte}`)
}

comparaNumeros();