// /// // // Scores for Dolphins and Koalas
//  // // const dolphins_scores = [96, 108, 89];
// /// // const koalas_scores = [88, 91, 110];

// /// // // Calculate average scores
//  // // const avgScore = (scores) => scores.reduce((total, score) => total + score, 0) / scores.length;

// /// // const score_dolphins = avgScore(dolphins_scores);
// /// // const score_koalas = avgScore(koalas_scores);

// /// // // Determine the winner
//  // // // if (score_dolphins > score_koalas) {
//  // // //     console.log("Dolphins win the trophy");
//  // // // } else if (score_koalas > score_dolphins) {
//  // // //     console.log("Koalas win the trophy");
//  // // // } else {
//  // // //     console.log("Both win the trophy");
//  // // // }

//  // // // This code calculates the average score for two teams, the Dolphins and the Koalas. Here's how it works:

//  // // // 1. `let score_dolphins = dolphins_scores.reduce((a, b) => a + b, 0) / dolphins_scores.length;`:
//  // // //    - `dolphins_scores.reduce((a, b) => a + b, 0)` iterates through each element in the `dolphins_scores` array and adds them together, starting from an initial value of 0 (`0` is the initial value provided to `reduce`).
//  // // //    - `/ dolphins_scores.length` divides the sum of scores by the number of scores in the `dolphins_scores` array to get the average score.

//  // // // 2. `let score_koalas = koalas_scores.reduce((a, b) => a + b, 0) / koalas_scores.length;`:
//  // // //    - `koalas_scores.reduce((a, b) => a + b, 0)` works the same way as in the first line, but it's applied to the `koalas_scores` array.
//  // // //    - `/ koalas_scores.length` calculates the average score for the Koalas in the same manner as for the Dolphins.
//  // // // So, in summary, these lines of code compute the average scores for both the Dolphins and the Koalas teams based on their respective arrays of scores.

//  // // let bill = 275;
//  // // let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

//  // // console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`);

//  // // let bill =Number(prompt("please state your bill"));
//  // // let tip = 0;

//  // // bill > 50 && bill < 300 ? tip = (bill * 0.15) : tip =( bill * 0.2);

//  // // console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`);

//  // // function logger(n){
//  // //       console.log(`My name is ${n}`);
    
//  // // }
//  // // logger("aman");
//  // // logger("aditya")
//  // // logger("yuraj")


//  // // function fruitProcessor(apples,oranges){
// // // console.log(apples,oranges);
// // // // let jusice = `jusice with ${apples}apples`
// // // }



// // // function calAge(birthYear){
    
// // //     let age = 2024 - birthYear
 
//      // //     return age;


//   // // }


//  // // console.log(calAge(2000));


//  // //function decaltion

// // // function calAge(birthYear){

// // //     return 2024 - birthYear;

// // // }

// // // console.log(calAge(2000));

// // // //funcrionexpression  

// // // let calAge1 = function (birthYear){

// // //     return 2024 - birthYear;

// // // }

// // // console.log(calAge1(1999));


// // let calAge1 = function (birthYear){

// //         return 2024 - birthYear;
    
// //     }
    
// //     console.log(calAge1(1999));


// //     let calAge2 = (birthYear)=> 2024 - birthYear;
// //     console.log(calAge2(1999));



// //     let calRetriment = (birthYear,name)=>{
// //         let age = 2024 - birthYear;
// //         let timeRetrie = 60 - age;
// //         return `hi ${name} wil be retrie in ${timeRetrie} year`
// //     }

// //     console.log(calRetriment(1990, "aman"));



// //     function cutfruitPices(friut){
// //         return friut * 4;
// //     }

// //     function foodProcssor(apples,oranges){
// //         let applePice = cutfruitPices(apples);
// //         let orangespice = cutfruitPices(oranges);

// //         let juice =`juice with ${applePice} apple and ${orangespice} of organges`;
// //         return juice;
// //     }

// //     console.log(foodProcssor(2,3));









// // let calcAverage = (score1 + score2 + score3) / 3;

// // let scoreDolphins = calcAverage(85, 90, 95);
// // let scoreKoalas = calcAverage(75, 80, 95);

// // let checkWinner = (avgDolphins, avgKoalas) => {
// //         if (avgDolphins >= 2 * avgKoalas) {
// //             console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
// //         } else if (avgKoalas >= 2 * avgDolphins) {
// //             console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
// //         } else {
// //             console.log("No team wins...");
// //         }
// //     };
// //     checkWinner(scoreDolphins, scoreKoalas);


// //     const scoreDolphins2 = calcAverage(100, 95, 80);
// //  checkWinner(scoreDolphins2, calcAverage(90, 85, 85));

// let calcAverage=(sOne,sTwo,sThree)=>{
//     let avg = (sOne+sTwo+sThree)/3
//     return avg
// }

// let scoreDolphins = calcAverage(50.70,90);
// let scoreQualas = calcAverage(150,75,75);
//  function checkWinner(avgDol,avgQual){
//     if(scoreDolphins => 2* scoreQualas){
//         console.log(`Dolfone are winner witch score ${scoreDolphins}`);
        
//     }else if(scoreDolphins => (2 * scoreDolphins)){}
//  }


let friend1 ="aman"
let friend2 = "aditya"
let friend3 = "yuraj"

//array always start with 0 index
let friends = ["aman", "aditya", "yuraj"]
console.log(friends);

//                0     1   2
let YearWemet = [1900,2000,2002]
console.log(YearWemet);


//we can access the array through index
//below 1 is index of 1
console.log(YearWemet[1]);
console.log(YearWemet[2]);

console.log(`Lenght of the array yearWemet is ${YearWemet.length}`);
console.log(YearWemet[YearWemet.length -1]);

friends[0]= "siraj"
console.log(friends);



























