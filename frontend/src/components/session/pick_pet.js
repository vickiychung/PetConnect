import React from 'react';


const PickPet = (props)=>{
  return(
    <div>
      <button onClick={()=>props.logout()}>Log out</button>
    </div>
  )



}


export default PickPet;


