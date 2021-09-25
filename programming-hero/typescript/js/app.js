var bdPrice = 500;
var honey = "cuk cuk babu";
console.log(honey);
/* function add(first: number | string, second: number | string):number | string {
  const result: number | string = first + second;
  return result;
}

console.log('s'); */
function doucle(number) {
  console.log(2 * number);
}
var fruit = ["mango", "bananan", "apple"];
fruit.push("rakin");
fruit[2] = "amir";
var student = {
  name: "siam",
  age: 32,
  salary: 16000,
};
var employe = {
  name: "amir",
  age: 32,
  salary: 32000,
};
var messy = {
  name: "l messy",
  club: "barcelona",
  salary: 1200,
};
var hannan = {
  name: "ak hannan",
  club: "pes",
};

const Mydata = [25, 35, 40, 50];
const students = {
  name: "sakib khan",
  age: 32,
  movies: ["s", "n", "amar jan"],
};
const custome = `My Name is: ${students.name} and i have a numbers ${Mydata[1]} also have movie list: ${students.movies[2]}`;
console.log(custome);
const sixtyFive = (num) => num + 65;
const lanf = sixtyFive(2);
console.log(lanf);
const isEven = (x) => x % 2 == 0;
const checkEven = isEven(6);
console.log(checkEven);

const nre = [...Mydata,7]
console.log(nre);

const produts = [
    {name:'watch',price: 2300,brand:'casio',color:'yellow'},
    {name:'sunglass',price: 1500,brand:'mi',color:'red'},
    {name:'laptop',price: 15500,brand:'lenovo',color:'purple'}
]

const brands = produts.map(product =>product.brand)
console.log(brands);
const colors = produts.map(product =>product.color)
console.log(colors);

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 8);

console.log(result);

produts.forEach(product => console.log(product.color))
produts.forEach(product => console.log(product.brand))
const cheap = produts.filter(produt => produt.price <= 1800)
console.log(cheap);

const speceficName = produts.filter(product => product.name.includes('w'))
console.log(speceficName);

const ourEmployee = {
    name: 'shohrab hossain',
    ide: 'Vs code',
    machine: 'Mac',
    language: ['html','css','js','php','scss'],
    speciall: {
    height: 800,
    weight: 85,
    adress: 'dhaka',
    wamn:{
      //location:'dhaka'
    }
    }
}

const {machine,ide} = ourEmployee;
console.log(machine,ide);
const {height,adress} = ourEmployee.speciall
console.log(height,adress);
const [fist,third] = ourEmployee.language
console.log(fist,third);
//optional chaining
const {location} = ourEmployee.speciall.wamn
console.log(location);

let MYcolors = ['red','green','blue']
console.log(colors?.[11]);