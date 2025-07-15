const meses = ["Janeiro", "Março", "Abril", "Junho"];

// ---- Removendo elementos 
let removidos = meses.splice(1,2); // remove Março e Abril
console.log("Resultado: ", meses); // "Janeiro", "Junho"
console.log("Meses removidos:", removidos); // "Março" e "Abril"

// ---- Adicionando elementos
meses.splice(1, 0, "Fevereiro"); // Adicionar Fevereiro no índice 1
console.log(meses); // ["Janeiro", "Fevereiro", "Junho"]

// ---- Substituindo elementos
meses.splice(3, 1, "Maio"); // Substitui 1 elemento no índice 4
console.log(meses); // ["Fevereiro", "Março", "Abril", "Maio" 