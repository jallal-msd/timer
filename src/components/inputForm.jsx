import React,{useState} from 'react'


const InputForm = (props)=>{
	const [title, setTitle] = useState(props.title || ' ')
	const [project, setProject] = useState(props.project || ' ')

	

	function handleTitle (e){
			setTitle( e.target.value)
	 }
	 function handleProject (e){
			setProject( e.target.value)
	 }

	 function handleSubmit(e)
	 {
	 	e.preventDefault()
	 	props.OnFormSubmit({title:title , project:project , id:props.id})
	 }


	const submitText = props.id ? 'Update' : "Create"	
	return (
		<div className=" text-left   border-4 border-sky-500 mx-auto  w-1/6  rounded-lg  ">
			<div className=" flex flex-col  gap-y-2 p-2 ">
				<label>Title</label>
				<input className="text-black w-auto" type="text" 
					value={title}  
					onChange={(e)=>handleTitle(e)}/>
					
			</div>

				<div 
					className=" flex flex-col  gap-y-2 p-3 ">
					<label>project</label>
					<input className="text-black w-auto" type="text" 
						value={project}   
						onChange={(e)=>handleProject(e)}/>
				</div>

			<div className=" flex flex-row  justify-between p-2  ">
				<button 
					className="rounded-lg w-1/2  text-xs p-2 border border-indigo-500 " 
			 		onClick={handleSubmit}>{submitText}	
			 	</button>
				
				<button   
					className="rounded-lg w-1/2 p-2 text-xs  border border-indigo-500 " 	
					onClick={()=>props.handleClose()}>Cancel
				</button>	

			</div>

		</div>
		)

}

export default InputForm