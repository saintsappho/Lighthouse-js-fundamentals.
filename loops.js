//counting to 10000
/*let x = 1;
while (x <=10000){
  console.log(x + " misssissippi!");
  x = x + 1
}
*/

//fizzBuzz
/*let x = 1
while (x <= 20) {
    if((x % 3) === 0 && (x % 5) ===0) {
      console.log("fizzBuzz") 
  } else if ((x % 5) === 0) {
    console.log("buzz")
  }  else if ((x % 3) === 0) {
    console.log("fizz")
  }  else {console.log(x)}
  x = x + 1
}
*/

 // bottles of wine on the wall
 /*
 let num = (99);
  while (num >= 1 ) {
    if (num === 1) {
              console.log(num + " bottle of wine on the wall! " + num + " bottle of wine! Take one down, pass it around... " + (num-1) + " bottles of wine on the wall!");
            
    } else if (num === 2){
          console.log(num + " bottles of wine on the wall! " + num + " bottles of wine! Take one down, pass it around... " + (num-1) + " bottle of wine on the wall!");
    } else if (num > 1){
          console.log(num + " bottles of wine on the wall! " + num + " bottles of wine! Take one down, pass it around... " + (num-1) + " bottles of wine on the wall!");
    }
    num = (num - 1);
    }
*/

//NASA COUNTDOWN
/*
let x = 60
while (x <= 60 && x >= 0){
 
  if (x === 50) {
      console.log("Orbiter transfers from ground to internal power");
  }
  if (x === 31) {
    console.log("Ground launch sequencer is go for auto sequence start");
  }
  if (x ===16) {
    console.log("Activate launch pad sound suppression system");
  }
  if (x === 10) {
    console.log("Activate main engine hydrogen burnoff system");
  }
  if (x === 6) {
    console.log("Main engine start");
  }
  if (x === 0) {
   console.log("Solid rocket booster ignition and liftoff!");
  }
  else {
    console.log("T-" + x + " seconds" );
  }
  x = x-1
}*/

//FOR LOOPS
// seat numbers
for (x = 0; x <= 25; x++){
  for (y = 0; y<=99; y++){
    console.log(x" "y)
  }
}
