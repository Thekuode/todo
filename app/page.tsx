'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [tasks, setTasks] = useState(["Reactin opettelua", "Tailwindin opettelua", "Kun kaikki hanskassa jatketaan backendiin"]);
  const [item, setItem] = useState("");

  function removeItem(taskName: string){
    setTasks(tasks.filter(task => {
      return task != taskName
    })
    );
  };

  function addItem(){
    if(item != "" && !tasks.includes(item)){
      let temp = tasks;
      temp.push(item);
      setTasks(temp);
      setItem("");
    }
  };

  return (
    <div className='h-screen'>
      <h1 className='flex justify-center text-2xl p-4'>To Do</h1>
      <div className='flex justify-center'>
        <input placeholder='Item name' value={item} onChange={(e) => {
          setItem(e.target.value);
        }} ></input>
        <button onClick={addItem}>Add item</button>
      </div>
      <div className='flex justify-center py-4'>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}<button onClick={() => {
              removeItem(task);
            }} className="ml-2 bg-red-500 text-white rounded-full p-2" >Remove item</button></li>
          ))}
        </ul>
      </div>
    </div>
  )
}
