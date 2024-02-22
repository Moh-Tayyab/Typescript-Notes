//Array function:
let  fruit:string[] =['Apple','Banana','orange','date','cherry'];
console.log("Orignal array:", fruit , '\n');

//push()this is used to add an element at end of array.
let pushlength = fruit.push("Grape");
console.log("After push():" , fruit);
console.log("length returned by push" , pushlength ,'\n'); 

//pop()this is used to remove an element at the end of array.
let popElement =fruit.pop()
console.log("After pop():" , fruit);
console.log("Element returned by pop():" ,popElement , '\n'); 

//Shift()this is used to remove element at the front of an array.
let ShiftElement = fruit.shift();
console.log("After shift():" , fruit);
console.log("Element returned by shift():" ,ShiftElement , '\n');

//unshift()the is used to add an element at the front of an array.
let unshiflength = fruit.unshift("peach,");
console.log("After unshift():" , fruit);
console.log("Length returned by unshift():" ,unshiflength , '\n');

//slice()that is used to contains new array in orignal form.
let sliceArray:string[]= fruit.slice(2,4);
console.log("Array after slice (subset):" ,sliceArray , '\n');

//splice()this used to remove any element of array and replace it optionally.
console.log("After splice():" , fruit , '\n');
fruit.splice(1,2 ,"Mango");
console.log("After the splice():" , fruit);



