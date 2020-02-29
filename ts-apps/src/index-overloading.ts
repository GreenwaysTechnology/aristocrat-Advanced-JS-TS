function add(a: string, b: string): string;

function add(a: number, b: number): number;

function add(a: number, b: string): number;


function add(a: any, b: any): any {
    return a + b;
}

console.log(add("Hello ", "Steve")); // returns "Hello Steve" 
console.log(add(10, 20)); // returns 30 

class Sum {
    //overloaded functions
    sum(x: number, y: number): number;
    sum(x: number, y: number, z: number): number;
    //the combined implementation
    sum(x: number, y: number, z?: number): number {
        if (typeof z == 'undefined') {
            return x + y;
        } else {
            return x + y + z;
        }
    }
}
let sumObj = new Sum();
let n = sumObj.sum(1, 2);//calling first overloaded function
console.log(n);
n = sumObj.sum(1, 2, 3);//calling second overloaded function
console.log(n);

class Util {
    static divide(x: number, y: number): number;
    static divide(x: string, y: number): string[];

    static divide(x: any, y: number): any {
        if (typeof x === 'number') {
            return x / y;
        } else if (typeof x == 'string') {
            return [x.substring(0, y), x.substring(y)];
        }
    }
}

let r: number = Util.divide(6, 2);
console.log(r);
let s: string[] = Util.divide("football", 4);
console.log(s);

class Foo {
    myMethod(a: string);
    myMethod(a: number);
    myMethod(a: number, b: string);
    // myMethod(a: any, b?: string) {
    //     alert(a.toString());
    // }
    //Using Union operator
    myMethod(a: string | number, b?: string) {
        if (a) {
            console.log(`a = ${a}`)
        }
        if (a && b) {
            console.log(`a = ${a}  b= ${b}`)
        }
    }
}
let f = new Foo();
f.myMethod('hello foo')
f.myMethod(1000);
f.myMethod(89, 'hello foo again')