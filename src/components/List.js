function Task(props){
	return(
		<li>{props.description}</li>

	);
}

function List(props) {
	return (
		<div>
			<h1>{ props.heading }</h1>
			<ul>
				<Task description='Learn React fast'/>
				<Task description='Learn JSX'/>
				<Task description='Build a new React app fast'/>
		                                                    		<li>Build a React App</li>
			</ul>
		</div>
	);
}



export default List;
