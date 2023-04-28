import React from "react";
import '../../App.css';


function Check({setChecked,checked}) {


    return<div onClick={e=>setChecked()} checked={checked} className={!checked?'checked':'checked active'} >
            <input  type={"checkbox"}/>
        </div>


}

export default Check;
