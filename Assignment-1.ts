//question 2
let fname: string = "nimra";
let lname: string = " kamran";
console.log(`Hello, ${fname + lname} would you like to learn some Python today?`);
//question 3
let text = "nimra";
let result = text.toUpperCase();
console.log(result);
let result1 = text.toLowerCase();
console.log(result1);
let my_name = "nimra tariq";
let words:string[] = my_name.split(" ");
let titlecaseName:string = " "
for (let i=0; i < words.length; i++){
    titlecaseName += words[i].charAt(0).toUpperCase() +words[i].slice(1).toLowerCase()+ " "

};
console.log(titlecaseName);
//question 4
let name1: string = "Albert Einstien";
console.log(`${name1} once said, “A person who never made a mistake never tried anything new.”`)
//question 5
let famous_person: string = "Albert Einstien";
let message = (famous_person + ' once said, “A person who never made a mistake never tried anything new.”');
console.log(message);
//question 6
let person_name = (" Nimra \n Tariq");
console.log(person_name);
let person_name1 = (" Nimra\tTariq");
console.log(person_name1);
//question 7
let num1 = 4;
let num2 = 4;
console.log('----------------------------------');
console.log(num1 + num2); // addition of two numbers
let num3 = 12;
let num4 = 4;
console.log('----------------------------------');
console.log(num3 - num4); // subtraction of two numbers
console.log('----------------------------------');
let num5 = 2;
let num6 = 4;
console.log(num5 * num6);
console.log('----------------------------------');
let num7 = 16;
let num8 = 2;
console.log(num7 / num8);
console.log('----------------------------------');
//question 9
let fav_num = 248;
console.log(`My favourite number is ${fav_num}`);
