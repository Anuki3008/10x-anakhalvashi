//Exercise 1: The Power of Variables and Operators
// let gandalf = 50;
// let dumbledore = 70;
// gandalf += 30;
// dumbledore -= 10;
// if (gandalf > dumbledore) {
//   console.log("gandalf is stronger");
// } else {
//   console.log("dumbledore is stronger");
// }

// ------------------------------------------
// Exercise 2: The Treasure Chest of Data Types
// let coinCount = 50;
// let treasureMap = "treasure map";
// let cursedAmulet = true;

// console.log(typeof coinCount);
// console.log(typeof treasureMap);
// console.log(typeof cursedAmulet);

// treasureMap = 20;
// console.log( 'typeof treasureMap')

// ------------------------------------------
//Exercise 3: The Potion Shop’s Price Calculator
// let healthPrice = 20;
// let manaPrice = 40;

// healthPrice *= 3;
// manaPrice *= 2;
// let totalPrice = heal
// thPrice + manaPrice;
// if (totalPrice > 50) {
//   totalPrice *= 0.8;
// }
// console.log("totalPrice: " + totalPrice);

// ------------------------------------------
//Exercise 4: The Brave Knight’s Inventory
// let power = 3;
// let armorName = "3";
// let shield = true;
// console.log(
//   `A knight Sir Debugalot have attack power ${power}, he have armor: ${armorName} and he have shield: ${shield}`
// );

// ------------------------------------------
//Exercise 5: The Bakery's Daily Earnings
// let cakePrice = 3;
// let breadPrice = 2;
// let cakeSale = 20;
// let breadSale = 30;

// let dailySale = cakePrice * cakeSale + breadPrice * breadSale;
// console.log(`daily sale: ${dailySale}`);

// ------------------------------------------
//Exercise 6: The Space Mission’s Fuel Check
// let capacity = 200;
// let currentFuel = 150;
// let requiredFuel = capacity * 0.8;

// if (currentFuel >= requiredFuel) {
//   console.log("successful");
// } else {
//   console.log("failed");
// }

// ------------------------------------------
//Exercise 7: The Time Traveler’s Stopwatch (Updated)
// let currentDate = new Date();
// let currentYear = currentDate.getFullYear();
// let timeJump = 30;
// let newYear = currentYear + timeJump;
// console.log(`new year: ${newYear}`);

//........................................

//Exercise 8: The Wizard’s Spell Strength Test
// let spell1 = 30;
// let spell2 = 20;
// let spell3 = 25;

// if ( spell1 > spell2 && spell1 > spell3 ) {
//     console.log('Spell1 is the strongest')
// } else if (spell2 > spell1 && spell2 > spell3){
//     console.log('Spell2 is the strongest')
// } else if ( spell3 > spell1 && spell3 > spell2) {
//     console.log ('spell3 is the strongest')
// } else if (spell1 === spell2 && spell2 > spell3){
//     console.log('spell1 and spell2 are equally strong' )
// } else if(spell1 === spell3 && spell1 > spell2){
//     console.log('spell1 and spell3 are equally strong')
// } else if (spell2 === spell3 && spell2 > spell1){
//     console.log('spell2 and apell3 are equally strong')
// } else{
//     console.log('All spells have the same power');
// }

//........................................

//Exercise 9: The Haunted House Mystery
// let kitchenHasGhost = true;
// let livingRoomHasGhost = false;
// let isHouseSafe = !kitchenHasGhost && !livingRoomHasGhost

// if (isHouseSafe) {
//     console.log( "The house is safe! No ghosts in the Kitchen or Living Room.")
// } else( "Danger! The house is NOT safe. Ghosts detected!")

//.........................................

//Exercise 10: The Robot’s Battery Check
// let batteryLevel = 35;

// if (batteryLevel > 30) {
//     console.log("Battery sufficient");
// } else {
//     console.log( "Low battery");
// }

//.........................................

//Exercise 11: The Dragon’s Health Meter
// let dragonHealth = 100;
// let knightAttackDamage = 25;

// dragonHealth -= knightAttackDamage;
// console.log (`Dragon's Health After Attack: ${dragonHealth}');

// ..........................................

// Exercise 12: The Speeding Race Car
// let speedLimit = 50;
// let carSpeed = 30;

// carSpeed += 25;

// if (carSpeed > speedLimit) {
//     console.log("Speed Warning: You are going too fast!");
// } else {
//     console.log("Speed is okay.");
// }

// ............................................

//Exercise 13: The Superhero Strength Test
// let heroStrength = 95;
// let villainStrength = 90;
// let strengthDifference = Math.abs(heroStrength - villainStrength)

// if(heroStrength === villainStrength){
//     console.log( "It's a strength stalemate! Neither Valiant nor Malakor can overpower the other.")
// }else if(heroStrength > villainStrength){
//     if(strengthDifference >= 10){
//         console.log('Valiant triumphs decisively! Malakor is utterly outmatched!')
//     } else{
//         console.log( "Valiant barely edges out! A close call victory against Malakor!")
//     }
// } else{
//     if(strengthDifference >= 10){
//         console.log("Malakor's power is overwhelming! Valiant is soundly defeated!")
//     } else{
//         console.log("Malakor narrowly prevails! A hard-fought win over Valiant!")
//     }
// }

//.........................................................

//Exercise 14: The Tricky Treasure Hunt
// let hasTreasureMap = true;
// let foundAncientKey = false;
// let solvedRiddleScroll = true;
// let hasCompass = true;
// let isFullMoon = false;

// let canFindTresure = false;

// if(hasTreasureMap){
//     canFindTresure = foundAncientKey || (solvedRiddleScroll && hasCompass)
// } else{
//     if(foundAncientKey){
//         canFindTresure = true;
//     }else{
//        canFindTresure = solvedRiddleScroll &&  hasCompass;
//     }
// }
// if(canFindTresure){
//     console.log('Success! Alex can find the legendary treasure!')
// }else{
//     console.log("Alas, Alex is missing crucial clues and cannot find the treasure yet.")
// }

//.......................................................

//Exercise 15: The Ice Cream Shop’s Daily Sales with Volume Discount
// const ConePrice = 4;
// const SundaePrice = 8;
// const conesSoldToday = 250;
// const sundaesSoldToday = 120;

// let ConeEarnings = ConePrice * conesSoldToday;
// let sundaeEarnings = SundaePrice * sundaesSoldToday;
// let totalPrice = ConeEarnings + sundaeEarnings;

// console.log(`total price: ${totalPrice}`)

// if(totalPrice > 1000){
//     totalPrice = totalPrice * 0.95;
//     console.log(`total price after discount: ${totalPrice}`)
// }

//...........................................................

//Exercise 16: Music Band Concert Profit Check
// const ticketPrice = 20;
// const ticketsSold = 500;
// const concertCosts = 8000;
// let  totalEarnings = ticketPrice * ticketsSold;
// let profit = totalEarnings - concertCosts;

// if(profit > 0){
//     console.log(`consert profit: ${profit}. Great success!`)
// }else{
//     console.log(`Concert did not cover costs. Earnings: ${totalEarnings}. Costs: ${concertCosts}`)
// }
