let arr = ["Chennai","Salem","Thousandlights","Guindy"];
console.log();

console.log();

arr.push("St.thomas","DMS");
console.log(arr);
arr.pop();
console.log(arr);

arr.shift();
console.log(arr);
arr.unshift("Omr");
console.log(arr);

console.log(arr.includes("Guindy"));

console.log(arr.slice(0,2));


let sp = ["Chennai","Salem","Thousandlights","Guindy"]
sp.splice(1,3,"ECR","Ashok pillar")
console.log(sp);

sp.sort();
console.log(sp);

sp.reverse();
console.log(sp);

//map

let ab = [23,45,6,6,7,47,7];
const result1 = ab.map(mul=>mul*5);
console.log(result1);

//filter
const result2 = ab.filter(fil=>fil>7);
console.log(result2);

//reduce
const result3 = ab.reduce((accumulator,currentValue)=>{
         return accumulator+currentValue;
});
console.log(result3);
