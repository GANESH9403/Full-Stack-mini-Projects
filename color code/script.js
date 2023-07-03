let btn=document.getElementById('btn')
let txt=document.getElementById('txtbox')
let color=txt.previousElementSibling;
console.log(color)
console.log()
btn.addEventListener('click',function(){
    let m=txt.value;
    console.log(color.setAttribute("style",`background-color:${m} `));
});