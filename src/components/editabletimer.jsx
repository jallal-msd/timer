import React,{useState} from 'react'
import Timer from './timer'
import InputForm from './inputForm'


const EditableTimer = ({title, id, project, OnFormSubmit, runningSince, elapsed , handleOnTrash,startTimer ,stopTimer})=>{
	const [editForm ,setEditForm] = useState(true)
	const closeForm = () =>{
		setEditForm(true)
	}
	const openForm = () =>{
		setEditForm(false)
	}
	const handleUpdate= () =>{
		closeForm()
	}
	const handleClose=() =>{
		closeForm()
	}

	const onFormSubmit = (timer)=>
	{
		OnFormSubmit(timer)
		closeForm()
	}
	
	
		

	return (
		<div className="p-3 space-y-10 " >
		{editForm ? (
				<Timer  openForm={openForm} 
				  handleClose={handleClose}  
				  id={id} 
				  title={title} 
				  project={project} 
				  elapsed={elapsed}
                  runningSince={runningSince}
                  handleOnTrash={handleOnTrash}
                  startTimer = {startTimer}
                  stopTimer = {stopTimer}
                  />
			): (

			 <InputForm   handleClose={handleClose}  
				 OnFormSubmit={onFormSubmit} 
				 id={id} 
				 title={title} 
				 project={project} 
				 elapsed={elapsed}
                 runningSince={runningSince}
				  />

			)}
		 
		
       </div>
		)

}

export default EditableTimer