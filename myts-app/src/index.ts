
//function overloading
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: number, b: string): number;


function add(a: any, b: any): any {
    return a + b;
}
console.log(add("Hello ", "Subramanian")); // returns "Hello Subramanian" 
console.log(add(10, 20)); // returns 30 

class MathApi {
    //method overloading
    add(a: string, b: string): string;
    add(a: number, b: number): number;
    add(a: number, b: string): number;
    add(a: any, b: any): string | number {
        return a + b;
    }
}
let math = new MathApi();
console.log(math.add("Hello ", "Ram")); // returns "Hello Subramanian" 
console.log(math.add(10, 30)); // returns 30 

class Utility {
    //method overloading
    static add(a: string, b: string): string;
    static add(a: number, b: number): number;
    static add(a: number, b: string): number;
    static add(a: any, b: any): string | number {
        return a + b;
    }
}
console.log(Utility.add("Hello ", "Ram")); // returns "Hello Subramanian" 
console.log(Utility.add(10, 30)); // returns 30 
