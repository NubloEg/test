import React from "react";
import './App.css';
import User from "./component/User";
import {createUser} from "./redux/reducer/user"
import {useSelector,useDispatch} from "react-redux"

function App() {
    const user=useSelector(state=>state.user)
    const dispatch=useDispatch()
    const [users,setUser]=React.useState(user)

    const [name,setName]=React.useState('')
    const [debt,setDebt]=React.useState(0)

    const addUser=()=>{
    if (name!=="" && debt!==0){
        let newUser={
            id:Date.now(),
            name,
            debt,
            returned:false
        }

        dispatch(createUser(newUser))
        setUser([...user,newUser])
        setName('')
        setDebt(0)
    }

    }
  return (
    <div className="App">
      <div className={"add_debt"}>
          <input placeholder={"Введите имя"} className={"input_name"} value={name} onChange={e=>setName(e.target.value)} type={"text"}/>
          <input className={"input_debt"} min={0} value={debt} onChange={e=>setDebt(Number(e.target.value))}  type={"number"}/>
          <input onClick={addUser} className={'btn'}  value={"Добавить"} type={"button"}/>
      </div>
        <div className={'allUsers'}>
            <div className={"title"}>
                <div>ФИО</div>
                <div>Задолженность</div>
                <div>Вернул?</div>
            </div>
            {users.map(el=><User dispatch={dispatch} key={el.id} id={el.id} name={el.name} debt={el.debt} returned={el.returned}/>)}
        </div>

    </div>
  );
}

export default App;
