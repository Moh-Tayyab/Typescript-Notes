//member:visibility
class MyVar{
    name:string = ""
}
const myvar = new MyVar();

myvar.name = "Muhammad"

console.log(myvar.name);


// members:visibility
class MyClass{
    name:string;
    age:number
    constructor(name:string,age:number){
        this.name = "";
        this.age = 0;

    
    }
}

let myClass = new MyClass("Alee" ,20);

console.log(myClass.name);


//Parameter Properties:
class Quaran{
    taj:string = ''
    price:number = (0)
    constructor(taj:string,price:number){}

     ans():any{
        return this.taj 
        return this.price 
    }
}

let quaran = new Quaran("Taj company limited" , 100);

console.log(quaran.ans());


// below code only for myself parctice 
/*
class WebCom{
    app:string = ''
    version:number = 0
    company:string  = ''
}

let webCom = new WebCom();

webCom.app = "Angular";
webCom.company = "stakeflow"
webCom.version = 21

console.log(webCom.app);

console.log(webCom.version);

console.log(webCom.company);

class Shop{
    item:string = ""
    price:number = (0)
    timing:number = 0
    constructor(item:string,price:number,timing:number){
        this.item = item;
        this.price = price;
        this.timing = timing;
    }
}

const shop = new Shop("Many items",1000,10)

console.log(shop);

console.log(shop.item);
console.log(shop.price);
console.log(shop.timing);
*/
