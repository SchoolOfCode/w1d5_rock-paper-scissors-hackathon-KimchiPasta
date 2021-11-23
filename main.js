/*
## Task 1: Logic

To complete this ticket you will need to write a set of if statements that will determine the winner of rock, paper, scissors. 

The two moves should be stored in two variables like so:

```js
let playerMove = "rock";
let computerMove = "paper";
```

You'll want to hard-code each move in these variables (like the example above) to check each piece of logic at first. 

This will be deemed as complete when all permutations of the three possible moves for each player have been handled correctly, e.g. rock vs rock is a draw, paper vs rock is a paper win, etc.

*/

/*
let rock = 1;
let scissors = 2;
let paper = 3;

let playerMove = scissors;
let computerMove = rock;

if (playerMove > computerMove) {
  console.log(
    ` Player : ${playerMove} , Computer : ${computerMove} => Player wins!`
  );
} else if (computerMove > playerMove) {
  console.log(
    ` Player : ${playerMove} , Computer : ${computerMove} => Computer wins!`
  );
} else {
  console.log(` Player : ${playerMove} , Computer : ${computerMove} => Draw.`);
}

*/

/*
//////////////////// TASK 1 Logic
let playerMove = "rock";
let computerMove = "scissors";

//1
if (playerMove === "rock") {
  if (computerMove === "rock") {
    console.log(
      ` Player : ${playerMove} , Computer : ${computerMove} => Draw.`
    );
  } else if (computerMove === "paper") {
    console.log(
      ` Player : ${playerMove} , Computer : ${computerMove} => Computer wins!`
    );
  } else if (computerMove === "scissors") {
    console.log(
      ` Player : ${playerMove} , Computer : ${computerMove} => Player wins!`
    );
  }
}

//2
if (playerMove === "scissors") {
  if (computerMove === "rock") {
    console.log(
      ` Player : ${playerMove} , Computer : ${computerMove} => Computer wins!`
    );
  } else if (computerMove === "paper") {
    console.log(
      ` Player : ${playerMove} , Computer : ${computerMove} => Player wins!`
    );
  } else if (computerMove === "scissors") {
    console.log(
      ` Player : ${playerMove} , Computer : ${computerMove} => Draw!`
    );
  }
}

//3
if (playerMove === "paper") {
  if (computerMove === "rock") {
    console.log(
      ` Player : ${playerMove} , Computer : ${computerMove} => Player wins!`
    );
  } else if (computerMove === "paper") {
    console.log(
      ` Player : ${playerMove} , Computer : ${computerMove} => Draw!`
    );
  } else if (computerMove === "scissors") {
    console.log(
      ` Player : ${playerMove} , Computer : ${computerMove} => Computer wins!`
    );
  }
}



/////////////////// TASK 2  Function
function getWinner(playerMove, computerMove) {
  //1
  if (playerMove === "rock") {
    if (computerMove === "rock") {
      return 0;
    } else if (computerMove === "paper") {
      return -1;
    } else if (computerMove === "scissors") {
      return 1;
    }
  }

  //2
  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      return -1;
    } else if (computerMove === "paper") {
      return 1;
    } else if (computerMove === "scissors") {
      return 0;
    }
  }

  //3
  if (playerMove === "paper") {
    if (computerMove === "rock") {
      return 1;
    } else if (computerMove === "paper") {
      return 0;
    } else if (computerMove === "scissors") {
      return -1;
    }
  }
}

let result = getWinner("scissors", "scissors");

console.log(result);



////////////////Task 3  User Input

let playerMove = prompt("What are you gonna play?");
console.log(` result : ${playerMove}`);

function getWinner(playerMove, computerMove) {
  //1
  if (playerMove === "rock") {
    if (computerMove === "rock") {
      return 0;
    } else if (computerMove === "paper") {
      return -1;
    } else if (computerMove === "scissors") {
      return 1;
    }
  }

  //2
  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      return -1;
    } else if (computerMove === "paper") {
      return 1;
    } else if (computerMove === "scissors") {
      return 0;
    }
  }

  //3
  if (playerMove === "paper") {
    if (computerMove === "rock") {
      return 1;
    } else if (computerMove === "paper") {
      return 0;
    } else if (computerMove === "scissors") {
      return -1;
    }
  }
}

let result = getWinner(playerMove, "scissors");

alert(result);
console.log(result);


/////////// TASK 4 Computer Player
let playerMove = prompt("What are you gonna play?");
console.log(` playerMove : ${playerMove}`);

let randomNum = Math.random() * 10;
console.log(` randomNum : ${randomNum}`);

let computerMove;

if (randomNum < 4) {
  computerMove = "rock";
} else if (3 < randomNum && randomNum < 7) {
  computerMove = "paper";
} else {
  computerMove = "scissors";
}

console.log(`computerMove : ${computerMove}`);

function getWinner(playerMove, computerMove) {
  //1
  if (playerMove === "rock") {
    if (computerMove === "rock") {
      return 0;
    } else if (computerMove === "paper") {
      return -1;
    } else if (computerMove === "scissors") {
      return 1;
    }
  }

  //2
  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      return -1;
    } else if (computerMove === "paper") {
      return 1;
    } else if (computerMove === "scissors") {
      return 0;
    }
  }

  //3
  if (playerMove === "paper") {
    if (computerMove === "rock") {
      return 1;
    } else if (computerMove === "paper") {
      return 0;
    } else if (computerMove === "scissors") {
      return -1;
    }
  }
}

let result = getWinner(playerMove, computerMove);

alert(result);
console.log(`result : ${result}`);




///////// Task 5 Game Loop

let askAgain = true;

while ((askAgain = true)) {
  // player
  let playerMove = prompt("What are you gonna play?");
  console.log(` playerMove : ${playerMove}`);

  // random number
  let randomNum = Math.random() * 10;
  console.log(` randomNum : ${randomNum}`);

  // computer
  let computerMove;

  if (randomNum < 4) {
    computerMove = "rock";
  } else if (3 < randomNum && randomNum < 7) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }

  console.log(`computerMove : ${computerMove}`);

  // getWinner function
  function getWinner(playerMove, computerMove) {
    //1
    if (playerMove === "rock") {
      if (computerMove === "rock") {
        return 0;
      } else if (computerMove === "paper") {
        return -1;
      } else if (computerMove === "scissors") {
        return 1;
      }
    }

    //2
    if (playerMove === "scissors") {
      if (computerMove === "rock") {
        return -1;
      } else if (computerMove === "paper") {
        return 1;
      } else if (computerMove === "scissors") {
        return 0;
      }
    }

    //3
    if (playerMove === "paper") {
      if (computerMove === "rock") {
        return 1;
      } else if (computerMove === "paper") {
        return 0;
      } else if (computerMove === "scissors") {
        return -1;
      }
    }
  }

  let result = getWinner(playerMove, computerMove);

  alert(result);
  console.log(`result : ${result}`);

  let confirm = window.confirm("Would you like to play again?");
  if (confirm) {
    askAgain = true;
  } else {
    askAgain = false;
    break;
  }
}



//////////// Task 6 Scores
let wins = 0;
let losses = 0;
let draws = 0;
let askAgain = true;

while ((askAgain = true)) {
  // player
  let playerMove = prompt("What are you gonna play?");
  console.log(` playerMove : ${playerMove}`);

  // random number
  let randomNum = Math.random() * 10;
  console.log(` randomNum : ${randomNum}`);

  // computer
  let computerMove;

  if (randomNum < 4) {
    computerMove = "rock";
  } else if (3 < randomNum && randomNum < 7) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }

  console.log(`computerMove : ${computerMove}`);

  // getWinner function
  function getWinner(playerMove, computerMove) {
    //1
    if (playerMove === "rock") {
      if (computerMove === "rock") {
        return 0;
      } else if (computerMove === "paper") {
        return -1;
      } else if (computerMove === "scissors") {
        return 1;
      }
    }

    //2
    if (playerMove === "scissors") {
      if (computerMove === "rock") {
        return -1;
      } else if (computerMove === "paper") {
        return 1;
      } else if (computerMove === "scissors") {
        return 0;
      }
    }

    //3
    if (playerMove === "paper") {
      if (computerMove === "rock") {
        return 1;
      } else if (computerMove === "paper") {
        return 0;
      } else if (computerMove === "scissors") {
        return -1;
      }
    }
  }

  let result = getWinner(playerMove, computerMove);

  console.log(`result : ${result}`);

  if (result === 1) {
    wins++;
  } else if (result === 0) {
    draws++;
  } else {
    losses++;
  }

  alert(
    `Wins : ${wins} , Draws : ${draws} , Losses : ${losses} , Total : ${
      wins + draws + losses
    } `
  );

  let confirm = window.confirm("Would you like to play again?");
  if (confirm) {
    askAgain = true;
  } else {
    askAgain = false;
    break;
  }
}

*/

