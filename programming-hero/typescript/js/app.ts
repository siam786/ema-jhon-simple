let bdPrice: number = 500;
let honey: string = "cuk cuk babu";
console.log(honey);

/* function add(first: number | string, second: number | string):number | string {
  const result: number | string = first + second;
  return result;
}

console.log('s'); */

function doucle(number: number): void {
  console.log(2 * number);
}
const fruit: string[] = ["mango", "bananan", "apple"];
fruit.push("rakin");
fruit[2] = "amir";

type Person = { name: string; age: number; salary: number };
const student: Person = {
  name: "siam",
  age: 32,
  salary: 16000,
};
const employe: Person = {
  name: "amir",
  age: 32,
  salary: 32000,
};

interface Player {
  name: string;
  club: string;
  salary?: number;
  wife?: string;
}

const messy: Player = {
  name: "l messy",
  club: "barcelona",
  salary: 1200,
};

const hannan: Player = {
  name: "ak hannan",
  club: "pes",
};

let a: number = "baby";

let splayer: (number | string) = "neymar";
let fullName =(first:string,last:string) => first + last

let mname = first:string,last:string => first + last
