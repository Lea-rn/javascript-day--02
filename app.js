// `` ==> backticks  
// ""  ==> double cotation (quotes) 
// '' ==> simple cotation (quotes) 
// {} ==> curly braces

// const nom = "jhon" 
// const age = 20 

// // ===> template leteral
// const prestation = `my name is ${nom} i'm ${age} years old`



////// conversion :: 

// let year = "2026"

// console.log("before conversion " , typeof year)


// let resultAfterConversion =  Number(year)

// console.log(resultAfterConversion , "type of :" , typeof resultAfterConversion)


// const y = "20"
// console.log(typeof y)

// console.log(typeof Number(y))


// const z = 200 
// console.log(typeof z)

// console.log(typeof String(z))

///// 
// paly guess the number:: 
// let n = "10" + (2+6) - "3" 

// console.log(n)

// let z = "5"-"2"+"2"   ///32
// console.log(z)



////// equality operators (== loose ==> value vs value ) ; 
// (=== strict  ==> value with type vs value with type)

// let age = "18" ;    //// string

// if (Number(age) === 18) {
//     console.log("you can drive !! ")
// }

// const favorite = Number( prompt("what's your favorite number !!!"))

// // console.log(typeof favorite)

// if (favorite === 13) {
//     console.log("13 is a great number !!")
// } else {
//     console.log("wrong number")
// }

////// 5 falsy values : 0 ; "" ; undefined ; null ; NaN (not a number) 
//// falsy # truthy

// let x = ""
// if (x){
//     console.log("condition is true")
// }else {
//     console.log("condition is false")
// }

//// basic boolean logic opreators ::: 
////  AND : ===> && 
//// OR : ===> ||
//// NOT : ===> !  

// const hasDrivingLicense = true ; 
// const hasGoodVision = true ; 
// const isNotTired = false ; 

// if (hasDrivingLicense && hasGoodVision && isNotTired) {
//     console.log("sarah able to drive 🎉")
// }
// else if (!hasDrivingLicense || !hasGoodVision){
//  console.log("sarah can drive with some condition ....")
// }
// else {
//    console.log("sarah can not drive 😥")
// }




// let day = "thursdaoy" ; 

// if (day === "monday") {
//     console.log("plan vourse structure")
//     console.log("go to coding meetup")
// }
// else if (day === "tuesday") {
//     console.log("prepare nice exercises")
// }
// else if (day === "wednesday" || day === "thursday") {
//     console.log("write and test code")
// }
// else if (day === "friday" || day === "saturday" || day === "sunday"){
//     console.log("enjoy the weekend")
// }
// else {
//     console.log("not a valid day !!! ")
// }