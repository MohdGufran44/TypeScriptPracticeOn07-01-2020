interface Array<T> {
    getBy<P extends keyof T>(prop: P, value: T[P]):T | null;
}

type Student = {
    name: string;
    age: number;
};

type Teacher = {
    name: string;
    subject: string;
};

Array.prototype.getBy=function<T, P extends keyof T>(
    this: T[],
    prop: P,
    value: T[P]
):T | null{
    return this.filter(item=>item[prop]===value)[0] || null;
};

const students: Student[] = [
    { name: "Anas Raza", age: 24},
    { name: "Thejaswini", age: 21},
    { name: "Ali", age: 26}
];

const teachers: Teacher[] = [
    { name: "Sriman", subject: "Java" },
    { name: "Yalanki", subject: "Oracle" }
];

const bestFriend = students.getBy("name", "Ron");

const javaTeacher = teachers.getBy("subject", "Java")
console.log(bestFriend);