//Enums:An enum is a special "class" that represents a group of constants.string and numeric representations.
 
//Enum Numeric:
enum Months{
    Jan,
    Feb,
    March,
    April,
    May,
}

let currentDirection = Months.Feb
console.log(currentDirection);

enum Direction{
    Up = 2,
    Down = 3,
    Right,
    Left
}
let currentDirection1 =Direction.Down
console.log(Direction);

console.log("Direction:",currentDirection1);

//Enum String:
enum DirectionString{
    Up = 'Up',
    Down = 'Down',
    Right = 'Right',
    Left = 'Left'
         
}
let currentDirection2 =DirectionString.Left
console.log(DirectionString);

console.log("DirectionString:",currentDirection2);

