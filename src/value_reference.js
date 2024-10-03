
function increment(number) {
    number++;
}
let x = 100;
increment(x);
console.log(x);

function increment_ref(object) {
    object.value ++;
}
let obj = {value: 100};
increment_ref(obj);
console.log(obj.value);

