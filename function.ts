function voidFunc():void{
    console.log("This is a void function ");
    
}
voidFunc()

//parameter
function parmFunc(x:number , y:number){
    return x+y
    return x-y
    return x*y
    return y/x
}
console.log(parmFunc(8,10));


// optional funct
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}

console.log(add(2,5 ,1))

//default parameter func
function multipl(x:number, y:number, z:number=2){
    return x*y*z

}

console.log(multipl(2,5));

//reset parameter
function resetFunc(a: string, b: string, ...rest: number[]) {
    return `${a}${b} ${rest.reduce((p, c) => p + c, 0)}`;
  }
  console.log(resetFunc("Pakistan" ,"Zindabad",10,12,10));
  
  //Arrow func
  let zzz = (name : string , age : number) => {
    return `Hello, Mrs ${name} your age is ${age}.`
}

console.log(zzz("Tayyab" , 19));

  



