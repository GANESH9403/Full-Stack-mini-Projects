import React, { useState } from 'react'

import Child from './Child'
// export const savelater=React.createContext('');

function Parent() {
  let [sno,setsno]=useState(1000);
let [uname,setname]=useState('');
// let [update,setupdate]=useState(false);
let [uarea,setarea]=useState('');
let[data,setdata]=useState("");
let [gsno,setgsno]=useState(2000);
let [check,getcheck]=useState('')
let [ucheck,setcheck]=useState('')
// let  [usno,setupdatesno]=useState(0)
let code=[8,39,32,37,46]
function alphacheck(e){
  if(!((e.keyCode>64 && e.keyCode<91)||((code.includes(e.keyCode))))){
    e.preventDefault();
  }
}
const senddata=(user)=>{
  let name=document.getElementById('name');
  let area=name.parentElement.nextElementSibling.firstElementChild;
  name.value=user[1]
  area.value=user[2]
  getcheck(check=user[3])
}

function savelater(){
  let name=document.getElementById('name');
  let area=name.parentElement.nextElementSibling.firstElementChild;
  const sname=name.value;
  const aarea=area.value;
  setgsno(gsno+=1)
  setdata(data=[sname,aarea])
  name.value="";
  area.value="";
}
function clear(){
  window.location.reload();
}
function fun(){ 
  let name=document.getElementById('name');
  let area=name.parentElement.nextElementSibling.firstElementChild;
if(check.length<=1){
  if(name.value!==""&&name.value!==undefined&&area.value!==""&&area.value!==undefined)
  {
  setsno(sno+1)
  setname(uname=name.value);
  setarea(uarea=area.value);
  }
}


  // if(check.length===3){
  //   setupdatesno(usno=check[0])
  //   setname(uname=name.value);
  //   setarea(uarea=area.value);
  //   console.log("called")
  //   getcheck("");
    
  // }
  
else{
  setname(uname=name.value);
  setarea(uarea=area.value);
  setcheck(ucheck=check)
  getcheck(check="")
  console.log(ucheck+' else')   
}
  name.value="";
  area.value="";
}
  return (
    <>
    <div className="my-5 border p-4 border-2">
    <form autoComplete='off'>
        <div className="form-floating mx-lg-5">
        <input onKeyDown={alphacheck} id="name" type='text' className="form-control w-75 mb-3"placeholder='Name'/>
        <label htmlFor="name" className="form-label col-6">Name</label>
        </div>
        <div className="form-floating mx-lg-5">
        <input onKeyDown={alphacheck}  id="area" type='text' className="form-control w-75 mb-4"placeholder='Area'/>
        <label htmlFor="area" className="form-label">Area</label>
            <div className=" d-flex flex-nowrap" >
            <button type='button' onClick={savelater} className="btn btn-outline-warning me-3 btn-lg d-flex align-items-center justify-content-center flex-nowrap">Save later</button>
            <button type='button' onClick={fun} className="btn btn-outline-primary mx-3 btn-lg">Submit</button>
            <button type='button' onClick={clear} className="btn btn-outline-secondary mx-3 btn-lg">Clear</button>
            </div>
        
        </div>
    </form>
    
    </div>
    <Child btnid={ucheck} gsno={gsno} grandchild={data} senddata={senddata} sno={sno} name={uname} area={uarea}  />
    </>
  )
}

export default Parent