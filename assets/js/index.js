const array = [];

const form = document.querySelector("form");

let text1 = form.text1;

function nextTodo() {
 var li = document.createElement("li");
 var input = document.getElementById("text1").value;
 var a = document.createTextNode(input);
 li.appendChild(a);
 if (input === '') {
   alert("write something!");
 } else {
   document.getElementById("todo list").appendChild(li);
 }
 document.getElementById("text1").value = "";
}


form.addEventListener('submit', (e) => {
   e.preventDefault(); 


   let todo = {
       text1: text1.value,
         
   }
   const array = [todo]
   console.log('submitted', array);
})