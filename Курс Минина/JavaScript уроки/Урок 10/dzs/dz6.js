const heroPlayer = {
  name: 'Barbarian',
  hp: 100,
}

const enemyPlayer = {
  name: 'Wizard',
  hp: 100,
}


function heatHero(hero) {
  return hero.hp = hero.hp - 10
}
function heatEnemy(enemy) {
  return enemy.hp = enemy.hp - 10
}
console.log(enemyPlayer)
console.log(heroPlayer)

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame(heroPlayer, enemyPlayer) {
  getRandomNumberInRange(0, 1)
  if (getRandomNumberInRange(0, 1) === 0) {
    heatEnemy(enemyPlayer)
  } else {
    heatHero(heroPlayer)
  }
}

while (heroPlayer.hp > 0 && enemyPlayer.hp > 0) {
  startGame(heroPlayer, enemyPlayer)
  if (heroPlayer.hp === 0 && enemyPlayer.hp > 0) {
    console.log(`${enemyPlayer.name} победил! У него осталось ${enemyPlayer.hp} здоровья`)
  } 
  if (enemyPlayer.hp === 0 && heroPlayer.hp > 0) {
    console.log(`${heroPlayer.name} победил! У него осталось ${heroPlayer.hp} здоровья`)
  }
}

console.log(heroPlayer, enemyPlayer)