let row = "";
let build = "";
function makeLine(length) {
  let string = "";
  for (var j = 1; j <= length; j++) {
    string += "* "
  }
  return string + "\n";
}
function buildTriangle(height){
  row = 1
  for(row = 1; row <= height; row++){
    build = build + makeLine(row)
    }
    return build
  }

console.log(buildTriangle(4))

/*// creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(length) {
  // Let's build a huge string equivalent to the triangle
  var triangle = "";
  
  //Let's start from the topmost line
  var lineNumber = 1;
  
  for(lineNumber=1; lineNumber<=length; lineNumber++){
      // We will not print one line at a time.
      // Rather, we will make a huge string that will comprise the whole triangle
      triangle = triangle + makeLine(lineNumber);
  }
  return triangle;
}
*/
//max's triangle
let x = ""
function buildTriangle(height){
  for(x = 1; x <= height; x++){
    let length = x;
      function makeLine(length) {
        var line = "";
        for (var j = 1; j <= length; j++) {
          line += "* "
          }
        return line + "\n";
        }
      console.log(makeLine(length))
      }
    }

    console.log(buildTriangle(12))