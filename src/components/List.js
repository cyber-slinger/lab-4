function Task(props){
	return(
		<li>{props.description}<input type="checkbox" checked={props.completed} readOnly/></li>
		

	);
}

function List(props) {
	var taskarray=[];
	//Using of loop
	for (let i=0;i<props.task.length;i++)
	{
		let desc = props.task[i].description;
		let stat =props.task[i].completed;
		taskarray.push(<Task description={desc} completed={stat}/>)
	}

	return (
		<div>
			<h1>{ props.heading }</h1>
			<ul>
				{taskarray}
			</ul>
		</div>
	);
}



export default List;
