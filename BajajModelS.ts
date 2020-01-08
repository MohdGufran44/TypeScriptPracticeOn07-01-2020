interface BajajModelS{
	length: number;
	width: number;
    wheelbase: number;
    seatingCapacity: number;
    getTyrePressure: () => number;
}

function buildBajajModelS(bajajObj:BajajModelS){

}

// buildBajajModelS({
//     length: 186,
//     width:75,
//     wheelbase: 110,
//     measureFuel: function () {
//     }
// })

buildBajajModelS({
    length: 186,
    width:75,
    wheelbase: 110,
    seatingCapacity: 6,
    getTyrePressure: function () {
        let tyrePressure = 20
        return tyrePressure
    }
})

// function type interface 

interface Order {
    (orderId:number, orderPrice:number):boolean
}

let orderIterFun:Order=function (oId, oPrice) {
    if(oPrice>=5000){
        return true
    }else {
        return false
    }
}

console.log("Interface with function");
console.log(orderIterFun(10,5002));

console.log("Interface with class");
//class in TypScript
class VarLet{
    //var x;
    //let x;
    x;
    //we can't use var, let, const in class 

}
interface Person {
    personName:string;
    personAge:number;

    getDetails();
}

class PersionImpl implements Person{
    personAge: number;
    personName: string;

    getDetails() {
        return "My Name is "+this.personName+" i am "+this.personAge+" Years old";
    }

}

let  persion=new PersionImpl();
persion.personName="Anas raza";
persion.personAge=24;
console.log(persion.getDetails());