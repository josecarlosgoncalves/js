const readline = require('readline');

/*const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Qual é o seu nome? ', (nome) => {
	console.log(`Olá, ${nome}!`);
	rl.close();
});*/


//operators

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Digite o primeiro número: ', (num1) => {
    rl.question('Digite o segundo número: ', (num2) => {
        const n1 = Number(num1);
        const n2 = Number(num2);

        console.log(`O primeiro número (${n1}) é ${n1 % 2 === 0 ? 'par' : 'ímpar'}`);
        console.log(`O segundo número (${n2}) é ${n2 % 2 === 0 ? 'par' : 'ímpar'}`);

        // Mostra o maior e o menor
        if (n1 > n2) {
            console.log(`O maior é ${n1} e o menor é ${n2}`);
        } else if (n2 > n1) {
            console.log(`O maior é ${n2} e o menor é ${n1}`);
        } else {
            console.log('Os dois números são iguais.');
        }

        rl.close();
    });
});

// Ler dois numeros e mostre o maior e o menor

