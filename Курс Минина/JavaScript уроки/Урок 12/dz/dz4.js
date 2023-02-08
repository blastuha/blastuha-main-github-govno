const attacker = {
  archer: 30,
  footSoldier: 55,
  cavalry: 10,
  artillery: 3,
  checkChancesToWin: function(defenderObject) {
    const length = Object.keys(defenderObject).length
    const chancesArr = [length]
    let chances = 0

    const attackerValues = Object.values(this);
    const defenderValues = Object.values(defenderObject);
    attackerValues.forEach((value, index) => {
        if (value > defenderValues[index] && typeof value === 'number') {
          chances += 1;
        }
    });

    return [chances, length];
  }, // end checkChancesToWin
  improveArmy: function() {
    this.archer += 5
    this.footSoldier += 5
    this.cavalry += 5
    this.artillery += 5
  },
  attack: function(defenderObject) {

    const checkChancesBinded = this.checkChancesToWin.bind(attacker, defender)
    const improveArmyBinded = this.improveArmy.bind()
    // console.log(improveArmyBinded())  почему undefined?
    // console.log(checkChancesBinded())
    console.log(`checkChancesToWin`, this.checkChancesToWin(defender))

    if ((checkChancesBinded()[0] / checkChancesBinded()[1]) * 100 < 70) {
      console.log(`Наши шансы равны ${checkChancesBinded()}. Необходимо
      укрепление!`)
      this.improveArmy.call(attacker)
      // improveArmyBinded() почему не вызывается?
    } else {
      console.log(`Мы усилились! Мы несомненно победим! Наши шансы высоки`)
    }

  } // end attack

} //end object


const defender = {
  archer: 33,
  footSoldier: 50,
  cavalry: 40,
  artillery: 10,
}

// console.log(attacker.checkChancesToWin.call(attacker, defender))
// attacker.improveArmy.call(attacker)
// console.log(attacker)

// console.log(attacker.attack.call(attacker))
attacker.attack(defender)
console.log(attacker)
attacker.attack(defender)
console.log(attacker)
attacker.attack(defender)
console.log(attacker)



// const length = Object.keys(defenderObject).length
// const chancesArr = [length]
// let chances = 0
// if (this.archer > defenderObject.archer) {
//   chances++
//   chancesArr.unshift(chances)
//   return chancesArr
// }
// if (this.footSoldier > defenderObject.footSoldier) {
//   chances++
//   chancesArr.unshift(chances)
//   return chancesArr
// }
// if (this.cavalry > defenderObject.cavalry) {
//   chances++
//   chancesArr.unshift(chances)
//   return chancesArr
// }
// if (this.artillery > defenderObject.artillery) {
//   chances++
//   chancesArr.unshift(chances)
//   return chancesArr
// } else {
//   chancesArr.unshift(chances)
//   return chancesArr
// }  





// //* Решение курса
// const attacker = {
//   archer: 30,
//   footSoldier: 55,
//   cavalry: 10,
//   artillery: 3,
//   checkChancesToWin(defenderObject) {
//       const attackerValues = Object.values(this);
//       const defenderValues = Object.values(defenderObject);
//       let chancesCounter = 0;
//       attackerValues.forEach((value, index) => {
//           if (value > defenderValues[index] && typeof value === 'number') {
//               chancesCounter += 1;
//           }
//       });

//       return [chancesCounter, defenderValues.length];
//   },
//   improveArmy() {
//       Object.entries(this).forEach((item) => {
//           const key = item[0];
//           const value = item[1];
//           if (typeof value === 'number') {
//               this[key] = value + 5;
//           }
//       });
//   },
//   attack(defender) {
//       const chancesValues = this.checkChancesToWin(defender);
//       console.log('chancesValues', chancesValues);
//       const ourArmyChances = chancesValues[0];
//       const seventyPercentChances = Math.round(chancesValues[1] * 70 / 100)
//       console.log('ourArmyChances', ourArmyChances);
//       console.log('seventyPercentChances', seventyPercentChances);
//       if (ourArmyChances < seventyPercentChances) {
//           console.log(`Наши шансы равны ${ourArmyChances}/${chancesValues[1]}. Необходимо укрепление!`);
//           this.improveArmy();
//       } else {
//           console.log('Мы усилились! Мы несомненно победим! Наши шансы высоки!');
//       }

//       console.log(this);
//   }
// }

// const defender = {
//   archer: 33,
//   footSoldier: 50,
//   cavalry: 40,
//   artillery: 10,
// }

// attacker.attack(defender); // Наши шансы равны 1/4. Необходимо укрепление!
// // attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление!
// // attacker.attack(defender); // Мы усилились! Мы несомненно победим! Наши шансы высоки!