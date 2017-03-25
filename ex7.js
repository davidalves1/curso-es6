var nome = 'David';
var es5 = 'Olá' + nome + '!';
var es6 = `
	Olá
	${nome}!
`;

console.log(es6);

function upper(str) {
	return str.toUpperCase();
}

console.log(`2 + 2 = ${2 + 2}`);
console.log(`Olá ${upper(nome)}`);

function monetario(strings, ...values) {
	let resultado = [];
	values.forEach(function(value, key) {
		value = (typeof value === 'number') ?
			`R$${value.toFixed(2)}` : value;

		resultado.push(strings[key], value); 
	});

	return resultado.join('');
}

let preco = 42.29,
	parcela = 12;

console.log(monetario `1x de ${preco} ou 3x de ${parcela}`);