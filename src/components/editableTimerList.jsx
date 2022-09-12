import React from 'react'
import EditableTimer from './editabletimer'

const EditableTimerList = (props)=>{

	const onFormSubmit = (timer)=>{
		props.OnFormSubmit(timer)
	}
	
	
	return (
		<div>
		{props.CurrentTimer.map((time)=>{
		 return (
		 		  
			<EditableTimer 
				OnFormSubmit={onFormSubmit}
				id={time.id}
				title={time.title}
				project={time.project}
				elapsed={time.elapsed}
				runningSince={time.runningSince}
				editForm={true}
				handleOnTrash={props.handleOnTrash}
				startTimer={props.startTimer}
				stopTimer={props.stopTimer}
			 />
 	)

})}

		

</div>
		)

}

export default EditableTimerList