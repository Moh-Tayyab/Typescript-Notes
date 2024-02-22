type Charger = string
type Company = string
type Model = string
type Repair = Boolean

interface CellPhon{
    charger:Charger
    company:Company
    model:Model
    repair:Repair
}

function mobile(version:CellPhon):void{
    console.log(`My Favorite phone is ${version.company} company and the model is ${version.model},also with ${version.charger} and it ${version.repair} "is" : "is Not" in repair.`);
    
}

const result:CellPhon={
    charger:"Type C",
    company:"Apple",
    model:"IPhone 14",
    repair:true
}

mobile(result);
