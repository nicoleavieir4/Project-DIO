rankedGame(250, 190);

function rankedGame(victory, defeats) {
  victory = parseInt(victory);
  defeats = parseInt(defeats);

  const balance = victory - defeats;

  switch (true) {
    case balance <= 10:
      console.log(
        `O Herói tem de saldo de ${balance} e está no nível de Ferro`
      );
      break;
    case balance <= 20:
      console.log(
        `O Herói tem de saldo de ${balance} e está no nível de Bronze`
      );
      break;
    case balance <= 50:
      console.log(
        `O Herói tem de saldo de ${balance} e está no nível de Prata`
      );
      break;
    case balance <= 80:
      console.log(`O Herói tem de saldo de ${balance} e está no nível de Ouro`);
      break;
    case balance <= 90:
      console.log(
        `O Herói tem de saldo de ${balance} e está no nível de Diamante`
      );
      break;
    case balance <= 100:
      console.log(
        `O Herói tem de saldo de ${balance} e está no nível de Lendário`
      );
      break;
    case balance >= 101:
      console.log(
        `O Herói tem de saldo de ${balance} e está no nível de Imortal`
      );
      break;
  }

  return balance;
}

// // Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal
