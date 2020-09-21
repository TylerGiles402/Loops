var dragonHP = 10;

var playerHP = 5;
while (dragonHP >0|| playerHP >0){
function prompt1() {
  var playerDamage = prompt("How many hits will you attempt to hit between 1 and 5?")
  
  if (isNaN(playerDamage)) {
    document.body.querySelector(".result1").innerHTML =
      "You have not entered a hit number";
  }
  
  playerDamage = Math.floor(Math.random() * playerDamage + 1);
  var dragonDamage = Math.floor(Math.random() * 2 + 1);
  
  playerHP = playerHP - dragonDamage;
  
  dragonHP = dragonHP - playerDamage;
}
}
  if (dragonHP <= 0) {
    document.body.querySelector(".result1").innerHTML =
      "You have defeated the dragon.";
  }

  if (playerHP <= 0) {
    document.body.querySelector(".result1").innerHTML = 
      "You have failed to defeat the dragon.";
  }

  document.body.querySelector("#playerHP").innerHTML = playerHP;

  document.body.querySelector("#dragonHP").innerHTML = dragonHP;