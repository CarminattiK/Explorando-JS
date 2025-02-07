const Mago = require("./Mago");
const Gatuno = require("./Gatuno");
const Guerreiro = require("./Guerreiro");

// 1- Criação de instâncias dos personagens
const merlin = new Mago('Merlin', 72, 1, 0.5, 22);
const frank = new Gatuno('Frank', 170, 43, 6);
const artur = new Guerreiro('Artur', 240, 30, 10, 7);

// 2- Exibe o status inicial dos 3 personagens
console.table({ merlin, frank, artur });

// 3- Sequência de ações entre os personagens
artur.alternarPostura(); 
merlin.atacar(artur);      
frank.atacar(merlin);      

// 4- Exibe o status após o primeiro turno de ações
console.table({ merlin, frank, artur });

artur.atacar(merlin);      
merlin.restaurarVida(merlin); 
frank.atacar(artur);      

// 5- Exibe o status final após todas as ações
console.table({ merlin, frank, artur });