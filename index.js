 // 1. ways to write in javascript in console

//  console.log("Hello World");
// alert("me")
 // document.write("LEts write in document")

//  2. javascript console API

/*console.log("Hello World")
 console.warn("Warning flash")
 console.error("this is an error")*/

//  3. Javascript variables
var num1=36;
var num2=54;
console.log(num1+num2);

// 4. Strings
var str1="i am string";
var str2='I am also a string';

// 5.  objects
  // var marks={
    // gracy=50;
    // ravi=6;
    // ras=42 
  // }
  // console.log(marks);

  // 6 boolean
  var a=true;
  var b=false;
  console.log(a,b)

  // undefined
  var und;
  console.log(und);

  // null
  /*var n= null;
  console.log(n);
  
  // array
  /*var arr=[1,2,3,4,5];
  console.log(arr);*/
  //  function

  function avg(a,b)
  {
  return(a+b)/2;
  }
  c1=avg(5,15);
  c2=avg(2,4);
console.log(c1,c2);
   
// loop
 var arr=[1,2,3,4,5,6];
// for(i=0;i<arr.length;i++)
// {
//   console.log(arr[i]);
// }

// arr.forEach(element => {
//   console.log(element);
  
// });

// while loop
let j=0;
while(j<arr.length){
  console.log(arr[j])
  j++;
}
let myarr=["fan","camera",null,34,true];

myarr.push("done");

myarr.unshift("okay");
console.log(myarr);
const newlen=myarr.length;
console.log(newlen);


// date,time,day
// let mydate=new Date();
// console.log(mydate.getDate());
// console.log(mydate.getTime());
// console.log(mydate.getHours());
// console.log(mydate.getFullYear());
// console.log(mydate.getDay());

 let elem=document.getElementById('click');
// console.log(elem);
let elemclass=document.getElementsByClassName("container1");
console.log("elemclass");
elemclass[0].classList.add("bg-primary");
elemclass[0].classList.add("text-success");
console.log(elem.innerHTML);
console.log(elem.innerText);
console.log(elemclass[0].innerHTML);
console.log(elemclass[0].innerText);
let elemclass2=document.getElementsByClassName("container2");
console.log(elemclass2[0].innerHTML);
console.log(elemclass2[0].innerText);

// making a child
tn = document.getElementsByTagName('div');
console.log(tn);
createdElement=document.createElement('p');
createdElement.innerText="This is a created paragraph";
tn[0].appendChild(createdElement);
createdElement2=document.createElement('b');
createdElement2.innerText="This is a created bold";
tn[0].replaceChild(createdElement2,createdElement);
// removeElement- removes the element

// selecting query
sel=document.querySelector('.container1');
console.log(sel);
sel=document.querySelectorAll('.container1');
console.log(sel);

// events in javascript
function clicked()
{
  console.log('The button is clicked');
}

// window.onload=function()
// {
//   console.log('The window was loaded');
// }

fcontainer.addEventListener('click',function(){
  document.querySelectorAll('.container1')[1].innerHTML ="WE have clicked"
  console.log('Clicked on container');
})

// fcontainer.addEventListener('mouseover',function(){
//   console.log('Mouse on container');
// })
// fcontainer.addEventListener('mouseover',function(){
//   console.log('Mouse out of  container');
// })

// FUNCTION 
// function summ(a,b){
//   return (a+b)
// }
summ=(a,b)=>{
  return(a+b)
}
logkaro=()=>{
document.querySelectorAll('.container2')[0].innerText="New functon inserted"
console.log("I am your log");
}

setTimeout(logkaro,2000);

