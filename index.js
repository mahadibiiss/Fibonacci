

//Create Fibonacci series using for loop :

const fivo = [0,1];
for(var x=2;x<=12;x=x+1){
    fivo[x] = fivo[x-1] + fivo[x-2];
}
console.log(fivo);
const fivonacci = [0,1];
for(var x=2;x>=10;x=x-1){
    fivonacci[x] = fivonacci[x-1] + fivonacci[x-2];
}
console.log(fivonacci);



// Find the largest element of an Array :
let persons = [
    {name:"mahmud",id:25,Age:17, class: 9, roll:5,},
    {name:"hamza",id:23,Age:17, class: 9, roll:3,},
    {name:"huzaifa",id:20,Age:17, class: 9, roll:2,},
    {name:"siam",id:29,Age:17, class: 9, roll:1,},
    {name:"rakib",id:24,Age:17, class: 9, roll:10,},
];



let largest_persons = persons[0];

for (let single_persons of persons){
    if(single_persons.Age > largest_persons.Age){
        largest_persons = single_persons;
    }
}
console.log(largest_persons);