//////// Taks 7 Get the player's name using a prompt
let userName = prompt("Enter player's name");
let userNameCheck = true;

while (userNameCheck) {
  if (userName.length > 10) {
    userName = prompt("Player's name can be 10 characters or less");
    userNameCheck = true;
  } else {
    userNameCheck = false;
  }
}

console.log("userName : " + userName);

let wins = 0;
let losses = 0;
let draws = 0;
let askAgain = true;

while ((askAgain = true)) {
  // player
  let playerMove = prompt("What are you gonna play?");
  console.log(` playerMove : ${playerMove}`);

  // random number
  let randomNum = Math.random() * 10;
  console.log(` randomNum : ${randomNum}`);

  // computer
  let computerMove;

  if (randomNum < 4) {
    computerMove = "rock";
  } else if (3 < randomNum && randomNum < 7) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }

  console.log(`computerMove : ${computerMove}`);

  // getWinner function
  function getWinner(playerMove, computerMove) {
    //1
    if (playerMove === "rock") {
      if (computerMove === "rock") {
        return 0;
      } else if (computerMove === "paper") {
        return -1;
      } else if (computerMove === "scissors") {
        return 1;
      }
    }

    //2
    if (playerMove === "scissors") {
      if (computerMove === "rock") {
        return -1;
      } else if (computerMove === "paper") {
        return 1;
      } else if (computerMove === "scissors") {
        return 0;
      }
    }

    //3
    if (playerMove === "paper") {
      if (computerMove === "rock") {
        return 1;
      } else if (computerMove === "paper") {
        return 0;
      } else if (computerMove === "scissors") {
        return -1;
      }
    }
  }

  let result = getWinner(playerMove, computerMove);

  console.log(`result : ${result}`);

  if (result === 1) {
    wins++;
  } else if (result === 0) {
    draws++;
  } else {
    losses++;
  }

  alert(
    `[${userName}] Wins : ${wins} , Draws : ${draws} , Losses : ${losses} , Total : ${
      wins + draws + losses
    } `
  );

  let confirm = window.confirm("Would you like to play again?");
  if (confirm) {
    askAgain = true;
  } else {
    askAgain = false;
    break;
  }
}

let uncheckUserName = true;

function allLetter(userName) {
  console.log("allLetter : " + userName);
  let letters = /^[a-zA-Z]{1}/;
  if (userName.match(letters)) {
    return true;
  } else {
    userName = prompt(
      "Player's name should only start with letters, not numbers or symbols."
    );
    return false;
  }
}

function capitalizeFirstLetter(userName) {
  console.log("capitalizeFirstLetter : " + userName);
  return userName.charAt(0).toUpperCase() + userName.slice(1);
}

while (uncheckUserName) {
  if (checkLength(userName)) {
    uncheckUserName = false;

    console.log(
      "capitalizeFirstLetter checkLength pass" + capitalizeFirstLetter(userName)
    );
    break;
  }
}
