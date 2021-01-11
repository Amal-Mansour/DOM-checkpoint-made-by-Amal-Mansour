
///////////////////////////********************create function slide show caroussel scroll image on screen///////////////////////////////************************ *

var myCarousel = document.querySelector('#carouselExampleIndicators')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
})



///////////////////////////********************create function  compte quantity and price and add to screen///////////////////////////////************************ */
//////////////********/////////// decriment opetaion did it with dom //////////********************************** */
let add = document.querySelectorAll(".add");
// add.getElement
// console.log(add[0])
let qute = document.getElementsByClassName("qute");

for(let i =0 ;i < add.length ;i++) {

  add[i].addEventListener("click",function(){
    qute[i].innerHTML++;
  
  });
  
}

///////////////********/////////// decriment opetaion did it with dom //////////********************************** */
let minus = document.querySelectorAll(".minus");
// add.getElement
// console.log(minus[0])


for(let i =0 ;i < minus.length ;i++) {

  minus[i].addEventListener("click",function(){
    qute[i].innerHTML--;
  
  });
   
}

/////////////// function to delete the boxs from div container///////////////********* */
let container = document.getElementById("container")
  let boxs=document.getElementsByClassName("box-item")
  
  

container.addEventListener("click",function(e){
  let child= boxs[0].parentNode.removeChild(boxs[0])
},false);










let totale = document.getElementsByClassName("total-counter")
// console.log(total)
let price =document.getElementsByClassName("price")
// console.log(price)

function upDateTotale(qute,price){
    let result = 0 ;
   
    result+=Math.pow(qute,price)
    result.appendChild(node)
  
  }
  console.log(totale)


  
  


  // for(let i =0 ;i < minus.length ;i++) {
  //   boxs[i].addEventListener("click",function(){
  //     container.removeChild(boxs);
    
  //   });
     
  // }
  // console.log(boxs)


// function upDateTotale(qute,price){
//   var result=0;
//   if(totale >0){
//   result+=Math.pow(qute,price)
//   localStorage.setItem(result)

// } else{
//   localStorage.setItem(total)

// }
// }
// console.log(upDateTotale)













// addEventListener("click" ,function(price,qute){
//   let result = 0;
// for(let i =0 ;i < minus.length ;i++){
//   result+=Math.pow(price,qute);
//   result.innerHTML.replace("$","")

// });

// }


// function upDateTotale(price,qute){
//   let result = 0;
// for(let i =0 ;i < minus.length ;i++){
//   result+=Math.pow(price,qute);

// }
// result.innerHTML.replace("$","")
// }
//   qute.addEventListener("click",function(){
//     total=Math.pow(qute,price).textContent="total";
    
  
//   });
  

// console.log(total)

