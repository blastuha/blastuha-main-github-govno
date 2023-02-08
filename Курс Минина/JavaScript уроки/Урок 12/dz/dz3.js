const footballer = {
  fullName: 'Cristiano Ronaldo',
  attack: function() {
  console.log(`${this.fullName} сейчас c мячом и начинает
  атаку!`);
  },
  scoreGoal(sound) {
  console.log(`${this.fullName} забил гол! Вот это да!`);
  this.celebrate(sound);
  },
  celebrate(sound) {
  console.log(sound);
  },
  goToSubstitution: function(newPlayer) {
  console.log(`${this.fullName} уходит на замену.
  На поле выходит ${newPlayer}`);
  }
};

const attack = footballer.attack;
const score = footballer.scoreGoal;
const substitute = footballer.goToSubstitution;
const attackBinded = attack.bind(footballer)

//attack.bind(footballer)()
attackBinded()
score.call(footballer, 'Сиииии')
substitute.apply(footballer, ['Paulo Dibala']);