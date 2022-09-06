setTimeout(function(){
    clearInterval(interval);
},2500);
var interval = setInterval(function(){
    console.log("executing");
},500);
