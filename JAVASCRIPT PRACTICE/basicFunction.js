const prompt=require("prompt-sync")();
//window.onload= firstFunction;
function firstFunction(){
     var x=15;
     console.log("value of x is: ",x);
}
firstFunction();

function secondFunction(){
    console.log("value of x before intilalization",x);
     var x=20;
     console.log("value of x after intilalization",x);

}
secondFunction();