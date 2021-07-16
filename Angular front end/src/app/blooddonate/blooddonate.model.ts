export class Blooddonate{
    name:String;
    age:String;
    bloodgroup:String;
    units:number;

    constructor(n:string,a:string,b:string,p:number){
        this.name=n;
        this.age=a;
        this.bloodgroup=b;
        this.units=p;
    }
}