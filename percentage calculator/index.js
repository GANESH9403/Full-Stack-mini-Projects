let amt=document.querySelector('#amount');
let per=document.querySelector('#persentage');
let btn=document.querySelector('#btn');
let check=document.querySelector('#cbox')
let tot=document.getElementsByTagName('h3')[0];
console.log(tot);

per.addEventListener('change',function(e){
  console.log(e)
});


btn.addEventListener('click',function(){
  
  tot.innerText=`Total Amount: ${amt.value*per.value/100}`;
  
});



