import React,{useState, useEffect} from 'react'



const Timer = (props)=>{

	  const [btn, setBtn] = useState(true);
	  const [hours, setHours] = useState(0);
	  const [minutes, setMinutes] = useState(0);
	  const [seconds, setSeconds] = useState(0);
  
      

     useEffect(() => {
	 	
	 	if(props.runningSince){
	    const interval = setInterval(() => {
	      
	     let  difference = props.elapsed;
	    
	    	difference += Date.now() - props.runningSince;
	    
	      
	      const h = Math.floor(
	        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	    	  );
	      setHours(h);

	      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
	      setMinutes(m);

	      const s = Math.floor((difference % (1000 * 60)) / 1000);
	      setSeconds(s);

	       }, 1000);
	    return () => clearInterval(interval);
	  }    
	     
	},[props.runningSince])



	function handleUpdate(){
		props.openForm()
	}

	function handleTrash(){
		props.handleOnTrash(props.id)
	}

	function startTimer(){
		props.startTimer(props.id);
		setBtn(false)
	}

	function stopTimer(){
		props.stopTimer(props.id);
		setBtn(true)
	}

	console.log("TIMER"+props.id)

	return (
		<div className=" justify-center items-center p-3 mx-auto border-4 border-sky-500 w-1/6 rounded-lg  ">
		
			<p>{props.title}</p>
			<p>{props.project}</p>
			<p className="w-full text-center text-lg p-2">{hours || '00'}:{minutes || '00'}:{seconds || '00'}</p>
			<div className="my-2 flex flex-row justify-between">
			<button className="text-xs w-1/2 text-xs  bg-red-500" 
				onClick={handleUpdate}> Update
			</button>
			<button className="w-1/2 text-xs  bg-red-500" 
				onClick={handleTrash}> delete
			</button>
			</div>
			
			{btn ?  (	
				<button className="rounded border  text-center w-full p-1 bg-amber-300 mt-2" 
			  onClick={startTimer}>start
			</button>
				):
				(
				<button className="rounded border  text-center w-full p-1 bg-amber-300 mt-2" 
			  onClick={stopTimer}>Stop
			</button>
				)}
			
		
		</div>
		)

}

export default Timer