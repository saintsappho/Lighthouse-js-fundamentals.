function ageCalculator(name, yearOfBirth, currentYear){
  let age = ''
  age = currentYear - yearOfBirth
  let string = name + " is " + age + " years old."
  return(string)
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
