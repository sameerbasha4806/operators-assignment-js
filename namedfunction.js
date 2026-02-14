function processNumber(num,callback){
callback(num*2);
}
processNumber(5,function(x){
console.log(x);
});
console.log("-------------------------");

function forEachElement(arr,callback2){
for(let i=0;i<arr.length;i++){
    callback2(arr[i]);

}
}
forEachElement([2,3,4,5],function(ele){
    console.log(ele);

});
console.log("--------------------------------")

function sayHello(name,callback3){
    setTimeout( function(){
        
        let message="Hello "+name+" !";
        callback3(message);
    
  },1000)

}
sayHello("sameer",function(msg){
    console.log(msg);
})

console.log("--------------------------------");

function checkEvenorOdd(num,callback4,callback5){
    // let value=num;
    if(num<=0){
        console.log("Invalid number");
    }
   else if(num%2==0){
    callback4(num);
   }else{
    callback5(num);
   }

}
checkEvenorOdd(2026,function(even){
console.log(even+" :is even");
},function(odd){
console.log(odd+" :is odd");
});
console.log("------------------------------")

function performTask(n,firstCallback,secondCallback){
let step1=firstCallback(n);
let step2=secondCallback(step1);
console.log(step2);
}
function first(num1){
    return num1 + 5;

}
function second(num1){
    return num1 * 2;
}

performTask(5,first,second);
