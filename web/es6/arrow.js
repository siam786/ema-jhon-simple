const fat = () => console.log('fat function');
fat()
fat()
console.log('ss');
const calculator = (x,y) => {
    let obj ={
        add: x + y,
        minus: x -y,
        multiply: x * y,
        divi: x / y
    }

    return obj;
};

console.log(obj(20,15))