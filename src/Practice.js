import React, { useState } from 'react'

function Register() {
 const [arr1,setarr1]=useState([
  {
    id:1,
    item:"car",
    check:false
  },
  {
    id:2,
    item:"bile",
    check:false
  },
  {
    id:3,
    item:"van",
    check:false
  },
  {
    id:4,
    item:"bus",
    check:false
  }
 ]);
 const handleclick=(id)=>{
  const listarr1=arr1.map((arr)=>arr.id===id?{...arr,check:!arr.check}:arr)
  setarr1(listarr1);
 }

 const handledelete=(id)=>{
  const listarr1=arr1.filter((arr)=>arr.id!==id)
     setarr1(listarr1)
 }

  
  return (
    

    <div>
      {(arr1.length)?(
      <ul>
        {arr1.map((arr)=>(
          <li key={arr.id}>
            <input type="checkbox" name="items" onClick={()=>handleclick(arr.id)}/>{arr.item}
            {arr.check && (
            <button onClick={()=>handledelete(arr.id)}>delete</button>)}
          </li>

        ))
        

        }
      </ul>
      ):(<p>empty</p>)}
    </div>
  )
   
}

export default Register