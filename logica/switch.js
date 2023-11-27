const readline = require('readline-sync');

var name = readline.question("Digite o nome do Herói: ");
var xp = +readline.question("Digite a quantidade de XP do herói: ");

switch (true) {
  case xp <= 1000:
    console.log(`O Herói ${name} é Ferro`);
    break;
  case xp <= 2000:
    console.log(`O Herói ${name} é Bronze`);
    break;
  case xp <= 5000:
    console.log(`O Herói ${name} é Prata`);
    break;
  case xp <= 7000:
    console.log(`O Herói ${name} é Ouro`);
    break;
  case xp <= 8000:
    console.log(`O Herói ${name} é Platina`);
    break;
  case xp <= 9000:
    console.log(`O Herói ${name} é Ascendente`);
    break;
  case xp <= 10000:
    console.log(`O Herói ${name} é Imortal`);
    break;
  default:
    console.log(`O Herói ${name} é Radiante`);
    break;
}
