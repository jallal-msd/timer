import { useState ,useEffect } from 'react'
import EditableTimerList from './components/editableTimerList'
import ToggleTimerInput from  './components/toggleTimerInput'


import { v4 as uuidv4 } from "uuid";


function App() {
const [data ,setData] = useState([])
const [Timer ,setTimer] = useState([])


useEffect(() => {
  return () => {
  };
}, [])
  
  function onFormEdit(timer){
     console.log("h"+timer.id)

     setTimer(()=> Timer.map((tim)=>{
    console.log("map"+tim.id)
      if(tim.id === timer.id){
       return Object.assign({}, tim, {
        title: timer.title,
        project: timer.project,
        });
      }else {
        return tim
      }
   }))
  }

  function handleTrash(id) {
    setTimer(Timer.filter(
      (time) => time.id !== id
    )
    )
    console.log(Timer)
  }

  //create a new timer
  function newTimer(attrs = {}) {
    return {
        title: attrs.title || 'Timer',
        project: attrs.project || 'Project',
        id: uuidv4(), // eslint-disable-line no-undef
        elapsed: 0
    };
}
console.log(Timer)
  console.log(Timer.title)
  const createTimer= (timer)=>{
      let Timer = newTimer(timer)
      setTimer((prev) => prev.concat(Timer))
  }

  const startTimer = (id) =>{
    const now = Date.now()
    
       setTimer(()=> Timer.map((tim)=>{
       console.log("map"+tim.id)
        if(tim.id === id){
          console.log("Start invoked")
          return Object.assign({}, tim, {
            runningSince: now,
          });
        }else {
           return tim
        }
     }))
  }

  const stopTimer = (id) =>{
     const now = Date.now()
     
       setTimer(()=> Timer.map((tim)=>{
       console.log("map"+tim.id)
        if(tim.id === id){
          console.log("invoked")
          const lastElapsed = now - tim.runningSince
          return Object.assign({}, tim, {
            elapsed:tim.elapsed +lastElapsed, 
            runningSince: null,
          });
        }else {
           return tim
        }
     }))
  }  
  


  return (
    <div className="App">
    <div className="flex flex-col  bg-neutral-900 h-screen  
                                  text-neutral-50  p-3 space-y-5  overflow-auto   ">

      <EditableTimerList 
        CurrentTimer={Timer}
        OnFormSubmit={onFormEdit}
        handleOnTrash={handleTrash}
        startTimer={startTimer}
        stopTimer={stopTimer}
      />
      {data.map((dt)=>{
        return <p>{dt.name}</p>
      })}

    <ToggleTimerInput OnFormSubmit={createTimer} />
    </div>
  
    </div>
  )
}

export default App
