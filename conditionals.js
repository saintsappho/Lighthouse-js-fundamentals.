const temp = 12;
const rain = false
const snow = false

if (temp < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temp<15) {
  console.log("Throw on a sweater!");
} else if(temp <-40 || temp > 40){
  console.log ("Maybe stay home today...")
} else if(!raining){
  console.log ("Leave your umbrella at home today")
} else {
  console.log("T-shirt weather!")
}

console.log("Now you're ready to go outside!");

const isCitizen = true;
const age = 26

if (isCitizen && age > 18) {
  console.log("Don't forget to vote!")
}