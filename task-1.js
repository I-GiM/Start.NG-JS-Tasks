//This is the Start.NG JavaScript Task 1

let name = "Ikenna Oyiih";

const courses = ["HTML", " CSS", " JavaScript", " Go"];

console.log("My name is " + name,"\n");
console.log("I offer " + courses + " at Start.NG\n");

const evenNos = [];

for (i=1; i<=200; i++) {
    if (i % 2 === 0) {
        evenNos.push(i);
    }
}

console.log("List of even numbers from 1 - 200 = "+ evenNos);