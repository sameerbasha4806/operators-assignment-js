function greet(name){
return "Hello "+name+" !";
}
console.log( greet("sameer"));
console.log(greet("Asifa"));
console.log(greet("Shaik"));
console.log(greet("Basha"));
console.log("--------------------------------------")

function sum(a,b){
    return a+b;
}
console.log(sum(2,3));
console.log(sum(3,4));
console.log(sum(5,6));
console.log(sum(6,7));

console.log("--------------------------------");


function square(num){
return num*num;
}
console.log(square(2));
console.log(square(3));
console.log(square(4));
console.log(square(5));

console.log("-----------------------------------");

function average(arr){
    if(arr.length<=0){
        return 0;
    }
    let sum=0;
 for(let i=0;i<arr.length;i++){
    sum+=arr[i];
 }
 return sum/arr.length;
}
console.log(average([2,3,4,5]));
console.log(average([3,4,5]));
console.log(average([5]));
console.log(average([0]));

console.log("------------------");

function isHaveVowels(str){
    let vowels="aeiouAEIOU";
    // for(let i=0;i<str.length;i++){
    //     if(vowels.includes(str[i])){
    //         return "it contains vowels";
    //     }
    // }
    // return "it doesnt contains vowels";
  
    for(let ch of str){
        if(vowels.includes(ch)){
            return "it contains vowels";
        }
         
    }
    return "it doesnt contains vowels";

}
console.log(isHaveVowels("kmnbvcr"));
console.log(isHaveVowels("sameer"));
console.log(isHaveVowels("hello"));
console.log(isHaveVowels("hll"));

console.log("--------------------------");

function convertTemperature(temp,scale){
    if(scale==="C"){
        return (temp-32)*5/9;
    }
    else if (scale==="F") {
        return (temp*9/5)+32;
    } else {
        return "invalid";
    }
    
}
console.log(convertTemperature(40,"C"));
console.log(convertTemperature(90,"F"));
console.log(convertTemperature(30,"C"));
console.log(convertTemperature(100,"m"));