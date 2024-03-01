function generic<T>(averg : T):T{
    return averg;
}

const return1 = ("pakistan")

console.log(generic(return1));

const return2 = 120

console.log(generic(return2));

const return3 = true

console.log(generic(return3));

class NamedClass<T=any>{
    private student_name : T | undefined
    private student_fatherName : T | undefined
    private student_age : T | undefined
    private student_edu : T| undefined

    constructor(student_name:T,student_fatherName:T,student_age:T,student_edu:T){

        this.student_name = student_name;
        this.student_fatherName = student_fatherName
        this.student_age = student_age;
        this.student_edu = student_edu;
        
    }

    public nameData() {
        return this.student_name;

        }
    public fnameData() {
        return this.student_fatherName;
    }
    public ageData() {
        return this.student_age;
    }

    public eduData() {
        return this.student_edu;
    }
    public outputData() : any {
        return `Name:${this.student_name}\n Father's Name:${this.student_fatherName}\n Age:${this.student_age}\n Education:${this.student_edu} `

    }

}

const student = new NamedClass<any>("kamran Khan" ,"Pervaiz" ,21 ,"Bachelor" );

console.log(student.outputData());


