
   var username = document.getElementById('username');
   var password=document.getElementById('password');
   var confirm =document.getElementById('confirm');
   var email=document.getElementById("email");


function Verify() {
   
var verf=JSON.parse(localStorage.getItem("neww"));


if ((verf.username == username.value)&&(verf.password==password.value)
&&(verf.email==email.value)) {
    alert('bon');
}else{
    alert('non');
}
    
}

function newuser(){
 var neww = JSON.parse(localStorage.getItem('user')) || [];

 var inputValue = document.getElementById("submit").value;
var userid= Math.floor(Math.random() * 1000); 
 if (inputValue === '') {
    alert("You must write something!");
  } else {
   var text = {
      id: userid,
username:username.value,
password:password.value,
email:email.value }
   neww.push(text);
  
localStorage.setItem('user', JSON.stringify(neww));
 
}
}

function login() { 
 var object=JSON.parse(localStorage.getItem("user")) || [];
 console.log(object); 
 var test=document.getElementById('in').value;
 var test1=document.getElementById('pw').value;
 var test2=document.getElementById('email').value;
 var connect=false;
 var connecteduser;
 var html;
  for (let i = 0; i < object.length; i++) {
   if ((object[i].username == test)&& 
   (object[i].password == test1)&&
   (object[i].email == test2))
  {
     
     connect=true; 
     connecteduser=object[i];
   
     
   }     
  }
  if (connect==true) {
   //   alert('bien joue');
  localStorage.setItem('connecteduser', JSON.stringify(connecteduser));
  
  document.location.href="connecteduser.html";
 
  
  }else{
   //   alert('mish bien joue');
  }
  
 }
function load() {
   var user=JSON.parse(localStorage.getItem('connecteduser')) || {};
   document.getElementById('in').innerHTML=user.username;
   document.getElementById('pw').innerHTML=user.password;
   document.getElementById('email').innerHTML=user.email;
  
  
}
function cars() {
   var owner = JSON.parse(localStorage.getItem('Cars')) || [];
   var con_id= JSON.parse(localStorage.getItem('connecteduser')).id;
   var car=document.getElementById('car');
   var color=document.getElementById('color');
  

var userid= Math.floor(Math.random() * 1000); 
 if (owner === '') {
    alert("You must write something!");
  } else {
   var text = {
      id: userid,
car:car.value,
color:color.value,
id_owner:con_id
      }
   owner.push(text);

localStorage.setItem('Cars', JSON.stringify(owner));
}
    
}



function Loadcars() {
let inputValue = JSON.parse(localStorage.getItem("Cars"))|| {};
var con_id= JSON.parse(localStorage.getItem('connecteduser')).id;

for (let i = 0; i < inputValue.length; i++) {
   
   
    if (inputValue[i].id_owner == con_id) {
      var node = document.createElement("li");
      let list = document.getElementById("list");
      var span=document.createElement("span");
      var spanC=document.createElement('span');
      var car=document.createTextNode(inputValue[i].car);
      var color=document.createTextNode(inputValue[i].color);
      span.appendChild(car);
      spanC.appendChild(color);
      
      node.appendChild(span);
      node.appendChild(spanC);
    
      list.appendChild(node);
    }
    
    
}
}

function userlist() {
  

   let inputValue = JSON.parse(localStorage.getItem("user"))|| {};
  
   
   for (let i = 0; i < inputValue.length; i++) {

         var node = document.createElement("li");
         let ulist = document.getElementById("ulist");
         var span=document.createElement("span");
         var spanC=document.createElement('span');
         var Delete=document.createElement('button');
         var Affiche=document.createElement('button');
          var b=document.createTextNode('Delete');
          var b1=document.createTextNode('Affiche');
         var username=document.createTextNode(inputValue[i].username);
         var id_owner=document.createTextNode(inputValue[i].id);
         span.appendChild(username);
         spanC.appendChild(id_owner);
         Delete.appendChild(b);
         Affiche.appendChild(b1);
         node.appendChild(span);
         node.appendChild(spanC);
         node.appendChild(Delete);
         node.appendChild(Affiche);
         ulist.appendChild(node);
       
       
        
 
 
   }


   
}



