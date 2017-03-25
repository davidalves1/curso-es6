# Aula 3 - let e const

- `var`: Possuía apenas escopo global e escopo de função
- `let` e `const`: possuem escopo global, escopo de função e escopo de bloco (if, for, while ...)
- A diferença entre `let` e `const` é que `let` representa uma variável e `const` representa uma constante
- `var` sofre hoisting, ou seja, ao ser declarada ela é elevada ao topo da execução do script. Já `let`, não sofre hoisting
- Exemplos 01 até 
- Ao declarar uma `const` o valor dela DEVE ser atribuído
- Atribuição por valor
	> Para cada variável é criado um espaço na memória, logo, são independentes
- Atribuição por referência
	> Ao criar uma constante, é criado um espaço na memória para onde ela irá apontar, ou seja, não é independente. Ao tentar alterá-lo ocorre um erro.
	