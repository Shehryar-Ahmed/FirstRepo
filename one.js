class Family {
    constructor(Name, Age, Role) {
        this.name = Name;
        this.age = Age;
        this.role = Role;
    }
    CallName(){
        return this.name
    }
}
P1 = new Family("Ahmed", "16", "Youngest Son");
console.log(P1.CallName())
console.log(Family.CallName)
// class Employee {
//   static add(a, b) {
//     return a + b;
//   }
// }
// console.log(Employee.add(4,5)))