type Student = {
    name:string;
    age:number;
};

type Teacher = {
    name:string;
    subject:string;
};

let students: Student[] = [
    {name:"Anas raza", age:24},
    {name:"Rohit Kumar", age:25},
    {name:"Thejaswini",age:21}
];

let teacher:Teacher[] = [
    {name:"Sriman",subject:"Java, AWS"},
    {name:"Yalanki",subject:"Oracle"}
]

// function getBy(model, prob, value) {
//     return model.filter(item=>item[prob]===value[0])
// }
// above function doesn't have safety let's redefine and make safe by using type annotations

// function getBy(module:Student[], prop:string, value):Student | null {
//     return  module.filter(item=>item[prop]===value)[0]||null
// }

//above function has type safety but reusability is not there
// let's fix this problem by using TypeScript generic.

// function getBy<T>(model: T[], prop:string, value): T | null{
//     return model.filter(item=>item[prop]===value)[0]
// }

// above function prop and type is not generic. to make them generic i extended function below
function getBy<T, P extends keyof T>(model: T[], prop: P, value: T[P]): T | null {
    return model.filter(item => item[prop] === value)[0] || null
}


//const result = getBy(students, "naem", "cab")
// Error: Argument of type naem is not assignable to parameter of type '"name" | "age" | "hasCar"'.

//const anotherResult = getBy(students, "hasCar", "true")
// Error: Argument of type true is not assignable to parameter of type boolean.

let anotherResult = getBy(students, "name", "Raza")

let lastResult = getBy(teacher, "subject", "Java")

// here is one problem we can't add extra property and behaviour into interface
// we can solve this problem by using TypeScript Augmentation.