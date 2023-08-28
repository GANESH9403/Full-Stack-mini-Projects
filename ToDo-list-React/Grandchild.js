import { useEffect, useState } from "react";


function Grandchild(props) {
  
  
         
       const [name,area]=props.fromparent;
    
       useEffect(()=>{

        if(props.deletedata[0]>=1){
              
        const element = document.getElementById("tbodygrandchild");
        const tr = document.createElement("tr");
        const btndel = `d${props.deletedata[0]}`;
        const btnedit = `e${props.deletedata[0]}`;
        tr.innerHTML = `<td>${props.deletedata[0]}</td><td>${props.deletedata[1]}</td><td>${props.deletedata[2]}</td> <td>
      <span  class="d-flex justify-content-center">
      <button  id=${btnedit} class="btn btn-warning text-light edit d-flex align-items-center justify-content-center gap-1 p-2 "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-arrow-up" viewBox="0 0 16 16">
      <path d="M8 11a.5.5 0 0 0 .5-.5V6.707l1.146 1.147a.5.5 0 0 0 .708-.708l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L7.5 6.707V10.5a.5.5 0 0 0 .5.5z"/>
      <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
    </svg>Retrive</button>
      <button id=${btndel} class="btn btn-danger mx-2 del d-flex align-items-center justify-content-center gap-1 p-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
      </svg>Delete</button>
      </span>
  </td>`;
  
  element.appendChild(tr);
  let newdel = document.getElementById(btndel);
  newdel.addEventListener("click", () => {
    const tr = newdel.parentElement.parentElement.parentElement;
    tr.remove();
    
    
  });
let newedit = document.getElementById(btnedit);
  newedit.addEventListener("click", () => {
    const tr = newdel.parentElement.parentElement.parentElement;
    console.log(tr)
    
    props.datafromgrandchild([tr.children[0].innerHTML,tr.children[1].innerHTML,tr.children[2].innerHTML]);
    
    tr.remove();
    console.log("called");
    console.log('not use')
    
  });
  
  }
        

       },[props.deletedata])
       useEffect(()=>{
        if(props.fromparent[0]!==""&&props.fromparent[1]!=="" &&props.fromparent[0]!==undefined&&props.fromparent[1]!==undefined){
            
            
            const element = document.getElementById("tbodygrandchild");
            const tr = document.createElement("tr");
            const btndel = `d${props.gsno}`;
            const btnedit = `e${props.gsno}`;
            tr.innerHTML = `<td>${props.gsno}</td><td>${name}</td><td>${area}</td> <td>
          <span  class="d-flex justify-content-center">
          <button  id=${btnedit} class="btn btn-warning text-light edit d-flex align-items-center justify-content-center gap-1 p-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-arrow-up" viewBox="0 0 16 16">
          <path d="M8 11a.5.5 0 0 0 .5-.5V6.707l1.146 1.147a.5.5 0 0 0 .708-.708l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L7.5 6.707V10.5a.5.5 0 0 0 .5.5z"/>
          <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
        </svg> Retrive</button>
          <button id=${btndel} class="btn btn-danger mx-2 del d-flex align-items-center justify-content-center gap-1 p-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
          </svg>Delete</button>
          </span>
      </td>`;
      element.appendChild(tr);

     
      let newdel = document.getElementById(btndel);
      newdel.addEventListener("click", () => {
        const tr = newdel.parentElement.parentElement.parentElement;
        tr.remove();
        console.log("call");
      });
      let newedit = document.getElementById(btnedit);

      newedit.addEventListener("click", () => {
        const tr = newdel.parentElement.parentElement.parentElement;
        
        props.datafromgrandchild([tr.children[0].innerHTML,tr.children[1].innerHTML,tr.children[2].innerHTML]);
        
        tr.remove();
        
        
      });



        }
        
      },[props.gsno])
    
  return (
    <>
    
    
    <div className=" my-5 border p-4 border-2">
    <table id="table" className="table table-bordered text-center w-50">
        <caption className="caption-top text-center fw-bold h4 mt-0">Save Later</caption>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Area</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="tbodygrandchild"></tbody>
      </table>
      
    </div>
    </>
  )
}

export default Grandchild