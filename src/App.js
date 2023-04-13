import './index.css'
import {BiEdit} from 'react-icons/bi'
import {RiDeleteBin5Line} from 'react-icons/ri'
import {CgAdd} from 'react-icons/cg'

import { useState } from 'react';
import React from 'react'



const App = () => {
  const [todo, setTodo] = useState("");
  const [todos , setTodos] = useState([]);
  const handle_input = (e)=>{
    e.preventDefault(); 
    if(todo !== ""){
      setTodos([{ id: '${todo}', todo }, ...todos]);
      setTodo("");
    }

  }

  return (
    <div className='app'>
          <div className='container'>
            <h1>Todo List App</h1>
            <form className='input-form' onSubmit={handle_input}>
              <input 
              type='text' 
              value={todo}
              onChange={(e) => setTodo(e.target.value)}>

              </input>
              <button type='submit'><CgAdd className='btn-icon'/></button>
            </form>
            <ul className='alltodo'>
                {
                  todos.map((t)=>(
                    <li className='sigletodo'>
                    <span className='text-span' key={t.id}>
                      {t.todo}
                    </span>
                    <button type='submit'><BiEdit/></button>
                    <button type='submit'><RiDeleteBin5Line/></button>
                  </li>

                  ))
                  
                }

            </ul>
          </div>
    </div>
  
  
  );
}

export default App;
