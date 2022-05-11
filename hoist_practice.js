// GIVEN
console.log(example);
var example = "I'm the example!";
AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

1.
console.log(hello);                                   
var hello = 'world';   
// var hello;
// console.log(hello) // losgs undefined
// hello = 'world';                              

2.
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle = 'haystack';
// function test(){
// var needle = 'magnet';
// console.log(needle) // logs 'magnet'
// }
//test()'

3.
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// var brendan = 'super cool';
// function print(){
// brendain = 'only okay';
// console.log(brendan) // logs 'only okay';
// }
// console.log(brendan) // logs 'super cool';

4.
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food = 'chicken'; 
// function eat(){
    // var food;
    // food = 'half-chicken'
    // console.log(food); // logs 'half-chicken'
    // food = 'gone';
// }
// console.log(food); // logs 'chicken'
// eat(); // logs 'half-chicken'

5.
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// var mean;
// mean(); // undefined function
// console.log(food) // food undefined
// mean = function() {
    //var food;
    //food = 'chicken";
    // console.log(food) // logs 'chicken'
    //food = 'fish';
    //console.log(food) // logs 'fish'
// }
// console.log(food) // logs undefined

6.
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//var genre;
//console.log(genre); // log undefined
//genre = 'disco'
// function rewind() {
    // var genre;
    // genre = 'rock';
    // console.log(genre) // logs 'rock'
    // genre = 'r&b' 
    //console.log(genre) // logs 'r&b'
// }
// rewind();
// console.log(genre) // logs 'disco'

7.
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// function learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo); // log 'seattle'
//     dojo = "burbank";
//     console.log(dojo); // log 'burbank'
// }
// dojo = "san jose"; 
// console.log(dojo); // log 'san jose';
// learn();
// console.log(dojo); // log 'san jose';

8.
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name; 
//     dojo.students = students; 
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now"; // cant change a const
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65)); // log { name: 'Chicago', students: 65, hiring: true }
// console.log(makeDojo("Berkeley", 0)); // cant change a const





