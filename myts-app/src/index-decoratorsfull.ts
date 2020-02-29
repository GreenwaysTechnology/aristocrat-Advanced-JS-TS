//decorator declartion
//use case 1 : without any input
// function Course(target: any) {
//     //biz logic
//     Object.defineProperty(target.prototype, 'courseName', { value: 'Typescript' })
// }

function Course(courseName: string = 'Type Script') {

    return function (target: any) {
        //biz logic
        Object.defineProperty(target.prototype, 'courseName', { value: courseName })
    }

}
function Logger(config: any) {
    return function (target: any) {
        console.log("\x1b[44m%s\x1b[0m", `${config.type} - ${config.message} on ${new Date()}`);
    }
}

function Input(label: string) {
    return function (target: any, key: string) {
        Object.defineProperty(target, key, {
            configurable: false,
            get: () => label
        });
    }
}
function extendAble(value: any) {
    return function (target: any, prop: any, propdescriptor: PropertyDescriptor) {
        //console.log(target, prop, propdescriptor);
        propdescriptor.writable = value;
    }
}
//decorator injection 
@Logger({
    message: 'Have latest Version',
    type: 'Warning'
})
@Course('C++')
class Student {
    @Input('Brendan')
    firstName;
    lastName;
    constructor(firstName?: string, lastName: string = '') {
        this.firstName = firstName
        this.lastName = lastName;
    }
    @extendAble(true)
    calculateCost() {
        return 1000;
    }
}
let student = new Student() as any;
console.log(`${student.firstName} ${student.lastName} is learning ${student.courseName}`)
student.calculateCost = function () {
    return 20000;
}
console.log(`Cost : ${student.calculateCost()}`)
