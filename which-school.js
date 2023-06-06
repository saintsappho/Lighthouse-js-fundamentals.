let age = 20

function whichSchool(age) {
  if (age >= 1 && age <= 12) {
  return ("Elementary School")
  } else if (age > 12 && age <= 18) {
  return ("Secondary School")
  } else if (age > 18 && age <= 100) {
  return ("Lighthouse Labs")
  }
}
console.log("I am " + age + ". Which school should I go to?")
{ console.log (whichSchool(age)); }

//CORRECT!

function whichSchool(age) {
  if (age<5) {
    console.log("Preschool!")
  } else  if (age>=5 && age < 12) {
    console.log("Grade School!")
  }else if (age>=12 && age<14) {
    console.log("Junior High!")
  } else if (age>=14 && age<19) {
    console.log("High School!")
  } else if (age>=19) {
    console.log("University!")


    console.log("I am "+age+". Which school should I go to?")
    console.log(whichSchool(age))
  }
}
*/
