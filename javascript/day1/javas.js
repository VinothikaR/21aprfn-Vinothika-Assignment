// // let-- reassigning with in same block works eg---
// let x = 2;
// x = 5;
// //let-- redeclaring with in same block not allowed eg--

// // let x = 3; //syntax error - x already declared

//  // let reassigning in different block allows eg--
// {
//     let x = 3;
//     console.log(x)
// }

// console.log(x)

// const y = 5;
// //  redeclaring with in same block not allowed eg--
// // y = 8; TypeError: Assignment to constant variable.
// // const y = 7; -> redeclariing is not allowed in const

// {
//     const y = 6;
//     console.log(y)
// }


// console.log(y)
// // var have global scope can be reassigned, can be called globaly.
// var z = 3; 
// var z = 5;
// console.log(z)
// {
//     var z = 6;
// }

// console.log(z)

const furits = ['banana', 'orange', 'grape'];
const hasApple = furits.includes('apple');
console.log(hasApple);

function showPopup() {
    document.getElementById("customAlert").style.display = "flex";

}


function hidePopup() {
    document.getElementById("customAlert").style.display = "none";
}