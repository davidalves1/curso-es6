var num = 1;

{
	// Como não possui escopo de bloco, através do hoist
	// é alterada a variável global
	var num = 2;
	console.log('dentro = ', num);
}

console.log('fora (var) = ', num);

{
	// Como tem escopo de bloco, não altera o escopo global
	let num = 3;
	console.log('dentro (let) = ', num);
}

console.log('fora = ', num);