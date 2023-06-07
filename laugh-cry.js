//teach a machine to laugh
let q = "";
let sound = "";
let laugh = function(q){
    for (i = 0 ; i < q; i++){
        sound += "ha";
    } sound += "!";
    return sound
}
console.log(laugh(10));
//cry when it laughs at you

// teach a machine to cry
let sound = "";    
let cry = function sob(){
    sound = "Boohoo!"
  return sound;
};
console.log(cry());
//and it does it with sarcasm