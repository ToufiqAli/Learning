const a =10;
let name = "john";
let bool = true;
let char = 'a';
let bigInt = 1234567890123456789012345678901234567890n;

let object = {
    name : "john",
    age : 30,
}

let array = [1, 2, 3, 4, 5];
let data = new Date();
let pattern = /abc/;


function test (){
console.log(a);
console.log(name);
console.log(bool);
console.log(char);
console.log(bigInt);
console.log(object);
console.log(array);
console.log(data);
console.log(pattern);
}
test();


async function getData() {
  const url = "http://localhost:5000/users/";
  
  try {
    // 1. Send the request and wait for the response headers
    const response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        
    });
    
    // 2. Check if the HTTP status code is successful (200-299)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    // 3. Parse the data stream into a usable JavaScript object
    const data = await response.json();
    console.log("Data received successfully:", data);
    
  } catch (error) {
    // 4. Catch and handle network or parsing errors
    console.error("Failed to fetch data:", error.message);
  }
}

getData();



