var user = {
    name : "user_name"
}
var message = {
    message : function(name, a){
        if (a >= 400 && a <=499){
            console.log(name +" " +a +" is an error");
        }else if(a >= 200 && a < 300){
            console.log(name+" "+a+" is a successfull request");
        }
    }
}
message.message.call(user,"anish", 400);
message.message.call(user,"yahoo!",202);