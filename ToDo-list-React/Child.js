import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Grandchild from "./Grandchild";


function Child(props) {
  let [tosavelater,settosavelater]=useState('')
  let [returive,setretrive]=useState('')
  const datafromgrandchild=(user)=>{
    setretrive(returive=[Number.parseInt(user[0]),user[1],user[2]])
    
    
     
  }
  
  useEffect(()=>{
    if(returive[0]>=1000){
      
      const element = document.getElementById("tbody");
      const tr = document.createElement("tr");
      const btndel = `d${returive[0]}`;
      const btnedit = `e${returive[0]}`;
      tr.innerHTML = `<td>${returive[0]}</td><td>${returive[1]}</td><td>${returive[2]}</td> <td>
    <span  class="d-flex justify-content-center">
    <button  id=${btnedit} class="btn btn-warning text-light edit d-flex align-items-center justify-content-center gap-1 px-3 "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
  </svg>Edit</button>
    <button id=${btndel} class="btn btn-danger mx-2 del d-flex align-items-center justify-content-center gap-1 p-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
    </svg>Delete</button>
    </span>
</td>`;

if(returive[0]<2000 && returive[0]!==1001){
  const prebtnid='e'+(returive[0]-1);
  
  const prebtn=document.getElementById(prebtnid);

  prebtn.parentElement.parentElement.parentElement.after(tr)
  

}
else if(returive[0]===1001){
element.prepend(tr)
}
else{
  
  element.appendChild(tr);
}




let newdel = document.getElementById(btndel);
newdel.addEventListener("click", () => {
  
  
  const tr = newdel.parentElement.parentElement.parentElement;
  
  settosavelater(tosavelater=[tr.children[0].innerHTML,tr.children[1].innerHTML,tr.children[2].innerHTML])
  tr.remove();
  
});
let newedit = document.getElementById(btnedit);

newedit.addEventListener("click", (e) => {
  const tr = newedit.parentElement.parentElement.parentElement;
  const td = tr.firstElementChild;
  const first_child = td.innerHTML;

  const second_child = td.nextElementSibling.innerHTML;
  
  const third_child = td.nextElementSibling.nextElementSibling.innerHTML;
  props.senddata([first_child, second_child, third_child,e.target.id]);
});
    }

  },[returive])

  // let [idvalue,setidvalue]=useState(0)

  const senddatagrandchild=(user)=>{

    let name=document.getElementById('name');
    let area=name.parentElement.nextElementSibling.firstElementChild;
    
    name.value=user[1]
    area.value=user[2]
  
  
  }

  useEffect(()=>{
    if(props.btnid.length>=1){
      const btn=document.getElementById(props.btnid)   
    const update=btn.parentElement.parentElement.parentElement;
    update.children[1].innerHTML=props.name;
    update.children[2].innerHTML=props.area;
    
    

    

    }
  },[props.btnid,props.name,props.area])

    useEffect(()=>{

     
    if (props.sno >= 1001) {

//       if(props.usno===0){
//         setidvalue(idvalue=props.sno)
//         console.log(idvalue+'....sno')
//       }
//       else{
//         setidvalue(idvalue=props.usno+500)
//         console.log(idvalue+'....usno')
//       }
//       console.log(props.sno,props.usno)
// console.log(idvalue)
      
      const element = document.getElementById("tbody");
      const tr = document.createElement("tr");
      const btndel = `d${props.sno}`;
      const btnedit = `e${props.sno}`;
      tr.innerHTML = `<td>${props.sno}</td><td>${props.name}</td><td>${props.area}</td> <td>
    <span  class="d-flex justify-content-center">
    <button  id=${btnedit} class="btn btn-warning text-light edit d-flex align-items-center justify-content-center gap-1 px-3 "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
  </svg>Edit</button>
    <button id=${btndel} class="btn btn-danger mx-2 del d-flex align-items-center justify-content-center gap-1 p-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
    </svg>Delete</button>
    </span>
</td>`;
// setidvalue(idvalue=0)
      element.appendChild(tr);
      let newdel = document.getElementById(btndel);
      newdel.addEventListener("click", () => {
        
        
        const tr = newdel.parentElement.parentElement.parentElement;
        
        settosavelater(tosavelater=[tr.children[0].innerHTML,tr.children[1].innerHTML,tr.children[2].innerHTML])
        tr.remove();
        
      });
      let newedit = document.getElementById(btnedit);

      newedit.addEventListener("click", (e) => {
        const tr = newedit.parentElement.parentElement.parentElement;
        const td = tr.firstElementChild;
        const first_child = td.innerHTML;

        const second_child = td.nextElementSibling.innerHTML;
        
        const third_child = td.nextElementSibling.nextElementSibling.innerHTML;
        props.senddata([first_child, second_child, third_child,e.target.id]);
      });
    }
    // NodeList.prototype.map = Array.prototype.map;
    // let edit = document.querySelectorAll(".edit");

    // let data = edit.map((edit) => {
    //   edit.addEventListener("click", () => {
    //     const tr = edit.parentElement.parentElement.parentElement;
    //     const td = tr.firstElementChild;
    //     const first_child = td.innerHTML;

    //     const second_child = td.nextElementSibling.innerHTML;

    //     const third_child = td.nextElementSibling.nextElementSibling.innerHTML;
    //     return [first_child, second_child, third_child];
    //   });
    // });
  
  },[props.sno,props.usno])

  
  return (
    <>
    <div className=" my-5 border p-4 border-2">
      <table id="table" className="table table-bordered text-center w-50">
        <caption className="caption-top text-center fw-bolder h4 mt-0">
          Main table
        </caption>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Area</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="tbody"></tbody>
      </table>
      </div>
      <Grandchild datafromgrandchild={datafromgrandchild} deletedata={tosavelater} passtochild={senddatagrandchild} gsno={props.gsno} fromparent={props.grandchild} />
    
    </>
  );
}

export default Child;
