import React,{useState} from 'react'
import InputForm from './inputForm'

const ToggleTimerInput = (props)=>{
	 const [isOpen, setIsOpen] = useState(false)
		function handleOpen(){
			setIsOpen(true)
		}
		function handleClose(){
			setIsOpen(false)
		}

	const onFormSubmit = (timer)=>
	{
		props.OnFormSubmit(timer)
		console.log("ToggleTimerInput"+timer)
	}
	return (
		<div className="text-center mb-11 ">
			{isOpen ? (
					<InputForm   
					  handleClose={handleClose} 
					  OnFormSubmit={onFormSubmit} 
					/>
			):(
				  <button  
				    onClick={handleOpen}  
				    className="p-3 bg-blue-500">+</button>

				)}
		</div>
		)

}

export default ToggleTimerInput