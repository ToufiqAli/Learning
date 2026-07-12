const bcrypt = require('bcrypt');



const pass = async ()=>{
const a = await bcrypt.hash("Toufiq",10)
const b = await bcrypt.compare("Toufiq",a)
console.log(b);

if(b){
  console.log("True");
}else{
  console.log("False");
}
}
pass();



