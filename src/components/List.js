function Task(props){
	return(
		<li>{props.description}<input type="checkbox" checked={props.completed} readOnly/></li>
		

	);
}

function List(props) {
	var taskarray=[];
	//Deletion of loop
	//Using of Map function
	return (
		<div>
			<h1>{ props.heading }</h1>
			<ul>
				{/*{tasks} */}
				{ props.tasks.map(task =>
					<Task
					description={task.description}
					completed={task.completed}
					/>
				)}
			</ul>
		</div>
	);
}



export default List;
