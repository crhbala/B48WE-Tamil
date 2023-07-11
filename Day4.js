

//1Ans
const isEqual =(obj1,obj2) =>{
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
 
    if(obj1Keys.length!=obj2Keys.length){
        return false;
    }
    for(let objkey of obj1Keys){
        if(obj1[objkey] != obj2[objkey]){
            return false;
        }
    }
    return false
};
const obj1 = {
    name: "bala",
    age : 27
};
const obj2 = {
    name: "chris",
    age: 26
};
isEqual(obj1,obj2);




//2Ans
var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");

request.send();

request.onload=function(){
    var result = JSON.parse(request.response);
 for(var country of result){
    console.log(country.flags);
 }
}
 
