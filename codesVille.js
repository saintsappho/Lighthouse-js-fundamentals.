//driving mayor daisy
const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]
const speed = 38

function carPassing(cars, speed){
  let v = speed
  let obj = {time: Date.now(), speed: v } 
  cars.push(obj);
  console.log(cars);
  return cars
}

console.log(carPassing(cars, speed))

//trash to treasure
const smartGarbage = function (trash, bins) {
  // Your code in here ...
  if (trash === 'waste'){
    bins[0] += 1;
    console.log (bins)
  } else if (trash === 'recycling'){
    bins[1] += 1;
    console.log (bins)
  } else if (trash === 'compost'){
    bins[2] += 1;
    console.log (bins)
  }
}

console.log(smartGarbage('recycling', [13, 7, 5]))


//speed marks the perfect shot
/*
function finalPosition(moves) {
  let move = [];
  let pos = [0,0];
    for ( move of moves) {
        if (move === 'north') {
        pos[1] += 1;
        }
        else if (move === 'west') {
        pos[0] -= 1;
        }
        else if (move === 'south') {
        pos[1] -= 1;
        }
        else if (move === 'east') {
        pos[0] += 1;
        }
       
    } return pos
}
*/
//let moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

//console.log(finalPosition(moves));

//voting station calculation
/*let stations = [
  ['Big Bear Donmove', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
  ['A', 10, 'school'],
  ['B', 9, 'restaurant'],
  ['C', 21, 'community centre'],
  ['D', 15, 'school'],
  ['E', 50, 'restaurant'],
  ['F', 20, 'school'],
  ['G', 40, 'community centre'],
  ['H', 50, 'school']
]

const chooseStations = function (stations){
  let goodStations = []
  for(const station of stations) {
    if(station[1] >= 20 && (station[2] === "school" || station[2] === "community centre")){
      goodStations.push(station[0]);
    }
  }
  return goodStations;

}
console.log(chooseStations(stations))
*/