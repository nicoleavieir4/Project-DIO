const readline = require('readline-sync');

var name = readline.question("Digite o nome do Herói: ");
var xp = +readline.question("Digite a quantidade de XP do herói: ");

if (xp <= 1000) {
  console.log(`O Herói ${name} é Ferro`);
} else if (xp >= 1001 && xp <= 2000) {
  console.log(`O Herói ${name} é Bronze`);
} else if (xp >= 2001 && xp <= 5000) {
  console.log(`O Herói ${name} é Prata`);
} else if (xp >= 5001 && xp <= 7000) {
  console.log(`O Herói ${name} é Ouro`);
} else if (xp >= 7001 && xp <= 8000) {
  console.log(`O Herói ${name} é Platina`);
} else if (xp >= 8001 && xp <= 9000) {
  console.log(`O Herói ${name} é Ascendente`);
} else if (xp >= 9001 && xp <= 10000) {
  console.log(`O Herói ${name} é Imortal`);
} else if (xp >= 10001) {
  console.log(`O Herói ${name} é Radiante`);
} else {
  console.log(`O Herói ${name} não se encaixa nas categorias existentes`);
}
