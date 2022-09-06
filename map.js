let obj = {
    name : "a"
}
let obj2 = {
    name : "b"
}
let map = new Map();
map.set("a" , obj);
map.set("b", obj2);
console.log(map.get("a"));
map.delete("a");
console.log(map);
for (key of map.values()){
    console.log(key);
}
const a = [1, 2 ,3 ,4];
for(i of a){
    console.log(i);
}