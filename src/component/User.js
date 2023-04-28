import React from "react";
import '../App.css';
import {setReturn} from "../redux/reducer/user"
import Check from "./UI/Check";

function User({id,name,debt,returned,dispatch}) {
    const [check,setCheck]=React.useState(returned)
    const setChecked=()=>{
       
        dispatch(setReturn({id,
            name,
            debt,
            returned:!check

        }))
        setCheck(!check)
    }
    return (
        <div className={"user"}>
            <div className={'name'}>{name}</div>
            <div className={'debt'}>{debt}</div>
            <Check checked={check} setChecked={setChecked}/>

        </div>
    );
}

export default User;
