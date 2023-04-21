import React,{useState} from "react";

export default function ToggleDetails(){

  const [showDetails,setshowDetails]=useState(false)

  const ToggleDetails=()=>{
    setshowDetails(!showDetails)
  }
 return ( 
    <div className="card">
    <img src="" alt=""/>
    <div className="content">
    <h2 style={{"background-color":'yellow'}}>Card Title</h2>
    <p>This is a card component that will toggle</p>
    <button onClick={ToggleDetails}>{showDetails?'hide details':'show details'}</button>
    {  showDetails &&(

        <div style={{'background-color':'turquoise'}}>
   <p>Details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>


        </div>
        
    )

    }





    </div>
    </div>



 )

}